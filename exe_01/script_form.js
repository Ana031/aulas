$(function(){
    $(':input').css('backgroundColor', 'yellow');
    $(':text').css('backgroundColor', 'gray');
    $(':password').css('backgroundColor', 'green');
    $(':radio').parent().css('backgroundColor', '#ff00ff');
    $(':submit').css('backgroundColor', '#bbb');
    AlterarTexto();
});

AlterarTexto = () => {
    $(':text').val($('#combobox option:selected').text());
}