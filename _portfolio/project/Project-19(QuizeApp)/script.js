
const Q={
    1: "Which of the following cannot be a variable name in C?",
    2: "What is the size of an int data type in C?",
    3: "Which of the following is used to declare a constant in C?",
    4: "What is the default value of a static variable in C?",
    5: "Which of the following is a keyword in C?",
    6: "Which of the following operators is used to allocate memory dynamically?",
    7: "Which of the following data types is not standard in C?",
    8: "Which of the following functions can be used to move the file pointer in C?",
    9: "Which of the following is not a valid storage class in C?",
    10: "Which of the following is used to terminate a function in C?"
};
const op={
    1: ['volatile','true','friend','export'],
    2: ['2 bytes', '4 bytes', '8 bytes', 'Depends on the compiler'],
    3: ['#define', 'const', 'constant', '#const'],
    4: ["0", "Garbage value", "NULL", "Uninitialized"],
    5: ['def', 'function', 'void', 'int'],
    6: ["malloc", "alloc", "new", "calloc"],
    7: ["real", "int", "float", "double"],
    8: ["fseek", "rewind", "fgetpos", "All of the above"],
    9: ["automatic", "register", "static", "float"],
    10: ["return", "break", "exit", "terminate"]
}
const S_answers={
    1:'true',
    2:'4 bytes',
    3:'const',
    4:'0',
    5:'int',
    6:'malloc',
    7:'real',
    8:'fseek',
    9:'float',
    10:'return'
}
let storeAnswers={}
let currentQuestionIndex = 1;
let currentStoreAnswer=1;
let correctAnswer = 0;
let falseAnswer = 0;
check=false;
let time=60;
function startQuiz(event) {
    event.preventDefault();
    displayQuestion();
    check=true;
    const timerInterval = setInterval(displayQuestion, 1000);
}
function displayQuestion(){
    document.getElementById("question-number").innerHTML=`${currentQuestionIndex}:${Q[currentQuestionIndex]}`;
    const timer=document.getElementById("timer");
    time--;
    const Option=document.getElementsByClassName("op");
    for(let k=0;k<Option.length;k++){
        Option[k].innerHTML=`${op[currentQuestionIndex][k]}`;
    }
    timer.innerHTML=formatTime(time);
    if (time<= 0) {
        clearInterval(timerInterval);
    }
}
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if(time>=0)
        return `Remaining Time:  ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    return `Remaining TIme : Time Finished`
}
function nextQuestion(){
    const keys=Object.keys(Q);
    currentStoreAnswer++;
    if((currentQuestionIndex<keys.length)&&(check)&&time>0){
        currentQuestionIndex++;
        displayQuestion();
        clearCheckboxes();
    }
    else if(currentQuestionIndex>=keys.length){
        alert("You Completed all questions, you need to see result")
    }
    else{
        alert("Please start first")
    }
}
function prevQuestion(){
    if((currentQuestionIndex>1)&&(check)&&time>0){
        currentQuestionIndex--;
        currentStoreAnswer--;
        displayQuestion();
    }
}
function clearCheckboxes() {
    const checkboxes = document.querySelectorAll('input[name="option"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}
function checkOnlyOne(checkbox) {
    const checkboxes = document.querySelectorAll('input[name="option"]');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
    });
    S_result(checkbox);
}
function S_result(checkbox){
    const label = document.querySelector('label[for="' + checkbox.id + '"]');
    const labelText = label.textContent;
    storeAnswers[currentStoreAnswer]=labelText;
}
checked=true;
function showResult(){
    if((time<=0 || currentQuestionIndex>=9)&&checked){
        const key=Object.keys(storeAnswers);
        let result=document.getElementById('result');
        result.innerHTML="";
        for(i=1;i<=key.length;i++)
            result.innerHTML += `
                                <div style="font-weight: 600; font-size: 1em; margin-bottom: 5px;">
                                    Question: ${Q[i]}
                                </div>
                                <div style="color: blue; margin-bottom: 10px;">
                                    You choose: ${storeAnswers[i]}
                                    ${S_answers[i]==storeAnswers[i]? 
                                        `<p style="color:blue; font-weight: 600;">Correct Answer</p>`:
                                        `<span style="color:red; font-weight: 600;">[Wrong Answer]</span>
                                        <div style="color:green;">Answer is: ${S_answers[i]}</div>`}
                                </div>
                                <br/>
                            `;
        declareResult()
        checked=false;
    }
    else if(checked)
        alert("!First Complete this questions")
}
function declareResult(){
    const key=Object.keys(storeAnswers);
    for(i=1;i<=key.length;i++){
        if(storeAnswers[i]==S_answers[i])
            correctAnswer++;
        else
            falseAnswer++;
    }
    document.getElementById('result').innerHTML+=`<strong style="font-size:20px">You Score: 
                                                  </strong><br/>Correct Answers: ${correctAnswer}<br/> 
                                                   Wrong Answers: ${falseAnswer}
                                                `;
}
