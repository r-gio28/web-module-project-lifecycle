import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class FollowerList extends React.Component{
    

    state = {
        followers: []
    }

    componentDidUpdate() {
        axios.get(`https://api.github.com/users/${this.props.userHandle}/followers`)
        .then(resp => {
            this.setState({
                ...this.state,
                followers: resp.data
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {
        return(
            <div>
                {
                    this.state.followers.map(user => {
                        return <Follower follower={user} key={user.id}/>
                    })
                }
            </div>
        )
    }
}

export default FollowerList;