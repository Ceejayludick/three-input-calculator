
insert(num) 
{
    documentdocument.form1.textview.value = document.form1.textview.value + number;
}

equal()  
{
    let exp = document.form1.textview.value;
    if (exp) 
    
    {
        document.form1.textview.value = eval(exp)
    }
}

backspace()  
{  
let exp = document.form1.textview.value;  
document.form1.textview.value = exp.substring(0, exp.length - 1);   
}  



