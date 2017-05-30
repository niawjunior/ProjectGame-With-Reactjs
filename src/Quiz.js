import React, {Component} from 'react';

class Quiz extends Component{

    render(){
        return(
            <div className="quiz">
                <div className="quiz-content">
                    <p className="question">ข้อใดคือผลลัพธ์ของ <span className="text-info">5</span> บวก <span className="text-info">5</span>?</p>
                    <div className="options">
                    <div className="fields"><div className="field-block">10</div></div>
                    <div className="fields"><div className="field-block">10</div></div>
                    <div className="fields"><div className="field-block">10</div></div>
                    <div className="fields"><div className="field-block">10</div></div>
                </div>
            </div>
                <div className="play-again">
                    <a className="button">เล่นอีกครั้ง</a>
                </div>
            </div>
        );
    }
}

export default Quiz;