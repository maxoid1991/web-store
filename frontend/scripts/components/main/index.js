import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


//Components
import Header from '../common/header/header';
import { Menu } from '../common/menu/menu';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phones: this.props.MainPageReducer.phones
        }

        this.nodeLinks = {
            authorization    : React.createRef(),
            mobileMenuButton : React.createRef()
        }
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <Header links={this.nodeLinks} />
                    <Menu links={this.nodeLinks} />
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        MainPageReducer: state.MainPageReducer
    }
};

export default connect(mapStateToProps)(Main);

