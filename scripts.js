function go(e) {
    const a = e.target.closest('a');
    if (!a) {
        return;
    }
    // Only handle header logo + nav links
    if (!a.closest('.nav') && !a.closest('.icon')) {
        return;
    }
    e.preventDefault();
    location.href = a.getAttribute('href');
}
document.addEventListener('click', go);