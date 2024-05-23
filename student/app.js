var express=require('express');
var app=express();

var stud=require("./modules/student_record");


var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//static resources
// app.use(express.static("public"));
// app.use("/images",express.static(__dirname+"/images"));
//routes



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/students",function(req,res){
    var arr=stud.getAllStudents();
    //case 1
    var jObj=JSON.stringify(arr);
    res.send(jObj);

    //case 2
    //res.json(arr);

    //case 3
    // let str="";
    // for(let i=0;i<arr.length;i++){
    //     str+="<br>Rollno="+arr[i].rollno+"<br>Name="+arr[i].name+"<br>Marks="+arr[i].marks;
    // }
    // res.send(str);
})
//request parameter
app.get("/student/:rno",function(req,res){
    var rollno=req.params.rno;
    var obj=stud.getStudent(rollno);
    res.json(obj);
})
//query string
app.get("/student",function(req,res){
    var rollno=req.query.rno;
    var obj=stud.getStudent(rollno);
    res.json(obj);
})




app.post("/newStudent",function(req,res){
    var rollno=req.body.rno;
    var str=req.body.name;
    res.send(rollno+str);
})
app.put("/upStudent/:rno",function(req,res){
    var rollno=req.params.rno;
    var mks=req.body.marks;

    var out=stud.upStudent(rollno,mks);
    if(out==true){
        res.send("record updated!!");
    }
    else{
        res.send("record not found!!");
    }

})

app.listen(3000,function(){
    console.log("server is listening at port 3000");
})