import SignUp from "../POM/SignUp"
import WelcomePage from "../POM/WelcomePage"

const signup = new SignUp()

const welcomepage = new WelcomePage()

describe('Welcome page test', () => {
    beforeEach(()=>{
        cy.login('zeeshan ali', 'shan532029')
    })
   it('Welcome Page', () => {
    cy.loginSession;
    cy.wait(1000)
    welcomepage.movecarouselforward()
    cy.wait(2000)
    welcomepage.movecarouselbackward()
    cy.wait(2000)
    welcomepage.carouselindicator()
    cy.wait(2000)
    welcomepage.NextPage()
    cy.wait(2000)
    welcomepage.PreviousPage()
    cy.wait(2000)
    welcomepage.PhoneCategory()
    cy.wait(2000)
    welcomepage.LaptopCategory()
    cy.wait(2000)
    welcomepage.PCcategory()
    cy.wait(2000)
  })
})



 