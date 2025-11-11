
// Login
beforeEach('HRSystemBeforeEachAfterEach', function () {
    cy.clearCookies();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(3000);
    cy.get('[name="username"]').type('Admin')
    cy.wait(3000);
    cy.get('[name="password"]').type('admin123')
    cy.wait(3000);
    cy.get('.oxd-button').click()
    cy.wait(3000);
}
)

// Logout 
afterEach('HRSystemBeforeEachAfterEach', function () {
    cy.get('.oxd-userdropdown-name').click()
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(3000);
}
)

// Add employee 
it('HRSystemBeforeEachAfterEach', function () {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.wait(3000);
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.wait(3000);
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.wait(3000);
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.wait(3000);
    cy.get('.oxd-autocomplete-text-input > input').type('sa')
    cy.wait(3000);
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    cy.wait(3000);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.wait(3000);
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('haya123%')
    cy.wait(3000);
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456h')
    cy.wait(3000);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456h')
    cy.wait(3000);
    cy.get('.oxd-button--secondary').click()
    cy.wait(5000);
}
)

// Assertion - Delete employee
it('HRSystemBeforeEachAfterEach', function () {
    cy.get('.oxd-table-body').should('contain', 'haya123%').then(() => cy.log('Job title verified'));
    cy.wait(4000);
    // First, find the exact row containing the job title and scrollview
    cy.contains('.oxd-table-row', 'haya123%')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // Checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                .click({ force: true });
            // Click trashcan
            cy.get(':nth-child(1) > .oxd-icon')
                .should('be.visible')
                .click({ force: true, multiple: true });
        });
    cy.wait(1000);
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // Confirm deleting
}
)

// Add job title
it('HRSystemBeforeEachAfterEach', function () {
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
    cy.wait(3000);
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
    cy.wait(3000);
    cy.get('.oxd-button').click()
    cy.wait(3000);
    cy.get(':nth-child(2) > .oxd-input').type('Tester 12345')
    cy.wait(3000);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Testing job')
    cy.wait(3000);
    cy.get('[type="file"]').selectFile('cypress/attachments/TestingResume.pdf', { force: true })
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Tester - QC')
    cy.wait(3000);
    cy.get('.oxd-button--secondary').click()
    cy.wait(3000);
}
)

// Assertion - Delete job title
it('HRSystemBeforeEachAfterEach', function () {
    cy.get('.oxd-table-body').should('contain', 'Tester 12345').then(() => cy.log('Job title verified'));
    cy.wait(4000);
    // First, find the exact row containing the job title and scrollview
    cy.contains('.oxd-table-row', 'Tester 12345')
        .scrollIntoView({ duration: 300 })
        .should('exist')
        .within(() => {
            // Checkbox click
            cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                .click({ force: true });
            // Click trashcan
            cy.get(':nth-child(1) > .oxd-icon')
                .should('be.visible')
                .click({ force: true, multiple: true });
        });
    cy.wait(1000);
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // Confirm deleting
}
)

// MyInfo - Updating personal details
it('HRSystemBeforeEachAfterEach', function () {
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.wait(3000);
    cy.get('.employee-image').click()
    cy.wait(3000);
    cy.get('[type="file"]').selectFile('cypress/attachments/profilePic.png', { force: true })
    cy.wait(3000);
    cy.get('.oxd-button').click()
    cy.wait(3000);
    cy.get(':nth-child(1) > .orangehrm-tabs-item').click()
    cy.wait(3000);
    cy.get('[name="firstName"]').clear().type('Haya')
    cy.wait(3000);
    cy.get('[name="middleName"]').clear().type('A')
    cy.wait(3000);
    cy.get('[name="lastName"]').clear().type('Q')
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Q')
    cy.wait(3000);
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234')
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123')
    cy.wait(3000);
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click()
    cy.wait(3000);
    cy.get(':nth-child(14) > .oxd-calendar-date').click()
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
    cy.wait(3000);
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click() // Save button
    cy.wait(5000);
}
)