
it.only('Logout', function () {
    cy.get('.oxd-userdropdown-name').should('be.visible').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click()
}
)


/* By using fixed waits, which should be avoided
it.only('Logout', function () {
    cy.get('.oxd-userdropdown-name').click()
    cy.wait(3000);
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.wait(3000);
}
)
*/