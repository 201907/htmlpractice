$(function(){
	$goods = $("#cart_wrapper .shop_rec .sc_middle>ul>li");
	var nowPage = 1;//当前的页数
	var pageGoodsCount = 5;//每页产品的数量
	var length = $goods.length;//所有产品的数量
	var pageCount = Math.floor((length+pageGoodsCount-1)/pageGoodsCount);//一共有多少页
	slide();
	function slide(){
		for(var i=0;i<pageGoodsCount*nowPage-pageGoodsCount;i++){
			$goods.eq(i).hide();
		}
		for(var i=pageGoodsCount*nowPage;i<length;i++){
			$goods.eq(i).hide();
		}
		for(var i=pageGoodsCount*nowPage-pageGoodsCount;i<pageGoodsCount*nowPage;i++){
			$goods.eq(i).show();
		}
	}	
	$("#cart_wrapper .left").click(function(){
		if(nowPage==1){
			nowPage=pageCount;
			slide();
		}else{
			nowPage--;
			slide();
		}
	})
	$("#cart_wrapper .right").click(function(){
		if(nowPage==pageCount){
			nowPage=1;
			slide();
		}else{
			nowPage++;
			slide();
		}
	})
})