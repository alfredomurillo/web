$(document).ready(function(){

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS  ============================================

    $('.category_item').click(function(){
        var catProducto = $(this).attr('category');
        console.log(catProducto);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTANDO PRODUCTOS =========================
        $('.producto-item').css('transform', 'scale(0)');
        function hideProducto(){
            $('.producto-item').hide();
        } setTimeout(hideProducto,400);

        // MOSTRANDO PRODUCTOS =========================
        function showProducto(){
            $('.producto-item[category="'+catProducto+'"]').show();
            $('.producto-item[category="'+catProducto+'"]').css('transform', 'scale(1)');
        } setTimeout(showProducto,400);
    });

    // MOSTRANDO TODOS LOS PRODUCTOS =======================

    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.producto-item').show();
            $('.producto-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
    });
});