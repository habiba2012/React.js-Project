import React, { Component } from 'react';
import PostPreview from './PostPreview';

class Container extends Component {
    render(){
        return(
             <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <PostPreview />
            </div>
        </div>
    </div>
        );
    }
}

export default Container; 