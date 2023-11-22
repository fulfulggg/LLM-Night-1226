import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22 = (props) => {
  return (
    <>
      <div className={`feature-card22-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card22-container">
          <h2 className="feature-card22-text">{props.title}</h2>
          <span className="feature-card22-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card22-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22-text1 {
            font-family: 'Raleway';
          }
          .feature-card22-root-class-name1 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card22-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card22-feature-card {
              flex-direction: row;
            }
            .feature-card22-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22-container {
              flex-direction: column;
            }
            .feature-card22-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card22-feature-card {
              width: 100%;
              justify-content: flex-start;
            }
            .feature-card22-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card22-container {
              flex-direction: column;
            }
            .feature-card22-text {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .feature-card22-root-class-name1 {
              width: 100%;
              position: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22.defaultProps = {
  description: '2023年12月8日 19時',
  rootClassName: '',
  title: '日時',
}

FeatureCard22.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard22
