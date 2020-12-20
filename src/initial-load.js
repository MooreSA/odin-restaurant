function initialLoad() {
    let root = document.querySelector('#content');
    header(root);
    createImg(root);
    createText(root);
}

function header(root) {
    let headerElement = document.createElement('header');
    let headerDivs = makeHeaderGrid();

    for (let i = 0; i < headerDivs.length; i++) {
        headerElement.appendChild(headerDivs[i]);
    }
    root.appendChild(headerElement);
}

function createImg(root) {
    const imgWrapper = document.createElement('div');
    const image = document.createElement('img');
    imgWrapper.appendChild(image);
    image.src = "./index-bg.jpg";
    image.alt = "Pizza Slice";
    root.appendChild(imgWrapper);
}

function createText(root){
    const textDiv = document.createElement('div');
    textDiv.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    textDiv.classList.add('text-content');
    root.appendChild(textDiv);
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
        headerLinks.push(link);
    }

    headerLinks[0].classList.add('active-link');
    return headerLinks
}


export default initialLoad;