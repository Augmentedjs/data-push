require.config({
	'baseUrl': 'scripts/',

    'paths': {
		'jquery': 'lib/jquery-2.1.4.min',
		'underscore': 'lib/lodash.min',
		'backbone': 'lib/backbone-min',

        // hosted version
		'augmented': '/augmented/scripts/core/augmented',
        'augmentedPresentation': '/augmented/scripts/presentation/augmentedPresentation'

        // local version
		//'augmented': 'lib/augmented',
        //'augmentedPresentation': 'lib/augmentedPresentation'
	}
});

require(['augmented', 'augmentedPresentation'], function(Augmented, Presentation) {
    "use strict";
    var app = new Augmented.Presentation.Application("Data Push");
    //app.registerStylesheet("styles/main.css");
    app.registerStylesheet("https://fonts.googleapis.com/css?family=Work+Sans:300,400");
    app.registerStylesheet("https://fonts.googleapis.com/css?family=Roboto:100");
    app.start();

    var data = [
        "Hello.",
        "Development can be difficult...",
        "Expecially SPAs.",
        "Really, it is.",
        "So much to consider...",
        "Complex views",
        "Design patterns",
        "integration",
        "performance",
        "all under a deadline.",
        "It doesn't have to be hard.",
        "Let's talk about <em>Augmented.js</em>",
        "Augmented.js is <strong>fast.</strong>",
        "Augmented.js has <strong>patterns.</strong>",
        "Augmented.js is <strong>powerful.</strong>",
        "Give it a try.",
        "<span class=\"notice\">Augmented.js</span>",
        "<em class=\"underline\">Powerful Development</em>",
        "<span class=\"notice\"><a href=\"http://www.augmentedjs.com\">www.augmentedjs.com</a></span>",
        ":)"
    ];

    var LAST_NUMBER = data.length;

    var MainView = Augmented.Presentation.DecoratorView.extend({
        el: "#main",
        name: "push",
        customEvents: {
            "click div#logo": function() {
                window.location = "http://www.augmentedjs.com";
            }
        },

        init: function() {
            this.syncModelChange("data");
            var e = this.boundElement("progress");
            e.style.display = "block";
            e.style.visibility = "hidden";
        },

        number: 0,

        getNext: function() {
            var e = this.boundElement("data"), that = this;
            e.style.opacity = 0;

            setTimeout(function() {
                if (this.number == LAST_NUMBER) {
                    this.number = 0;
                }
                setTimeout(function() {
                    this.model.set("data", data[this.number]);
                    this.number = this.number + 1;
                    e.style.opacity = 1;
                }.bind(this), 500);
            }.bind(this), 1000);
        },

        start: function() {
            this.timer = setInterval(this.getNext.bind(this), 8 * 1000);
            var e = this.boundElement("progress");
            e.style.display = "block";
            e.style.visibility = "visible";
        },

        stop: function() {
            clearInterval(this.timer);
            this.timer = null;
            var e = this.boundElement("progress");
            e.style.display = "block";
            e.style.visibility = "hidden";
        }

    });

    var view = new MainView();
    app.registerMediator(view);
    view.render();
});
