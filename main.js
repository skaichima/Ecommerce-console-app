const rdl = require("readline");
const prompts = rdl.createInterface(process.stdin, process.stdout);
const items = {
    1: {"item": "Pencil","Price": "$1"},
    2: {"item": "Pen","Price": "$1"},
    3: {"item": "Exercise book","Price": "$3"},
    4: {"item": "Eraser","Price": "$0.5"},
    5: {"item": "Maths Set","Price": "$5"},
};


// itemsNames.push(items.find(item => item.key === item))

const repfunc = () => {
    prompts.question("Would you like to purchase another item?(Yes/No) =>", function (reply) {
        if (reply.toLowerCase() == "yes") {
            app();
        } else if (reply.toLowerCase() == "no") {
            console.log("Thanks for visiting Ballpoint online store. We hope to see you soon!!");
            prompts.close();
        } else{
            console.log("An Error occured. Please try again");
            app();
        }
    });
}

const validation = (itemQuantity,itemName,price) => {
     prompts.question(`Are you sure you want to purchase ${itemQuantity} ${itemName}s at the price of $${price*Number(itemQuantity)}?(Yes/No) =>`, function(answer){
                if(answer.toLowerCase() == 'yes') {
                    console.log("Purchase successful.");
                    repfunc();
                    
                } else if(answer.toLowerCase() == "no"){
                    console.log("Purchase Cancelled.");
                    repfunc();
                } else {
                    console.log("An Error occured. Please try again")
                    app()
                };
            });
}

function app(){
    console.log("BALLPOINT ONLINE STORE.");
    console.log("welcome to ballpoint store.");
    console.table(items);

    prompts.question("what would you like to purchase?(write out the items name[example; pencil]) =>", function(itemName) {
        let itemsnames = ["pencil", "pen", "eraser", "math set", "exercise book", "pencil"]
        if(itemsnames.includes(itemName.trim())){
            prompts.question(`what quantity of ${itemName.trim()}s will you like to buy?(wirte the quantity in figures[example; 120]) =>`, function(itemQuantity){
                let price;
                switch(itemName.trim().toLowerCase()){
                    case 'pencil':
                        price = 1;
                        break;
                    case 'pen':
                        price = 1;
                        break;
                    case 'exercise book':
                        price = 3;
                        break;
                    case 'eraser':
                        price = 0.5;
                        break;
                    case 'math set':
                        price = 5;
                        break;
                }
                validation(itemQuantity.trim(),itemName.trim(),price)           
            });
        } else{
            console.log("An Error occured. Please try again");
            app();
        }
    });
};


app();