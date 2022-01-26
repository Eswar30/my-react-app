import React from "react";
import PostDetails from './PostDetails';
import PostFrom from "./PostFrom";
import { getPosts, addPost, deletePost, updatePost } from '../services/PostsAPI';
import { getCategories } from '../services/CategoriesAPI';

class Post extends React.Component {
    //data
    constructor() {
        super();
        this.state = {
            categories: [],
            post :{ id: "", author: "", body: "", category: "", title: "" },
            posts: [],
            filterPosts : [],
            isFiltered : false
        };
    }


     // component lifecycle methods
     componentDidMount() {

        // load all my-app data. 
        getPosts().then ( postsObjs =>{
            // console.log("myapp post data", postsObjs);
            this.setState({ posts : postsObjs});
        }).catch(error=>{
            console.log("Failed to load my-app posts data");
        });
        

        // load all categories
        getCategories().then ( response =>{
            // console.log("my-app categories", response);
            this.setState({ categories : response});
        }).catch(error=>{
            console.log("Failed to load my-app categories data");
        });
    }
  

    // handle delete my-app post
    handleDelete= (id) => {
        // console.log(id);
        deletePost(id).then(response=>{
            this.setState((prevState)=>{
                const filteredPost = prevState.posts.filter(post=>{
                    return post.id != id;
                });
                return { posts : filteredPost };
            });
        }).catch(error=>{
            console.log("Failed to delete a post data. ");
        });
    }

    // handle update my-app post
    handleUpdate = (post) =>{
        // console.log("Update my-app post data. ", post);
        this.setState({ post: post });
    }


    // logic & template
    renderPost() {
        if(!this.state.isFiltered) {
            // all post as filtered
            this.state.filterPosts = this.state.posts;
        }
        return (
            <div className='col-sm-8'>
                <h3>All about posts</h3>
                {
                    this.state.filterPosts.map((post)=>
                        <PostDetails key={post.id} post={post} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
                    )
                }

            </div>
        )
    }

    // handle post for update or create
    handlePost = (post) =>{
        if(post.id !== undefined && post.id !=="" && post.id !=null){
            this.handleUpdatePost(post);
        } else {
            this.handleNewPost(post);
        }

    }

    //handleNewPost 
    handleNewPost =(post) =>{
        delete post.id;
        // console.log(post);
        addPost(post).then(newPost=>{
            console.log(newPost);
            this.setState((prevState)=>{
                return { posts : [...prevState.posts, newPost] }
            })
        }).catch(error=>{
            console.log("Failed to create post data");
        });
    }
   
    //handle Update Post 
    handleUpdatePost =(post)=>{
        updatePost(post).then(updatePost =>{
            console.log(updatePost);
            //reflect in UI 
            this.setState((prevState)=>{
                let updatedList = prevState.posts.map(pst=>{
                    if(pst.id === updatePost.id)
                        return updatePost;
                     else 
                        return pst;
                });
                return { posts: [...updatedList ]}
            });
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
            <PostFrom categories={this.state.categories} onNewPost={this.handlePost} post={this.state.post} />
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


