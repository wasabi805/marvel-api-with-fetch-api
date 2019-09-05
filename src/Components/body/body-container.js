import { connect } from "react-redux";
import Presenter from "./body-presenter";
import { timSampleAction } from "../../Logic/actions/sample-actions";

const mapStateToProps = state => {
    let {bodyHeader } = state.bodyReducer;

    return {
        bodyHeader: bodyHeader
    };
};

const Container = connect( mapStateToProps, { timSampleAction ,  })(Presenter);

export default Container;