const body = document.querySelector('body'),
    toggle = document.querySelector('.toggle');

var mode = localStorage.getItem('mode');

window.onload = function () {
    if (mode === 'dark') {
        body.classList.add('dark')
        toggle.classList.add('active')
        localStorage.setItem('mode', `${mode}`);
    } else {
        body.classList.remove('dark')
        toggle.classList.remove('active')
        localStorage.setItem('mode', `${mode}`);
    }
}

function setMode(mode) {
    localStorage.setItem('mode', mode);
};

// window.onload = function () {
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark')
        toggle.classList.toggle('active')

        // if(body.classList.contains('dark') ){
        //     setMode("dark")
        //     mode = localStorage.getItem('mode');
        // } else{
        // setMode("light")    
        //     mode = localStorage.getItem('mode');
        // }

        var state = body.className
        setMode(state)
    })
// }