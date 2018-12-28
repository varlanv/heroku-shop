import React, {Component} from "react";
import SearchBar from "./SearchBar";
import AuthorizationMenu from "./AuthorizationMenu";
import NavigationBar from "./NavigationBar";
import CartIcon from "./CartIcon";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    render() {
        return (
            <header id="header">
                <SearchBar/>
                <AuthorizationMenu handleRegistrationForm={this.props.handleRegistrationForm}
                                   handleLoginForm={this.props.handleLoginForm}
                />
                <NavigationBar/>
                <CartIcon handleCartActivation={this.props.handleCartActivation}/>
            </header>
        );
    }
}

export default Header;
