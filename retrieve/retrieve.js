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
database = firebase.database();

var database = firebase.database();
    database.ref().child('طلبات العملاء/').once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var childKey = data.key;
				var val = data.val();
                content +='<tr>';
                content += '<td>' + val.الكمية_بالمتر_المكعب + '</td>';
				content += '<td>' + val.المحتوى_الأسمنتي + '</td>';
				content += '<td>' + val.الإجهاد_المطلوب_بعد_28_يوم + '</td>';
				content += '<td>' + val.أسمنت_عادي_ولا_مقاوم + '</td>';
				content += '<td>' + val.طول_ذراع_المضخة_بالمتر + '</td>';
				content += '<td>' + val.مكان_المشروع + '</td>';
				content += '<td>' + val.عنوان_المشروع + '</td>';
				content += '<td>' + val.مرحلة_المشروع + '</td>';
				content += '<td>' + val.عايز_تنفذ_الطبية_امتى + '</td>';
				content += '<td>' + val.طريقة_الدفع + '</td>';
				content += '<td>' + val.عايز_فاتورة_ضريبية + '</td>';
				content += '<td>' + val.تفاصيل_أخرى + '</td>';
				content += '<td>' + val.اسم_الشركة + '</td>';
				content += '<td>' + val.الاسم + '</td>';
				content += '<td>' + val.اسم_العائلة + '</td>';
				content += '<td>' + val.رقم_التليفون + '</td>';
				content += '<td>' + val.الإيميل + '</td>';
				content += '<td>' + val.تذكرني_على_هذا_الجهاز + '</td>';
				content += '<td>' + val.تذكر_المشروع + '</td>';
				content += '<td>' + '<button onClick="delete_user(\''+childKey+'\')">حذف</button></td></tr>';
				content += '</tr>';
            });
            $('#ex-table').append(content);
        }
    });
	
            function delete_user(childKey){
				var result = confirm("هل أنت متأكد من الحذف ؟");
				if (result) {

                firebase.database().ref().child('طلبات العملاء/'+ childKey +'/').remove();
                alert('تم حذف الطلب بنجاح !');
                location.reload();	// To reload (refresh) the page after deleting.
				}
			}
