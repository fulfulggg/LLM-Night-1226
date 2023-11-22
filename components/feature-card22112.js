import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22112 = (props) => {
  return (
    <>
      <div className={`feature-card22112-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22112-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card22112-container">
          <div className="feature-card22112-container1">
            <h2 className="feature-card22112-text">{props.title}</h2>
            <ul className="list">
              <li className="list-item">
                <span>Text</span>
              </li>
              <li className="list-item">
                <span>Text</span>
              </li>
              <li className="list-item">
                <span>Text</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22112-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22112-icon {
            fill: var(--dl-color-gray-500);
            width: 2rem;
            height: 2rem;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .feature-card22112-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature-card22112-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22112-text {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }

          @media (max-width: 767px) {
            .feature-card22112-feature-card {
              flex-direction: row;
            }
            .feature-card22112-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card22112-container1 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22112.defaultProps = {
  rootClassName: '',
  title: '参加前提',
}

FeatureCard22112.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard22112
