const question=document.getElementsByClassName('question');
const qNa=document.getElementsByClassName('qNa_container');


for(let i=0;i<qNa.length;i++){
    question[i].addEventListener('click',function(){
        question[i].nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
        let answer=this.nextElementSibling;
        if(answer.classList.contains('active')){
            answer.style.height=answer.scrollHeight + "px";
        }
        else{
            answer.style.height="0px"
        }
        
    })
}