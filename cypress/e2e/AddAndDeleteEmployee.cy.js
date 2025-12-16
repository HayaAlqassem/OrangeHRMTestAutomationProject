

it.only('AddAndDeleteEmployee', function () {
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

    /* Option 1: Delete employee but first search for their username 
    cy.get(':nth-child(2) > .oxd-input').should('be.visible').type('haya123%')
    cy.get('.oxd-form-actions > .oxd-button--secondary').should('be.visible').click()
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').should('be.visible').click()
    cy.get('.oxd-button--label-danger').should('be.visible').click()
    */

    // Option 2: Assertion - Delete employee
    cy.get('.oxd-table-body').should('be.visible').should('contain', 'haya123%').then(() => cy.log('Job title verified'));
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

}
)


/* By using fixed waits, which should be avoided 
it.only('AddAndDeleteEmployee', function () {
    // Add employee 
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
    cy.wait(5000); */

/*
// Option 1: Delete employee but first search for their username 
cy.get(':nth-child(2) > .oxd-input').type('haya123%')
cy.wait(3000);
cy.get('.oxd-form-actions > .oxd-button--secondary').click()
cy.wait(3000);
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
cy.wait(3000);
cy.get('.oxd-button--label-danger').click()
cy.wait(3000);
*/
/*
// Option 2: Assertion - Delete employee
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
*/