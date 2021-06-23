/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import data from './data.json';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <div>
            <main>
                <section>
                    <CardGroup >
                        {this.state.data.map(item => {
                            return(
                            <HornedBeast
                            title={item.title}
                            imgURL={item.image_url}
                            description={item.description}
                            />
                        )})}
                    </CardGroup>
                </section>
            </main>
            </div>
        )
    }
}
export default Main;