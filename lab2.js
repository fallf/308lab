let productData = "ProductID,ProductName,Category,Price,Quantity\n101,Apple,Fruit,0.5,50\n102,Banana,Fruit,0.3,100\n103,Carrot,Vegetable,0.4,70\n104,Milk,Dairy,1.2,30";

const myProduce = productData.split('\n');
console.log(myProduce)

let data = []
let header = []

if (myProduce.length>0){
    header = myProduce[0].split(",")
    data.push(header);
    for (let i = 1; i < myProduce.length;i++ ){
        let rowProduce = myProduce[i].split(",");
        data.push(rowProduce);
        console.log(rowProduce);
    }
    
}
data.shift();
console.log(data);
