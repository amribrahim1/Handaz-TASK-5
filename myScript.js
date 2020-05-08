
// تسجيل البيانات وربطها بداتا بيس جوجل 	
// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAqpot2vodBMGEuW9VWCbqu-DFeKsLOyLo",
    authDomain: "test-a2f63.firebaseapp.com",
    databaseURL: "https://test-a2f63.firebaseio.com",
    projectId: "test-a2f63",
    storageBucket: "test-a2f63.appspot.com",
    messagingSenderId: "153323254705",
    appId: "1:153323254705:web:32f4522a0d2f80577a4390"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('طلبات العملاء');

$('#msform').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        "01 الكمية بالمتر المكعب": $('.quantity').val(),
        "02 المحتوى الأسمنتى": $('.mohtawa').val(),
        "03 الإجهاد المطلوب بعد 28 يوم": $('.ejhad').val(),
        "04 أسمنت عادي ولا مقاوم": $('.cement').val(),
		"05 طول ذراع المضخة بالمتر": $('.tall').val(),
		"06 مكان المشروع": $('.place').val(),
		"06 عنوان المشروع": $('.address').val(),
		"07 مرحلة المشروع": $('.stage').val(),
		"08 عايز تنفذ الطلبية امتى": $('.date').val(),
		"09 طريقة الدفع": $('.payment').val(),
		"10 عايز فاتورة ضريبية": $('.taxbill').val(),
		"11 تفاصيل أخرى": $('.details').val(),
		"12 اسم الشركة": $('.company').val(),
		"13 الاسم": $('.fname').val(),
		"14 اسم العائلة": $('.lname').val(),
		"15 رقم التليفون": $('.phone').val(),
		"16 الإيميل": $('.email').val(),
		"17 تذكرني على هذا الجهاز": $('.rememberme').val(),
		"18 تذكر المشروع": $('.rememberproject').val(),
    });
 // رقمت البيانات دي عشان تظهر بترتيبهم؛ لأنهم كانوا بيظهروا بالترتيب الأبجدي في فاير بيس !
    $('.success-message').show();
 
    $('#msform')[0].reset();
});

// شريط التقدم
$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});
// نهاية شريط التقدم

// مربع (أهلا بيك... احنا هنا لمساعدتك) :
function myFunction() {
  var x = document.getElementById("myHelp");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
//  نهاية مربع (أهلا بيك... احنا هنا لمساعدتك) :

// اظهر البيانات اللي دخلتها 
class FormContent{

    constructor(formElement, inputSelectors, submitButton, outputSection){

        this.disabledElements = ["button", "reset", "submit"];

        var inputElements = formElement.querySelectorAll(inputSelectors);

        this.getInputElements = function(){ return inputElements; };

        this.getSubmitButton = function(){ return submitButton; };

        this.getOutputSection = function(){ return outputSection; };


        this.emptyValueMessage = "غير محدد";


		this.errorMessage = "<h5 style='color:#FF0000;'>يا ريت تملأ كل البيانات المطلوبة عشان نقدر ننفذ لك طلبك</h5><br><p style='color:#FF0000;'>البيانات عليها علامة * لازم تكتبها</p>";

        var thisInstance = this;


        if(submitButton && outputSection){
            submitButton.onclick = function(){
                thisInstance.onSubmitButtonClick();
            };
        }
    }

    onSubmitButtonClick(){
        var outputMessage = (this.areRequiredInputsFilled()) ? this.getFormattedFormContent() : this.errorMessage;

        this.printToOutput(outputMessage);
    }

    areRequiredInputsFilled(){
        for(var node of this.getInputElements()){
            if(node.required && !node.value){
                return false;
            }
        }

        return true;
    }
    printToOutput(content){
        this.getOutputSection().innerHTML = content;
    }

    getFormattedFormContent(){
        var formContent = "";

        var formData = this.getFormData();

        for(var input in formData){
            formContent += "<b>" + input + "</b>: " + formData[input] + "<br />";
        }

        return formContent;
    }

    getFormData(){
        var formData = {};

        var noNameCounter = 0;

        var formInputs = this.getFormInputs();

        for(var input of formInputs){
            let inputName = input.name || "no_name_element_" + noNameCounter;
            let inputValue = input.data || input.value || this.emptyValueMessage;

            if(!input.name){
                noNameCounter++;
            }

            formData[inputName] = inputValue;
        }

        return formData;
    }

    getFormInputs(){
        var formInputs = [];

        for(var input of this.getInputElements()){
            if(!this.disabledElements.includes(input.tagName.toLowerCase()) && !this.disabledElements.includes(input.type) && !this.disabledElements.includes(input)){
                if(input.type === "radio"){
                    if(input.checked){
                        formInputs.push(input);
                    }
                }else if(input.type === "checkbox"){
                    input.value = (input.checked) ? true : false;
                    formInputs.push(input);
                }else if(input.multiple){
                    formInputs.push(this.getMultipleInput(input));
                }else if(input.value || input.innerHTML){
                    formInputs.push(input);
                }else{
                    formInputs.push(input);
                }
            }
        }

        return formInputs;
    }
    getMultipleInput(multipleInput){
        var inputInstance = document.createElement("input");
        inputInstance.name = multipleInput.name;

        var values = [];

        if(multipleInput.type !== "file"){
            for(var option of multipleInput){
                if(option.selected){
                    values.push(option.value);
                }
            }
        }else{
            for(var file of multipleInput.files){
                values.push(file.name);
            }
        }

        inputInstance.data = values.toString();

        return inputInstance;
    }
}

var forms = document.getElementsByTagName("form");

for(var form of forms){
    let inputSelectors = "input, select, textarea";
    let submitButton = form.querySelector("#submit-button");
    let outputSection = form.querySelector("#output");

    new FormContent(form, inputSelectors, submitButton, outputSection);
}
//نهاية جزء اظهر البيانات اللي دخلتها 

// تغيير نجمة البيانات المطلوبة للون الأحمر في كل الفورم
$('.fieldlabels').each(function(){
    var word = $(this).text().replace("*","<span>*</span>");
    $(this).html(word);
});

// A way to make default select option as blank, but after I added "required" to it, it all changed to red box!
document.getElementById("select").selectedIndex = -1;
