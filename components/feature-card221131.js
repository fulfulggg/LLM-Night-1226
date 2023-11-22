import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard221131 = (props) => {
  return (
    <>
      <div
        className={`feature-card221131-feature-card ${props.rootClassName} `}
      >
        <svg viewBox="0 0 1024 1024" className="feature-card221131-icon">
          <path d="M342 214l468 298-468 298v-596z"></path>
        </svg>
        <div className="feature-card221131-container">
          <h2 className="feature-card221131-text">{props.title}</h2>
          <li className="feature-card221131-li list-item">
            <span>各人の関心事を知るため</span>
          </li>
          <li className="feature-card221131-li1 list-item">
            <span>5~10分程度。ごく簡単なものでOK。資料も必ずしも必要なし</span>
          </li>
          <li className="list-item">
            <span>プロジェクター、PCはこちらで用意（各人のPCでも可）</span>
          </li>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card221131-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card221131-icon {
            fill: var(--dl-color-gray-500);
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feature-card221131-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card221131-text {
            font-size: 20px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card221131-li {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card221131-li1 {
            margin-bottom: var(--dl-space-space-halfunit);
          }

          .feature-card221131-root-class-name2 {
            width: auto;
          }
          @media (max-width: 991px) {
            .feature-card221131-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card221131-text {
              font-size: 20px;
            }
          }
          @media (max-width: 767px) {
            .feature-card221131-feature-card {
              flex-direction: row;
            }
            .feature-card221131-icon {
              width: 20px;
              height: 20px;
            }
            .feature-card221131-container {
              flex-direction: column;
            }
            .feature-card221131-text {
              font-size: 20px;
            }
          }
          @media (max-width: 479px) {
            .feature-card221131-feature-card {
              width: 100%;
            }
            .feature-card221131-icon {
              width: 16px;
              height: 16px;
              margin-right: var(--dl-space-space-halfunit);
            }
            .feature-card221131-container {
              flex-direction: column;
            }
            .feature-card221131-text {
              font-size: 16px;
            }
            .feature-card221131-root-class-name2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard221131.defaultProps = {
  title: 'プレゼンについて',
  rootClassName: '',
  description: '2,000円（食べ物、飲み物こちらで用意します）',
}

FeatureCard221131.propTypes = {
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard221131
