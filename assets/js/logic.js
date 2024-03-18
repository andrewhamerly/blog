// WHEN I click the light mode/dark mode toggle,
// THEN the page content's styles update to reflect the selection.
function toggle () {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('toggle').addEventListener('click', toggle);