import InitialPage from './welcome';
import MenuPage from './menu';
import AboutPage from './about';
import {removeContent, clearTabs} from './domManipulation';


const landingPage = new InitialPage();
landingPage.initialLoad();

const tabLinks = document.querySelectorAll(`[id^="header-link"]`);

for (let i = 0; i < tabLinks.length; i++) {
    const tab = tabLinks[i];
    tab.addEventListener('click', tabClick);
}

function tabClick(event) {
    loadTab(event.target.dataset.tab);
}

function loadTab(tabID) {
    removeContent();
    clearTabs();
    if (tabID === '0') {
        landingPage.displayPage();
    }
    if (tabID === '1') {
        const menuPage = new MenuPage();
        menuPage.displayPage();
    }
    if (tabID === '2') {
        const aboutPage = new AboutPage();
        aboutPage.displayPage();
    }
}