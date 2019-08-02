import React from 'react'

import { BrowserRouter as Router,Link, Route} from 'react-router-dom'


import ProfileList from './ProfileList';
import UpdateProfile from './UpdateProfile';
import CreateNewProfile from './CreateNewProfile';

const IndexProfile = () => {
    return (
        <Router>
            <div>

                {/* <ProfileList /> */}

                <Link to="/profile">Profile List</Link>
                <Link to="/profile/create">Create Profile</Link>
                <Link to="/profile/edit">Update Profile</Link>

                <Route path="/profile" exact component={ProfileList} />
                <Route path="/profile/create" exact component={CreateNewProfile} />
                <Route path="/profile/edit" exact component={UpdateProfile} />

                

                
            
            </div>
        </Router>
    )
}

export default IndexProfile;