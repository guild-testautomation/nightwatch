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
            .waitForElementVisible("[value='roundtrip']", 5000)
            .click("[name='passCount'] [value='2']")
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