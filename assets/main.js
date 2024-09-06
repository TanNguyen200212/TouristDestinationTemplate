
function createProduct1(){
    if(localStorage.getItem('Tour1')===null){
        var productArray=[
            {productID:0001, name:'CHỢ NỔI CÁI RĂNG',img:'assets/img/dulich/cairang.jpg',price: 2380000 },
            {productID:0002, name:'ĐÀ NẴNG',img:'assets/img/dulich/danang.jpg',price: 2380000 },
            {productID:0003, name:'HẠ LONG',img:'assets/img/dulich/hạ long.jpg',price: 2380000 },
            {productID:0004, name:'HỒ GƯƠM HÀ NỘI',img:'assets/img/dulich/hồ gươm hà nội.jpg',price: 2380000 },
            {productID:0005, name:'HỘI AN',img:'assets/img/dulich/hội an.jpg',price: 2380000 },
            {productID:0006, name:'HUẾ',img:'assets/img/dulich/huế.jpg',price: 2380000 },
            {productID:0007, name:'NHA TRANG',img:'assets/img/dulich/nha trang.jpg',price: 2380000 },
            {productID:1234 , name:'NÚI BÀ ĐEN',img:'assets/img/dulich/núi bà đen tây ninh.jpg',price: 2380000 },
            {productID:1000, name:'PHÚ QUỐC',img:'assets/img/dulich/Phú quốc.jpg',price: 2380000 },
            {productID:0010, name:'QUY NHƠN',img:'assets/img/dulich/quy nhơn.jpg',price: 2380000 },
            {productID:0006, name:'SAPA',img:'assets/img/dulich/sapa.jpg',price: 2380000 },
            {productID:0007, name:'ĐÀ LẠT',img:'assets/img/dulich/tour đà lạt.jpg',price: 2380000 },
            {productID:1234 , name:'VŨNG TÀU',img:'assets/img/dulich/vũng tàu.jpg',price: 2380000 },
            {productID:1000, name:'PHAN THIẾT',img:'assets/img/dulich/tour Phan Thiết.jpg',price: 2380000 },
        ]
        localStorage.setItem('Tour1',JSON.stringify(productArray));
    }
   
  }
var pageNum1=0;
function taoproduct1(){
    var p= JSON.parse(localStorage.getItem('Tour1'));
    var s="";
    pageNum1=Math.ceil(p.length/6);

    for (var i=0;i<6&&i<p.length;i++){
        var a='<li class="product"><img src="'+p[i].img+'"><h5>'+p[i].name+'<h5></li>';    
        s+=a;
    }
    var page="";
    for (var i=1;i<=pageNum1;i++) page+='<a href="#main"><li id="'+i+'" onclick="changePage1(this)">'+i+'</li></a>';
    page='<ul>'+page+'</ul>';
    document.getElementById("page").innerHTML=page;
    s='<ul>'+s+'</ul>';
    s= ' <h1> TOP DESTINATIONS IN VIETNAM </h1>'+s;

    document.getElementById("main").innerHTML=s;
}  
function changePage1(obj){
    var c=obj;
    var s="";
    var p= JSON.parse(localStorage.getItem('Tour1'));
    for (var i=(c.id-1)*6;i<c.id*6&&i<p.length;i++){
        var a='<li class="product"><img src="'+p[i].img+'"><h5>'+p[i].name+'<h5></li>';    
        s+=a;
    }
    s='<ul>'+s+'</ul>';
    s= ' <h1> Top destinations in Vietnam</h1>'+s;
    document.getElementById("main").innerHTML=s;   
}   

function createProduct2(){
    if(localStorage.getItem('Tour2')===null){
        var productArray=[
            {productID:0001, name:'AUSTRALIA',img:'assets/img/dulich/Australia.jpg',price: 2380000 },
            {productID:0002, name:'HÀN QUỐC',img:'assets/img/dulich/hanquoc.jpg',price: 2380000 },
            {productID:0003, name:'NGA',img:'assets/img/dulich/nga1.jpg',price: 2380000 },
            {productID:0004, name:'NHẬT BẢN',img:'assets/img/dulich/nhat-ban.jpg',price: 2380000 },
            {productID:0005, name:'SINGAPORE',img:'assets/img/dulich/singapore.png',price: 2380000 },
            {productID:0006, name:'THỤY SĨ',img:'assets/img/dulich/thuysi.jpg',price: 2380000 },
            {productID:0007, name:'TORONTO',img:'assets/img/dulich/toronto.jpg',price: 2380000 },
            {productID:1234 , name:'TRUNG QUỐC',img:'assets/img/dulich/trungquoc.jpg',price: 2380000 },
            {productID:1000, name:'VANCOUVER',img:'assets/img/dulich/Vancover.jpg',price: 2380000 },
            {productID:0010, name:'Ý',img:'assets/img/dulich/Y.jpg',price: 2380000 },
            {productID:0006, name:'INDONESIA',img:'assets/img/dulich/INDO.jpg',price: 2380000 },
            {productID:0007, name:'DUBAI',img:'assets/img/dulich/DUBAI.jpg',price: 2380000 },
            {productID:1234 , name:'HAWAII',img:'assets/img/dulich/HAWAI.jpg',price: 2380000 },
            {productID:1000, name:'AMAZONE',img:'assets/img/dulich/AMAZON.png',price: 2380000 },
        ]
        localStorage.setItem('Tour2',JSON.stringify(productArray));
    }
   
  }
var pageNum2=0;
function taoproduct2(){
    var p= JSON.parse(localStorage.getItem('Tour2'));
    var s="";
    pageNum2=Math.ceil(p.length/6);

    for (var i=0;i<6&&i<p.length;i++){
        var a='<li class="product"><img src="'+p[i].img+'"><h5>'+p[i].name+'<h5></li>';    
        s+=a;
    }
    var page="";
    for (var i=1;i<=pageNum2;i++) page+='<a href="#main1"><li id="'+i+'" onclick="changePage2(this)">'+i+'</li></a>';
    page='<ul>'+page+'</ul>';
    document.getElementById("page1").innerHTML=page;
    s='<ul>'+s+'</ul>';
    s= ' <h1> INTERNATIONAL TRAVEL</h1>'+s;
    document.getElementById("main1").innerHTML=s;
}  
function changePage2(obj){
    var c=obj;
    var s="";
    var p= JSON.parse(localStorage.getItem('Tour2'));
    for (var i=(c.id-1)*6;i<c.id*6&&i<p.length;i++){
        var a='<li class="product"><img src="'+p[i].img+'"><h5>'+p[i].name+'<h5></li>';    
        s+=a;
    }
    s='<ul>'+s+'</ul>';
    s= ' <h1> INTERNATIONAL TRAVEL</h1>'+s;
    document.getElementById("main1").innerHTML=s;   
}   

window.onload = function()   {			
              
                        createProduct1();
                        taoproduct1();
                        createProduct2();
                        taoproduct2();
}