import React, {Component} from 'react';

class Comment extends Component {
    render () {
        const {content} = this.props;           //es6
        // const content = this.props.content;  //똑같은것
        return (
            <div>
                {content}
            </div>
        );
    }
}

export {
    Comment
}