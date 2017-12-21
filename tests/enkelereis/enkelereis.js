/*
 Beschrijving: Test de NS enkele reis functionaliteit
 Laatst gewijzigd: 14-12-2017
*/

module.exports = {
    '@tags': ['enkelereis'],
    'Bestel een enkele reis Amsterdam Centraal': function (browser) {
        browser
            .url(browser.launchUrl)
            .frame(0)
            .click('.button.accept')
            .frame(null)
            .waitForElementVisible('.headingXL', 10000)
            .click('.radioButton__label[data-test-id="TRAVEL_DATE_TODAY"]')
            .setValue('#displayStationFrom', 'Amsterdam Centraal')
            .end();
    },
    'Bestel een enkele 1e klasse reis Amsterdam Centraal': function (browser) {
        browser
            .url(browser.launchUrl)
            .frame(0)
            .click('.button.accept')
            .frame(null)
            .waitForElementVisible('.headingXL', 10000)
            .click('.radioButton__label[data-test-id="TRAVEL_DATE_TODAY"]')
            .click('.ClassLabel1[data-test-id="FIRST_CLASS"]')
            .pause(5000)
            .setValue('#displayStationFrom', 'Amsterdam Centraal')
            .end();
    }
};