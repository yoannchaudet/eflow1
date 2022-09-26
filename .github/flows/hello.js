const config = {
  name: "Hello flow",
};

flow.onInit("main").do(async () => {
  console.log("Hello from a first flow");
});

flow
  .onIssue()
  .withEvent("opened")
  .withLabel("hello")
  .do(async () => {
    console.log(`hello on context`);
    console.log(JSON.stringify(github));
  });
