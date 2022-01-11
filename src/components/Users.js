import React from "react";
import UserDetails from './UserDetails';


class User extends React.Component {
    //data
    constructor() {
        super();

        this.state = {
            post: { id: 0, name: '', location: '', role: '' },
            roles: [
                { dept: 'CSE', name: 'Eswar' },
                { dept: 'IT',  name: 'Ayya' },
                { dept: 'ECE', name: 'John' },
                { dept: 'EEE', name: 'Mike' },
            ],
            posts: [
                {
                    id: 1, name: 'Introduction to CSE',
                    body: 'This provides an introduction to CSE',
                    location: 'Chennai', role: 'Leader'
                }, {
                    id: 2, name: 'Advance to IT',
                    body: 'This provides Advance introduction to IT',
                    location: 'Madurai', role: 'Student'
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
