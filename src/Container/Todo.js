import React ,{Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addTodo, editTodo, removeTodo, checkOffTodo } from '../Actions/ActionCreators'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state={
            text: '',
            edit: '',
            edittext: 'chanp'
        
        }
        this.onAddTodo = this.onAddTodo.bind(this)
        this.onEditTodo = this.onEditTodo.bind(this)
        this.onEnter = this.onEnter.bind(this)
    }

    onAddTodo (e){
        this.setState({
            text: e.target.value 
        })
    }

    onEditTodo (e){
        this.setState({
            edittext: e.target.valu
        })
    }

    onEnter (e) {
      if(e.key=='Enter'){
        this.props.addTodo(this.state.text);
        this.setState({text:''})
      }
    }



    render() {
        return (
            <div> 
                
                <input value={this.state.edit ? this.state.edittext : this.state.text}
                onChange = {this.state.edit? this.onEditTodo :this.onAddTodo}
                 placeholder="add items..."
                 onKeyPress = {this.onEnter}
                  /> 
                  <button onClick={()=> {this.state.edit?  this.props.editTodo(this.state.edittext, this.state.edit) && this.setState({edit:''})    :  this.props.addTodo(this.state.text);
                     this.setState({text: ''}) } }>{this.state.edit ? 'edit' : '+' }</button>


                <div>
                    {this.props.todo.map((t)=> 
                     (<div >
                        <ul><li className="todo" >
                        <div className={t.completed==false ? null : "strike"}>{ t.text } 
                        <button className="button" onClick={()=> {this.props.removeTodo(t.id)}}>delete</button> 
                        <button className="button" onClick={()=> {this.setState({edit: t.id}); this.setState({edittext:t.text})}}>edit</button>
                        <button className="button" onClick={()=> {this.props.checkOffTodo(t.id) }}>complete</button>
                        </div>
                         </li></ul> 
                     </div>))}
                </div>
        

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.Todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        addTodo, editTodo, removeTodo, checkOffTodo
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(Todo)