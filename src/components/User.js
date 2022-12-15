import React from 'react';

class User extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.user.name}</h1>
                <img src = {this.props.user.avatar_url} width="250" alt='UserImage'/>
                <h2>Public Repos: {this.props.user.public_repos}</h2>
                <h2>Followers: {this.props.user.followers}</h2>
            </div>
        )
    }
}

export default User;