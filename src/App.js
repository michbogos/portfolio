import './App.css';
import wave from './assets/Wave.svg';
import wave2 from "./assets/Wave(2).svg";
import rocket from "./assets/OuterSpace.svg" ;
import lost from "./assets/LostOnline.svg";

import blender from "./assets/blender-2.svg";
import javascript from "./assets/js_logo.svg"
import c from "./assets/c.svg";
import node from "./assets/Node.js_logo.svg";
import python from "./assets/python-5.svg";
import react from "./assets/reactjs-icon.svg";
import three from "./assets/Threejs-logo.svg";
import electron from "./assets/electronjs-icon.svg"

import Card from './Card.js';

function App() {
  return (
    <div className="MainDiv">
      <h1>Web designer</h1>
      <img src = {wave}></img>
      <div className = "SectionDiv" style = {{backgroundColor:"#534EAF", color:"#e6e6e6"}}>
        <h1>And Software Developer</h1>
        <img src = {rocket} style = {{width:"33vw", transform:"translate(75%)"}}></img>
        <p style = {{alignSelf:"flex-start", position:"relative", top:"-30vmax", left:"10vmax"}}>dtsfydfugirsttfdf</p>
        <img src = {lost} style = {{width:"33vw", transform:"translate(-75%)"}}></img>
        <p style = {{alignSelf:"flex-start", position:"relative", top:"-30vmax", left:"45vmax"}}>dtsfydfugirsttfdf</p>
        <img src = {wave2}></img>
      </div>
      <div className = "SectionDiv" style = {{background:"#0B0F2D"}}>
        <h1 style = {{color:"#e6e6e6"}}>Technologies I work with</h1>
        <div style = {{height:"33vmin",padding:"6vmin", display:"flex", flexDirection:"row", flexFlow:"wrap"}}>
            <Card img = {javascript}></Card>
            <Card img = {react}></Card>
            <Card img = {electron}></Card>
            <Card img = {node}></Card>
            <Card img = {three}></Card>
            <Card img = {python}></Card>
            <Card img = {c}></Card>
            <Card img = {blender}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
