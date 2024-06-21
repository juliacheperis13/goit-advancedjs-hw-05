import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        console.log('here');
        concatenation(input.value, 'hello!');
    });
}
//# sourceMappingURL=index.js.map