Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
if (!Ti.App.Properties.hasProperty('seeded')) {
	var fruits = ['apple', 'banana', 'cherry', 'blueberry', 'orange', 'pear'];
	var colors = ['red', 'yellow', 'blue', 'orange', 'green', 'white'];
	for(var i=1,j=fruits.length;i<j;i++) {
		Alloy.createModel('fruits', { name: fruits[i]}).save();
		Alloy.createModel('colors', { color: colors[i]}).save();
	}
	Ti.App.Properties.setString('seeded', 'yes');
}
Alloy.Collections.fruits.fetch();
Alloy.Collections.colors.fetch();

function doTransform(model) {
	var transform = model.toJSON();
	transform.color = transform.color.toUpperCase();
	return transform;
}

$.index.open();