Template.feed.events({
    "submit form": function(evento, template) {
        evento.preventDefault();
        alert("FORMULARIO ENVIADO");
        var textoDoFormulario = evento.target.texto.value
         console.log(textoDoFormulario);
          posts.insert({
          		texto: textoDoFormulario
        });

        evento.target.texto.value = "";
    }
});

Template.feed.helpers({
	posts: function() {
		var postsDaCollection = posts.find().fetch();
		return postsDaCollection;
    }
});