//첫번째 선물 상자를 누르면 패스워드 입력 칸이 나옴.
$('#one').on('click', function() {
    $('form').show();
    $('#sub').on('click', getGift);
})

$('#two').on('click', function() {
    $('form').show();
    $('#sub').on('click', getGift);
})

//패스워드를 입력하면 기프티콘 이미지 창이 뜸.
function getGift() {
    let pwd = $('#pwd').val();
    if(pwd === '1995') 
        window.open('images/gs25.jpg');
    else if(pwd === '1024')
        window.open('images/cafe.jpg');
}