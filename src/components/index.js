import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-input';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  _onChange = (inEvent) => {
    const { value } = inEvent.target;
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <input
        data-component={CLASS_NAME}
        onChange={this._onChange}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}