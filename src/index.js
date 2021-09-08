console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {

            let cont = document.getElementById('dog-image-container');
            for (let i = 0; i < 4; i++) {
                let imgTag = document.createElement('img');
                imgTag.src = data['message'][i];
                cont.appendChild(imgTag);
            }
        });

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            console.debug(data['message']);

            let cont = document.getElementById('dog-breeds');

            for (const key in data['message'])
            {
                let li = document.createElement('li');
                li.innerHTML = key;
                li.id = key + "_main";
                li.onclick = li.id;

                if (parseInt(data['message'][key].length) > 0) {                    
                    let ul = document.createElement('ul');

                    for (const subkey in data['message'][key]) {
                        let subli = document.createElement('li');
                        subli.innerHTML = data['message'][key][subkey];
                        ul.appendChild(subli);                        
                    }

                    li.appendChild(ul);
                }
                cont.appendChild(li);
            }

            return;
            for (let i = 0; i < 4; i++) {
                imgTag.src = data['message'][i];
                cont.appendChild(imgTag);
            }
        });
});