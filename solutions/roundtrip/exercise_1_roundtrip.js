/*
 Description: Testing the basic of Mercury Tours website
Modified: 10-1-2018
*/

module.exports = {
    '@tags': ['roundtrip'],
    'Order 2 roundtrip Tickets': function (browser) {
        browser
            .url(browser.launchUrl)
            .setValue("[name='userName']", 'Training')
            .setValue("[name='password']", 'mercury')
            .click("[name='login']")
            //page flight finder
            .waitForElementVisible("[value='roundtrip']", 5000)
            .click("[name='passCount'] [value='2']")
            .click("[name='fromPort'] [value='Paris']")
            .click("[name='fromMonth'] [value='12']")
            .click("[name='fromDay'] [value='23']")
            .click("[name='toPort'] [value='San Francisco']")
            .click("[name='toMonth'] [value='12']")
            .click("[name='toDay'] [value='31']")
            .click("[value='First'][name='servClass']")
            .click("[name='airline'] option:nth-of-type(3)")
            .click("[name='findFlights'][type='image']")
            //page select flights
            .waitForElementVisible("img[src='/images/masts/mast_selectflight.gif']", 5000)
            .click("[name='outFlight'][value='Unified Airlines$363$281$11:24']")
            .click("[name='inFlight'][value='Unified Airlines$633$303$18:44']")
            .click("[name='reserveFlights']")
            //page book a flight
            .waitForElementVisible("img[src='/images/masts/mast_book.gif']", 5000)
            .setValue("[name='passFirst0']", 'Kevin')
            .setValue("[name='passLast0']", 'Goedee')
            .setValue("[name='passFirst1']", 'Gal')
            .setValue("[name='passLast1']", 'Galdot')
            .click("[name='pass.1.meal'] [value='LCML']")
            .setValue("[name='creditnumber']", '123456789')
            .setValue("[name='cc_frst_name']", 'Kevin')
            .setValue("[name='cc_mid_name']", 'Nightwatch')
            .setValue("[name='cc_last_name']", 'Goedee')
            .click("[name='buyFlights']")
            //page Flight confirmation
            .waitForElementVisible("img[src='/images/masts/mast_confirmation.gif']", 5000)
            .end();
    },
    '@tags': ['roundtrip'],
    'Order 3 single Tickets': function (browser) {
        browser
            .url(browser.launchUrl)
            .setValue("[name='userName']", 'Training')
            .setValue("[name='password']", 'mercury')
            .click("[name='login']")
            .waitForElementVisible("[value='roundtrip']", 5000)
            .click("[value='oneway']")
            .click("[name='passCount'] [value='3']")
            .end();
    }
};