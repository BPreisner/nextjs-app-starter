// Temporary page
import React from 'react';
import styled from 'styled-components';
import { DispatchProp, connect } from 'react-redux';

const Title = styled.h1`
   color: red;
   font-size: 50px;
`;

class Test extends React.Component {
   state = {
      xxxx: 'My page',
   };

   render() {
      return (
         <Title onClick={() => this.props.addCount()}>{this.state.xxxx}</Title>
      );
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCount: () => dispatch({ type: 'ADD' }),
   };
};

export default connect(
   null,
   mapDispatchToProps,
)(Test);
