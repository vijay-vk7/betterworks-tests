/// <reference types="Cypress"/>
import * as testData from '../test-data/createPost.json'

context(`post creation validation`, () => {
    beforeEach(function () {
        cy.viewport(1440, 900);
        cy.visit('/');
        cy.userLogin(testData.user_001);
        cy.validateUserLogin(testData.user_001);
    })

    afterEach(function () {
        cy.clearCookies();
    })

    it('create a anonymous targeted post with multiple choice and image', () => {
        cy.clickOnCreatePost();
        cy.selectPostByType(testData.cr_post_001);
        cy.selectPostType(testData.cr_post_001);
        cy.selectTargetGroupName(testData.cr_post_001);
        cy.setPostQuestion(testData.cr_post_001);
        cy.uploadFileToPost(testData.cr_post_001);
        cy.setPostOptions(testData.cr_post_001);
        cy.publishPost();
        cy.validateLatestPollPanel(testData.cr_post_001);
        cy.validateCommentsPanel(testData.cr_post_001);
    })

    it('create a official targeted post with multiple choice', () => {
        cy.clickOnCreatePost();
        cy.selectPostByType(testData.cr_post_002);
        cy.selectPostType(testData.cr_post_002);
        cy.selectTargetGroupName(testData.cr_post_002);
        cy.setPostQuestion(testData.cr_post_002);
        cy.setPostOptions(testData.cr_post_002);
        cy.publishPost();
        cy.validateLatestPollPanel(testData.cr_post_002);
        cy.validateCommentsPanel(testData.cr_post_002);
    })

    it('create a Named public post with multiple choice', () => {
        cy.clickOnCreatePost();
        cy.selectPostByType(testData.cr_post_003);
        cy.selectPostType(testData.cr_post_003);
        cy.selectTargetGroupName(testData.cr_post_003);
        cy.setPostQuestion(testData.cr_post_003);
        cy.setPostOptions(testData.cr_post_003);
        cy.publishPost();
        cy.validateLatestPollPanel(testData.cr_post_003);
        cy.validateCommentsPanel(testData.cr_post_003);
    })

    it('create a anonymous public post with question which has 1000 charecters', () => {
        cy.clickOnCreatePost();
        cy.selectPostByType(testData.cr_post_004);
        cy.selectPostType(testData.cr_post_004);
        cy.selectTargetGroupName(testData.cr_post_004);
        cy.setPostQuestion(testData.cr_post_004);
        cy.publishPost();
        cy.validateLatestPollPanel(testData.cr_post_004);
        cy.validateCommentsPanel(testData.cr_post_004);
    })

})