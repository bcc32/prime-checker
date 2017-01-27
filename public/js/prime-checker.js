$(function() {
    $('#n').keyup(function() {
        var n = $(this).val();
        if (n !== '') {
            $.getJSON('/is_prime/' + n)
                .done(function(data) {
                    $('#result').text(data ? 'Prime' : 'Composite');
                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    var data = JSON.parse(jqXHR.responseText);
                    $('#result').text('Error: ' + data.error);
                });
        } else {
            $('#result').text('');
        }
    });
});
