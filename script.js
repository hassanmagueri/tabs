let buttons = document.querySelectorAll(".header button");
let body = Array.from(document.querySelectorAll(".body p"));

console.log(body);
// console.log(buttons);
// console.log(Array.from(buttons));
buttons = Array.from(buttons);
buttons.forEach(btn => {
    btn.onclick = function (e) {
        // console.log(btn);
        buttons.forEach(elm => elm.classList.remove("active"));
        console.log(btn.dataset["key"]);
        // ? add the match body
        body.forEach(elm => {
            elm.classList.remove("active");
            if (elm.dataset["key"] === btn.dataset["key"]) {
                console.log(elm);
                elm.classList.add("active")
            }
        })

        e.currentTarget.classList.add("active");
    }
});

// console.log(firstBtn);
// firstBtn.onclick = function () {
//     console.log(this);
// }

// secondBtn.onclick = function () {
//     console.log(this);
// }
// thirdBtn.onclick = function () {
//     console.log(this);
// }