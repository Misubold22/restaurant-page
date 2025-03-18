const contentContainer = document.getElementById("content");


const ContactDetails = [
    {
        addressTextBox: "address-text-box",
        addressParagraph: "Via del Gusto, 15, 00187 Roma, Italia",
     
    },
    {
        addressTextBox: "phone-text-box",
        addressParagraph: "+39 3258 5679",
    },
    {
        addressTextBox: "mail-text-box",
        addressParagraph: "reservations@vitabella.com",
    }
];

const ListItems = [
    {
      
        ListItem: "Tuesday - Friday",
     
    },
    {
        ListItem: "Saturday",
       
    },
    {
        ListItem: "Sunday - Monday",

      
    }
];

const ListItems2 = [
    {
        
        ListItem: "12:00 - 14:30, 19:00 - 22:30",
     
    },
    {
        ListItem: "12:00 - 23:00",
       
    },
    {
        ListItem: "Closed",
      
    }
];

const FormName = [
    {
        label: "Name",
        labelName: "NAME",
        input:"text",
        id:"Name",
        name:"Name"          
    }         
];

const FormEmail = [
    {
        label: "Email",
        labelName: "EMAIL",
        input:"email",
        id:"Email",
        name:"Email"          
    }         
];

const FormPhone = [
    {
        label: "Phone",
        labelName: "PHONE",
        input:"tel",
        id:"tel",
        name:"Phone"          
    }         
];

const FormQuantity = [
    {
        label: "quantity",
        labelName: "NUMBER OF GUESTS",
        input:"number",
        id:"quantity",
        name:"quantity",    
        min:"min", 
        amount:"1"
    }         
];

const FormDate = [
    {
        label: "Date",
        labelName: "PREFERRED DATE",
        input:"date",
        id:"Date",
        name:"Date"          
    }         
];

const FormMessage = [
    {
        label: "Message",
        labelName: "MESSAGE",
        textareaId:"Message",
        name:"Message",          
        rows:"6",
        maxlength:"3000" 
    }     
];

const FormButton = [
    {
        type: "type",
        submit: "submit",
        id:"id",
        fcfButton:"fcf-button",        
        fcfBtn:"fcf-btn",
        fcfBtnPrimary:"fcf-btn-primary",
        fcfBtnLg:"fcf-btn-lg",
        fcfBtnBlock:"fcf-btn-block",
        btnText:"Send Message"
    }     
];

function Contact() {
    const contactContent = document.createElement("div");
    contactContent.setAttribute("class", "contact-content");
    contentContainer.appendChild(contactContent);

    const Contact = document.createElement("div");
    Contact.setAttribute("class", "contact");
    contactContent.appendChild(Contact);

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact Us";
    Contact.appendChild(contactHeader);

    const contactParagraph = document.createElement("p");
    contactParagraph.textContent = "For reservations and inquiries, please reach out to us or fill out the form. We look forward to welcoming you to Vita Bella.";
    Contact.appendChild(contactParagraph);
    
    function createContactDetails(ContactDetails) {
        ContactDetails.forEach((item) => {
            //Contact details for adress,phone,mail
            const addressTextBox = document.createElement("div");
            addressTextBox.setAttribute("class", item.addressTextBox);
            Contact.appendChild(addressTextBox);

            const addressImg = document.createElement("img");
            addressImg.setAttribute("class", "contact-png");
            addressTextBox.appendChild(addressImg);

            const addressParagraph = document.createElement("p");
            addressParagraph.textContent = item.addressParagraph
            addressTextBox.appendChild(addressParagraph);
        });
    }
    
    createContactDetails(ContactDetails);
    
    const HoursOfOperation = document.createElement("div");
    HoursOfOperation.setAttribute("class", "hours-of-operation");
    Contact.appendChild(HoursOfOperation);

    const HoursHeader = document.createElement("h3");
    HoursHeader.textContent = "Opening Hours";
    HoursOfOperation.appendChild(HoursHeader);

    const DaysOpen = document.createElement("ul");
    DaysOpen.setAttribute("class", "days");
    HoursOfOperation.appendChild(DaysOpen);

    const HoursOpen = document.createElement("ul");
    HoursOpen.setAttribute("class", "hours");
    HoursOfOperation.appendChild(HoursOpen);
    
    function createListItems(ListItems, Open) {
     
    
        ListItems.forEach((item) => {
    
            const ListItem = document.createElement("li");
            ListItem.textContent = item.ListItem;
            Open.appendChild(ListItem);

        
        });
    }
    
    createListItems(ListItems, DaysOpen);
    createListItems(ListItems2, HoursOpen);

    const FormBody = document.createElement("div");
    FormBody.setAttribute("class", "fcf-body");
    contactContent.appendChild(FormBody);

    const FormContainer = document.createElement("div");
    FormContainer.setAttribute("id", "fcf-form");
    FormBody.appendChild(FormContainer);

    const FormId = document.createElement("form");
    FormId.setAttribute("id", "fcf-form-id");
    FormId.classList.add("fcf-form-class");
    FormContainer.appendChild(FormId);

    function createFormItems(FormName) {
       
     
        FormName.forEach((item) => {
    
            //Form Element aka Label
            const FormElement = document.createElement("div");
            FormElement.setAttribute("class", "fcf-form-group");
            FormId.appendChild(FormElement);
            
            const FormLabel = document.createElement("label");
            FormLabel.setAttribute("for", item.label);
            FormLabel.classList.add("fcf-label");
            FormLabel.textContent = item.labelName
            FormElement.appendChild(FormLabel);
            
            const FormElementInputGroup = document.createElement("div");
            FormElementInputGroup.setAttribute("class", "fcf-input-group");
            FormElement.appendChild(FormElementInputGroup);
            
            const FormElementInput = document.createElement("input");
            //const FormElementInputs = document.createElement("input");
            FormElementInput.setAttribute("type", item.input);
            FormElementInput.setAttribute("id", item.id);
            FormElementInput.setAttribute("name", item.name);
      
            //FormElementInputs.setAttribute(item.min, item.amount)  
            FormElementInput.classList.add("fcf-form-control");
            FormElementInput.setAttribute("required","");
            FormElementInputGroup.appendChild(FormElementInput);
 
       
            
        });
    }
 
    function createFormItemMinAmount() {
        FormQuantity.forEach((item) => {
            const elemQuant = document.getElementById("quantity");
            elemQuant.setAttribute(item.min,item.amount)  
        });
    } 

    function createFormItemMessage() {
        const input = document.getElementById("undefined");
        const text = document.createElement('textarea');
        text.setAttribute('id', input.getAttribute('id'));
        text.setAttribute('name', input.getAttribute('name'));
        text.value = input.value;
        input.parentNode.replaceChild(text, input);
        const FormElementInput = document.querySelector("textarea");
        
        FormMessage.forEach((item) => {
            
            FormElementInput.setAttribute("id", item.textareaId);
            FormElementInput.setAttribute("name", item.name);
            FormElementInput.classList.add("fcf-form-control");
            FormElementInput.setAttribute("rows", item.rows);
            FormElementInput.setAttribute("maxlength", item.maxlength);
            FormElementInput.setAttribute("required","");
           
        });
    } 
    
    function createFormButton() {
        const FormElement = document.createElement("div");
        FormElement.setAttribute("class", "fcf-form-group");
        FormId.appendChild(FormElement);
        const FormElementInput = document.createElement("button");
        
        FormButton.forEach((item) => {
            
            FormElementInput.setAttribute(item.type, item.submit);
            FormElementInput.setAttribute(item.id, item.fcfButton);
            FormElementInput.classList.add(item.fcfBtn,item.fcfBtnPrimary,item.fcfBtnLg,item.fcfBtnBlock);
            FormElementInput.textContent = item.btnText
            FormElement.appendChild(FormElementInput);
               

        });
    }

    createFormItems(FormName);
    createFormItems(FormEmail)
    createFormItems(FormPhone)
    createFormItems(FormQuantity)
    createFormItems(FormDate)
    createFormItems(FormMessage)
    createFormItemMinAmount()
    createFormButton() 
    createFormItemMessage() 

}

export { Contact };