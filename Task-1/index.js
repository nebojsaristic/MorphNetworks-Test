function validate(input, circleId) {
    const circleElement = document.getElementById(circleId);
    const loader = circleElement.querySelector('.circle-loader');
    const checkmark = loader.querySelector('.checkmark');
    const value = input.value;

    if(value && value.length) {
        circleElement.classList.add("input-circle--complete");
        loader.classList.remove('hidden');
        setTimeout(function() {
            loader.classList.add('load-complete');
            checkmark.classList.remove('hidden');
        }, 2000);
    } else {
        circleElement.classList.remove("input-circle--complete");
        loader.classList.add('hidden');
        loader.classList.remove('load-complete');
        checkmark.classList.add('hidden');
    }
}