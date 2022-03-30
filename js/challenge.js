


//GRAB BUTTONS
const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('.likes')
const list = document.getElementById('list')
const form = document.getElementById('comment-form')
const input = document.getElementById('comment-input')
const submit = document.getElementById('submit')


function initFeatures() {
    

    //SETUP TIMER
    // if (pause.textContent.includes('pause')) {
    //     var refreshIntervalId = setInterval(() => {
    //         counter.textContent = parseInt(counter.textContent) + 1;
    //     }, 1000);
    // }

    var timer = setInterval(() => {
        counter.textContent = parseInt(counter.textContent) + 1;
            }, 1000);
        
    

    //Add listeners
    minus.addEventListener('click',(e) => {
        counter.textContent = parseInt(counter.textContent) - 1;
    })


    plus.addEventListener('click',(e) => {
        counter.textContent = parseInt(counter.textContent) + 1;
    })


    let likeCount = 1;
    heart.addEventListener('click',(e) => {
        
        let x = document.createElement('li');
        let message = `${counter.textContent} has been liked`
        x.id = parseInt(counter.textContent);


        if (document.getElementById(`${x.id}`) === null){
            likes.appendChild(x)
            let likeCount = 1;
        }
        else {
            x = document.getElementById(`${x.id}`)
            likeCount = likeCount + 1;
        }

        x.innerHTML = 
            `${message}
            <span>${likeCount}</span>
             time${plural(likeCount)}`
    })

    pause.addEventListener('click',(e) => {
        if (pause.textContent.includes('pause')) {
            disableButtons()
            pause.textContent = 'resume'
            clearInterval(timer)
        }
        else {
            enableButtons()
            pause.textContent = 'pause'
            timer = setInterval(() => {
                counter.textContent = parseInt(counter.textContent) + 1;
            }, 1000);
        }
        
    })

    form.addEventListener('submit',(e) => {
        e.preventDefault()
        let p = document.createElement('p')
        p.textContent = e.target['comment-input'].value
        list.appendChild(p)
        input.value = ''
        
    })


    
};



function plural(num) {
    //returns s if more than 1, returns nothing if not
    if (num > 1) {
        return 's';
    }
    else {
        return '';
    }
}


function disableButtons(e) {
    heart.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    submit.disabled = true;
}

function enableButtons(e) {
    heart.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
    submit.disabled = false;

}
window.addEventListener('DOMContentLoaded', (e) => initFeatures());