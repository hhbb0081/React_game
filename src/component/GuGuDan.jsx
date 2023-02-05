import React, { Component } from 'react';

class GuGuDan extends Component {
      constructor(props){
        super(props);
        this.state = {
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
          result: '',
        };
  }


      render(){
        return(
          <>
            <div>{this.state.first} X {this.state.second}</div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (this.state.first * this.state.second == this.state.value) {
                this.setState({
                  first: Math.ceil(Math.random() * 9),
                  second: Math.ceil(Math.random() * 9),
                  value: '',
                  result: '정답입니다.',
                })
              }
              else {
                this.setState({
                  first: Math.ceil(Math.random() * 9),
                  second: Math.ceil(Math.random() * 9),
                  value: '',
                  result: '오답입니다.'
                });
              }
            }}>
              <input 
                value={this.state.value}
                type='number'
                onChange={(e) => {this.setState({value: e.target.value})}}
              />
              <button
                // onClick={this.submitAns}
              >입력!</button>
            </form>
            <div>{this.state.result}</div>
          </>
        );
      }
}
export default GuGuDan;