/*
 Description: Testing the basic of Mercury Tours website
Modified: 10-1-2018
*/

module.exports = {
    '@tags': ['singletrip'],
    'Order 3 single Tickets': function (browser) {
        var merctours = browser.page.merctours();
        var totalPrice;
        var billingAdress;

        browser
            .url(browser.launchUrl);
        merctours.loginOnMerctours('training', 'mercury')
            //page flight finder
            .searchForFlight('oneWay', '3')
            //page select flights
            .verifyFoundAirports()
            .selectDepartureAndReturnAirports()
            //page book a flight
            .waitForElementVisible('@bookFlightsImage', 5000, function(waitForPageBookAFlight)
            {
                //store the onscreen total price in the var
                merctours.getText('@totalPriceBookFlight', function (onScreenTotalPrice) {
                    totalPrice = onScreenTotalPrice.value;  
                });
                //store the onscreen billing adress in the var
                merctours.getText('@billingAdressBookFlight', function (onScreenBillingAdress) {
                    billingAdress = onScreenBillingAdress.value;  
                });
                //execute below functions only when the test is on this page
                merctours.waitForElementVisible('@bookFlightsImage', 5000, function(fill3Passengers) {
                    merctours.fillPassengersDetails(3, merctours);
                    merctours.fillBillingInfo()
                        .click('@buyFlightsButton')
                        //page Flight confirmation
                        .waitForElementVisible('@bookingConfirmationImage', 5000)
                        .verifyFlightDetails('3');
                        
                    //check total price
                    browser.perform(function(){
                        merctours.assert.containsText('@totalPriceConfirmation', totalPrice);
                    })
                        //check billing adress
                        .perform(function(){
                            merctours.assert.containsText('@billingAdressConfirmation', billingAdress);
                        });
                });
            });

  
 
            
            
            
        browser.end();
    }
};