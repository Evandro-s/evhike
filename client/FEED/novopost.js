Template.NovoPost.events({
    "submit form": function(evento, template) {
        evento.preventDefault();
        alert("FORMULARIO ENVIADO");
        var textoDoFormulario = evento.target.texto.value;

        Meteor.call("inserirPost", textoDoFormulario);

        evento.target.texto.value = "";
    }
});