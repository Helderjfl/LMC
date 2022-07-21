let settingsModalBtn = document.getElementById("settings-modal-btn");
let settingsModal = document.getElementById("settings-modal");
let settingsCloseBtn = document.getElementById("settings-close-btn");

settingsModalBtn.onclick = function () {
    settingsModal.style.display = "block";
    stashOldSettings();
}

settingsCloseBtn.onclick = function () {
    settingsModal.style.display = "none";
}

let instructionModalBtn = document.querySelector("#instruction-btn").addEventListener("click", instructionModal);

function instructionModal(){
    let instructionSetModal = document.querySelector("#instruction-set-modal");
    instructionSetModal.style.display = "block";
}


window.onclick = function (e) {
    if (e.target == settingsModal) {
        settingsModal.style.display = "none";
    } else if (e.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}

let examplesModalBtn = document.getElementById("examples-modal-btn");
let examplesModal = document.getElementById("examples-modal");
let examplesCloseBtn = document.getElementById("examples-close-btn");

examplesModalBtn.onclick = function () {
    aboutModal.style.display = "none";
    examplesModal.style.display = "block";
}

examplesCloseBtn.onclick = function () {
    examplesModal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == settingsModal) {
        settingsModal.style.display = "none";
    } else if (e.target == aboutModal) {
        aboutModal.style.display = "none";
    } else if (e.target == examplesModal) {
        examplesModal.style.display = "none";
    }
}

let instructionSetModalBtn = document.getElementById("instruction-set-modal-btn");
let instructionSetModal = document.getElementById("instruction-set-modal");
let instructionSetCloseBtn = document.getElementById("instruction-set-close-btn");
let instructionSetRCloseBtn = document.getElementById("rinstruction-set-close-btn");

instructionSetModalBtn.onclick = function () {
    aboutModal.style.display = "none";
    instructionSetModal.style.display = "block";
}

instructionSetCloseBtn.onclick = function () {
    instructionSetModal.style.display = "none";
}

instructionSetRCloseBtn.onclick = function () {
    instructionSetModal.style.display = "none";
}

//
// Foundation work for clickable processor schematic
// Hook the mouse event (should do touch too) and convert
// window coordinates to canvas coordinates
// Call canvasHitCheck() in the pile of JavaScript
// to figure out what they have clicked on
//
document.getElementById('processor-canvas').onclick = function (e) {
    let rect = document.getElementById('processor-canvas').getBoundingClientRect();
    canvasHitCheck(e.clientX - rect.left, e.clientY - rect.top);
}


let aboutModalBtn = document.getElementById("about-modal-btn");
let aboutModal = document.getElementById("about-modal");
let aboutCloseBtn = document.getElementById("about-close-btn");

aboutModalBtn.onclick = function () {
    aboutModal.style.display = "block";
}

aboutCloseBtn.onclick = function () {
    aboutModal.style.display = "none";
}


let helpModalBtn = document.getElementById("help-modal-btn");
let helpModal = document.getElementById("help-modal");
let helpCloseBtn = document.getElementById("help-close-btn");

helpModalBtn.onclick = function () {
    aboutModal.style.display = "none";
    helpModal.style.display = "block";
}

helpCloseBtn.onclick = function () {
    helpModal.style.display = "none";
}

// <!-- Handle return being pressed in the Input box      -->
document.getElementById('input-text').addEventListener("keypress", function (e) {
    if (e.code == "Enter") {
        document.getElementById('input-button').click();
    }
}, true);


// <!-- also temp and doesn't seem to work! -->
let canvasElement = document.getElementById("processor-schematic")
canvasElement.addEventListener("resize", debouncedResize);
function debouncedResize() {
    console.log("Event fired");
}


// <!-- Temp - alternative to split.js      -->
// Should probably handle touchstart === mousedown and
// touchmove === mousemove and 
// touchend === mouseup
//
let ismdwn = 0
rpanrResize.addEventListener('mousedown', mD);

function mD(event) {
    ismdwn = 1
    document.body.addEventListener('mousemove', mV);
    document.body.addEventListener('mouseup', end);
    document.body.style.cursor = "col-resize";

    // Prevent the code table from altering the cursor
    // May want to do this for other elements, but the
    // code table is very close to the drag control, so
    // it is the most likely to be 'hit'
    let codeTableElement = document.getElementById("code-table");
    let codeTableHolderElement = document.getElementById("codetableholder");
    codeTableElement.style.pointerEvents = "none";
    codeTableHolderElement.style.pointerEvents = "none";

    // Prevent the mouse down and drag being interpreted on other elements
    // This stops bits of text in the tables and buttons from being
    // highlighted if we happen to drag over them.
    event.preventDefault();
}

function mV(event) {
    if (ismdwn === 1) {
        codetableholder.style.flexBasis = event.clientX + "px";

        // Prevent the mouse down and drag being interpreted on other elements
        // Needs to be done here as well as in the mouse down event.
        event.preventDefault();
    } else {
        end();
    }
}

const end = (e) => {
    ismdwn = 0;
    document.body.style.cursor = "default";
    document.body.removeEventListener('mouseup', end);
    rpanrResize.removeEventListener('mousemove', mV);

    // Allow the code table to alter the cursor again
    let codeTableElement = document.getElementById("code-table");
    let codeTableHolderElement = document.getElementById("codetableholder");
    codeTableElement.style.pointerEvents = "auto";
    codeTableHolderElement.style.pointerEvents = "auto";

    // Resize the CPU schematic and memory table.
    resizeEvent();
}
// <!-- Temp - alternative to split.js      -->

let changeTheme = document.querySelector("#change-theme-btn").addEventListener("click", theme);

function theme(){
    let body = document.querySelector("body");

    // body.classList.replace("purple", "dark");
    body.classList.toggle("dark");
}