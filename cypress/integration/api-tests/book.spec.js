describe("It should use all the verbs in a book api", () => {
  let id = 1;
  let idDel = 2;
  let bookDetails;
  let bookDetailsUpdate;

  beforeEach(() => {
    cy.fixture("book").then((book)=>{
       bookDetails = book;
    });

    cy.fixture("bookUpdate").then(bookUpdate => {
      bookDetailsUpdate = bookUpdate;
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

  it("update a book - PUT", () => {
    cy.request("PUT", `/posts/${bookDetailsUpdate.userId}`, {
      userId: bookDetailsUpdate.userId,
      id: bookDetailsUpdate.id,
      title: bookDetailsUpdate.title,
      body: bookDetailsUpdate.body,
    }).as("response");
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
