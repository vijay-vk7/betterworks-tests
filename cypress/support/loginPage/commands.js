let loginPage = require('../../selectors/loginPage.json')

Cypress.Commands.add('userLogin', function (userData) {
    cy.get(loginPage.emailTextBox).type(userData.userEmail);
    cy.get(loginPage.loginBtn).click();
    cy.get(loginPage.verificationCode).type(userData.verificationCode);
    cy.get(loginPage.loginBtn).click();
})