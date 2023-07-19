const sections= document.querySelectorAll('.section');
const sectBtns= document.querySelectorAll('.controls');
const sectBtn= document.querySelectorAll('.control');
const allSections= document.querySelectorAll('.main-content');

function PgTrans(){
    //Button click Active class
    for(let i=0;i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn=document.querySelectorAll('.active-button');
            currentBtn[0].className=currentBtn[0].className.replace('active-button','');
            this.className += ' active-button';
        })
    }
    
    for(let i=0;i<allSections.length;i++){
        allSections[i].addEventListener('click', (e)=>{
            const id=e.target.dataset.id;
            if(id){
                //remove selected from the other buttons
                sectBtns.forEach((btn)=>{
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                // hide other sections
                sections.forEach((section)=>{
                    section.classList.remove('active')
                })

                const element=document.getElementById(id);
                element.classList.add('active');
            }
        })
    }
}
PgTrans();