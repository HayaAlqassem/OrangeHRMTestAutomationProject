
it.only('UpdateInfo', function () {
    // MyInfo - Updating personal details
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click() // Click "My Info"
    cy.wait(3000);
    cy.get('.employee-image').click()
    cy.wait(3000);
    cy.get('[type="file"]').selectFile('cypress/attachments/profilePic.png', { force: true })
    cy.wait(3000);
    cy.get('.oxd-button').click()
    cy.wait(4000);
    cy.get(':nth-child(1) > .orangehrm-tabs-item').click() // Click "Personal Details" 
    cy.wait(3000);
    cy.get('[name="firstName"]').clear().type('Haya')
    cy.wait(3000);
    cy.get('[name="middleName"]').clear().type('A')
    cy.wait(3000);
    cy.get('[name="lastName"]').clear().type('Q')
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Q')
    cy.wait(4000);
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234')
    cy.wait(4000);
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
    cy.wait(4000);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.wait(4000);
    cy.get(':nth-child(14) > .oxd-calendar-date').click()
    cy.wait(4000);
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    cy.wait(4000);
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() // Save button
    cy.wait(4000);

}
)






