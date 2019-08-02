import React from 'react';

const ProfileList = () => {
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
                <tr>
                    <th scope="row">1</th>
                    <td>image</td>
                    <td>name</td>
                    <td>@email</td>
                </tr>

            </tbody>
            </table>
        </div>
    )
}

export default ProfileList;