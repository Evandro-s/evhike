Template.feed.helpers({
	posts: function() {
		var postsDaCollection = posts.find().fetch();
		return postsDaCollection;
    }
});