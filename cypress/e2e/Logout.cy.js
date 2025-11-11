
it.only('Logout', function () {
    cy.get('.oxd-userdropdown-name').click()
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(3000);
}
)