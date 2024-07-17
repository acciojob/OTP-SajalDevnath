const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '') {
                if (index !== 0) inputs[index - 1].focus();
            } else {
                input.value = '';
            }
        } else if (e.key >= '0' && e.key <= '9') {
            input.value = '';
        }
    });
    
    input.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value) {
            if (index !== inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('paste', (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text');
        const pasteArray = pasteData.split('').slice(0, 6);

        pasteArray.forEach((char, i) => {
            if (inputs[index + i]) {
                inputs[index + i].value = char;
                if (index + i < inputs.length - 1) {
                    inputs[index + i + 1].focus();
                }
            }
        });
    });
});
