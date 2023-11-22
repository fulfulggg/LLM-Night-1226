import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard2211 = (props) => {
  return (
    <>
      <div className={`feature-card2211-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card2211-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card2211-container">
          <h2 className="feature-card2211-text">{props.title}</h2>
          <span className="feature-card2211-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card2211-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card2211-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card2211-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card2211-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card2211-text1 {
            font-family: 'Raleway';
          }

          .feature-card2211-root-class-name2 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card2211-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card2211-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card2211-feature-card {
              flex-direction: row;
            }
            .feature-card2211-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card2211-container {
              flex-direction: column;
            }
            .feature-card2211-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card2211-feature-card {
              width: 100%;
            }
            .feature-card2211-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card2211-container {
              flex-direction: column;
            }
            .feature-card2211-text {
              font-size: 16px;
            }
            .feature-card2211-root-class-name2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard2211.defaultProps = {
  rootClassName: '',
  title: '会費',
  description: '2,000円（食べ物、飲み物こちらで用意します）',
}

FeatureCard2211.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard2211
