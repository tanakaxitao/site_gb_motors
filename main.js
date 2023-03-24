$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "por favor, isira o seu nome",
      email: " por favor, isira o seu email",
      telefone: "por favor, insira o seu telefone",
      mensagem: "por favor, insira uma mensagem!",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`existem ${camposIncorretos} campos incorretos!`);
      }
    },
  });
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();

    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
