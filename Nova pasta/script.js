$(function() {
    const tbody = $('.table tbody');

    function obterDados() {
        $.ajax('http://jsonplaceholder.typicode.com/users', {
            type: 'GET',
            beforeSend: function() {
                $('.table').after('<p class="loading">Espera ae que noix ta carregando</p>');

            },

            error: function() {
                $('.table').after('<p class="loading">Deu ruim na kombi</p>');
            },

            success: function(dados) {
                mostrarDados(dados);
            },

            complete: function() {
                $('.loading').remove();
            }
        })

        function mostrarDados(dados) {
            $.each(dados, function(i, el) {
                tbody.append(`<tr>
                              <th scope="row">${el.id}</th>
                              <td>${el.name}</td>
                              <td>${el.username}</td>
                              <td>${el.email}</td>
                              <td>${el.address.city}</td>
                              <td>${el.phone}</td>
                              </tr>`)
            })
        }
    }
    obterDados();
})