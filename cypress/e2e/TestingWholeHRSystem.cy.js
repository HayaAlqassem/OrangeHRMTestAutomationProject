
it.only('TestingWholeHRSystem', function () {
    cy.clearCookies();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login') // Should check the correct url
    // Login
    cy.get('[name="username"]').should('be.visible').type('Admin')
    cy.get('[name="password"]').should('be.visible').type('admin123')
    cy.get('.oxd-button').should('be.visible').click()

    // Add employee 
    cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible').click()
    cy.get('.orangehrm-header-container > .oxd-button').should('be.visible').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').should('be.visible').click()
    cy.get('.oxd-autocomplete-text-input > input').should('be.visible').type('sa')
    cy.get('.oxd-autocomplete-dropdown > :nth-child(5) > span').should('be.visible').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').should('be.visible').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').should('be.visible').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('haya123%')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('123456h')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('123456h')
    cy.get('.oxd-button--secondary').should('be.visible').click()

    // Assertion - Delete employee
    cy.get('.oxd-table-body').should('contain', 'haya123%').then(() => cy.log('Job title verified'));
    // First, find the exact row containing the job title and scrollview
    cy.contains('.oxd-table-row', 'haya123%')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // Checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon').click({ force: true });
            // Click trashcan
            cy.get(':nth-child(1) > .oxd-icon').should('be.visible').click({ force: true, multiple: true });
        });
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible').click(); // Confirm deleting

    // Add job title
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').should('be.visible').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').should('be.visible').click()
    cy.get('.oxd-button').should('be.visible').click()
    cy.get(':nth-child(2) > .oxd-input').should('be.visible').type('Tester 12345')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').should('be.visible').type('Testing job')
    cy.get('[type="file"]').selectFile('cypress/attachments/TestingResume.pdf', { force: true })
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').should('be.visible').type('Tester - QC')
    cy.get('.oxd-button--secondary').should('be.visible').click()

    // Assertion - Delete job title
    cy.get('.oxd-table-body').should('be.visible').should('contain', 'Tester 12345').then(() => cy.log('Job title verified'));
    // First, find the exact row containing the job title and scrollview
    cy.contains('.oxd-table-row', 'Tester 12345')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // Checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon').click({ force: true });
            // Click trashcan
            cy.get(':nth-child(1) > .oxd-icon').should('be.visible').click({ force: true, multiple: true });
        });
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible').click(); // Confirm deleting

    // My Info - Updating personal details
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('be.visible').click() // Click "My Info"
    cy.get('.employee-image').should('be.visible').click()
    cy.get('[type="file"]').selectFile('cypress/attachments/profilePic.png', { force: true })
    cy.get('.oxd-button').should('be.visible').click()
    cy.get(':nth-child(1) > .orangehrm-tabs-item').should('be.visible').click() // Click "Personal Details" 
    cy.get('[name="firstName"]').should('be.visible').clear().type('Haya')
    cy.get('[name="middleName"]').should('be.visible').clear().type('A')
    cy.get('[name="lastName"]').should('be.visible').clear().type('Q')
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('Q')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('1234')
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').clear().type('123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').should('be.visible').click()
    cy.get(':nth-child(14) > .oxd-calendar-date').should('be.visible').click()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').should('be.visible').click()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click() // Save button

}
)

