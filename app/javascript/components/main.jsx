import React, {Component} from 'react';
import Header from './header'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log_in : false
        }
    };

    render() {
        return (
            <div>
                <Header />
                
            </div>
        )
    }
}
export default Main;