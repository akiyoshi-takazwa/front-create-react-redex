import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getEvent, deleteEvent, putEvent } from '../actions'

class EventsShow extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const {id} = this.props.match.params
    if(id)this.props.getEvent(id)
  }

  renderField(field){
    const { input, label, type, meta: { touched, error } } =field

    return(
      <TextField required label={label} type={type} helperText={touched && error} {...input}/>  
    )
  }

  async onDeleteClick(){
    const {id} = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const {handleSubmit, pristine, submitting, invalid} = this.props
    const style = {margin:12}
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField}></Field>
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField}></Field>
        </div>

        <div>
        <Button style={style} variant="contained" type="submit" disabled={pristine || submitting || invalid} >Submit</Button>
        <Link to="/" underline="none"><Button variant="contained">Cancel</Button></Link>
        <Link to="/" underline="none" onClick={this.onDeleteClick} style={style}><Button variant="contained">Delete</Button></Link>
        </div>
      </form>
    
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return {initialValues: event, state}
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)