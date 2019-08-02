import React, {useState, useEffect} from 'react';
import axios from 'axios'



const ProfileList = () => {

    const [profiles, setProfiles] = useState([])


    const getData = () => {
        axios.get(`http://localhost:8000/profile/list`)
        .then(res => {

            setProfiles(res.data)

            
        })
    }


    useEffect(() => {
        getData()
     }, []);



    return (
        <div>

            <h2>Profile List</h2>
            <hr />
            
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                
            {
                        profiles.map((profile, index) => (
                
                            <tr>
                                <th scope="row">{index}</th>
                                <td><img style={{width: '50px', height: '50px'}} src={`images/${profile.image}`} alt=""/></td>
                                <td>{profile.email}</td>
                                <td>{profile.email}</td>
                               
                            </tr>
                        ))
                    }
                        
                

            </tbody>
            </table>
        </div>
    )
}

export default ProfileList;