function sum(a,b,c) {
    return a + b + c;
}
console.log(sum(1,2,3));

const sumCurr = (a) => (b) => (c) => a + b + c;
console.log(sumCurr(1)(2)(3))

function curry(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                return f(a, b, c)
            }
        }
    }
}
function sum1(a,b,c) {
    return a + b + c;
}
let curriedSum = curry(sum)

alert (curriedSum(1)(2)(3));

console.log('//////////////////////////////////////////////////////////////////////');

const form = document.querySelector('#myForm');
    form.addEventListener('submit' , function(event) {
        event.preventDefault();

        let textArea = document.querySelector('#textArea').value;
        console.log(textArea);
        
        let downloadButton = document.createElement('a');
        downloadButton.setAttribute('href', 'data:text/plaintext;charset=UTF-8,' + textArea);
        downloadButton.download = "myFile" + ".txt";
        downloadButton.textContent = "Download file";

        form.append(downloadButton);
    })

const json = document.querySelector('#JSON');
    json.addEventListener('submit' , function(event) {
        event.preventDefault();

        let textArea1 = document.querySelector('#textArea1').value;
        console.log(textArea1);
        
        let downloadButton1 = document.createElement('a');
        downloadButton1.setAttribute('href', 'data:aplication/json;charset=UTF-8,' + textArea1);
        downloadButton1.download = "JSON" + ".json";
        downloadButton1.textContent = "Download file";

        json.append(downloadButton1);
    })
