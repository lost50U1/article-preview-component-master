const btn = document.getElementById("btn");
const footerContainer = document.getElementById("footer");

btn.addEventListener("click", () => {
  footerContainer.style.display = "none";
  /* create two variables with 1 with mobile layout 2 with desktop layout and make it check for sm: class with if else
    method two create two footers with different id and create another footer variable
    and improving it instead of using template literal make two footers one for mobile and one for
    desktop on the html and make it none and block with js and by adding hidden class using tailwind*/
  footerContainer.innerHTML = `
 <div id="footer">
        <div
          class="flex justify-between items-center w-full bg-VeryDarkGrayishBlue px-8 py-4"
        >
          <div class="flex items-center gap-5">
            <div>
              <p class="text-DesaturatedDarkBlue">S&nbsp;&nbsp;H&nbsp;&nbsp;A&nbsp;&nbsp;R&nbsp;&nbsp;E</p>
            </div>
            <div class="flex gap-3">
              <img src="images/icon-facebook.svg" alt="" />
              <img src="images/icon-twitter.svg" alt="" />
              <img src="images/icon-pinterest.svg" alt="" />
            </div>
          </div>
          <div>
            <button
              id="btn"
              type="button"
              class="bg-DesaturatedDarkBlue px-3 py-2 rounded-full"
            >
              <ion-icon
                class="text-LightGrayishBlue"
                name="arrow-redo"
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>`;
  footerContainer.style.display = "block";
});
