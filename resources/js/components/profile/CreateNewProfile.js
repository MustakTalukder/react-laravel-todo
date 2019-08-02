import React, {useState} from "react";

const CreateNewProfile = () => {


    const [values, setValues] = useState({
        name: '',
        email: '',
        image: ''
    })

    const changeHandler = name => (e) => {
        
        console.log(name);

        if (name === 'image') {

            let files = e.target.files || e.dataTransfer.files;

            if (!files.length) {
                return;
            }
    
            createImage(files[0]);
            
        } else {
            
            setValues({
                ...values,
                [name]: e.target.value
            })
            
        }
    }

    const createImage = (file) => {
        let reader = new FileReader();

        reader.onload = (e) => {
            setValues({
                ...values,
                image: e.target.result
            })
        }

        reader.readAsDataURL(file);
    }




    const submitHandler = (e) => {
        e.preventDefault();

        console.log("values =", values);
        

        axios.post('http://localhost:8000/profile/store', values)
        .then(res => console.log(res.data))
    
    }




    return (
        <div>
            <form
                onSubmit={submitHandler}
                enctype="multipart/form-data"
                // method="post"
            >

                

                <div className="form-group">
                    <label for="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        name="name"
                        onChange={changeHandler('name')}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={changeHandler('email')}
                    />
                </div>
                <div className="form-group">
                    <label for="email">Image: </label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={changeHandler('image')}
                        id="image"
                        
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateNewProfile;
