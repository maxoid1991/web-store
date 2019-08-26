import React, { Component } from 'react';

import '../../../../styles/common/menu.scss';
import { data as menu } from './menuList';
import { Category } from './menuElements';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    drawMenu(){
        const result   = [];
        const menuData = menu.menuItems;

        for (let item in menuData) {
            result.push(<Category key={item} title={item} brandslist={menuData[item]} />);
        }
        
        return result;
    }

    toggleCategory(event) {
        const { target }        = event;
        const category          = target.closest('.category');

        if (!category) return;

        const menuItem          = target.classList.contains('menu-item');
        const subMenuItem       = target.classList.contains('title');
        const subMenuWrapper    = target.closest('ul');

        category && menuItem ? category.classList.toggle('category--shown') : false;
        subMenuItem && subMenuWrapper ? subMenuWrapper.classList.toggle('shown') : false;
    }

    hideMenu(event){
        const { target }    = event;
        const menu          = target.closest('.menu');
        const authorization = this.props.links.authorization.current;

        menu && menu.classList.add('menu--hidden');
        authorization && authorization.classList.toggle('registration-basket--shown-menu');
    }

    render() {
        return (
            <div>
                <div ref={this.props.links.mobileMenuButton} className='menu menu--hidden'>
                    <div onClick={this.hideMenu.bind(this)} className='close-wrapper'>
                        <i className="icofont-close-line-circled"></i>
                    </div>
                    <div onClick={this.toggleCategory.bind(this)} className='menu-wrapper'>
                        {this.drawMenu()}
                    </div>
                </div>
            </div>
        )
    }
}

export { Menu };