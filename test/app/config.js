(function () {

	require.config({
		paths: {
			// path configuration assumes .js suffix

			// Libraries
			'jQuery': '../js/jquery',
			'Underscore': '../js/underscore'
		},
		shim: {
			'jQuery': {
				exports: '$'
			},
			'Underscore': {
				exports: '_'
			}
		}
	});

	require(['setup']);
}());
