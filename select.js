//첫번째 선물 상자를 누르면 패스워드 입력 칸이 나옴.
$('#one').on('click', function() {
    $('.sub').removeClass('cafe');
    $('form').show();
    $('.sub').on('click', getGift1);
})

$('#two').on('click', function() {
    $('.sub').addClass('cafe');
    $('form').show();
    $('.sub').on('click', getGift2);
})

//패스워드를 입력하면 기프티콘 이미지 창이 뜸.
function getGift1() {
    let pwd = $('#pwd').val();
    if(pwd === '1995') 
        window.open('images/gs25.jpg');
}

function getGift2() {
    let pwd = $('#pwd').val();
    if(pwd === '1024')
        window.open('images/cafe.jpg');
}