import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {        
        if (dish != null) {            
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody> 
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div />
            )
        }
    }

    renderComments(comments) {
        if (comments != null) {  
            const commentsGlobal = comments.map(c => { 
                    
                return (
                    <li key={c.id}>
                        <p>{c.comment}</p>
                        <p>-- {c.author} , {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(c.date))}</p>
                        
                    </li>
                )
            });
                
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {commentsGlobal}
                    </ul>

                </div>

            )
        } else {
            return (
                <div />
            )
        }

        
    }


    render() {
        if (this.props.dish == null) {
            return (<div></div>)
        }
        return (
            <div className="row">
                {this.renderDish(this.props.dish)} 
                {this.renderComments(this.props.dish.comments)} 
            </div>
        );
    }
}
export default DishDetail;