// For in travels the properties of an object, it doesn't have to be iterable
//It only shows the iterable properties of the object

let witcher = {
    name : "Geralt",
    aka : ["Butcher of Blaviken", "White wolf"],
    state : "Alive",
    childOfSurprise : "Ciri"

}

for (property in witcher){
    console.log(property);
}