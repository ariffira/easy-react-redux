import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add A New Post</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup className="col-md-6">
            <Label>Title: </Label>
            <Input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label>Body: </Label>
            <Input type="textarea"
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </FormGroup>
          <br />
          <Button color="success" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { createPost })(PostForm);
