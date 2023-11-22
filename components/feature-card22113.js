import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard22113 = (props) => {
  return (
    <>
      <div className={`feature-card22113-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card22113-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card22113-container">
          <h2 className="feature-card22113-text">{props.title}</h2>
          <li className="feature-card22113-li list-item">
            <span>実務で何等かAIに関わる方（特にLLM周辺）</span>
          </li>
          <li className="list-item">
            <span className="feature-card22113-text2">
              自己（グループ）紹介の簡単なプレゼンが可能な方
            </span>
          </li>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22113-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22113-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card22113-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22113-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22113-li {
            margin-bottom: var(--dl-space-space-halfunit);
          }

          .feature-card22113-root-class-name2 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card22113-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22113-text {
              font-size: 20px;
            }
            .feature-card22113-text2 {
              margin-top: var(--dl-space-space-halfunit);
              padding-top: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .feature-card22113-feature-card {
              flex-direction: row;
            }
            .feature-card22113-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card22113-container {
              flex-direction: column;
            }
            .feature-card22113-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card22113-feature-card {
              width: 100%;
            }
            .feature-card22113-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card22113-container {
              flex-direction: column;
            }
            .feature-card22113-text {
              font-size: 16px;
            }
            .feature-card22113-root-class-name2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard22113.defaultProps = {
  rootClassName: '',
  description: '2,000円（食べ物、飲み物こちらで用意します）',
  title: '参加条件',
}

FeatureCard22113.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard22113
