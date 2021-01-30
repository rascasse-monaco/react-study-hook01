import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// hookで記述
const ExampleHook = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times (Use hook)</p>
      <button onClick={() => setCount(count +1)}>Click Me</button>
    </div>
  );
}
// 上記と同様の処理をClassを使って書いたもの
class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
      <p>You clicked {this.state.count} times (Use Class)</p>
      <button
        onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click Me
      </button>
    </div>
    );
  }
}
// 下のようにする記述してそれをレンダーするとReactDOM.renderを沢山書かなくていい。
const Render = () => {
  return (
    <div>
      <ExampleHook />
      <ExampleClass />
    </div>
  );
}

ReactDOM.render (
  <Render />,
  document.getElementById('example2')
);
