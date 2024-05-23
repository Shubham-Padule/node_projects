// customer.js

const { getStudent } = require("../../student/modules/student_record");

const customerRecord = [
    {
        cid: 1,
        cname: "shubham padule",
        cbloodGroup: "O+",
        ccity: "Pune"
    },
    {
        cid: 2,
        cname: "ronak nevase",
        cbloodGroup: "O+",
        ccity: "Satara"
    },
    {
        cid: 3,
        cname: "brijesh Glala",
        cbloodGroup: "AB+",
        ccity: "Goa"
    },
    {
        cid: 4,
        cname: "Mhak Padule",
        cbloodGroup: "O+",
        ccity: "Pune"
    },
    {
        cid: 5,
        cname: "omkar",
        cbloodGroup: "B+",
        ccity: "Kolhapur"
    }
];

module.exports = {
    arr: customerRecord,
    getAllCustomer: function() {
        return this.arr;
    },
    
    getStudent:function(cid){
        for(i=0;i<this.arr.length;i++){
            if(cid==this.arr[i].rollno){
                return this.arr[i];
            }
        }
    }
}
