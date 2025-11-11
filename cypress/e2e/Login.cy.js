
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