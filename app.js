const question = [
    {
        'que': 'which of the following is a markup language',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        "correct" : 'a'
    },
    {
        'que':'what year was JavaScript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'1995',
        "correct":'b'
    },
    {
        'que':"what does css stands for?",
        'a' : 'Creative Style Sheets',
        'b' : 'Colorful Style Sheets',
        'c' : 'Computer Style Sheets',
        'd' : 'Cascading Style Sheets',
        "correct" : 'd'
    }
]

let index = 0;
let c = 0;
let total = question.length;
const quebox = document.getElementById("quebox");
const optionInputs = document.querySelectorAll('.option');
const loadQuestion = ()=>{
    if(index == total){
        console.log()
        return end();
    }else{
        reset();
        const data = question[index];
        quebox.innerText = data.que;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;
        console.log(data);
        console.log(data.correct)
    }
    //console.log(index);
}

const submitQuiz = ()=>{
    const ans  = getAnswer()
    const data = question[index];
    console.log(data.correct);
    if(ans == data.correct){
        c++;
    }
    index++;
    loadQuestion();
}

const getAnswer = ()=>{
    let answer;
    let checked = false;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value;
        }
    })
    return answer;
}
const reset = ()=>{
    optionInputs.forEach((input)=>{
        input.checked = false;
    })
}

const end = ()=>{
    document.getElementsByClassName("box")[0].innerHTML = 
    `<h3  class = "kal1">Thank you for playing the Quiz</h3>
    <h2  class = "kal2"> ${c} / ${total} are correct</h2>`;
}
loadQuestion()






