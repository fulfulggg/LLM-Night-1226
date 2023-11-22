import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22111 = (props) => {
  return (
    <>
      <div className={`feature-card22111-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22111-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card22111-container">
          <h2 className="feature-card22111-text">{props.title}</h2>
          <span className="feature-card22111-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22111-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22111-icon {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .feature-card22111-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22111-text {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22111-text1 {
            font-family: 'Raleway';
          }

          @media (max-width: 767px) {
            .feature-card22111-feature-card {
              flex-direction: row;
            }
            .feature-card22111-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card22111-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22111.defaultProps = {
  title: '会費',
  rootClassName: '',
  description: '2,000円（食べ物、飲み物こちらで用意します）',
}

FeatureCard22111.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard22111
