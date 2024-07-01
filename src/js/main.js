const btn = document.getElementById("btn");
const footerContainer = document.getElementById("footer-container");
const mobileContainer = document.getElementById("footer-container2");

btn.addEventListener("click", () => {
  if()
  footerContainer.classList.add("hidden");
  mobileContainer.classList.remove("hidden");
  /* create two variables with 1 with mobile layout 2 with desktop layout and make it check for sm: class with if else
    method two create two footers with different id and create another footer variable
    and improving it instead of using template literal make two footers one for mobile and one for
    desktop on the html and make it none and block with js and by adding hidden class using tailwind*/

  // Todo: new method
  /*
  add: add a class (if it’s not already there).
remove: remove a class (if it is already there).
toggle: remove the class if it’s there and add it if not.
Favour style updates rather than modifying the DOM
button.className = 'active' // className is 'active'
button.classList.add('hidden') // className is 'active hidden'
button.classList.add('hidden') // className is still 'active hidden'
button.classList.toggle('active') // className is 'hidden'
button.classList.toggle('alert') // className is 'hidden alert'
button.classList.remove('hidden') // className is 'alert'
and use arrow function
    */
});
