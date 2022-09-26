const config = {
  name: 'Hello flow'
}

flow.onInit('main').do(async () => {
  console.log('Hello from a first flow')
})