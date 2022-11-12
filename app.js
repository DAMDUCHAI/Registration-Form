// Problem 2
const Country=["Vietnam","Singapore","Malaysia","Indonesia","Philippine","Lao","Cambodia"]
const Position=["Operator","Manager","Developer","Designer","Tester"]
Country.map((item,key)=>{
   return $('#countries').append(`<option value=${item}>${item}</option>`)
})
Position.map((item,key)=>{
    return $('#positions').append(`<option value=${item}>${item}</option>`)
 })

 // Problem 3



$('#btn-reset').click(()=>{
$('#fname').val("")
$('#lname').val("")
$('#email').val("")
$('#phone').val("")
$('#countries').val("select-country")
$('#city').val("")
$('#address').val("")
$('#positions').val("select-position")
$('#additional_infor').val("")

})


const resetNoti=()=>{
    $( "#fname-error" ).text('');
    $( "#lname-error" ).text('');
    $( "#email-error" ).text('');
    $( "#countries-error" ).text('');
    $( "#positions-error" ).text('');
    $( "#phone-error" ).text('');


}
$('#phone').keyup(()=>{
    const phone=$('#phone').val();
    if(phone.length ==3 ){
        const firstLine=phone+'-'
        $('#phone').val(firstLine)
    }
    if(phone.length ==7 ){
        const secondLine=phone+'-'
        $('#phone').val(secondLine)
    }
   
})




$('#brn-send').click(()=>{
    resetNoti()
    if($('#fname').val()==""){
        $( "#fname-error" ).text('The First Name should not be blank.');
    }
    if($('#lname').val()==""){
        $( "#lname-error" ).text('The Last Name should not be blank.');
    }
    if(!$('#email').val().includes('@')){
        $( "#email-error" ).text('Please input your correct email address.');
    }
    if($('#email').val()==""){
        $( "#email-error" ).text('The Email should not be blank.');
        
   
    }
    if($('#phone').val().length != 12 || !Number.isInteger(parseInt($('#phone').val(), 10))){
        $( "#phone-error" ).text('Please input your correct phone number.');
        
   
    }
    if($('#countries').val()==null){
        $( "#countries-error" ).text('Please select your county.');
        
   
    }
    if($('#positions').val()==null){
        $( "#positions-error" ).text('Please select your positions.');
        
   
    }


    })


    