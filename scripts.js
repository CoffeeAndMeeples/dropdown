//This script assumes the following layout and classes

/* <div class="dropdown-container">
<div class="dropdown top-button">Top Button</div>
<div class="dropdown dropdown-option hidden" >Option 1</div>
<div class="dropdown dropdown-option hidden">Option 2</div>
<div class="dropdown dropdown-option hidden">Option 3</div>
</div> */

//put a listener on the top-button
function createDropDowns() {
    const topButtons = document.querySelectorAll(".top-button");
    for (const button of topButtons) {
        button.addEventListener("click", (event) => {
            const children = Array.from(button.parentNode.children);
            const childrenExceptTopButton = children.slice(1);
            for (let child of childrenExceptTopButton) {
                if (child.classList.contains("hidden")) {
                    child.classList.remove("hidden");
                }
                else {
                    child.classList.add("hidden");
                }
            }
        })
    }
}

createDropDowns();
