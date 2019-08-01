import React, {useState, useEffect} from "react";
import axios from 'axios'

const EditCategory = (props) => {

    console.log(props);
    
    const [category, setCategory] = useState({});
    const [editCate, setEdit] = useState(null);
    
    const getData = () => {
        console.log("It is edit");
        
        axios.get(`http://localhost:8000/category/edit/${props.match.params.id}`)
            .then(res => {
                

               // setEdit(res.data.name)

                setCategory({
                    name: res.data.name
                })

                
            })
            
            
        }
        
        
        
        
    useEffect(() => {
       getData()
    }, []);
        
    const changeHandler = (e) => {
        setCategory(e.target.value);
    }
        

    const submitHandler = (e) => {
        e.preventDefault();

        console.log({ category });
        
        axios.put(`http://localhost:8000/category/update/${props.match.params.id}`, { category })
            .then(res => console.log(res.data))
        
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="category_name">Add New</label>
                    <input
                        value={category.name}
                        type="text"
                        className="form-control"
                        id="category_name"
                        name="category_name"
                        onChange={changeHandler}
                        placeholder="Enter newCategory"
                    />

                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditCategory;
