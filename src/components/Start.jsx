import { useRef } from "react";
import logo from '../assets/logo.png'

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <>
    <h1 className='mainheading'>Quizipedia<img src={logo} width="150px"/></h1>
    <div className="start">
      
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
    </>
  );
}
