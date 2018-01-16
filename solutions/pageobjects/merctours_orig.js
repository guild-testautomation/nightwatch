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
        }
    }
};




