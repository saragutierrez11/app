// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/index/',
    	url: 'indexx.html',
    	name: 'index',
  		},
		{
		path: '/home/',
    	url: 'home.html',
    	name: 'home',
  		},
		{
		path: '/recipe/',
    	url: 'recipe.html',
    	name: 'recipe',
  		},
		{
		path: '/card/',
    	url: 'card.html',
    	name: 'card',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

