export class Cart{
    navigate(url){
        cy.visit(url)
        cy.wait(3000)
    }
    OpenProductDetail(){
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch')
        .click()
    }
    AddtoCart(){
        cy.get('.col-sm-12 > .btn')
        .click() 
    }
    ViewCart(){
        cy.get(':nth-child(4) > .nav-link')       
         .click()
    }
    PlaceOrder(){
        cy.get('.col-lg-1 > .btn')
        .click()
    }
    DeleteProductfromCart(){
        cy.get('#tbodyid') // Locate the table body
        .find('tr.success') // Find all rows with class 'success'
        .each(($row) => {
    const deleteLink = $row.find('a'); // Find the delete link in each row

    // Extract the item ID from the 'onclick' attribute of the delete link
    const itemId = deleteLink.attr('onclick').match(/deleteItem\('(.*)'\)/)[1];

    // Perform any necessary assertions or actions on the item before deleting
    // ...

    // Click on the delete link to delete the item
    deleteLink.click();

    // Optionally, you can wait for a specific condition after deleting an item
    // For example, you can assert that the row is no longer visible in the table
    // cy.wrap($row).should('not.exist');
  });

}
}
