'use  strict';

app.factory('User', function(DS) {

	var User = DS.defineResource({
	    name: 'users'
	});
	
	return User;
	
  /*
    create a User jsdata resource 
  */

}).run(function(User) {});

