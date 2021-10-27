import React from 'react';

class Follower extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.follower.login}</h2>
                <img src = {this.props.follower.avatar_url} width="150" alt= 'followerImage'/>
            </div>
        )
    }
}

export default Follower;