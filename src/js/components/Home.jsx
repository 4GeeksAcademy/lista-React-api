import React,{useEstate, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {

const [text,setText]=useState("");
const [lista,setLista]=useState([]);
console.log(text,lista);

  const handleKeyDown = (event) => {
   
let nuevoValor= event.target.value;
    
    if (event.key === 'Enter') {
		   setLista([...lista, nuevoValor]);
		   setText("");
  
    }
  };
  

  const eliminar=(index)=>{
	 setLista(lista.filter((item,i)=> i !== index));

  }

	return (
		<div id="divPadre" className="text-center">
            <h1>todos</h1>

  <div id="divHijo" className="mb-3">
   
    <input id="inputPrincipal" type="text" className="form-control" aria-describedby="emailHelp" onKeyDown={handleKeyDown} onChange={(e)=>{setText(e.target.value)}} value={text}/>

	<ul id="lista">{lista.map((item,index) =>(
	<li id="nuevoLi" key={index}>{item}<button onClick={() => eliminar(index)} >xs</button></li>
	))}</ul>
</div>
 

		
		</div>
	);
};

export default Home;
