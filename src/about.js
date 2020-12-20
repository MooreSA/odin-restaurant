class AboutPage {
    constructor() {
        this.root = document.querySelector('#content');
        this.aboutElement = createAboutElement();
    }

    displayPage() {
        this.root.appendChild(this.aboutElement);
        const menuTab = document.querySelector('#header-link2')
        menuTab.classList.toggle('active-link')
    }

}

function createAboutElement() {
    const wrapper = document.createElement('div');
    const textWrapper = document.createElement('div');

    wrapper.classList = "about-page";
    textWrapper.classList.add('info-text-wrapper')

    textWrapper.appendChild(createTitle());
    textWrapper.appendChild(createInfo());
    wrapper.appendChild(createImg());
    wrapper.appendChild(textWrapper);

    return wrapper;
}

function createTitle() {
    const title = document.createElement('div');
    title.classList.add('info-title');
    title.textContent = "Who We Are";
    return title;
}

function createImg() {
    const imgWrapper = document.createElement('div');
    const image = document.createElement('img');

    image.src = "./img/about-bg.jpg";
    image.alt = "Pizza";
    
    imgWrapper.appendChild(image);
    return imgWrapper;
}


function createInfo() {
    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = `With a large and talented team of culinary, pastry and deli staff sharing a passion for Italian food and quality ingredients, guests can relive fond memories of adventures in Italy, or experience them for the first time in North End Halifax.`;

    return info;
}

export default AboutPage