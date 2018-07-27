import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
    // will be called immediately when the component is added to the dom
    componentDidMount() {
        this.props.fetchPosts(); //kick off the data loading process
    }
    
    render() {
        console.log(this.props.posts);
        return (
            <div>
                Posts Index
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);