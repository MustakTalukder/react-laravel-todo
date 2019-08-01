import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'



import AddCategory from './AddCategory';
import ListCategories from './ListCategories';
import EditCategory from './EditCategory'



const IndexCategory = () => {
    return (
        <Router>
            <div>
                <hr/>
                <h2>Categories</h2>
                <Link className="btn btn-success" to="/category">List</Link>&nbsp;
                <Link className="btn btn-success" to="/category/add">Add new</Link>

                <Route path="/category" exact component={ListCategories} />
                <Route path="/category/add" exact component={AddCategory} />
                <Route path="/category/edit/:id" exact component={EditCategory} />
            </div>
        </Router>
    )
}

export default IndexCategory
