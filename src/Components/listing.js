import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

import Item from './item';

const Listing = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                // console.log(item)
                <Item key={item.listing_id} item={item} />
            ))}
        </div>
    );
};

Listing.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
      }),
    ),
  };

export default Listing;