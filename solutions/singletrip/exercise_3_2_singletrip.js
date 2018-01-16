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
        merctours.setValue('@usernameField', 'Training')
            .setValue('@passwordField', 'mercury')
            .click('@loginButton')
            //page flight finder
            .waitForElementVisible("[value='roundtrip']", 5000)
            .click('@oneWay')
            .click('@passengersThree')
            .click('@fromParis')
            .click('@fromDecember')
            .click('@fromDay')
            .click('@toSanFrancisco')
            .click('@toDecember')
            .click('@toDay')
            .click('@firstClass')
            .click('@unifiedAirlines')
            .click('@findFlightsButton')
            //page select flights
            .waitForElementVisible('@selectFlightsImage', 5000)
            //verify the departure airports
            .assert.containsText('@departureAirports', 'Paris to San Francisco')
            //verify the return airports
            .assert.containsText('@returnAirports', 'San Francisco to Paris')

            .verify.visible('@outFlightUnifiedAirlines')
            .click('@outFlightUnifiedAirlines')
            .click('@inFlightUnifiedAirlines')
            .click("[name='reserveFlights']")
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
            .setValue('@pass1FirstName', 'Kevin')
            .setValue('@pass1LastName', 'Goedee')
            .setValue('@pass2FirstName', 'Gal')
            .setValue('@pass2LastName', 'Galdot')
            .setValue('@pass3FirstName', 'Nathalie')
            .setValue('@pass3LastName', 'Portman')           
            .click('@pass2Meal')
            .click('@pass3Meal')
            .setValue('@creditcardNumber', '123456789')
            .setValue('@creditcardFirstName', 'Kevin')
            .setValue('@creditcardMiddleName', 'Nightwatch')
            .setValue('@creditcardLastName', 'Goedee')
            .click('@buyFlightsButton')
            //page Flight confirmation
            .waitForElementVisible('@bookingConfirmationImage', 5000)
            //check confirmation
            .assert.containsText('@bookingConfirmationText', 'Your itinerary has been booked!')
            //check if there is a confirmation number
            .assert.containsText('@flightConfirmationNumber', 'Flight Confirmation #');
        //check total price
        browser.perform(function(){
            merctours.assert.containsText('@totalPriceConfirmation', totalPrice);
        })
        //check billing adress
            .perform(function(){
                merctours.assert.containsText('@billingAdressConfirmation', billingAdress);
            });
        //check flight data
        merctours.assert.containsText('@outFlightDataConfirmation', 'Paris to San Francisco')
            .assert.containsText('@inFlightDataConfirmation', 'San Francisco to Paris')
            //check number of passengers
            .assert.containsText('@passCountConfirmation', '3 passengers');
            
        browser.end();
    }
};