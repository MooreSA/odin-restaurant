class InitialPage {
    constructor() {
        this.root = document.querySelector('#content');
        this.header = createHeader();
        this.img = createImg();
        this.textContent = createText();
    }

    initialLoad() {
        this.root.appendChild(this.header)
        this.root.appendChild(this.img)
        this.root.appendChild(this.textContent)
    }

    displayPage() {
        this.root.appendChild(this.img);
        this.root.appendChild(this.textContent);
        const welcomeTab = document.querySelector('#header-link0');
        welcomeTab.classList.add('active-link')
    }
}

function createHeader() {
    let headerElement = document.createElement('header');
    let headerDivs = makeHeaderGrid();

    for (let i = 0; i < headerDivs.length; i++) {
        headerElement.appendChild(headerDivs[i]);
    }
    return headerElement;
}

function createImg() {
    const imageWrapper = document.createElement('div');
    const image = document.createElement('img');
    image.src = "./img/index-bg.jpg";
    image.alt = "Pizza Slice";
    
    imageWrapper.appendChild(image);
    return imageWrapper;
}

function createText(){
    const textDiv = document.createElement('div');
    textDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    textDiv.classList.add('text-content');
    
    return textDiv;
}

function makeHeaderGrid() {
    let headerGrid = [];
    for (let i = 0; i < 3; i++) {
        const element = document.createElement('div');
        element.id = `header-element${i}`
        if (i === 1) {
            const title = document.createElement('h1');
            title.textContent = "Bambino's Pizzeria";
            element.appendChild(title);
        }
        if (i === 0) {
            element.classList.add('header-links')
            const headerLinks = createHeaderLinks();
            for (let i = 0; i < headerLinks.length; i++) {
                element.appendChild(headerLinks[i]);
            }
        }
        headerGrid.push(element);
    }
    return headerGrid;
}

function createHeaderLinks() {
    const linkContent = [
        'Welcome',
        'Menu',
        'About'
    ]

    let headerLinks = [];
    for (let i = 0; i < 3; i++) {
        const link = document.createElement('a');
        link.id = `header-link${i}`
        link.innerText = linkContent[i];
        link.href = '#';
        link.setAttribute('data-tab', i);
        headerLinks.push(link);
    }

    headerLinks[0].classList.add('active-link');
    return headerLinks
}


export default InitialPage;