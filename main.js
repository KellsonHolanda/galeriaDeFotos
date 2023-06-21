$(document).ready(function () {

    // $('#carousel').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 3000,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    $('#principal').click(function () {
        $('form').slideToggle();

    })
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
})
})


$('form').on('submit', function (e) {
    e.preventDefault();
    const incrementarGaleria = $('#imagemNova').val();
    const adicionar = $('<li style="display:none"></li>');
    $(`<img class="imagem" src="${incrementarGaleria}" alt="nova imagem" >`).appendTo(adicionar);
    $(`
            <div class="imagemLink">
                <a href="${incrementarGaleria}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>`).appendTo(adicionar);
    $(adicionar).appendTo('ul');
    $(adicionar).fadeIn(2000);
    $('#imagemNova').val('');

})
