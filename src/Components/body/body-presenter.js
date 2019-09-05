
import React , {Component} from "react";


class BodyPresenter extends Component{
    constructor(props){
        super(props);
        this.state={
            marvel : [],
            isLoading : true
        };
    }

    //  see for set up , read section : How to Use Async Await in React using the async/await syntax: https://www.valentinog.com/blog/await-react/
    //  see implentation : https://www.youtube.com/watch?v=T3Px88x_PsA

    async componentDidMount() {

        const url = '/api/marvel/marvel-comics';

        const response = await fetch(url);

        const data = await response.json();


        this.setState({
            marvel : data,
        });

        console.log(data, 'this is data')

    }

    render(){
        console.log(this.state);

        return (
            <section id={"body"}>
                {this.state.isLoading || !this.state.marvel ? <div>loading ... </div> :  <div> STUFF </div> }
            </section>
        );
    }

};

export default BodyPresenter;