import React from 'react';
import { Card as CardAnt, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImageStar from '../../assets/icons/filters/star.svg';

const Card = styled(CardAnt)`
  margin-left: 20px;

  & .ant-card-body {
    padding: 8px !important;
  }
`;

const ContentStars = styled.div`
  margin: 5px 0;
`;

const Text = styled.span`
  color: #0679b3;
  font-weight: bold;
`;

const ColBorder = styled(Col)`
  border-left: 1px dashed rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 75%;
  height: 100%;
`;

const Price = styled.div`
  color: #e16800;
  font-size: 24px;
`;

const CenterItems = styled.div`
  position: absolute;
  text-align: center;
  left: 25%;
  top: 25%;
`;

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

const FillAmenities = amenities => {
  const PathImage = 'assets/images/amenities/';
  return (
    amenities &&
    amenities.map((icon, i) => (
      <span key={icon + i} style={{ marginRight: '8px' }}>
        <img
          width="20"
          height="20"
          src={`${PathImage}${icon}.svg`}
          alt={icon}
        />
      </span>
    ))
  );
};

const Hoteles = ({ data }) => {
  const PathImage = 'assets/images/hotels/';
  return data.map(element => (
    <Card key={element.id}>
      <Row>
        <Col span={8}>
          <img
            src={`${PathImage}${element.image}`}
            alt={element.image}
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={9} offset={1}>
          <Text>{element.name}</Text>
          <ContentStars>{FillStars(element.stars)}</ContentStars>
          <span>{FillAmenities(element.amenities)}</span>
        </Col>
        <ColBorder span={6}>
          <CenterItems>
            <div>
              <div>Precio por noche por</div>
              <div>habitación</div>
            </div>
            <Price>
              ARS <strong>{element.price}</strong>
            </Price>
            <div>
              <Button type="primary" size="large">
                Ver Hotel
              </Button>
            </div>
          </CenterItems>
        </ColBorder>
      </Row>
    </Card>
  ));
};

Hoteles.propTypes = {
  data: PropTypes.any,
};

export default Hoteles;
