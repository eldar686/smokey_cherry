import React from 'react';

class Test extends React.Component {
  render(){
    return(
      <div className={this.props.grid}>{this.props.value}</div>
    );
  }
}

export default Test;
