const mongoose=require("mongoose");

main()
.then((res)=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low for amazon seller"]
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["friction","non-fricton"]
    },
    genre:{
        type:[String]
    }
});

const Book=mongoose.model("Books",bookSchema);

Book.findByIdAndUpdate("66069501fc6b4ac3efdeb459",{price:-200},{runValidators:true})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});


// let book1= new Book({
//     title:"Marvel Comics",
//     price:599,
//     category:"friction",
//     genre:["comics","superheroes","friction"]
// })
// book1
// .save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// });