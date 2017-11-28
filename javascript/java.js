$(document).ready(function() {
    $('#btn-add').on('click', function() {
        var valor = $('#new-item').val();
        $('#lista').append('<li>' + valor + '<button id="btn-borrar">x</button></li>')
        $('#new-item').val(" ");
        if ($('#urg').is(":checked")) {
            $('li').last().addClass('urgente');


        };
        $('li').on('click', function() {
            $(this).toggleClass('tacha');

        })
    });

    function borrar() {
        $(this).parent().remove();
    };
    $(document).on('click', '#btn-borrar', borrar);
})