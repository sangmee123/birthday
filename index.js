$('#gs25').hide();

$('#one').on('click', function() {
    $('#one').hide();
    $('#two').hide();
    $('#gs25').show();
})

$('#gs25').on('click', function() {
    $('#one').show();
    $('#two').show();
    $('#gs25').hide();
})