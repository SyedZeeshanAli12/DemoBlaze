// Cypress.Commands.add('login', (username, password)=> {
//     cy.session("loginSession", () => {
//         cy.visit('https://www.demoblaze.com/index.html')
//             cy.wait(1000);
//         cy.get('#loginusername').type(username);
//             cy.wait(1000);
//         cy.get('#loginpassword').type(password);
//             cy.wait(1000);
//         cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
//             .click();
//             cy.wait(2000);
//         // const loginSession= {
//         //     username,
//         //     password
//         // }
//         // Cypress.env('loginSession', loginSession);
// })
// })

Cypress.Commands.add('login', (username, password) => {
    cy.session("loginSession", () => {
        const url= 'https://www.demoblaze.com/index.html'
      cy.visit(url);
      cy.wait(2000);
      cy.get('#login2').click();
      cy.wait(3000);
      cy.get('#loginusername').type(username);
      cy.wait(1000);
      cy.get('#loginpassword').type(password);
      cy.wait(1000);
      cy.get('#logInModal .btn-primary').click();
      cy.wait(2000);
    });
  });
  