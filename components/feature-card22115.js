import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22115 = (props) => {
  return (
    <>
      <div className={`feature-card22115-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22115-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card22115-container">
          <h2 className="feature-card22115-text">{props.title}</h2>
          <span className="feature-card22115-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22115-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22115-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card22115-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22115-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22115-text1 {
            font-family: 'Raleway';
          }

          .feature-card22115-root-class-name2 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card22115-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22115-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card22115-feature-card {
              flex-direction: row;
            }
            .feature-card22115-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22115-container {
              flex-direction: column;
            }
            .feature-card22115-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card22115-feature-card {
              width: 100%;
              margin-right: 0px;
            }
            .feature-card22115-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card22115-container {
              flex-direction: column;
            }
            .feature-card22115-text {
              font-size: 16px;
            }
            .feature-card22115-root-class-name2 {
              right: -23px;
              width: 100%;
              bottom: 0px;
              position: static;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22115.defaultProps = {
  title: '参加方法',
  rootClassName: '',
  description:
    'Registerボタンから登録ください。追ってメール連絡します。中村に直接連絡でも可（hiroshi.nakamura@fulgram.com）',
}

FeatureCard22115.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard22115
