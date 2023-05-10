
        const rey = document.getElementById("yatwins");

        function changeBackgroundColor() {
            if (document.body.style.backgroundColor === 'white') {
                rey.innerHTML = "White Mode";
                
                document.body.style.backgroundColor = 'black';
            } else {
                rey.innerHTML = "Dark Mode";
                document.body.style.backgroundColor = 'white';
            }
        }

        rey.addEventListener('click', changeBackgroundColor);
//  --------------------------------------

