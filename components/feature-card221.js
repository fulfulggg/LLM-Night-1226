import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard221 = (props) => {
  return (
    <>
      <div className={`feature-card221-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card221-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card221-container">
          <h2 className="feature-card221-text">{props.title}</h2>
          <span className="feature-card221-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card221-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card221-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card221-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card221-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card221-text1 {
            font-family: 'Raleway';
          }

          .feature-card221-root-class-name2 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card221-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card221-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card221-feature-card {
              flex-direction: row;
            }
            .feature-card221-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card221-container {
              flex-direction: column;
            }
            .feature-card221-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card221-feature-card {
              width: 100%;
            }
            .feature-card221-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card221-container {
              flex-direction: column;
            }
            .feature-card221-text {
              font-size: 16px;
            }
            .feature-card221-root-class-name2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard221.defaultProps = {
  description: '代々木上原の自宅（参加者にご連絡します）',
  title: '場所',
  rootClassName: '',
}

FeatureCard221.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard221
