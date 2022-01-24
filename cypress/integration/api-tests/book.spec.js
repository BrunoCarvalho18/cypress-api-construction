describe("Search a book", () => {
  let id = 1;
  let idDel = 2;
  let bookDetails;

  beforeEach(() => {
    cy.fixture("book").then((book)=>{
       bookDetails = book;
    });

  }); 

  it("search a book - GET", () => {
    cy.request("GET", `/posts/${id}`).as("response");
    cy.get("@response").then((res) => {
      console.log("response", res);
      expect(res.status).to.be.equal(200);
    });
  });

  it("delete a book - DELETE", () => {
    cy.request("DELETE", `/posts/${idDel}`).as("response");
    cy.get("@response").then((res) => {
      console.log("response", res);
      expect(res.status).to.be.equal(200);
    });
  });

  it("create a book - POST", () => {
    cy.request("POST", "/posts", {
      userId: bookDetails.userId,
      id: bookDetails.id,
      title: bookDetails.title,
      body: bookDetails.body,
    }).as("response");
    cy.get("@response").then((res) => {
      console.log("response", res);
      expect(res.status).to.be.equal(201);
    });
  });
});
