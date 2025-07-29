function testCssWithJQ(){ // javaScript
  //$('.li3').css("color", "green"); // Jquery calling
  
  $('.li1, .li2, .li3').css({
    "color": "green",
    "font-size": "18px",
    "font-style": "italic",
  });

  $('.li3').html("<b>This is html change by jQ using:<br>Css in Jquery");  
}

function howLoopWillWorks(){

  // for(let i=1;i<=10;i++){
  //   console.log(i)
  // }

  let a = $('#orderListTest li');
  console.log(a);
  // $([]).forEach(element => {
    
  // });
  $('#orderListTest li').each(function(index, domElement){
    // console.log(index);
    domElement.className = "li3";
    console.log(domElement.className);
  }); 
  //let dataArray = [{"name": "Akash", "dob": "XXX"}];
  //generate csv file and download
  //generate csv file from data and download
  //datatable
}

function addNumber(){
  var a = $('#firstN').val(); // getting value by id of the input
  var b = $('#secondN').val();
  if(!a){
    return;
  }
  if(!b){
    return;
  }
  // a = parseInt(a); // convert string to integer val
  a = parseFloat(a); // to decimal/floating point
  b = parseFloat(b);
  var c = a+b;
  console.log(a,'+',b,'=',c,typeof(a), typeof(b));
   $('#resultN').val(c); // set value by id
   $('#firstN').val(''); // set value by id
   $('#secondN').val(''); // set value by id
}