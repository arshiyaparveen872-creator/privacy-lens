const uploadBox = document.getElementById("uploadBox");
const imageInput = document.getElementById("imageInput");
const chooseImageBtn = document.getElementById("chooseImageBtn");

const previewBox = document.getElementById("previewBox");
const imagePreview = document.getElementById("imagePreview");
const selectedFileName =
    document.getElementById("selectedFileName");

const removeImageBtn =
    document.getElementById("removeImageBtn");

const startScanBtn =
    document.getElementById("startScanBtn");


const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg"
];


/* =========================
   OPEN FILE PICKER
========================= */

chooseImageBtn.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        imageInput.click();
    }
);


uploadBox.addEventListener(
    "click",
    function() {

        imageInput.click();
    }
);


/* =========================
   FILE SELECTED
========================= */

imageInput.addEventListener(
    "change",
    function() {

        const file = imageInput.files[0];

        if (file) {
            processImage(file);
        }
    }
);


/* =========================
   DRAG AND DROP
========================= */

uploadBox.addEventListener(
    "dragover",
    function(event) {

        event.preventDefault();

        uploadBox.classList.add("drag-active");
    }
);


uploadBox.addEventListener(
    "dragleave",
    function() {

        uploadBox.classList.remove("drag-active");
    }
);


uploadBox.addEventListener(
    "drop",
    function(event) {

        event.preventDefault();

        uploadBox.classList.remove("drag-active");

        const file = event.dataTransfer.files[0];

        if (file) {
            processImage(file);
        }
    }
);


/* =========================
   PROCESS IMAGE
========================= */

function processImage(file) {

    if (!ALLOWED_TYPES.includes(file.type)) {

        alert(
            "Please select a PNG, JPG or JPEG image."
        );

        return;
    }


    if (file.size > MAX_FILE_SIZE) {

        alert(
            "Image size must be less than 10 MB."
        );

        return;
    }


    const reader = new FileReader();


    reader.onload = function(event) {

        imagePreview.src = event.target.result;

        selectedFileName.textContent =
            file.name;

        uploadBox.style.display = "none";

        previewBox.style.display = "block";
    };


    reader.readAsDataURL(file);
}


/* =========================
   REMOVE IMAGE
========================= */

removeImageBtn.addEventListener(
    "click",
    function() {

        imageInput.value = "";

        imagePreview.src = "";

        selectedFileName.textContent = "";

        previewBox.style.display = "none";

        uploadBox.style.display = "grid";
    }
);


/* =========================
   SCAN
========================= */

startScanBtn.addEventListener(
    "click",
    function() {

        alert(
            "Frontend is ready! Next we will connect the PrivacyLens scanning backend."
        );
    }
);