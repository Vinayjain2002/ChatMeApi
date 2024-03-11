/// here we are going to handle the erors that are going to be come while the api

class CustomError extends Error{
    constructor(message, status=500, error=[], stack=""){
        super(message);
        this.name= this.constructor.name
        this.status= status
        this.error= error
        if(stack){
            this.stack= stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}
const errorHandling= (err, req, res, next)=>{
    console.log(err.stack);
    if(err instanceof CustomError){
        return res.status(err.status).json({error: err.message});
    }
    return res.status(500).json({error: `Internal Server error ${err}`})
}

module.exports= {errorHandling, CustomError};
