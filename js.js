const questions =[
    {
        'que': 'Which is the largest planet in our solar system?',
        'a': 'Jupiter',
        'b': 'Mars',
        'c': 'Saturn',
        'd': 'Neptune',
        'correct': 'a'
        },
        
        {
        'que': 'Who painted the Mona Lisa?',
        'a': 'Pablo Picasso',
        'b': 'Leonardo da Vinci',
        'c': 'Vincent van Gogh',
        'd': 'Michelangelo',
        'correct': 'b'
        },
        
        {
        'que': 'What is the capital city of Australia?',
        'a': 'Sydney',
        'b': 'Melbourne',
        'c': 'Canberra',
        'd': 'Brisbane',
        'correct': 'c'
        },
        
        {
        'que': 'Which scientist proposed the theory of relativity?',
        'a': 'Isaac Newton',
        'b': 'Albert Einstein',
        'c': 'Galileo Galilei',
        'd': 'Stephen Hawking',
        'correct': 'b'
        },
        
        {
        'que': 'Who wrote the play "Romeo and Juliet"?',
        'a': 'William Shakespeare',
        'b': 'Arthur Miller',
        'c': 'Anton Chekhov',
        'd': 'Tennessee Williams',
        'correct': 'a'
        },
        
        {
        'que': 'Which country is known as the "Land of the Rising Sun"?',
        'a': 'China',
        'b': 'Japan',
        'c': 'India',
        'd': 'South Korea',
        'correct': 'b'
        },
        
        {
        'que': 'What is the chemical symbol for gold?',
        'a': 'Ag',
        'b': 'Au',
        'c': 'Fe',
        'd': 'Pb',
        'correct': 'b'
        },
        
        {
        'que': 'Which artist painted the famous artwork "The Starry Night"?',
        'a': 'Claude Monet',
        'b': 'Salvador Dalí',
        'c': 'Vincent van Gogh',
        'd': 'Pablo Picasso',
        'correct': 'c'
        },
        
        {
        'que': 'In which year did World War I begin?',
        'a': '1914',
        'b': '1918',
        'c': '1939',
        'd': '1945',
        'correct': 'a'
        },
        
        {
        'que': 'What is the tallest mountain in the world?',
        'a': 'Mount Everest',
        'b': 'K2',
        'c': 'Kangchenjunga',
        'd': 'Makalu',
        'correct': 'a'
        }
        
    
]

let index =0;
let total= questions.length;
let right=0,wrong=0;

const quebox =document.getElementById("quebox");
const optioninput=document.querySelectorAll('.options')


const loadque=()=>{
    if(index === total){
       return end();
    }
    
    reset();
    const data=questions[index]
    quebox.innerText=`${index+1}) ${data.que}`;
    optioninput[0].previousElementSibling.innerText=data.a;
    optioninput[1].previousElementSibling.innerText=data.b;
    optioninput[2].previousElementSibling.innerText=data.c;
    optioninput[3].previousElementSibling.innerText=data.d;
}

const submitquiz =()=>{
    const data= questions[index];
    const ans=getans();
    if(ans ===data.correct){
        right++;
    }
    else {wrong++;}
    index++;
    loadque();
    return;
}
const getans =()=>{
    let answer;
   optioninput.forEach(
    (input)=>{
        if(input.checked){
            answer= input.value;
            
        }
    }
   )
   return answer;
}

const reset =()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const end=()=>{
    document.getElementById("box").innerHTML=`
    <div style= "text-align:center">
    <h3>Your quiz has been submitted </h3>
    <h2> You score is ${right}/${total}  </h2>
    </div>
    `
}


loadque();