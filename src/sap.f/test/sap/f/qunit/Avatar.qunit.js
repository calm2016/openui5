(function () {
	"use strict";

	var sControlId = "AvatarId",
		sImagePath = "../images/Woman_avatar_01.png",
		sIconPath ="sap-icon://lab",
		sPreAvatarSize = "Avatar's size is ",
		sPreAvatarShape = "Avatar's shape is ",
		sPreAvatarType = "Avatar's type is ",
		sDefaultIconRendered = "Avatar is a default icon",
		sPreAvatarFitType = "Avatar's image fit type is ",
		oCore = sap.ui.getCore();

	function createAvatar(oProps, sId) {
		var oAvatarProps = {};
		sId = sId || sControlId;

		oProps && jQuery.extend(oAvatarProps, oProps);

		return new sap.f.Avatar(sId, oAvatarProps);
	}

	function setupFunction() {
		this.oAvatar = createAvatar();
		this.oAvatar.placeAt("qunit-fixture");
		oCore.applyChanges();
	}

	function teardownFunction() {
		this.oAvatar.destroy();
	}

	/* tests */
	QUnit.module("Basic rendering", {
		beforeEach: function () {
			this.oAvatar = createAvatar({press: function () {}});
			this.oAvatar.placeAt("qunit-fixture");
			oCore.applyChanges();
		},
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with press event only", function (assert) {
		var $oAvatar = this.oAvatar.$();

		ok(jQuery.sap.domById(sControlId), "Avatar is rendered in the DOM");
		ok($oAvatar.hasClass("sapFAvatar"), "Avatar is rendered with the Avatar class.");
		ok($oAvatar.hasClass("sapFAvatarS"), sPreAvatarSize + "S");
		ok($oAvatar.hasClass("sapFAvatarCircle"), sPreAvatarShape +  "Circle");
		ok($oAvatar.hasClass("sapFAvatarIcon"), sPreAvatarType + "Icon");
		ok($oAvatar.hasClass("sapMPointer"), "The cursor becomes pointer when hovering over the avatar");
		ok(($oAvatar !== undefined) && ($oAvatar != null), "Avatar should not be null");
	});

	QUnit.module("Rendering different sizes", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with displaySize set to 'XS'", function (assert) {
		this.oAvatar.setDisplaySize("XS");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarXS"), sPreAvatarSize + "XS");
	});

	QUnit.test("Avatar with displaySize set to 'S'", function (assert) {
		this.oAvatar.setDisplaySize("S");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarS"), sPreAvatarSize + "S");
	});

	QUnit.test("Avatar with displaySize set to 'M'", function (assert) {
		this.oAvatar.setDisplaySize("M");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarM"), sPreAvatarSize + "M");
	});

	QUnit.test("Avatar with displaySize set to 'L'", function (assert) {
		this.oAvatar.setDisplaySize("L");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarL"), sPreAvatarSize + "L");
	});

	QUnit.test("Avatar with displaySize set to 'XL'", function (assert) {
		this.oAvatar.setDisplaySize("XL");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarXL"), sPreAvatarSize + "XL");
	});

	QUnit.test("Avatar with displaySize set to 'Custom'", function (assert) {
		this.oAvatar.setDisplaySize("Custom");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarCustom"), sPreAvatarSize + "Custom");
	});

	QUnit.module("Rendering different shapes", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with displayShape set to 'Circle'", function (assert) {
		this.oAvatar.setDisplayShape("Circle");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarCircle"), sPreAvatarShape + "Circle");
	});

	QUnit.test("Avatar with displayShape set to 'Square'", function (assert) {
		this.oAvatar.setDisplayShape("Square");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarSquare"), sPreAvatarShape + "Square");
	});

	QUnit.module("Rendering different types", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with src leading to an icon", function (assert) {
		this.oAvatar.setSrc(sIconPath);
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarIcon"), sPreAvatarType + "Icon");
	});

	QUnit.test("Avatar with src leading to an image", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarImage"), sPreAvatarType + "Image");
	});

	QUnit.test("Avatar with initials in valid format", function (assert) {
		this.oAvatar.setInitials("SR");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarInitials"), sPreAvatarType + "Initials");
	});

	QUnit.test("Avatar with initials consisting of three letters", function (assert) {
		this.oAvatar.setInitials("SRL");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.test("Avatar with initials consisting of no letters", function (assert) {
		this.oAvatar.setInitials("");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.test("Avatar with initials consisting of non-latin letters", function (assert) {
		this.oAvatar.setInitials("ЯЪ");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarIcon"), sDefaultIconRendered);
	});

	QUnit.module("Rendering different fit types", {
		beforeEach: setupFunction,
		afterEach: teardownFunction
	});

	QUnit.test("Avatar with imageFitType set to 'Cover'", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		this.oAvatar.setImageFitType("Cover");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarImageCover"), sPreAvatarFitType + "Cover");
	});

	QUnit.test("Avatar with imageFitType set to 'Contain'", function (assert) {
		this.oAvatar.setSrc(sImagePath);
		this.oAvatar.setImageFitType("Contain");
		oCore.applyChanges();

		var $oAvatar = this.oAvatar.$();
		ok($oAvatar.hasClass("sapFAvatarImageContain"), sPreAvatarFitType + "Contain");
	});
})();