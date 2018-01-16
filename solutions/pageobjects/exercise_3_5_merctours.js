const testdata = require('./testdata.js');

var merctours = {
    loginOnMerctours: function(userName, password) {
        //verify present on login screen
        return this.waitForElementVisible("[name='userName']", 5000)
            .setValue('@usernameField', userName)
            .setValue('@passwordField', password)
        //submit form
            .click('@loginButton');
    },
    searchForFlight: function(flightType, numOfPassengers) {
        return this.waitForElementVisible("[value='roundtrip']", 5000)
            .click(`@${flightType}`)
            .click(`@passengers${numOfPassengers}`)
            .click('@fromParis')
            .click('@fromDecember')
            .click('@fromDay')
            .click('@toSanFrancisco')
            .click('@toDecember')
            .click('@toDay')
            .click('@firstClass')
            .click('@unifiedAirlines')
            .click('@findFlightsButton');
    },
    verifyFoundAirports: function() {
        return this.waitForElementVisible('@selectFlightsImage', 5000)
            //verify the departure airports
            .assert.containsText('@departureAirports', 'Paris to San Francisco')
            //verify the return airports
            .assert.containsText('@returnAirports', 'San Francisco to Paris')
            .verify.visible('@outFlightUnifiedAirlines');
    },
    selectDepartureAndReturnAirports: function() {
        return this.click('@outFlightUnifiedAirlines')
            .click('@inFlightUnifiedAirlines')
            .click("[name='reserveFlights']");

    },
    fillPassengersDetails: function(numOfPassengers, merctours) {
        var firstNames = testdata.firstNames;
        var lastNames = testdata.lastNames;
        var passNum = 0;
        for (let i=0; i<numOfPassengers; i++) {
            passNum = i + 1;
            merctours.fillPassengerXDetails(passNum, firstNames[i], lastNames[i], merctours);

        }
    },
    fillPassengerXDetails: function(passNum, firstName, lastName, merctours) {
        merctours.setValue(`@pass${passNum}FirstName`, firstName)
            .setValue(`@pass${passNum}LastName`, lastName)
            .click(`@pass${passNum}Meal`);
    }
    ,
    fill3PassengerDetails: function(merctours) {
        this.waitForElementVisible('@bookFlightsImage', 5000, function() {
            this.perform(function() {
                merctours.fillPassengersDetails(3, merctours);
            });

        });
    },
    fillBillingInfo: function() {
        return   this.setValue('@creditcardNumber', '123456789')
            .setValue('@creditcardFirstName', 'Kevin')
            .setValue('@creditcardMiddleName', 'Nightwatch')
            .setValue('@creditcardLastName', 'Goedee');
    },
    verifyFlightDetails: function(numOfPassengers) {
        return this.waitForElementVisible('@bookingConfirmationImage', 5000)
            //check confirmation
            .assert.containsText('@bookingConfirmationText', 'Your itinerary has been booked!')
            //check if there is a confirmation number
            .assert.containsText('@flightConfirmationNumber', 'Flight Confirmation #')
            //check flight data
            .assert.containsText('@outFlightDataConfirmation', 'Paris to San Francisco')
            .assert.containsText('@inFlightDataConfirmation', 'San Francisco to Paris')
            //check number of passengers
            .assert.containsText('@passCountConfirmation', `${numOfPassengers} passengers`);

    }

};

module.exports = {
    commands: [merctours],
    elements: {
        usernameField: {
            selector: '[name="userName"]'
        },
        passwordField: {
            selector: '[name="password"]'
        }        ,
        loginButton: {
            selector: '[name="login"]'
        },
        oneWay: {
            selector: '[value="oneway"]'
        },
        roundTrip: {
            selector: '[value="roundtrip"]'
        },
        passengers1: {
            selector: "[name='passCount'] [value='1']"
        },
        passengers2: {
            selector: "[name='passCount'] [value='2']"
        },
        passengers3: {
            selector: "[name='passCount'] [value='3']"
        },
        passengers4: {
            selector: "[name='passCount'] [value='4']"
        },
        fromParis: {
            selector: "[name='fromPort'] [value='Paris']"
        },
        fromDecember: {
            selector: "[name='fromMonth'] [value='12']"
        },
        fromDay: {
            selector: "[name='fromDay'] [value='23']"
        },
        toSanFrancisco: {
            selector: "[name='toPort'] [value='San Francisco']"
        },
        toDecember: {
            selector: "[name='toMonth'] [value='12']"
        },
        toDay: {
            selector: "[name='toDay'] [value='31']"
        },
        firstClass: {
            selector: "[value='First'][name='servClass']"
        },
        unifiedAirlines: {
            selector: "[name='airline'] option:nth-of-type(3)"
        },
        findFlightsButton: {
            selector: "[name='findFlights'][type='image']"
        },
        selectFlightsImage: {
            selector: "img[src='/images/masts/mast_selectflight.gif']"
        },
        departureAirports: {
            selector: "table[cellspacing='1']:nth-of-type(1)  [align='LEFT'] [size='2']"
        },
        returnAirports: {
            selector: "table[cellspacing='1']:nth-of-type(2)  [align='LEFT'] [size='2']"
        },
        outFlightUnifiedAirlines: {
            selector: "[name='outFlight'][value^='Unified Airlines']"
        },
        inFlightUnifiedAirlines: {
            selector: "[name='inFlight'][value='Unified Airlines$633$303$18:44']"
        },
        bookFlightsImage: {
            selector: "img[src='/images/masts/mast_book.gif']"
        },
        totalPriceBookFlight: {
            selector: "[align='center'] [size='2'] b"
        },
        billingAdressBookFlight: {
            selector: "[name='billAddress1']"
        },
        pass1FirstName: {
            selector: "[name='passFirst0']"
        },
        pass1LastName: {
            selector: "[name='passLast0']"
        },
        pass2FirstName: {
            selector: "[name='passFirst1']"
        },
        pass2LastName: {
            selector: "[name='passLast1']"
        },
        pass3FirstName: {
            selector: "[name='passFirst2']"
        },
        pass3LastName: {
            selector: "[name='passLast2']"
        },
        pass1Meal: {
            selector: "[name='pass.0.meal'] [value='']"
        },
        pass2Meal: {
            selector: "[name='pass.1.meal'] [value='LCML']"
        },
        pass3Meal: {
            selector: "[name='pass.2.meal'] [value='VGML']"
        },
        pass4Meal: {
            selector: "[name='pass.2.meal'] [value='LFML']"
        },
        creditcardNumber: {
            selector: "[name='creditnumber']"
        },
        creditcardFirstName: {
            selector: "[name='cc_frst_name']"
        },
        creditcardMiddleName: {
            selector: "[name='cc_mid_name']"
        },
        creditcardLastName: {
            selector: "[name='cc_last_name']"
        },
        buyFlightsButton: {
            selector: "[name='buyFlights']"
        },
        bookingConfirmationImage: {
            selector: "img[src='/images/masts/mast_confirmation.gif']"
        },
        bookingConfirmationText: {
            selector: "[size='+1']"
        },
        flightConfirmationNumber: {
            selector: 'tr:nth-child(5) tr:nth-child(1) td:nth-child(1) > b > font > font > b > font:nth-child(1)'
        },
        totalPriceConfirmation: {
            selector: "[bgcolor='#FFCC00'] tr:nth-of-type(2) td:nth-of-type(2) [size='-1'] [size='2']"
        },
        billingAdressConfirmation: {
            selector: 'tr:nth-child(9) font:nth-child(1)'
        },
        outFlightDataConfirmation: {
            selector: 'tr:nth-child(5) tr:nth-child(3) b'
        },
        inFlightDataConfirmation: {
            selector: 'tr:nth-child(5) tr:nth-child(5) b'
        }
        ,
        passCountConfirmation: {
            selector: 'tr:nth-child(7) font'
        }
    }
};




