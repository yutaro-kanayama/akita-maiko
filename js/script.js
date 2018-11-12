$(function(){
	// スマホドロワーメニュー
	$('.drawer').drawer();
	// リンクをクリックしたらメニューを閉じる
	$('.drawer-menu-item').on('click', function(){
		$('.drawer').drawer('close');
	});

	// スムーススクロール
	var scroll = new SmoothScroll('a[href*="#"]');

	// フローティングボタン
	$(window).scroll(function(){
		if (100 < $(this).scrollTop()) {
			$('#fixed-floating').fadeIn();
		} else {
			$('#fixed-floating').fadeOut();
		}
	});
});
