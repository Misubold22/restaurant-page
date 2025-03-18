// home.js
let headerContainer = document.querySelector("header");
let contentContainer = document.getElementById("content");
let headerHeight = document.querySelector("header");

function PageLoads() {
    const Quote1Content = [
        {
            quoteHeader: "Authentic Italian Flavors",
            quoteParagraph: "Timeless recipes with a contemporary touch",
        }
    ];
   
    const Quote2Content  = [
        {
            quoteHeader: "Curated Wine List",
            quoteParagraph: "Celebrating Italian vineyards",
        }
    ];

    const Quote3Content = [
        {
            quoteHeader: "Seasonal Creations",
            quoteParagraph: "Inspired by Calabria's finest ingredients",
        }
    ];    
    
    headerHeight.style.height = "100vh"
    //Title
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    headerContainer.appendChild(title);

    const titleHeader = document.createElement("h1");
    titleHeader.textContent = "Vita Bella";
    title.appendChild(titleHeader);

    const titleParagraph = document.createElement("p");
    titleParagraph.textContent ="Tradition served with a twist";
    title.appendChild( titleParagraph);

    const titleButton = document.createElement("button");
    titleButton.setAttribute("class", "button-6");
    titleButton.appendChild(document.createTextNode("RESERVE A TABLE ")); 
    title.appendChild( titleButton);
    
    //Background
    const headerBackground = document.createElement("div");
    headerBackground.setAttribute("class", "background");
    headerContainer.appendChild(headerBackground);

    //Story
    const mainStory = document.createElement("div");
    mainStory.setAttribute("class", "main-story");
    contentContainer.appendChild(mainStory);

    const ourStory = document.createElement("div");
    ourStory.setAttribute("class", "our-story");
    mainStory.appendChild(ourStory);

    const ourStoryHeader = document.createElement("h2");
    ourStoryHeader.textContent = "Our Story";
    ourStory.appendChild(ourStoryHeader);

    const ourStoryParagraph = document.createElement("p");
    ourStoryParagraph.textContent =
    "At Vita Bella, we bring the bold flavors of Calabria to life. From hearty panuozzo fresh from the oven to sun-ripened citrus, blending authentic recipes with a modern twist, because food should be just like life: a little unexpected, always delicious.";
    ourStory.appendChild(ourStoryParagraph);

    const ourStoryImg = document.createElement("div");
    ourStoryImg.setAttribute("class", "our-story-img");
    mainStory .appendChild(ourStoryImg );

    //Restaurant Features
    const restaurantFeatures = document.createElement("div");
    restaurantFeatures .setAttribute("class", "restaurant-features");
    contentContainer.appendChild(restaurantFeatures);

    
function RestaurantFeaturesQuotes(quote1,quote1Img,quote1Header,quote1Paragraph) {
    restaurantFeatures.appendChild(quote1);
    quote1.appendChild(quote1Img);
    quote1.appendChild(quote1Header);
    quote1.appendChild(quote1Paragraph);
}
    //quote1
     const quote1 = document.createElement("div");
     quote1.setAttribute("class", "quote-1");
     const quote1Img = document.createElement("div");
     quote1Img.setAttribute('class','quote-1-image');
     const quote1Header = document.createElement("h3");
     const quote1Paragraph = document.createElement("p");
    
    
     //quote2
     const quote2 = document.createElement("div");
     quote2.setAttribute("class", "quote-2");
     const quote2Img = document.createElement("div");
     quote2Img.setAttribute('class','quote-2-image');
     const quote2Header = document.createElement("h3");
     const quote2Paragraph = document.createElement("p");
    
     
     //quote3
     const quote3= document.createElement("div");
     quote3.setAttribute("class", "quote-3");
     const quote3Img = document.createElement("div");
     quote3Img.setAttribute('class','quote-3-image');
     const quote3Header = document.createElement("h3");
     const quote3Paragraph = document.createElement("p");
    
  
     RestaurantFeaturesQuotes(quote1,quote1Img,quote1Header,quote1Paragraph)
     RestaurantFeaturesQuotes(quote2,quote2Img,quote2Header,quote2Paragraph)
     RestaurantFeaturesQuotes(quote3,quote3Img,quote3Header,quote3Paragraph)
   

function creatQuoteContent(QuoteContent, quoteHeader, quoteParagraph){
    QuoteContent.forEach((item) => {
        quoteHeader.textContent = item.quoteHeader
        quoteParagraph.textContent = item.quoteParagraph
    });
}
creatQuoteContent(Quote1Content, quote1Header, quote1Paragraph)
creatQuoteContent(Quote2Content, quote2Header, quote2Paragraph)
creatQuoteContent(Quote3Content, quote3Header, quote3Paragraph)
}    


export { PageLoads };