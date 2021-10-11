$('#gs25').hide();
$('#gift_guide').hide();

$('#one').on('click', function() {
    $('#one').hide();
    $('#two').hide();
    $('#gs25').show();
    $('#gift_guide').show();
})

$('#gs25').on('click', function() {
    $('#one').show();
    $('#two').show();
    $('#gs25').hide();
})