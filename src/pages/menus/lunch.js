import React, {Component} from 'react';
import CustomParallax from "../../components/CustomParallax";
import menu_top from "../../assets/menu_top.jpg";

class Lunch extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Lunch Menu' img={menu_top} height={300}/>

            </React.Fragment>
        );
    }
}

export default Lunch;