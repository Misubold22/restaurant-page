const headerContainer = document.querySelector("header");
const contentContainer = document.getElementById("content");

function Menu() {
    const MenuItems = [
        {
            h3: "Bruschetta al Pomodoro",
            price: "20",
            description: "Toasted bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil",
            tag1: "Vegetarian",
            tag2: "Contains Gluten",
            tag3: "Frascati Superiore, Villa Simone 2020",
        },
        {
            h3: "Frittura di Calamari",
            price: "30",
            description: "Crispy fried calamari served with a lemon wedge and marinara sauce",
            tag1: "Contains Seafood",
            tag2: "Gluten Free",
            tag3: "Chianti Classico, Castello di Ama 2019",
        }
    ];
   
    const MenuItems2 = [
        {
            h3: "Tagliatelle al Ragù di Carne",
            price: "32",
            description: "Homemade tagliatelle pasta with a rich beef and pork ragù sauce",
            tag1: "Vegetarian",
            tag2: "Contains Gluten",
            tag3: "Pinot Grigio, Santa Margherita 2021",
        },
        {
            h3: "Pizza Calabrese",
            price: "20",
            description: "Thin crust pizza topped with spicy 'Nduja sausage, mozzarella, red onions, and olive oil",
            tag1: "Signature",
            tag2: "Contains Gluten",
            tag3: "Barolo, Marchesi di Barolo 2017",
        }
    ];

    const MenuItems3 = [
        {
            h3: "Tiramisu",
            price: "12",
            description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
            tag1: "Contains Dairy",
            tag2: "Contains Alcohol",
            tag3: "Moscato d'Asti, Gavi 2021",
        },
        {
            h3: "Panna Cotta",
            price: "10",
            description: "Creamy vanilla panna cotta topped with fresh berries and a raspberry coulis",
            tag1: "Signature",
            tag2: "Contains Dairy",
            tag3: "Vin Santo, Toscana 2018",
        }
    ];

    // Menu and Motto
    const menuTitleContainer = document.createElement("div");
    menuTitleContainer.setAttribute("class", "menu-title-container");
    headerContainer.appendChild(menuTitleContainer);

    const menuTitle = document.createElement("div");
    menuTitle.setAttribute("class", "menu-title");
    menuTitleContainer.appendChild(menuTitle);

    const menuTitleHeader = document.createElement("h1");
    menuTitleHeader.textContent = "Our Menu";
    menuTitle.appendChild(menuTitleHeader);

    const menuTitleParagraph = document.createElement("p");
    menuTitleParagraph.textContent = "Where tradition and creativity meet on every plate.";
    menuTitle.appendChild(menuTitleParagraph);

    const menuContent = document.createElement("div");
    menuContent.setAttribute("class", "menu-content");
    contentContainer.appendChild(menuContent);  

    // Menu Content Title - Antipasti
    const menuContentTitleContainer = document.createElement("div");
    const menuContentTitle = document.createElement("div");
    menuContentTitleContainer.setAttribute("class", "menu-content-title-container");
    const menuContentTitleHeader = document.createElement("h2");
    menuContentTitleHeader.textContent = "Antipasti";
    const menuItems = document.createElement("div");
    menuItems.setAttribute("class", "menu-items");

    // Menu Content Title - Main Course
    const menuContentTitleContainer2 = document.createElement("div");
    const menuContentTitle2 = document.createElement("div");
    menuContentTitleContainer2.setAttribute("class", "menu-content-title-container-2");
    const menuContentTitleHeader2 = document.createElement("h2");
    menuContentTitleHeader2.textContent = "Main Course";
    const menuItems2 = document.createElement("div");
    menuItems2.setAttribute("class", "menu-items-2");
    
    // Menu Content Title - Desserts
    const menuContentTitleContainer3 = document.createElement("div");
    const menuContentTitle3 = document.createElement("div");
    menuContentTitleContainer3.setAttribute("class", "menu-content-title-container-3");
    const menuContentTitleHeader3 = document.createElement("h2");
    const menuItems3 = document.createElement("div");
    menuItems3.setAttribute("class", "menu-items-3");
    menuContentTitleHeader3.textContent = "Desserts";
    
    function MenuContentTitle(menuContentTitleContainer, menuContentTitle, menuContentTitleHeader, menuItems) {
        menuContent.appendChild(menuContentTitleContainer);  
        menuContentTitleContainer.appendChild(menuContentTitle);  
        menuContentTitle.setAttribute("class", "menu-content-title");
        menuContentTitle.appendChild(menuContentTitleHeader);
        menuContent.appendChild(menuItems);
        menuContentTitleContainer3.appendChild(menuItems3);
    }
      
    MenuContentTitle(menuContentTitleContainer, menuContentTitle, menuContentTitleHeader, menuItems);
    
    MenuContentTitle(menuContentTitleContainer2, menuContentTitle2, menuContentTitleHeader2, menuItems2);
    
    MenuContentTitle(menuContentTitleContainer3, menuContentTitle3, menuContentTitleHeader3, menuItems3);
    
    function createMenuItem(MenuItems, menuItems) {
        MenuItems.forEach((item) => {
            const menuItem = document.createElement("div");
            menuItem.setAttribute("class", "menu-item");
            menuItems.appendChild(menuItem);
            
            const menuItemHeader = document.createElement("h3");
            menuItemHeader.textContent = item.h3;
            menuItem.appendChild(menuItemHeader);
            
            const menuItemPrice = document.createElement("p");
            menuItemPrice.setAttribute("class", "price");
            menuItemPrice.textContent = `$${item.price}`;
            menuItem.appendChild(menuItemPrice);
            
            const menuItemDescription = document.createElement("p");
            menuItemDescription.setAttribute("class", "description");
            menuItemDescription.textContent = item.description;
            menuItem.appendChild(menuItemDescription);
            
            const menuItemTags = document.createElement("div");
            menuItemTags.setAttribute("class", "tags");
            menuItem.appendChild(menuItemTags);
            
            const menuItemTag1 = document.createElement("p");
            menuItemTag1.setAttribute("class", "tag-1");
            menuItemTag1.textContent = item.tag1;
            menuItemTags.appendChild(menuItemTag1);
            
            const menuItemTag2 = document.createElement("p");
            menuItemTag2.setAttribute("class", "tag-2");
            menuItemTag2.textContent = item.tag2;
            menuItemTags.appendChild(menuItemTag2);
            
            const menuItemDrinkTags = document.createElement("div");
            menuItemDrinkTags.setAttribute("class", "drink-tags");
            menuItem.appendChild(menuItemDrinkTags);
            
            const menuItemDrinkImg = document.createElement("img");
            menuItemDrinkImg.setAttribute("class", "drink");
            menuItemDrinkTags.appendChild(menuItemDrinkImg);
            
            const menuItemTag3 = document.createElement("p");
            menuItemTag3.setAttribute("class", "tag-3");
            menuItemTag3.textContent = item.tag3;
            menuItemDrinkTags.appendChild(menuItemTag3);
        });
    }
    
    createMenuItem(MenuItems, menuItems);
    createMenuItem(MenuItems2, menuItems2);
    createMenuItem(MenuItems3, menuItems3);
}

export { Menu };