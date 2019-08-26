import React, { Component } from 'react';
import {connect} from "react-redux";

import '../../../../styles/common/header.scss';

class Header extends Component {
    
    constructor(props) {
        super(props);
    }

    showMobileMenu(){
        const mobileMenu = this.props.links.mobileMenuButton.current;
        const authorizationBlock = this.props.links.authorization.current;

        console.log(this.props);

        mobileMenu && mobileMenu.classList.remove('menu--hidden');
        authorizationBlock && authorizationBlock.classList.add('registration-basket--shown-menu');
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <div onClick={this.showMobileMenu.bind(this)} className='mobile-burger'>
                        <i className='icofont-navigation-menu'></i>
                    </div>
                    <p className='logo'>ROOTS</p>
                    <div ref={this.props.links.authorization} className='registration-basket'>
                        <div className='sign-in-wrapper'>
                            <i className='icofont-search-1'></i>
                            <p>Sign in <span>or</span> Register</p>
                        </div>
                        <div className='basket-wrapper'>
                            <i className='icofont-shopping-cart'></i>
                            <p>(2)</p>
                        </div>
                    </div>
                    <div className='search-wrapper'>
                        <button type='submit'>
                            <i className='icofont-search-1'></i>
                        </button>
                        <label htmlFor='search-field'></label>
                        <input type='text' className='search-field' id='search-field' placeholder='What are you looking for?' />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        MainPageReducer: state.MainPageReducer
    }
};

export default connect(mapStateToProps)(Header);