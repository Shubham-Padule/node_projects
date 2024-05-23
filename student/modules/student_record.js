//student.js
var student={
    arr:[{rollno:1,name:"aaa",marks:10},
         {rollno:2,name:"bbb",marks:20},
         {rollno:3,name:"ccc",marks:30}
    ],
    getAllStudents:function(){
        return this.arr;
    },
    getStudent:function(rno){
        for(i=0;i<this.arr.length;i++){
            if(rno==this.arr[i].rollno){
                return this.arr[i];
            }
        }
    },
    upStudent:function(rno,mks){
        var flag=false;
        for(i=0;i<this.arr.length;i++){
            if(rno==this.arr[i].rollno){
               this.arr[i].marks=mks;
               flag=true;
            }
        }
        return flag;
    },
    delStudent:function(rno){
        for(i=0;i<this.arr.length;i++){
            if(rno==this.arr[i].rollno){
               //code for deleting from an array
            }
        }
        return true;
    }
   

}
module.exports=student;