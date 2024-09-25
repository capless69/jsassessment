/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Declare a class to define NFT structure and behavior
class NFT {
    constructor(name, eyeColor, shirtType, accessory) {
        this.name = name;
        this.eyeColor = eyeColor;
        this.shirtType = shirtType;
        this.accessory = accessory;
    }

    // Method to display the metadata of an individual NFT
    displayMetadata(id) {
        console.log(`\nNFT ID: ${id}`);
        console.log(`Name: \t\t ${this.name}`);
        console.log(`Eye Color: \t ${this.eyeColor}`);
        console.log(`Shirt Type: \t ${this.shirtType}`);
        console.log(`Accessory: \t ${this.accessory}`);
    }
}

// Array to store instances of the NFT class
const NFTs = [];

// Function to create and store new NFT objects
function mintNFT(name, eyeColor, shirtType, accessory) {
    const nft = new NFT(name, eyeColor, shirtType, accessory);
    NFTs.push(nft);
    console.log(`Minted NFT: ${name}`);
}

// Function to display metadata for all NFTs in storage
function listNFTs() {
    NFTs.forEach((nft, index) => {
        nft.displayMetadata(index + 1);
    });
}

// Function to return the total supply of NFTs created
function getTotalSupply() {
    console.log(`\nTotal NFTs: ${NFTs.length}`);
}

// Testing the functions by minting NFTs and listing the collection
mintNFT("Priyanshu", "Blue", "Hoodie", "Gold Chain");
mintNFT("Shelby", "Brown", "Polo", "Diamond Earrings");
mintNFT("Thomas", "Green", "Turtleneck", "Diamond Bracelet");

listNFTs();
getTotalSupply();
