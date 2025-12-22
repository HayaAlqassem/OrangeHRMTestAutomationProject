
// Login
beforeEach('Login_HRSystemBeforeEachAfterEach', function () {
    cy.clearCookies();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login') // Should check the correct url
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
}
)

// Logout 
afterEach('Logout_HRSystemBeforeEachAfterEach', function () {
    cy.get('.oxd-userdropdown-name').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
}
)

// Add and delete employee 
it('AddAndDeleteEmployee_HRSystemBeforeEachAfterEach', function () {
    // Add employee
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('.oxd-autocomplete-text-input > input').type('sa')
    cy.get('.oxd-autocomplete-dropdown > :nth-child(5) > span').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('haya123%')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456h')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456h')
    cy.get('.oxd-button--secondary').click() // Save button

    // Delete employee
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
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // Confirm deleting 
}
)

// Add and delete job title
it('AddAndDeleteJobTitle_HRSystemBeforeEachAfterEach', function () {
    // Add job title
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').type('Tester 12345')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Testing job')
    cy.get('[type="file"]').selectFile('cypress/attachments/TestingResume.pdf', { force: true })
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Tester - QC')
    cy.get('.oxd-button--secondary').click()

    // Delete job title
    cy.get('.oxd-table-body').should('contain', 'Tester 12345').then(() => cy.log('Job title verified'));
    // First, find the exact row containing the job title and scrollview
    cy.contains('.oxd-table-row', 'Tester 12345')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // Checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon').click({ force: true });
            // Click trashcan
            cy.get(':nth-child(1) > .oxd-icon').click({ force: true, multiple: true });
        });
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // Confirm deleting
}
)

// MyInfo - Updating personal details
it('Updating personal details_HRSystemBeforeEachAfterEach', function () {
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click() // Click "My Info"
    cy.get('.employee-image').click()
    cy.get('[type="file"]').selectFile('cypress/attachments/profilePic.png', { force: true })
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .orangehrm-tabs-item').click() // Click "Personal Details" 
    cy.get('[name="firstName"]').clear().type('Haya')
    cy.get('[name="middleName"]').clear().type('A')
    cy.get('[name="lastName"]').clear().type('Q')
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Q')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234')
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.get(':nth-child(14) > .oxd-calendar-date').click()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() // Save button
}
)

