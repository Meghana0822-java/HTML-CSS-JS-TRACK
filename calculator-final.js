let calculation1='';
        const board=document.querySelector(".js-board");
        document.addEventListener("keydown",function(event){if(event.key==='Backspace'){backspace();}});
        function calculation(value){
            add(value);
            calculation1+=value;
        }
        function add(value){
            board.innerText+=value;
        }
        function backspace(){
            board.innerText=board.innerText.slice(0,-1);
            calculation1=calculation1.slice(0,-1);
        }
