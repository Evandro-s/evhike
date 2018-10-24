posts = new Mongo.Collection("posts");

Meteor.methods({
    "inserirPost": function(textoDoFormulario) {
        posts.insert({
            texto: textoDoFormulario,
            idDoAutor: Meteor.userId()
        });
    }
});