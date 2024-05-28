let nftCollection = [];

function mintNFT(name, eyeColor, shirtType, height) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        height: height,
    };
    nftCollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("ID :"+(i+1));
        console.log("Name: " + nftCollection[i].name);
        console.log("Eye Color: " + nftCollection[i].eyeColor);
        console.log("Shirt Type: " + nftCollection[i].shirtType);
        console.log("Height: " + nftCollection[i].height);
        console.log("------------------");
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Yash", "Red", "round neck", "6ft");
mintNFT("Prabhav", "Blue", "collarless", "5ft 8in");
mintNFT("vaibhav", "Green", "kurta", "4ft 5in");

listNFTs();

console.log("Total NFTs Minted: " + getTotalSupply());
