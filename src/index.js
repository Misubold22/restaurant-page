import "./styles.css";
import { PageLoads} from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";


function clearContent() {
    const div = document.getElementById("content");
    const HomeTtitle = document.querySelector(".title");
    const HomeBackground= document.querySelector(".background");
    const MenuTtitleContainer= document.querySelector(".menu-title-container");
   

    if (HomeTtitle&&HomeBackground) {
        
        HomeTtitle.remove();
        HomeBackground.remove();
    
    }

    else if (MenuTtitleContainer) {
       
        MenuTtitleContainer.remove();
    
    }

    while(div.firstChild){
        
        div.removeChild(div.firstChild);
    
    }
}


document.addEventListener("DOMContentLoaded", function () {
   
    PageLoads();
 
});

document.querySelector("nav").addEventListener("click", (e) => {
    const home = document.querySelector(".btn-home");
    const contact = document.querySelector(".btn-contact");
    const menu = document.querySelector(".btn-menu");
    const headerHeight = document.querySelector("header");

    if (e.target.classList.contains("btn-contact")) {
        clearContent();
        Contact();
        window.scrollTo(0,0);
        
        headerHeight.style.height = "auto"
        contact.setAttribute("disabled", "");
        menu.removeAttribute("disabled");
        home.removeAttribute("disabled");
    } else if (e.target.classList.contains("btn-menu")) {
        clearContent();
        Menu();
        window.scrollTo(0,0);
        
        headerHeight.style.height = "auto"
        menu.setAttribute("disabled", "");
        contact.removeAttribute("disabled");
        home.removeAttribute("disabled");
    } else if (e.target.classList.contains("btn-home")) {
      
        clearContent();
        PageLoads();
        window.scrollTo(0,0);
        
        home.setAttribute("disabled", "");
        menu.removeAttribute("disabled");
        contact.removeAttribute("disabled");
    }
});
