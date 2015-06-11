# Description
**imgCheckboxes** is a jQuery plugin that makes img tags checkable much like Google's recaptcha image selection tool.

## Usage

Very simply, you can call `imgCheckboxes` on any jQuery collection containing `<img>` elements.

    $("img.checkable").imgCheckboxes();

You can have mulitple sets of imgCheckboxes with different parameters

    $("img.checkableGroup1").imgCheckboxes();
    $("img.checkableGroup2").imgCheckboxes({ "graySelected": false });

## Options

Option | Type | Values
---|---|---|---
checkMarkImage | URL | Supports anything your browser support in the `background-image` property (of a pseudo selector). | SVG Data URI which draws a white tick on semi transparent green.
graySelected | Boolean | Convenience option: Adds the necessary CSS rules to apply a grayscale filter on selected images. | true
scaleSelected | Boolean | Convenience option: Adds the necessary CSS rules to apply a downscaling filter on selected images. | true
fixedImageSize | String/Boolean | Sets a fixed image size to all images (useful if images vary in size). Values can be "200px" or "120px 200px" (not percentages). | false
checkMarkSize | String/Boolean | Sets a custom size for the image (Useful if your images are very large or very small and the default is not suitable). Values can be "30px" and "20px 30px" (note: percentages do not work). | "30px"
scaleCheckMark | Boolean | Convenience option: Adds the necessary CSS rules to apply a zooming effect on the checkmark as it appears and disappears. | true
fadeCheckMark | Boolean | Convenience option: Adds the necessary CSS rules to fade the checkmark in and out. | false
styles | Object | For advanced customisation, the full stylesheet is applied using this object. | (see source)

## Advanced

You can add any custom styles using the `styles` option. For example, to add a blur filter to selected images:

	$("img").imgCheckboxes({
		"styles": {
			"span.imgCheckbox.imgChked img": {
				// This property will overwrite the default grayscaling, we need to add it back in
				"filter": "blur(5px) grayscale(50%)",

				// This is just css: remember compatibility
				"-webkit-filter": "blur(5px) grayscale(50%)",

				// Let's change the amount of scaling from the default of "0.8"
				"transform": "scale(0.9)"
			}
		}
	});

## Compatibility

- Firefox
- Chrome
- Opera
- IE8+ (untested on prior versions)