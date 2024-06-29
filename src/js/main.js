const btn = document.getElementById("btn");
const footerContainer = document.getElementById("footer");

btn.addEventListener("click", () => {
  footerContainer.style.display = "none";
  footerContainer.innerHTML = `
  <div id="footer">
        <div class="flex justify-between items-center w-full bg-VeryDarkGrayishBlue px-8 py-4">
          <div class="flex items-center gap-5">
            <div>
              <img
                class="rounded-full h-auto w-10"
                src="images/avatar-michelle.jpg"
                alt=""
              />
            </div>

            <div class="text-[13px]">
              <p class="font-bold text-VeryDarkGrayishBlue">
                Michelle Appleton
              </p>
              <p class="text-GrayishBlue">28 Jun 2020</p>
            </div>
          </div>
          <div>
            <button
              id="btn"
              type="button"
              class="bg-VeryDarkGrayishBlue px-3 py-2 rounded-full"
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
