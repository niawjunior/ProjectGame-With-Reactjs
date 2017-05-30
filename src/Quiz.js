import React, {Component} from 'react';
import QuizOptions from'./QuizOptions';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';
class Quiz extends Component{

    constructor(props){
        super(props);

        let riddle = this.playGame();
        let correct = false;
        let gameOver = false;
        this.state = {riddle};
        
        this.renderOptions = this.renderOptions.bind(this);
        this.checkResults = this.checkResults.bind(this);
        this.play = this.play.bind(this);
    }
    randomNumber(min,max){
        return Math.floor(Math.random() * (max-min+1)) +min;
    }

    generateRandomOptions(sum){
        let result = sum;
        let resultsArray = [];
        let randomNumberArray = [];

        while(randomNumberArray.length <= 3){
            let randomNumber = this.randomNumber(1,19);
            if(randomNumberArray.indexOf(randomNumber) > -1) continue;
            randomNumberArray.push(randomNumber);
        }

        console.log(randomNumberArray);
        for(let i = 0; i <3; i++){

        let addSubtract = this.randomNumber(0,1);
        if(addSubtract === 1){

            result += randomNumberArray[i];
            resultsArray.push(result);
        }else{
            result -= randomNumberArray[i];
            resultsArray.push(result);
        }
    }

        return resultsArray;
    }
    playGame() {
        console.log(this.randomNumber(20,50),this.randomNumber(20,5));
        let field1 = this.randomNumber(20,50);
        let field2 = this.randomNumber(20,50);
        let result = field1 + field2;
        let resultsArray = this.generateRandomOptions(result);
        resultsArray.push(result);
        resultsArray.sort(function(a,b) {return 0.5 - Math.random()});
        console.log(resultsArray);
        let riddle = {
            resultsArray: resultsArray,
            field1: field1,
            field2: field2,
            answer: result
        }
        console.log(riddle);
        if(this.state && this.state.gameOver){
            this.setState({riddle: riddle})
        }else{
            return riddle;
        }
        return riddle;
    }
    checkResults(option){
        console.log('คลิีกที่คำตอบ ' +option);
        if(this.state.riddle.answer === option){
            console.log('ถูกต้อง');
            this.setState({correct: true, gameOver: true});
        }else{
            console.log('ผิด');
            this.setState({correct: false, gameOver: true});
        }
    }
    renderOptions(){
        return(
            <div className="options">
                {this.state.riddle.resultsArray.map((option,i)=>
                <QuizOptions option={option} key={i} checkResults={(option) =>this.checkResults(option)}/>
                )}
            </div>
        );
    }

    renderMessage(){
        if(this.state.correct){
            return <h3>ยินดีด้วย!</h3>
        }else{
            return <h3>เสียใจด้วย!</h3>
        }
    }
    play(){
        this.setState({correct: false, gameOver: false});
        this.playGame();
    }
    render(){
        return(
            <center>
            <div className="quiz">
                          <img src={logo} className="App-logo" alt="logo" />
          <h2>คณิตศาสตร์หรรษา</h2>
                <div className="quiz-content">
                    <p className="question">ข้อใดคือผลลัพธ์ของ <span className="text-info">{this.state.riddle.field1}</span> บวก <span className="text-info">{this.state.riddle.field2}</span>?</p>
                    {this.renderOptions()}
                </div>
                {/*Correct: {this.state.correct ? "True" : "False"}<br/>
                GameOver:{this.state.gameOver ? "True" : "False"}<br/>*/}
                <div className={classNames('after',{'hide': !this.state.gameOver},{'wrong': !this.state.correct}, {'correct': this.state.correct})}>
                    {this.renderMessage()}
                </div>
                <div className="play-again">
                    <a className="button" onClick={this.play}>เล่นอีกครั้ง</a>
                </div>
            </div>
            </center>
        );
    }
}

export default Quiz;