class Form{
    constructor(){
    this.button=createButton('Enter');
    this.title=createElement('h2');
    this.input1=createInput("Name");
    this.input2=createInput("Answer");
    this.qs=createElement('h4');
    this.option1=createElement('h3');
    this.option2=createElement('h3');
    this.option3=createElement('h3');
    this.option4=createElement('h3');
    this.greeting=createElement('h3');
    }
    hide(){
     this.button.hide();
     this.input1.hide();
     this.input2.hide();  
     this.option1.hide(); 
     this.option2.hide(); 
     this.option3.hide(); 
     this.option4.hide(); 
    }
    display(){
     this.title.position(400,100);
     this.qs.position(200,200);
     this.option1.position(200,250);
     this.option2.position(200,300);
     this.option3.position(200,350);
     this.option4.position(200,400);
     this.input1.position(250,450);
     this.input2.position(350,450);
     this.button.position(300,500);
     this.title.html("QUIZ GAME!");
     this.qs.html("Who was the first President of India?");
     this.option1.html("Jawarlal Nehru");
     this.option2.html("Dr.Rajendra Prasad");
     this.option3.html("Subhash Chandra Bose");
     this.option4.html("Indira Gandhi");
     this.button.mousePressed(()=>{
         this.input1.hide();
         this.input2.hide();
         this.qs.hide();
         this.option1.hide();
         this.option2.hide();
         this.option3.hide();
         this.option4.hide();
         var name=this.input1.value();
         this.greeting.html("Welcome!"+name);
         this.greeting.position(200,200);
     });
    }
}

