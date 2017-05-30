import React, {Component} from 'react';
import QuizOptions from'./QuizOptions';
import logo from './logo.svg';
import './App.css';
class Quiz extends Component{

    constructor(props){
        super(props);

        let riddle = this.playGame();

        this.state = {riddle};
        
        this.renderOptions = this.renderOptions.bind(this);
    }
    randomNumber(min,max){
        return Math.floor(Math.random() * (max-min+1)) +min;
    }
    playGame() {
        console.log(this.randomNumber(20,50),this.randomNumber(20,5));
        let riddle = {
            resultsArray: [8,9,10,11],
            field1: 5,
            field2: 5,
            answer: 10
        }
        return riddle;
    }
    renderOptions(){
        return(
            <div className="options">
                {this.state.riddle.resultsArray.map((option,i)=>
                <QuizOptions option={option} key={i}/>
                )}
            </div>
        );
    }
    render(){
        return(
            <center>
            <div className="quiz">
                          <img src={logo} className="App-logo" alt="logo" />
          <h2>คณิตศาสตร์หรรษา</h2>
                <div className="quiz-content">
                    <p className="question">ข้อใดคือผลลัพธ์ของ <span className="text-info">5</span> บวก <span className="text-info">5</span>?</p>
                    {this.renderOptions()}
                </div>
                <div className="play-again">
                    <a className="button">เล่นอีกครั้ง</a>
                </div>
            </div>
            </center>
        );
    }
}

export default Quiz;