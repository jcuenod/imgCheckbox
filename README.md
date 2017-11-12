# Description
**imgCheckbox** is a jQuery plugin that makes img tags checkable (much like Google's recaptcha image selection tool). See it in action on the demo page: <http://jcuenod.github.io/imgCheckbox/>

## Usage

You can call `imgCheckbox` without any parameters on any jQuery collection containing `<img>` elements.

```javascript
$("img.checkable").imgCheckbox();
```

You can have multiple sets of imgCheckboxes with different parameters.

```javascript
$("img.checkableGroup1").imgCheckbox();
$("img.checkableGroup2").imgCheckbox({ "graySelected": false });
```

## Options

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Values</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>checkMarkImage</td>
            <td>URL</td>
            <td>Supports anything your browser support in the <code>background-image</code> property (of a pseudo selector).</td>
            <td>SVG Data URI which draws a white tick on semi transparent green.</td>
        </tr>
        <tr>
            <td>graySelected</td>
            <td>Boolean</td>
            <td>Convenience option: Adds the necessary CSS rules to apply a grayscale filter on selected images.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>scaleSelected</td>
            <td>Boolean</td>
            <td>Convenience option: Adds the necessary CSS rules to apply a downscaling filter on selected images.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>fixedImageSize</td>
            <td>Boolean / String</td>
            <td>Sets a fixed image size to all images (useful if images vary in size). Values can be "200px" or "120px 200px" (not percentages).</td>
            <td>false</td>
        </tr>
        <tr>
            <td>checkMarkSize</td>
            <td>Boolean / String</td>
            <td>Sets a custom size for the image (Useful if your images are very large or very small and the default is not suitable). Values can be "30px" and "20px 30px" (note: percentages do not work).</td>
            <td>"30px"</td>
        </tr>
        <tr>
            <td>checkMarkPosition</td>
            <td>String</td>
            <td>Sets the position of the checkMark. Options are: <code>top-left</code>, <code>top</code>, <code>top-right</code>, <code>left</code>, <code>center</code>, <code>right</code>, <code>bottom-left</code>, <code>bottom</code>, <code>bottom-right</code> etc. (for more advanced positioning, the <code>styles</code> option can be used on <code>span.imgCheckbox::before</code>)</td>
            <td><code>top-left</code></td>
        </tr>
        <tr>
            <td>scaleCheckMark</td>
            <td>Boolean</td>
            <td>Convenience option: Adds the necessary CSS rules to apply a zooming effect on the checkmark as it appears and disappears.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>fadeCheckMark</td>
            <td>Boolean</td>
            <td>Convenience option: Adds the necessary CSS rules to fade the checkmark in and out.</td>
            <td>false</td>
        </tr>
        <tr>
            <td>addToForm</td>
            <td>Boolean / jQuery</td>
            <td>imgCheckbox can inject the checked elements into the form. If <code>true</code>, imgCheckbox will find a parent form and hook into its submission. A jQuery object can be passed in and the <code>submit</code> listener will attach to it.</td>
            <td>true</td>
        </tr>
        <tr>
            <td>preselect</td>
            <td>[Integer] / Boolean</td>
            <td>To preselect certain elements, use this syntax:<br /><code>{ preselect: [0,1,2] }</code><br /> Alternatively, you may preselect all elements using the syntax:<br /><code>{ preselect: true }</code></td>
            <td>[]</td>
        </tr>
        <tr>
            <td>radio</td>
            <td>Boolean</td>
            <td>Images function as radio/option buttons (rather than checkboxes). Only one can be selected. No element is automatically preselected (see <code>preselect</code>).</td>
            <td>false</td>
        </tr>
        <tr>
            <td>canDeselect</td>
            <td>Boolean</td>
            <td>When the radio option is set to true, this option allows the selected image to be deselected.</td>
            <td>false</td>
        </tr>
        <tr>
            <td>styles</td>
            <td>Object</td>
            <td>For advanced customisation, the full stylesheet is applied using this object.</td>
            <td>(see source)</td>
        </tr>
    </tbody>
</table>

## Methods

<table>
  <thead>
    <th>Method</th><th>Usage</th><th>Return</th>
  </thead>
  <tbody>
    <tr>
      <td><code>$.select()</code></td>
      <td>Selects the element (if it is a member of an imgCheckbox group). If the element is part of a radio group, the other elements will be deselected.</td>
      <td>jQuery</td>
    </tr>
      <tr>
        <td><code>$.deselect()</code></td>
        <td>Deselects the element (if it is a member of an imgCheckbox group). Other elements are unaffected (even in radio groups).</td>
        <td>jQuery</td>
      </tr>
  </tbody>
</table>

## Events

Event callbacks are accessible via the options object. Use the syntax:

```javascript
$("img").imgCheckbox({
    onload: function(){
      // Do something fantastic!
    },
    onclick: function(el){
    	var isChecked = el.hasClass("imgChked"),
	    imgEl = el.children()[0];  // the img element
	    
	console.log(imgEl.name + " is now " + (isChecked? "checked": "not-checked") + "!");
    }
});
```

<table>
  <thead>
    <th>Event</th><th>Explanation</th>
  </thead>
  <tbody>
    <tr>
      <td><code>onload</code></td>
      <td>Fires when the initialisation of the imgCheckbox collection is complete.</td>
    </tr>
      <tr>
        <td><code>onclick</code></td>
        <td>Fires when an element is clicked.</td>
      </tr>
  </tbody>
</table>

## Advanced

You can add any custom styles using the `styles` option. For example, to add a blur filter to selected images:

```javascript
$("img").imgCheckbox({
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
```

## Compatibility

- Firefox
- Chrome
- Opera
- IE8+ (untested on prior versions)
