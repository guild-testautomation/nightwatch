/*
 Description: Testing the basic of Mercury Tours website
Modified: 10-1-2018
*/

module.exports = {
    '@tags': ['singletrip'],
    'Order 3 single Tickets': function (browser) {

        browser
            .url(browser.launchUrl)
            .setValue("[name='userName']", 'Training')
            .setValue("[name='password']", 'mercury')
            .click("[name='login']");        
        browser.end();
    }
};