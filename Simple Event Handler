<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Colors</title>
        <script>
            // run this function when the document is done loading
            document.addEventListener('DOMContentLoaded', function () {
                // find all of the elements that match this query- button
                // for each of the buttons returned, run a function that takes as input the query
                document.querySelectorAll('button').forEach(function(button) {
                    // add an onlick handler to the button
                    button.onclick = function() {
                        // onclick, get the hello element, change it's color to the color property of that button
                        document.querySelector('#hello').style.color = button.dataset.color;
                    }
                })
                document.querySelector('select').onchange = function() {
                    document.querySelector('#welcome').style.color = this.value;
                }
            })
        </script>
    </head>
    <body id="body">
        <h1 id="hello">Hello!</h1>
        <h2 id="welcome">Welcome to my page</h2>
        <button data-color="red">Red</button>
        <button data-color="blue">Blue</button>
        <button data-color="green">Green</button>


        <select>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
        </select>
    </body>
</html>
