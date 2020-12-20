export function removeContent() {
    const root = document.querySelector('#content');
    const rootChildren = root.children;
    while (root.children.length > 1) {
        root.removeChild(root.lastChild);
    }
}

export function clearTabs() {
    const tabs = document.querySelectorAll(`[id^="header-link"]`);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-link')
    }
}


export default { removeContent, clearTabs };