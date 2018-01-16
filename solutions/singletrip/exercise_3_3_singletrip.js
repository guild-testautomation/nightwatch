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
            .searchForFlight()
            //page select flights
            .verifyFoundAirports()
            .selectDepartureAndReturnAirports()
            //page book a flight
            .waitForElementVisible('@bookFlightsImage', 5000)

            //store the onscreen total price in the var
            .getText('@totalPriceBookFlight', function (onScreenTotalPrice) {
                totalPrice = onScreenTotalPrice.value;  
            })
            //store the onscreen billing adress in the var
            .getText('@billingAdressBookFlight', function (onScreenBillingAdress) {
                billingAdress = onScreenBillingAdress.value;  
            })
            .fill3PassengerDetails()
            .click('@buyFlightsButton')
            //page Flight confirmation
            .waitForElementVisible('@bookingConfirmationImage', 5000)
            .verifyFlightDetails();
            
        //check total price
        browser.perform(function(){
            merctours.assert.containsText('@totalPriceConfirmation', totalPrice);
        })
        //check billing adress
            .perform(function(){
                merctours.assert.containsText('@billingAdressConfirmation', billingAdress);
            });
            
            
            
        browser.end();
    }
};