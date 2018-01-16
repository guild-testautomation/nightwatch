var merctours = {
    loginOnMerctours: function(userName, password) {
        //verify present on login screen
        return this.waitForElementVisible("[name='userName']", 5000)
            .setValue("[name='userName']", userName)
            .setValue("[name='password']", password)
        //submit form
            .click("[name='login']");
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
        passengersThree: {
            selector: "[name='passCount'] [value='3']"
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
            selector: "[name='pass.0.meal'] [value='LCML']"
        },
        pass2Meal: {
            selector: "[name='pass.1.meal'] [value='LCML']"
        },
        pass3Meal: {
            selector: "[name='pass.2.meal'] [value='VGML']"
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




