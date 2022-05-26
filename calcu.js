let string = "";
let bus = document.querySelectorAll('.bu');
Array.from(bus).forEach((bu) => {
    bu.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'de') {
            let S = string.toString().slice(0, -1);
            console.log(e.target);
            string = S;
            document.querySelector('input').value = string;
        } else {
            if (string[string.length - 1] == e.target.innerHTML && (e.target.innerHTML == '.' || e.target.innerHTML == '%' || e.target.innerHTML == '' || e.target.innerHTML == '/' || e.target.innerHTML == '(' || e.target.innerHTML == ')' || e.target.innerHTML == '+' || e.target.innerHTML == '-')) {

                document.querySelector('input').value = string;
                swal("Invalid", "number", "error");
            } else if (string[string.length - 1] != e.target.innerHTML && (e.target.innerHTML == '.' || e.target.innerHTML == '%' || e.target.innerHTML == 'x' || e.target.innerHTML == '/' || e.target.innerHTML == '+' || e.target.innerHTML == '-') && (string[string.length - 1] == '.' || e.target.innerHTML == '%' || string[string.length - 1] == '*' || string[string.length - 1] == '/' || string[string.length - 1] == '+' || string[string.length - 1] == '-')) {
                document.querySelector('input').value = string;
                swal("Invalid", "number", "error");
            } else {
                if (e.target.innerHTML == 'x') {
                    string += '*';
                    string[string.length - 1]
                } else {
                    string[string.length - 1]
                    console.log(e.target)
                    string = string + e.target.innerHTML;
                }
                document.querySelector('input').value = string;
            }
        }
    })
})
