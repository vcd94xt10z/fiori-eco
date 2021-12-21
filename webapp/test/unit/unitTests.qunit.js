/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vcd94xt10zfiorieco./fiori-eco/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
