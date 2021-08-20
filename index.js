const express=require('express');
const app= express();
const port=5000;

// var temp=new Date();
// var todayDate = temp.getFullYear()+'-'+(temp.getMonth()+1)+'-'+temp.getDate();
// var time = temp.getHours() + ":" + temp.getMinutes() + ":" + temp.getSeconds();
// var start = todayDate+' '+time;
// var days=4;
// var end = new Date( Date.now() + days * 24 * 60 * 60 * 1000);

//create a Room
const room=[{
    numberOfSeats:3,
    amentitiesinRoom:2,
    priceForHour:1000
}]

//Create
app.get("/create",(req,res)=>
{
    res.status(200).json({room})
})


//Booking a Room
app.get("/booking",function roomBooking(req,res)
{ 
    const bookingRoom=[
        {
        customerName:"Sandy",
        date :"20-Aug-21",
        startTime:"20-Aug-21 19:07",
        endTime:"20-Aug-21 20:07",
        roomId:2000
        },
        {  customerName:"Rajesh",
            date :"21-Aug-21",
            startTime:"21-Aug-21 19:07",
            endTime:"21-Aug-21 20:07",
            roomId:2001
        },
        {  customerName:"Suman",
            date :"21-Aug-21",
            startTime:"22-Aug-21 19:07",
            endTime:"22-Aug-21 20:07",
            roomId:2002
        }
           
    ];
    for(i=0;i<bookingRoom.length;i++)
{
    if(bookingRoom[i].date == bookingRoom[i+1].date) 
    {
        res.json(bookingRoom[i])
    }
    else if(bookingRoom[i+1].date == bookingRoom[i+2].date)
    {
        res.json({message:"Already booked"})
    }
}
    
})


//List all Rooms

app.get("/listroom",function roomList(req,res)
{
const bookedData=[
{
 roomName:"Gold",
 bookedStatus:"Available",
 customerName:"Sandy",
 date :"20-Aug-21",
 startTime:"20-Aug-21 19:07",
 endTime:"20-Aug-21 20:07"
},
{
roomName:"Silver",
bookedStatus:"Not Available",
customerName:"Rajesh",
date :"21-Aug-21",
startTime:"21-Aug-21 19:07",
endTime:"21-Aug-21 20:07"        
},
{ 
roomName:"Platinum",
bookedStatus:"Not Available",
customerName:"Suman",
date :"22-Aug-21",
startTime:"22-Aug-21 19:07",
endTime:"22-Aug-21 20:07",
}
];
res.json({bookedData})
})




//List all customers
app.get("/listcustomer",function customerList(req,res)
{
const customerData=[
{
 customerName:"Sandy",
 roomName:"Gold",
 date :"20-Aug-21",
 startTime:"20-Aug-21 19:07",
 endTime:"20-Aug-21 20:07"
},
{
customerName:"Rajesh",
roomName:"Silver",
date :"20-Aug-21",
startTime:"20-Aug-21 19:07",
endTime:"21-Aug-21 20:07"        
},
{ 
customerName:"Suman",
roomName:"Platinum",
date :"22-Aug-21",
startTime:"22-Aug-21 19:07",
endTime:"22-Aug-21 20:07",
}
];
for(i=0;i<customerData.length;i++)
{
    if(customerData[i].startTime==customerData[i+1].startTime ||
        customerData[i].date== customerData[i+1].date)
    {
        res.json({message:"Already booked"})
    }
    else{
        res.json({customerData})
    }
}

})

app.listen(port,()=>
{
    console.log("server listening to port")
})