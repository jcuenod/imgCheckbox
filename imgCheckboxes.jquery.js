/*
 * imgCheckboxes
 *
 * Version: 0.2
 * License: GPLv2
 * Author:  James Cuénod
 * Last Modified: 2015.06.11
 *
 */
(function($) {

	var imgCheckboxClass = function(element, options, id) {
		var wrapperElement, $_options = {}, grayscaleStyles = {
			"span.imgCheckbox img": {
				"transform": "scale(1)",
				"filter": "none",
				"-webkit-filter": "grayscale(0)"
			},
			"span.imgCheckbox.imgChked img": {
				//"filter": "gray", //TODO - this line probably will not work but is necessary for IE
				"filter": "grayscale(1)",
				"-webkit-filter": "grayscale(1)"
			}
		}, scaleStyles = {
			"span.imgCheckbox img": {
				"transform": "scale(1)",
			},
			"span.imgCheckbox.imgChked img": {
				"transform": "scale(0.8)",
			}
		}, scaleCheckMarkStyles = {
			"span.imgCheckbox::before": {
				"transform": "scale(0)"
			},
			"span.imgCheckbox.imgChked::before": {
				"transform": "scale(1)"
			}
		}, fadeCheckMarkStyles = {
			"span.imgCheckbox::before": {
				"opacity": "0"
			},
			"span.imgCheckbox.imgChked::before": {
				"opacity": "1"
			}
		};

		/* *** STYLESHEET STUFF *** */
		// shove in the custom check mark
		if (options.checkMarkImage != false)
			$.extend(true, $_options,{ "styles": { "span.imgCheckbox::before": { "background-image": "url('" + options.checkMarkImage + "')" }}});
		// give the checkmark dimensions
		var chkDimensions = options.checkMarkSize.split(" ");
		$.extend(true, $_options,{ "styles": { "span.imgCheckbox::before": { 
			"width": chkDimensions[0],
			"height": chkDimensions[chkDimensions.length - 1]
		}}});
		// fixed image sizes
		if (options.fixedImageSize)
		{
			var imgDimensions = options.fixedImageSize.split(" ");
			$.extend(true, $_options,{ "styles": { "span.imgCheckbox img": {
				"width": imgDimensions[0],
				"height": imgDimensions[imgDimensions.length - 1]
			}}});
		}
		// extend with grayscale for the selected images (if set to true)
		if (options.graySelected)
			$.extend(true, $_options.styles, grayscaleStyles);
		//extend with scale styles (if set to true)
		if (options.scaleSelected)
			$.extend(true, $_options.styles, scaleStyles);
		//extend with scale styles (if set to true)
		if (options.scaleCheckMark)
			$.extend(true, $_options.styles, scaleCheckMarkStyles);
		//extend with scale styles (if set to true)
		if (options.fadeCheckMark)
			$.extend(true, $_options.styles, fadeCheckMarkStyles);

		$_options.styles = $.extend(true, {}, defaultStyles, $_options.styles, options.styles)

		//Now that we've built up our styles, inject them
		injectStylesheet($_options.styles, id);


		/* *** DOM STUFF *** */
		element.wrap("<span class='imgCheckbox" + id + "'>");
		wrapperElement = element.parent();
		wrapperElement.click(function() {
			$(this).toggleClass("imgChked");
		});
		return this;
	};

	/* CSS Injection */
	function injectStylesheet(stylesObject, id){
		// if there are no stylesheets, create a blank one
		if (document.styleSheets.length < 1)
		{
			var style = document.createElement("style");
			// WebKit hack
			style.appendChild(document.createTextNode(""));
			// Add the <style> element to the page
			document.head.appendChild(style);
		}
		var stylesheet = document.styleSheets[document.styleSheets.length - 1];

		for (var selector in stylesObject){
    		if (stylesObject.hasOwnProperty(selector)) {
    			compatInsertRule(stylesheet, selector, buildRules(stylesObject[selector]), id);
    		}
		}
	}
	function buildRules(ruleObject)
	{
		var ruleSet = "";
		for (var property in ruleObject){
    		if (ruleObject.hasOwnProperty(property)) {
         		 ruleSet += property + ":" + ruleObject[property] + ";";
    		}
		}
		return ruleSet;
	}
	function compatInsertRule(stylesheet, selector, cssText, id){
		var modifiedSelector = selector.replace(".imgCheckbox", ".imgCheckbox" + id);
		// IE8 uses "addRule", everyone else uses "insertRule"
		if (stylesheet.insertRule) {
			stylesheet.insertRule(modifiedSelector + '{' + cssText + '}', 0);
		} else {
			stylesheet.addRule(modifiedSelector, cssText, 0);
		}
	}


	/* Init */
	$.fn.imgCheckboxes = function(options){
        if ($(this).data("imgCheckboxId"))
        	return $.fn.imgCheckboxes.instances[$(this).data("imgCheckboxId") - 1]
        else
        {
        	var $that = new imgCheckboxClass($(this), $.extend(true, {}, $.fn.imgCheckboxes.defaults, options), $.fn.imgCheckboxes.instances.length)
        	$(this).data("imgCheckboxId", $.fn.imgCheckboxes.instances.push($that));
	        return $that;
        }
	}
	$.fn.imgCheckboxes.instances = [];
	$.fn.imgCheckboxes.defaults = {
		"checkMarkImage": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzQ2LjM4NCkiPjxwYXRoIGZpbGw9IiMxZWM4MWUiIGZpbGwtb3BhY2l0eT0iLjgiIGQ9Ik0zMiAzNDYuNGEzMiAzMiAwIDAgMC0zMiAzMiAzMiAzMiAwIDAgMCAzMiAzMiAzMiAzMiAwIDAgMCAzMi0zMiAzMiAzMiAwIDAgMC0zMi0zMnptMjEuMyAxMC4zbC0yNC41IDQxTDkuNSAzNzVsMTcuNyA5LjYgMjYtMjh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNSAzNzUuMmwxOS4zIDIyLjQgMjQuNS00MS0yNiAyOC4yeiIvPjwvZz48L3N2Zz4=",
		"graySelected": true,
		"scaleSelected": true,
		"fixedImageSize": false,
		"checkMarkSize": "30px",
		"scaleCheckMark": true,
		"fadeCheckMark": false,
	};
	var defaultStyles = {
		"span.imgCheckbox img": {
			"display": "block",
			"margin": "0",
			"padding": "0",
			"transition-duration": "300ms",
		},
		"span.imgCheckbox.imgChked img": {
		},
		"span.imgCheckbox": {
			"user-select": "none",
			"padding": "0",
			"margin": "5px",
			"display": "inline-block",
			"border": "1px solid transparent",
			"transition-duration": "300ms"
		},
		"span.imgCheckbox.imgChked": {
			"border-color": "#ccc"
		},
		"span.imgCheckbox::before": {
			"display": "block",
			"background-size": "100% 100%",
			"content": "''",
			"color": "white",
			"font-weight": "bold",
			"border-radius": "50%",
			"position": "absolute",
			"margin": "0.5%",
			"z-index": "1",
			"text-align": "center",
			"transition-duration": "300ms"
		},
		"span.imgCheckbox.imgChked::before": {
		}
	};

})( jQuery );