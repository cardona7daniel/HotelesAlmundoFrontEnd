import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse, Row, Col, Input, Checkbox } from 'antd';
import ImageSearch from '../../assets/icons/filters/search.svg';
import ImageStarBlue from '../../assets/icons/filters/starBlue.svg';
import ImageStar from '../../assets/icons/filters/star.svg';

const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const Panel = Collapse.Panel;

const FilterCard = styled.div`
  width: 100%;
  padding: 5px 10px;
  background: #fff;
  margin-bottom: 5px;
`;

const Text = styled.span`
  color: #0679b3;
  font-weight: bold;
`;

const CheckboxGroupStyle = styled(CheckboxGroup)`
  & .ant-checkbox-group-item {
    display: block;
  }
`;

const TitleHotel = () => {
  return (
    <Row>
      <Col span={22}>
        <Text>Nombre del hotel</Text>
      </Col>
      <Col span={1}>
        <img width="15" height="15" src={ImageSearch} alt="Buscar" />
      </Col>
    </Row>
  );
};

const TitleStars = () => {
  return (
    <Row>
      <Col span={22}>
        <Text>Estrellas</Text>
      </Col>
      <Col span={1}>
        <img width="15" height="15" src={ImageStarBlue} alt="Estrella" />
      </Col>
    </Row>
  );
};

const FillStars = starsQuantity => {
  const stars = [];
  for (let i = 0; i < starsQuantity; i += 1) {
    stars.push(
      <span key={i + starsQuantity}>
        <img width="15" height="15" src={ImageStar} alt="Estrella" />
      </span>,
    );
  }
  return stars;
};

class Filtros extends Component {
  onSearch = value => {
    this.props.filterByName(value);
  };

  onChange = value => {
    this.props.filterByStars(value);
  };

  render() {
    const options = [
      { key: '*', label: 'Todas las estrellas', value: '*' },
      { key: '5', label: FillStars(5), value: '5' },
      { key: '4', label: FillStars(4), value: '4' },
      { key: '3', label: FillStars(3), value: '3' },
      { key: '2', label: FillStars(2), value: '2' },
      { key: '1', label: FillStars(1), value: '1' },
    ];
    return (
      <div>
        <FilterCard>
          <h4>Filtros</h4>
        </FilterCard>
        <Collapse defaultActiveKey={['1', '2']}>
          <Panel header={<TitleHotel />} key="1">
            <Search
              placeholder="Ingrese el nombre del hotel"
              onSearch={this.onSearch}
              enterButton="Aceptar"
              size="small"
            />
          </Panel>
          <Panel header={<TitleStars />} key="2">
            <CheckboxGroupStyle
              options={options}
              defaultValue={['*']}
              onChange={this.onChange}
            />
          </Panel>
        </Collapse>
      </div>
    );
  }
}

Filtros.propTypes = {
  filterByName: PropTypes.func,
  filterByStars: PropTypes.func,
};

export default Filtros;
