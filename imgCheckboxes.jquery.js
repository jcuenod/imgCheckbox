(function($) {
	var wrapperElement;

    $.fn.imgCheckboxes = function() {
        this.wrap("<span class='fancychecks'>");
        wrapperElement = this.parent();
        wrapperElement.click(function() {
			$(this).toggleClass("checked");
		});
		injectStylesheet();
    };

    function injectStylesheet(){
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

    	styles.forEach(function(style){
    		compatInsertRule(stylesheet, style.selector, buildRules(style.rules));
    	})
    }
    function buildRules(ruleSet)
    {
    	var cssrule = "";
    	ruleSet.forEach(function(rule) {
    		cssrule += rule.property + ":" + rule.value + ";";
    	})
    	return cssrule;
    }
    function compatInsertRule(stylesheet, selector, cssText){
    	// IE8 uses "addRule", everyone else uses "insertRule"
        if (stylesheet.insertRule) {
            stylesheet.insertRule(selector + '{' + cssText + '}', 0);
        } else {
            stylesheet.addRule(selector, cssText, 0);
        }
    }

    var styles = [{
    	"selector": "span.fancychecks img",
    	"rules": [
			{ "property": "display", "value": "block" },
			{ "property": "margin", "value": "0" },
			{ "property": "padding", "value": "0" },
			{ "property": "transition-duration", "value": "300ms" },
			{ "property": "transform", "value": "scale(1)" },
			{ "property": "filter", "value": "none" },
			{ "property": "-webkit-filter", "value": "grayscale(0)" }
		]
	},{
    	"selector": "span.fancychecks.checked img",
    	"rules": [
			{ "property": "transform", "value": "scale(0.8)" },
			//{ "property": "filter", "value": "gray" }, //TODO - this line probably will not work but is necessary for IE
			{ "property": "filter", "value": "grayscale(1)" },
			{ "property": "-webkit-filter", "value": "grayscale(1)" }
		]
	},{
    	"selector": "span.fancychecks",
    	"rules": [
    		{ "property": "padding", "value": "0" },
			{ "property": "margin", "value": "5px" },
			{ "property": "display", "value": "inline-block" },
			{ "property": "border", "value": "1px solid transparent" },
			{ "property": "transition-duration", "value": "300ms" }
		]
	},{
    	"selector": "span.fancychecks.checked",
    	"rules": [
    		{ "property": "border-color", "value": "#ccc" }
    	]
	},{
    	"selector": "span.fancychecks::before",
    	"rules": [
			{ "property": "display", "value": "block" },
			{ "property": "background-image", "value": "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzQ2LjM4NCkiPjxwYXRoIGZpbGw9IiMxZWM4MWUiIGZpbGwtb3BhY2l0eT0iLjgiIGQ9Ik0zMiAzNDYuNGEzMiAzMiAwIDAgMC0zMiAzMiAzMiAzMiAwIDAgMCAzMiAzMiAzMiAzMiAwIDAgMCAzMi0zMiAzMiAzMiAwIDAgMC0zMi0zMnptMjEuMyAxMC4zbC0yNC41IDQxTDkuNSAzNzVsMTcuNyA5LjYgMjYtMjh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuNSAzNzUuMmwxOS4zIDIyLjQgMjQuNS00MS0yNiAyOC4yeiIvPjwvZz48L3N2Zz4=')" },
			{ "property": "background-size", "value": "100% 100%" },
			{ "property": "content", "value": "''" },
			{ "property": "color", "value": "white" },
			{ "property": "font-weight", "value": "bold" },
			{ "property": "border-radius", "value": "50%" },
			{ "property": "position", "value": "absolute" },
			{ "property": "margin", "value": "0.5%" },
			{ "property": "z-index", "value": "1" },
			{ "property": "width", "value": "40px" },
			{ "property": "height", "value": "40px" },
			{ "property": "text-align", "value": "center" },
			{ "property": "transform", "value": "scale(0)" },
			{ "property": "transition-duration", "value": "300ms" }
		]
	},{
    	"selector": "span.fancychecks.checked::before",
    	"rules": [
    		{ "property": "transform", "value": "scale(1)" }
    	]
	}];

})( jQuery );
