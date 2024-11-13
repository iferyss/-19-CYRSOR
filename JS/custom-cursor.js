function setCustomCursor(cursorUrl) {
    document.body.style.cursor = `url(${cursorUrl}), auto`;
}

function resetCursor() {
    document.body.style.cursor = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const cursorArea = document.querySelector('.cursor-area');
    const button = document.querySelector('.button');

    cursorArea.addEventListener('mouseenter', () => {
        setCustomCursor('cursors/alternate.png');
    });

    cursorArea.addEventListener('mouseleave', () => {
        resetCursor();
    });

    button.addEventListener('mouseenter', () => {
        setCustomCursor('cursors/link.png');
    });

    button.addEventListener('mouseleave', () => {
        resetCursor();
    });
});
