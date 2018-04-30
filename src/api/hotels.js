import instance from './instance';

const getHotelsApi = () => instance.get('hotels');

const filterByNameApi = hotel => instance.get(`hotels/${hotel}`);

const filterByStarsApi = stars => instance.post(`hotels`, { stars });

export { getHotelsApi, filterByNameApi, filterByStarsApi };
