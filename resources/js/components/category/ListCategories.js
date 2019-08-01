
import React, {useState, useEffect} from 'react'

import axios from 'axios'
import  {Link} from 'react-router-dom'

const ListCategories = () => {

    const [state, setState] = useState([])



    const getData = () => {
        axios.get('http://localhost:8000/category')
            .then(res => {

               // setState([state, ...res.data]);
                setState(res.data)
               
            })
        
        
    }


    useEffect(() => {
       getData()
    }, []);
    

    const deleteHandler = (id) => {
        console.log("id",id);
        
        axios.delete(`http://localhost:8000/category/delete/${id}`)
            .then(res => console.log(res.data))
        
        
        // let newState = state;

        // for (let i = 0; i < state.length; i++){
        //     if (newState[i].id === id) {
        //         newState.splice(i, 1);
                
        //     }
        // }
        //setState([state, ...state])

        getData()
    }


    const updateHandler = () => {

    }



    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created_At</th>
                    <th scope="col">Updated_At</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((category, index) => (
                            
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{category.name}</td>
                                <td>{category.active === 1 ? 'Active' : 'InActive'}</td>
                                <td>{category.created_at}</td>
                                <td>{category.updated_at}</td>
                                <td><a onClick={() => deleteHandler(category.id)} href="#">Delete</a></td>
                                <td><Link to={`/category/edit/${category.id}`}>Edit</Link></td>
                            </tr>
                        ))
                    }



                </tbody>
             </table>
        </div>
        

    )
}

export default ListCategories
