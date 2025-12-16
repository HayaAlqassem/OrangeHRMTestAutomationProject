

it.only('Login', function () {
    cy.clearCookies();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/login') // Should check the correct url
    cy.get('[name="username"]').should('be.visible').type('Admin')
    cy.get('[name="password"]').should('be.visible').type('admin123')
    cy.get('.oxd-button').should('be.visible').click()
}
)


/* By using fixed waits, which should be avoided 
it.only('Login', function () {
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
*/


