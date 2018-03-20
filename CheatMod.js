(function () {
	var ready = function () {
		console.log("CheatMod is ready for action");
	};

	var error = function () {
	};

	GDT.loadJs(['source/source.js'], ready, error);
})();