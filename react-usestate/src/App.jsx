import React from 'react'

import './App.css';

function App() {
  const [showHide, setShowHide] = React.useState(false);
  const [inputClear, setInputClear] = React.useState('');
  const [reversedStr, setReversedString] = React.useState('');
  const [stringsToReverse, setStringToReverse] = React.useState('');
  const [fontSize, setFontSize] = React.useState(10);

// Text Styler

  const increaseFontSize = () => {
    setFontSize(fontSize + 3);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 3);
  }

  // Show/Hide Text 

  const onShowHide = () => {
    setShowHide(!showHide);
  }
  
  const shPosition = showHide ? 'Hide' : 'Show';
  
  // Input Field with Clear

  const handleInputClear = () => {
    setInputClear('');
  }
  
// Text Reverse

  const handleStringToReverse = (e) => {
    const {value} = e.target

    const reverse = value.split('').reverse().join('');

    setStringToReverse(value)
    setReversedString(reverse)
  }

  return (
    <div className="App">
      {/*  Show/Hide Text  */}
      <div>
        <button className= 'showhide' onClick={onShowHide}>
        {shPosition}
        </button>
        {showHide && <p>Created by Ing Paula</p>}
      </div>
      <br />
      <br />
      <br />
      {/* Input Field with Clear */}
      <div>
        <input type="text" value={inputClear} onChange={(e) => setInputClear(e.target.value)} />
        <button onClick={handleInputClear}>
          Clear
        </button>
      </div>
      <br />
      <br />
      {/* Text Reverse */}
      <div>
        <input className='reverse' type="text" value={stringsToReverse} onChange={handleStringToReverse}/>
        <p>
          {reversedStr}
        </p>
      </div>
      <br />
      <br />
      {/* Text Styler */}
      <div>
        <button className='text-display' onClick={increaseFontSize}>
          Increase
        </button>
        <button className='text-display' onClick={decreaseFontSize}>
          Decrease
        </button>
        <p style={{fontSize: `${fontSize}px`}}> Change The Size </p>
      </div>
    </div>
  );
}

export default App;
