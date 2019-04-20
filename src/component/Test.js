import { throws } from "assert";

class Test extends Componet {
    constructor(props) {
        super(props);
        throws.state = {
            content: ""
        }
    }
    onClick() {
        this.setState({
            number : this.state.number + 1
        })
    }
    render () {
        
        const {content} = this.state;
        return <div>
            <div>{content}</div>
            <button onClick={}>button</button>
        </div>
    }
}