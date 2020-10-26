import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/*
* 화면만 그려주는 컴포넌트
* count 나 onClick이 어떻게 관리되는지 알 필요가 없음.
* */
function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      ({count})
    </button>
  );
}
function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello, world!</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons />
    </div>
  );
}

/*
* 상태만 관리하는 컴포넌트
* 어떻게 화면을 그려주는지는 알 필요가 없음
* */
function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
