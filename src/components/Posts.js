import React from "react";
import PostDetails from './PostDetails';
import PostFrom from "./PostFrom";

class Post extends React.Component {
    //data
    constructor() {
        super();
        this.state = {
            categories: [
                { code: 'react', name: 'React' },
                { code: 'reduct', name: 'React' },
                { code: 'jsx', name: 'JSX' },
                { code: 'angular', name: 'Angular' },
            ],
            posts: [
                {
                    id: 1, title: 'Introduction to React JS',
                    body: 'This provides an introduction to react Js',
                    author: 'Eswar', category: 'react'
                }, {
                    id: 2, title: 'Advance to React JS',
                    body: 'This provides Advance introduction to react Js',
                    author: 'Eswarayya', category: 'react'
                }, {
                    id: 3, title: 'Introduction to Redux',
                    body: 'This provides an introduction to react Js',
                    author: 'Ayya', category: 'redux'
                },

            ],
            filterPosts : [],
            isFiltered : false
        };
    }

  

    // logic & template
    renderPost() {
        if(!this.state.isFiltered) {
            // all post as filtered
            this.state.filterPosts = this.state.posts;
        }
        return (
            <div className="col-sm-8">
                <h3>Post</h3>
                {
                    this.state.posts.map((post) =>
                        <PostDetails key={post.id} post={post} />
                    )
                }

            </div>
        )
    }

    //handleNewPost 
    handleNewPost =(post) =>{
        // console.log(post);
        this.setState((prevState)=>{
            const id = (prevState.posts.length ===0) ? 1 : prevState.posts[prevState.posts.length-1].id+1;
            post = {...post, id:id};
            return { posts : [...prevState.posts,  post]}
        });
    }
   

    // Events Handlers
    handleFilterCategoryChange(event) {
        const post = this.state.post;
        this.setState({ post: { ...post, category: event.target.value } });

        this.setState((prevState)=>{
            let filterPosts = prevState.posts.filter(post=>{
                return post.category === event.target.value;
            });
            this.state.isFiltered = true;
            this.state.post.category = event.target.value;
            return { filterPosts : filterPosts }
        });
       
    }


    // render create post form 
    renderForm() {
        return (
            <PostFrom categories={this.state.categories} onNewPost={this.handleNewPost} />
        )
    }

    //filter post 
    filterPost() {
        return (
            <div>
                <h3 for="author">Select posts buy  category</h3>
                    <select className='form-control' id="category" name="category" value={this.state.post.category}
                        onChange={this.handleFilterCategoryChange} >
                        <option>ALL</option>
                        {this.renderCategories()}
                </select>
            </div>
        )
    }


    // default render method
    render() {
        return (
            <div className="row">
                {this.renderForm()}
                {this.renderPost()}
            </div>
        )
    }

} //Post

export default Post;


