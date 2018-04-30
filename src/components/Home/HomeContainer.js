import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Row, Col, Spin } from 'antd';
import { Filtros, Hoteles } from './';
import * as actions from '../../state/hotels/action';

const Container = styled.div`
  margin: 20px;
`;

class HomeContainer extends Component {
  componentDidMount() {
    this.props.requestHotels();
  }

  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Container>
          <Row>
            <Col span={6}>
              <Filtros {...this.props} />
            </Col>
            <Col span={18}>
              <Hoteles {...this.props} />
            </Col>
          </Row>
        </Container>
      </Spin>
    );
  }
}

HomeContainer.propTypes = {
  requestHotels: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  data: state.hotels.data,
  loading: state.hotels.loading,
});

export default connect(mapStateToProps, actions)(HomeContainer);
