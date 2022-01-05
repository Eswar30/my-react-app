import React from "react";
import PostDetails from './PostDetails';

class Post extends React.Component {
    //data
    constructor() {
        super();
        // Data of react component or //statefull component.
        this.state = {
        post : { id:0, title:'', author:'', category:'' },
        categories: [
            { code:'react', name:'React'},
            { code:'reduct', name:'React'},
            { code:'jsx', name:'JSX'},
            { code:'angular', name:'Angular'},
        ],
        posts: [
            {
                id:1, title: 'Introduction to React JS',
                body:'This provides an introduction to react Js',
                author :'Eswar', category:'react'
            }, {
                id:2, title: 'Advance to React JS',
                body:'This provides Advance introduction to react Js',
                author :'Eswarayya', category:'react'
            }, {
                id:3, title: 'Introduction to Redux',
                body:'This provides an introduction to react Js',
                author :'Ayya', category:'redux'
            },

        ],
    };
  }

  //render categories

  renderCategories() {
    return this.state.categories.map(category=>{
        return <option key={category.code} value={category.code}> {category.name} </option>
    });
}

 // logic & template
    renderPost() {
        return(
            <div className="col-sm-8">
                <h3>Post</h3>
                { 
                    this.state.posts.map((post)=>
                        <PostDetails key={post.id} post={post}  />
                    )
                }

            </div>
        )
    }
    
// default render method
    render() {
        return (
            <div className="row">
                {this.renderPost()}
            </div>
        )      
    }

 } //Post

export default Post;


