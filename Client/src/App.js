import './App.css';
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  state = { //변경될 수 있는 데이터이므로 state변수 초기화 //state값이 바뀔 때마다 render함수가 실행된다.
    board : ''
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({board: res})) //body 데이터를 받아와서 state변수 내용 변경
    .catch(err => console.log(err)); //예외처리
  }

  callApi = async() => {
    const response = await fetch('/api/board'); //위 경로에 접근해서
    const body = await response.json(); // 결과를 변수 body에 넣어라
    console.log(body);
    return body;
  }

  render() {
    return (
      <div className="App">
        Hello React!
        {this.state.board ? this.state.board[0].name :''}
      </div>
    );
  }
}

/*
this.state.board.map(c=>{
  return (<Board key={c.id} id={c.id} name={c.name} title={c.title} content={c.content}/> );
})
*/

export default App;
