import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CourseAction from '../../actions/CourseAction'

class Course extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.state = {
            course: {title:""}
        }

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        console.log("??????????? ",props)
        
    }

    onTitleChange(event) {
        let course = this.state.course;
        course.title = event.target.value;
        this.setState({course:course})
    }

    onClickSave() {
        this.props.actions.CourseAction(this.state.course)
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }
    
    render(){
        return(
            <div>
                {this.props.course.map(this.courseRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
                <input type="submit" value="add course" onClick={this.onClickSave} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log("#######",state)
    return {
        course: state.course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CourseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)