// Password Hide Unhide Toggle
const passwordsToggles = document.querySelectorAll('.passwordtoggle');

for (const passwordToggle of passwordsToggles) {
    passwordToggle.addEventListener('click', function () {
        const input = passwordToggle.previousElementSibling;
        const type = input.getAttribute("type"); (type === "password") ? input.setAttribute("type", "text") : input.setAttribute("type", "password");
        passwordToggle.classList.toggle("text-primary");
    });
}

// Modal Profile Image
const imageThumb = document.querySelector('.profilethumb');
const imageModal = document.querySelector('.imagemodal');
const closeImage = document.querySelector('.closeimage');

imageThumb.addEventListener('click', function () {
    imageModal.classList.toggle('hidden');
});

closeImage.addEventListener('click', function () {
    imageModal.classList.add('hidden');
});

// if user scrolling, modal auto close
window.onscroll = function () {
    imageModal.classList.add('hidden');
};