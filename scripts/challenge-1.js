/**
 * 1. Update Redux -> Node.js, React Testing Library -> MongoDB ✅
 * 2. Add new skill -> Typescript, after javascript, 2 years
 * 3. Remove "Download CV" element
 * 4. Personal image: width -> 36rem
 * 5. ✨Bonus✨ Highlight skills items: li -> click -> .underline
 */

//task1:
function changeElementText(dataName, text) {
  const element = document.querySelector(`[data-name=${dataName}`);
  element.firstElementChild.innerText = text;
}

changeElementText("Redux", "Node.js");
changeElementText("ReactTestingLibrary", "MongoDB");
//task2:
const newElement = `
         <li data-name="typescript" class="skills__column">
            <h2 class="skills__title">Typescript</h2>
            <span class="skills__years">2 year</span>
          </li>
`;
document.createRange().createContextualFragment(newElement);
const afterJavascript = document.querySelector("[data-name=Javascript]");
afterJavascript.insertAdjacentHTML("afterend", newElement);
//task3:
const removeDownloadCvElement = document.querySelector(".find-out-link");
removeDownloadCvElement.remove();
//task4:
const image = document.querySelector(".bio__pic");
image.style.width = "36rem";
//task5:
const skillsList = document.querySelectorAll(".skills__column");
[...skillsList].map((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".underline");
    if (activeItem) {
      activeItem.classList.remove("underline");
    }
    item.classList.add("underline");
  });
});
