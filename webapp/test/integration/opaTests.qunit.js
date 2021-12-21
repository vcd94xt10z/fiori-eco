/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["vcd94xt10z/fiorieco/fiorieco/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
