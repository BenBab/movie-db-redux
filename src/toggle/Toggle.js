import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

class Toggle extends Component {
  render() {
    return (
      <div>
        {this.props.messageVisibility &&
        <p>you will see this is redux toggle is working</p>
        }
        <button onClick={this.props.toggleMessage}>Toggle Me
        </button>
      </div>
    );
  }
}
// before bindActionCreators
// <button onClick={() => this.props.dispatch(toggleMessage())}>Toggle Me
//         </button>
const mapStateToProps = state => ({
  toggle: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  toggleMessage,
}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
