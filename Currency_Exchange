<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Currency Exchange</title>
    </head>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            
            document.querySelector('form').onsubmit = function() {
                fetch('https://api.exchangeratesapi.io/latest?base=USD')
                
                // fetch gives back a promise
                
                .then(response => response.json())
                .then(data => {
                const currency = document.querySelector('#currency').value.toUpperCase();
                
                /* can't use data.rates.currency as it would try to access
                a property called currency in rates, using [] allows you to access a variable
                */
                
               const rate = data.rates[currency];
               if (rate !== undefined) {
                document.querySelector('#result').innerHTML = `One USD dollar is equal to ${rate.toFixed(2)} ${currency}`;

               } else {
                   document.querySelector('#result').innerHTML = 'Invalid currency.';
               }
            });
            .catch(error => {
                console.log('Error:', error)
            })              
                // stop form getting submitted to another page
                return false;
            }
        
        });
    </script>
    <body>
        <form>
        <input id="currency" placeholder="Currency" type="text">
        <input type="submit" value="Convert">
        </form>
        <div id="result">

        </div>
    </body>
</html>
