import React from 'react';
import './ShippingIcon.scss';

export const ShippingIcon: React.FC = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="shippingIcon"
    >
      <g>
        <path
          d="M11.0287 2.53961C11.6327 2.20402 12.3672 2.20402 12.9713 2.5396L20.4856 6.71425C20.8031 6.89062 21 7.22524 21 7.5884V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6327 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V7.5884C3 7.22524 3.19689 6.89062 3.51436 6.71425L11.0287 2.53961Z" className="shippingIcon__P"/>
        <path d="M7.5 4.5L16.5 9.5V13" className="shippingIcon__P"/>
        <path d="M6 12.3281L9 14" className="shippingIcon__P"/>
        <path d="M3 7L12 12M12 12L21 7M12 12V21.5" className="shippingIcon__P"/>
      </g>
    </svg>
  );
};
