import React from 'react';

const Card = ({element,index,deleteTodo}) => {
    return (
        <div>
             <h1>My Todo's</h1>
            <div key={index}>
           
                <h1>{element.id}</h1>
                <h1>{element.title}</h1>
                <h1>{element.description}</h1>
                Status:<select>
                    <option >Completed</option>
                    <option >NotCompleted</option>
                </select>
                <button>Edit</button>
                <button onClick={()=>deleteTodo(element.id)}>Delete</button>
            </div>
            
             
        </div>
    );
};

export default Card;