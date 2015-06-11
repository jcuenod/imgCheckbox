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
---|---|---
checkMarkImage | URL | Supports anything your browser support in the `background-image` property (of a pseudo selector).*__default__: SVG Data URI which draws a white tick on semi transparent green*
graySelected | Boolean | Convenience option: Adds the necessary CSS rules to apply a grayscale filter on selected images. *__default__: true*
scaleSelected | Boolean | Convenience option: Adds the necessary CSS rules to apply a downscaling filter on selected images. *__default__: true*
fixedImageSize | String/Boolean | Sets a fixed image size to all images (useful if images vary in size). Values can be "200px" or "120px 200px" (not percentages). *__default__: false*
checkMarkSize | String/Boolean | Sets a custom size for the image (Useful if your images are very large or very small and the default is not suitable). Values can be "30px" and "20px 30px" (note: percentages do not work). *__default__: "30px**
scaleCheckMark | Boolean | Convenience option: Adds the necessary CSS rules to apply a zooming effect on the checkmark as it appears and disappears. *__default__: true*
fadeCheckMark | Boolean | Convenience option: Adds the necessary CSS rules to fade the checkmark in and out. *__default__: false*

## Compatibility

- Firefox
- Chrome
- Opera
- IE8+ (untested on prior versions)