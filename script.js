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
