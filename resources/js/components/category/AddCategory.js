import React, {useState} from "react";
import axios from 'axios'

const AddCategory = () => {

    const [category, setCategory] = useState({});

    const changeHandler = (e) => {
        setCategory(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log({ category });
        
        axios.post('http://localhost:8000/category/store', { category })
            .then(res => console.log(res.data))
        
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label for="category_name">Add New</label>
                    <input
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

export default AddCategory;
