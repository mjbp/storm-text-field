# Storm Text Field

[![Build Status](https://travis-ci.org/mjbp/storm-text-field.svg?branch=master)](https://travis-ci.org/mjbp/storm-text-field)
[![codecov.io](http://codecov.io/github/mjbp/storm-text-field/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-text-field?branch=master)
[![npm version](https://badge.fury.io/js/storm-text-field.svg)](https://badge.fury.io/js/storm-text-field)

Input/textarea wrapper module to surface state and validity to the UI based on the HTML5 constraint validation API.

Use HTML5 input types, patterns, and [validation-related attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes) to declare validation rules. Or set a custom validation constraint in your initialisation options (see below)

## Example
[https://mjbp.github.io/storm-text-field](https://mjbp.github.io/storm-text-field)

## Usage
HTML
```
<div class="form__row">
    <div class="field__container js-text-field">
        <label class="label" for="example-pattern">My value must be 'test'</label>
        <input class="field" type="text" pattern="test" id="example-pattern" name="example-pattern" value="" required>
    </div>
</div>
```

JS
```
npm i -S storm-text-field
```
either using es6 import
```
import TextField from 'storm-text-field';

TextField.init('.js-text-field');
```
asynchronous browser loading (use the .standalone version in the /dist folder) using the global name (Storm + capitalised package name)
```
import Load from 'storm-load';

Load('{{path}}/storm-text-field.standalone.js')
    .then(() => {
        StormTextField.init('.js-text-field');
    });
```

## Options
```
{
	labelClassName: 'label',
	fieldClassName: 'field',
	focusClassName: 'is--focused',
	dirtyClassName: 'is--dirty',
	invalidClassName: 'is--invalid',
	errorMsgClassName: 'form__error',
    customConstraint: {
        check: input => input.value === 'test', //return boolean
        customValidity: 'The value is not \'test\''
    }
}
```

## Tests
```
npm run test
```

## Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

The es5 version depends upon HTML5 Form Constraint Validation API, Object.assign, element.classList, and Promises so all evergreen browsers are supported out of the box, ie9+ is supported with polyfills. ie8+ will work with even more polyfills for Array functions and eventListeners.

## Dependencies
None

## License
MIT