
it.only('AddAndDeleteJobTitle', function () {
    // Add job title
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

    // Assertion - Delete job title
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