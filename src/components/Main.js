/* eslint-disable */
import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';
import data from './data.json';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             data: data
    //         }
    //     }

    //     render() {
    //         return (
    //             <div>
    //             <main>
    //                 <section>
    //                     <CardGroup >
    //                         {this.state.data.map(item => {
    //                             return(
    //                             <HornedBeast
    //                             title={item.title}
    //                             imgURL={item.image_url}
    //                             description={item.description}
    //                             />
    //                         )})}
    //                     </CardGroup>
    //                 </section>
    //             </main>
    //             </div>
    //         )
    //     }
    // }

    //LAB04
    handleEvent = (event) => {
        if (event.target.value === "All") {
            this.props.filterHorns(event.target.value);
        } else {
            this.props.filterHorns(+event.target.value);
        }
    }
    render() {


        return (
            <div>
                <Form>
                    <Form.Group controlId="hornsSelected">
                        <Form.Label>Number of horns</Form.Label>
                        <Form.Control onChange={this.handleFilter} as="select">
                            <option>Any</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <CardColumns>
                    {data.map((item) => {
                        return (
                            < HornedBeast

                                title={item.title}
                                imgURL={item.image_url}
                                description={item.description}
                                horns={item.horns}
                                showModal={this.props.showModal}
                                keyword={item.keyword}
                            />
                        )
                    })}
                </CardColumns>


            </div>
        )
    }
}
export default Main;