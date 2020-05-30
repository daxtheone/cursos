class Singlenton{
    private static instace: Singlenton;
    private constructor(){
        // init 
    }
    static getInstance(){
        if(!Singlenton.instace){
            Singlenton.instace=new Singlenton();
        }
        return Singlenton.instace;
    }
}

export  default Singlenton;