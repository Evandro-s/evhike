FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});

FlowRouter.route("/contato", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "contato"});
    }
});

 FlowRouter.route("/cadastre-se", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "cadastre-se"});
    }
});