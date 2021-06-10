const express =require("express");
const employeesroute=require("./routers/employees-router");
const app=express();
app.use(express.json());
app.use("/employees",employeesroute);
app.listen(8877,()=>{
    console.log("nodejs is connected successfully")
}
);