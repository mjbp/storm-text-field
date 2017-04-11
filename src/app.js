import TextField from './libs/storm-text-field';

const onDOMContentLoadedTasks = [() => {
    TextField.init('.js-text-field', {
        customConstraint: {
            check: input => input.value === 'test', //return boolean
            customValidity: 'The value is not \'test\''
        }
    });
    TextField.init('.js-text-field-2');
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });