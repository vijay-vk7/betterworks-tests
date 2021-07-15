let postPage = require('../../selectors/postPage.json');

Cypress.Commands.add('validateUserLogin', function (userData) {
    cy.get(postPage.userName).should('have.text', userData.userName);
})

Cypress.Commands.add('clickOnCreatePost', function () {
    cy.get(postPage.createPostBtn).should('be.visible');
    cy.get(postPage.createPostBtn).click();
})

Cypress.Commands.add('selectPostByType', function (postData) {
    cy.xpath(postPage.xp_postBy.replace('<postBy>', postData.postByType)).click();
})

Cypress.Commands.add('selectPostType', function (postData) {
    cy.xpath(postPage.xp_postType.replace('<postType>', postData.postType)).click();
})

Cypress.Commands.add('selectTargetGroupName', function (postData) {
    cy.get(postPage.targetGroupNameDropDown).click();
    cy.xpath(postPage.xp_targetGroupNameValues.replace('<grpName>', postData.targetGroupName)).click();
    cy.xpath(postPage.xp_selectTargetGroupName).click();
})

Cypress.Commands.add('setPostQuestion', function (postData) {
    cy.get(postPage.questionTextArea).type(postData.questionText);
})

Cypress.Commands.add('uploadFileToPost', function (postData) {
    cy.get(postPage.uploadFileToPost).attachFile(postData.file_path);
})

Cypress.Commands.add('setPostOptions', function (postData) {
    for (var i = 1; i <= postData.options_values.length; i++) {
        cy.get(postPage.postOptions.replace('<optionValue>', i)).type(postData.options_values[i - 1]);
    }
})

Cypress.Commands.add('publishPost', function () {
    cy.xpath(postPage.xp_publishPostBtn).click();
})

Cypress.Commands.add('validateLatestPollPanel', function (postData) {
    cy.get(postPage.latestPollPanel.QuestionText).should('have.text', postData.questionText);
    cy.get(postPage.latestPollPanel.QuestionText).should('be.visible');
    if (postData.file_path)
        cy.get(postPage.latestPollPanel.image).should('be.visible');
    if (postData.targetGroupName != 'All') {
        cy.xpath(postPage.latestPollPanel.xp_targetGroupName).invoke('text').then((text) => {
            expect(text.trim()).to.contains(postData.targetGroupName);
        })
    }
})

Cypress.Commands.add('validateCommentsPanel', function (postData) {
    if (postData.file_path)
        cy.get(postPage.commentsPanelBody.image).should('be.visible');
    cy.get(postPage.commentsPanelBody.QuestionText).should('have.text', postData.questionText);
    if (postData.options_values) {
        cy.get(postPage.commentsPanelBody.options).should('have.length', postData.options_values.length);
        for (var i = 0; i < postData.options_values.length; i++) {
            cy.get(postPage.commentsPanelBody.options).eq(i).should('have.text', postData.options_values[i]);
        }
    }
})
