class MenuPage {
    constructor() {
        this.root = document.querySelector('#content');
        this.menuItems = [
            {
                title: 'Pizza',
                imageSrc: "./img/pizza.jpg",
                description: `White pizza with garlic infused olive oil, goat cheese, fresh mozzarella fior di latte,
                prosciutto fired off then topped with arugula and shaved parmesan.`
            },
            {
                title: "Pasta",
                imageSrc: "./img/pasta.jpg",
                description: `Sundried tomatoes and mushrooms served in a herbs, garlic & olive oil. topped with feta cheese`
            },
            {
                title: "Salad",
                imageSrc: "./img/salad.jpg",
                description: `A side salad of mixed greens with dried cranberries, spiced pumpkin seeds, drizzled with honey mustard dressing and dusted with feta cheese`
            }
        ]
        this.menuElement = createMenuGrid(this.menuItems);
    }

    displayPage() {
        this.root.appendChild(this.menuElement);
        const menuTab = document.querySelector('#header-link1')
        menuTab.classList.toggle('active-link')
    }
}

function createMenuGrid(menuItems) {
    let menu = document.createElement('div');
    menu.classList.add('menu');

    for (let i = 0; i < menuItems.length; i++){
        const menuItem = createMenuItem(menuItems[i]);
        menu.appendChild(menuItem);
    }

    return menu;
}

function createMenuItem(menuItem) {
    let wrapper = document.createElement('div');
    let title = document.createElement('div');
    let image = document.createElement('img');
    let description = document.createElement('div');

    title.textContent = menuItem.title;
    title.classList.add('menu-title');
    image.src = menuItem.imageSrc;
    description.textContent = menuItem.description;

    wrapper.appendChild(title);
    wrapper.appendChild(image);
    wrapper.appendChild(description);
    return wrapper;
}

export default MenuPage;