$(document).ready(function()
{
	var username = sessionStorage.getItem("mail");
	var id=sessionStorage.getItem("id");
	var password = sessionStorage.getItem("pass");

	if(username==null )
		{
			location.replace("/log/index.html")
		}
	else
	
	$("#loadlogout").click(function()
	{
		loadlogout();
	});
	
	$("#loadSellposting").click(function(){
		loadData();
	});

	$("#getUserDetails").click(function(){
		postData();
	});
	$("#ShowDeliveryDetails").click(function(){
		deleteData();
	});
	$("#DeliveryHistory").click(function(){
		deleteData();
	});

	//SEllpostings
$.ajax({

			url:"https://localhost:44327/api/SellPostings",
			method:"get",
			
			complete:function(xmlHttp,status){
				if(xmlHttp.status==200)
				{
					$(document).ready(function(){
                    $("#myInput").on("keyup", function() {
                     var value = $(this).val().toLowerCase();
                    $("#myTable tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                  });
                 });
					var data=xmlHttp.responseJSON;
					var str='';
					for (var i = 0; i < data.length; i++)
					{
						
						// var bookId=data[i].bookId;
						// var a='<a href='+data[i].bookId+' id="loadBuy" class="btn btn-primary">Buy</a>'
						str+="<tr><td>"data[i].SellId+"</td><td >"+data[i].BuyerId+"</td><td>"+data[i].SellerId+"</td><td>"+data[i].BookId+"</td><td>"+data[i].Status+"</td></tr>";
					};

					$("#listBook tbody").html(str);

				}else
				{
					$("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
				}
				
			}
		});

}