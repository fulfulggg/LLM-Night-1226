import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard223 = (props) => {
  return (
    <>
      <div className={`feature-card223-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card223-icon">
          <path d="M896 640v256h-256l98-98-124-122 62-62 122 124zM384 896h-256v-256l98 98 122-124 62 62-124 122zM128 384v-256h256l-98 98 124 122-62 62-122-124zM640 128h256v256l-98-98-122 124-62-62 124-122z"></path>
        </svg>
        <div className="feature-card223-container">
          <h2 className="feature-card223-text">{props.title}</h2>
          <span className="feature-card223-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card223-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card223-icon {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card223-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card223-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card223-text1 {
            font-family: 'Raleway';
          }
          .feature-card223-root-class-name {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card223-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card223-feature-card {
              flex-direction: row;
            }
            .feature-card223-container {
              flex-direction: column;
            }
            .feature-card223-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card223-feature-card {
              width: 100%;
              justify-content: flex-start;
            }
            .feature-card223-icon {
              fill: var(--dl-color-gray-500);
              width: 16px;
              height: 16px;
            }
            .feature-card223-container {
              flex-direction: column;
            }
            .feature-card223-text {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard223.defaultProps = {
  rootClassName: '',
  description: '2023年12月8日 19時',
  title: '日時',
}

FeatureCard223.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard223
