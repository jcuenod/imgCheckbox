# imgCheckboxes
jQuery plugin that makes img tags checkable

## Usage

Very simply, you can call `imgCheckboxes` on any jQuery collection containing `<img>` elements.

    $("img.checkable").imgCheckboxes();

You can have mulitple sets of imgCheckboxes with different parameters

    $("img.checkableGroup1").imgCheckboxes();
    $("img.checkableGroup2").imgCheckboxes({"graySelected": false, "scaleSelected": false});

## Options

Option | Values
---|---
checkMarkImage | supports anything browsers support in `background-image` default is an svg data uri
graySelected | default: true
scaleSelected | default: true
fixedImageSize | default: false
checkMarkSize | supports "30px" and "20px 30px" default: "30px"
scaleCheckMark | default: true
fadeCheckMark | default: false