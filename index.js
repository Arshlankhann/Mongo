const mongoose=require('mongoose');

main()
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User=mongoose.model("User",userschema);

User.findByIdAndDelete("66065b843cfdcc52b191a651")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


// User.findOneAndUpdate({name:"ajji khan"},{age:34})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.findById("6605b06345989d5c19ff99dc").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.insertMany([
//     {Name:"Arsh",email:"arh8327@gmail.com",age:21},
//     {Name:"Ajju",email:"ajju33227@gmail.com",age:41},
//     {Name:"Arshu",email:"arshu237@gmail.com",age:31},
//     {Name:"Arshlan",email:"arshlankhan@gmail.com",age:14}
// ]).then((res)=>{
//     console.log(res);
// });


// const user2=new User({
//     name:"ajji khan",
//     email:"ajju688@gmail.com",
//     age:17,
// });

// user2
// .save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// }