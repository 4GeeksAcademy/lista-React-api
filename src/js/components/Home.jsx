import React,{useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {




const [text,setText]=useState("");
const [lista,setLista]=useState([]);




  useEffect(()=>{

informacion()

},[])


function informacion(){
	fetch("https://playground.4geeks.com/todo/users/alexisrrh", {
		method: "GET"})
		.then((response) => response.json())
		.then((data)=> 	setLista(data.todos))
		.catch((error)=> console.log(error))
	 }
 

	
  function crearTarea (label){
	fetch("https://playground.4geeks.com/todo/todos/alexisrrh", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			label: label,
			is_done: false
		})})
		.then((response) => response.json())
		.then((data)=> {console.log("tarea creada",data)
	informacion()})
		
		.catch((error)=> console.log(error))
  }
function borrar(id){
	fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
		method: "DELETE"
	})
	.then((response) => {
		 console.log("status:", response.status);
		   console.log("ok:", response.ok);

		if(response.ok){
	setLista(lista.filter(item => item.id !== id))
		}
		else{
			console.log("error al borrar")
		}
	})
	.catch((error)=> console.log(error))
}
  const handleKeyDown = (event) => {

    if (event.key === 'Enter'  && text.trim() !== "") {
    crearTarea(text);
		   setText("");
  
    }
}
 
  


	return (
		<div id="divPadre" className="text-center">
            <h1 id="titulo">todos</h1>

  <div id="divHijo">
   
    <input id="inputPrincipal" type="text" className="form-control" aria-describedby="emailHelp" onKeyDown={handleKeyDown} onChange={(e)=>{setText(e.target.value)}} value={text} placeholder="escribe el texto aqui"/>

	<ul id="lista">{lista.map((item,index) =>(
	<li id="nuevoLi" key={item.id}>{item.label}<span onClick={() => borrar(item.id)} >x</span></li>
	))}</ul>
	<p id="contador">{lista.length} item left</p>
</div>


		
		</div>
	);
};

export default Home;
