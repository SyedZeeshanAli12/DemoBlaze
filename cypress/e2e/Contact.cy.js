import {Contact} from "../POM/ContactPage"


const page = new Contact()


describe('Contact page test', () => {
    beforeEach(()=>{
      cy.login('zeeshan ali', 'shan532029')
    })
    it('Contact Us', () => {
      cy.loginSession;
      cy.wait(1000)
      page.OpenContactPage()
      cy.wait(2000)
      page.EnterEmail('test@email.com')
      cy.wait(2000)
      page.EnterName('test user')
      cy.wait(2000)
      page.EnterMessage('please cancel my order')
      cy.wait(2000)
      page.SendMessage()
  })
  })