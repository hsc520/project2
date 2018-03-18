$(function(){
$(".mini>#my_ul>li").click(function(){
	// console.log(1111);
	$(".mini>#my_ul>li").eq($(this).index()).addClass('on').siblings().removeClass('on');

})
})