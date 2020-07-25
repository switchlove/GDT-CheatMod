(function () {
	var ready = function () {
		console.log("CheatMod is ready for action!");
	};

	var error = function () {
		console.log("CheatMod is not ready for action!");
	};

	GDT.loadJs(['source/source.js'], ready, error);
})();