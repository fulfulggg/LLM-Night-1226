import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>LLMNight-20231226</title>
          <meta property="og:title" content="LLMNight-20231226" />
          <meta property="og:image" content="/public/target.png" />
        </Head>
        <header data-role="Header" className="home-header nav_main">
          <div className="home-container01">
            <img
              alt="image"
              src="/external/fulgram_white-200h.png"
              className="home-image"
            />
            <a
              href="https://forms.gle/NciHvvh7NWP6AcaA6"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link"
            >
              <div className="home-container02">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 128h320v768h-320zM576 128h320v768h-320z"></path>
                </svg>
                <button type="button" className="home-button button">
                  Register
                </button>
              </div>
            </a>
          </div>
        </header>
        <div className="home-gallery-card">
          <video
            src="/external/llmnight_f_231122.mp4"
            loop
            muted
            poster="/public/target.png" width="300" height="300"
            preload="auto"
            autoPlay
            playsInline
            className="home-video"
          ></video>
        </div>
        <div className="home-banner">
          <h1 className="home-text">
            <span>LLM NIGHT</span>
            <br></br>
          </h1>
          <h1 className="home-text03">
            <span>Navigators of the Neural Frontier</span>
            <span>. </span>
            <span>Bridging Bytes and Beliefs, Charting the Course of AI.</span>
          </h1>
        </div>
        <div className="home-features">
          <div className="home-container03">
            <h1 className="home-text07">
              <span>Purpose &amp; Key Features</span>
              <br></br>
            </h1>
            <span className="home-text10">
              <span>
                LLM（というよりGenAI）を中心としたAIの実務家、専門家、愛好家が会し、洞察
              </span>
              <span>
                に満ちたディスカッション、ネットワーキング、知識の共有をカジュアルに行います。ビジネスへの応用や技術の展望を掘り下げ、AIソリューションを展開する際に内在する課題と機会を分析し議論します
              </span>
            </span>
          </div>
          <div className="home-container04">
            <video
              src="/external/feature_small.mov"
              loop
              muted
              poster="/public/target.png" width="300" height="300"
              preload="auto"
              autoPlay
              playsInline
              className="home-video1"
            ></video>
            <div className="home-container05">
              <div className="home-container06">
                <div className="home-feature-card">
                  <h2 className="home-text13">Practitioners Only</h2>
                  <span className="home-text14">
                    傍観者無しで積極的に関わる実務者中心
                  </span>
                  <span className="home-text15">SEE MORE</span>
                </div>
                <div className="home-feature-card01">
                  <h2 className="home-text16">Deep discussions over drinks</h2>
                  <span className="home-text17">
                    酔った勢いでぶっちゃけた深い議論。ソフトドリンクも歓迎
                  </span>
                  <span className="home-text18">SEE MORE</span>
                </div>
                <div className="home-feature-card02">
                  <h2 className="home-text19">Welcoming Anti-AI</h2>
                  <span className="home-text20">
                    アンチAIの方も大歓迎して、より本質的な議論をします
                  </span>
                  <span className="home-text21">SEE MORE</span>
                </div>
                <div className="home-feature-card03">
                  <h2 className="home-text22">In a Good Atmosphere</h2>
                  <span className="home-text23">
                    イベント会場ではなく暖炉を囲んだ良い空間で、和やかに。たぶん時期的にクリスマスver.
                  </span>
                  <span className="home-text24">SEE MORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-event-details">
          <h1 className="home-text25">Event Details</h1>
          <div className="home-container07">
            <div className="home-container08">
              <div className="home-container09">
                <div className="home-feature-card04">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container10">
                    <h2 className="home-text26">日時</h2>
                    <span className="home-text27">2023年12月26日 19時</span>
                  </div>
                </div>
                <div className="home-feature-card05">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container11">
                    <h2 className="home-text28">場所</h2>
                    <span className="home-text29">
                      代々木上原の自宅（参加者にご連絡します）
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-container12">
                <div className="home-feature-card06">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container13">
                    <h2 className="home-text30">会費</h2>
                    <span className="home-text31">
                      2,000円（食べ物、飲み物こちらで用意します）
                    </span>
                  </div>
                </div>
                <div className="home-feature-card07">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container14">
                    <h2 className="home-text32">参加条件</h2>
                    <li className="home-li list-item">
                      <span className="home-text33">
                        実務で何等かAIに関わる方（特にLLM周辺）
                      </span>
                    </li>
                    <li className="home-li1 list-item">
                      <span className="home-text34">
                        自己（もしくはグループ）紹介の簡単なプレゼンが可能な方
                      </span>
                    </li>
                  </div>
                </div>
              </div>
              <div className="home-container15">
                <div className="home-feature-card08">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container16">
                    <h2 className="home-text35">プレゼンについて</h2>
                    <li className="home-li2 list-item">
                      <span className="home-text36">
                        各人の関心事を知る目的
                      </span>
                    </li>
                    <li className="home-li3 list-item">
                      <span className="home-text37">
                        <span>
                          5~10分程度。ごく簡単なものでOK。資料も必須ではない
                        </span>
                        <br></br>
                      </span>
                    </li>
                    <li className="home-li4 list-item">
                      <span className="home-text40">
                        <span>
                          プロジェクター、PCはこちらで用意（各人のPCでも可）
                        </span>
                        <br></br>
                      </span>
                    </li>
                  </div>
                </div>
                <div className="home-feature-card09">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                  <div className="home-container17">
                    <h2 className="home-text43">参加方法</h2>
                    <li className="home-li5 list-item">
                      <span className="home-text44">
                        Registerボタンから登録ください。追ってメール連絡します
                      </span>
                    </li>
                    <li className="home-li6 list-item">
                      <span className="home-text45">
                        中村に直接連絡でも可（hiroshi.nakamura@fulgram.com）
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container18">
              <div className="home-container19">
                <h1 className="home-text46">スケジュール</h1>
                <div className="home-container20">
                  <span className="home-text47">19:00</span>
                  <div className="home-line"></div>
                  <span className="home-text48">会の開始</span>
                </div>
                <div className="home-container21">
                  <span className="home-text49">19:30</span>
                  <div className="home-line1"></div>
                  <span className="home-text50">プレゼン開始</span>
                </div>
                <div className="home-container22">
                  <span className="home-text51">21:00</span>
                  <div className="home-line2"></div>
                  <span className="home-text52">フリー・議論</span>
                </div>
                <div className="home-container23">
                  <span className="home-text53">23:00</span>
                  <div className="home-line3"></div>
                  <span className="home-text54">会の終了</span>
                </div>
                <div className="home-container24">
                  <span className="home-text55">※　途中の入退室自由</span>
                </div>
              </div>
              <img
                alt="image"
                src="/external/llm_letter_bold-700w.gif"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-taxnomy">
          <h1 className="home-text56">
            <span>Taxonomy &amp; Scope</span>
            <br></br>
          </h1>
          <span className="home-text59">GenAI周りの幅広い領域が対象</span>
          <span className="home-text60">
            <span>WIP</span>
            <br></br>
          </span>
        </div>
        <div className="home-gallery">
          <div className="home-gallery1">
            <h1 className="home-text63">Atmosphere</h1>
            <span className="home-text64">
              過去のイベントの様子。今回も同じようなセッティングになると思います
            </span>
            <video
              src="/external/christmas.mp4"
              loop
              muted
              poster="/public/target.png" width="300" height="300"
              preload="auto"
              autoPlay
              playsInline
              className="home-video2"
            ></video>
            <img
              alt="image"
              src="/external/img_0788-700h.jpg"
              className="home-image2"
            />
            <img
              alt="image"
              src="/external/img_2432-1400w.jpg"
              className="home-image3"
            />
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-banner2">
            <h1 className="home-banner-heading heading2">
              Deciphering Deepness, Defining the Next Dialogue
            </h1>
            <a
              href="https://forms.gle/NciHvvh7NWP6AcaA6"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <div className="home-container25">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M128 128h320v768h-320zM576 128h320v768h-320z"></path>
                </svg>
                <button type="button" className="home-button1 button">
                  Register
                </button>
              </div>
            </a>
            <img
              alt="image"
              src="/external/main_2-min-1500w.gif"
              className="home-image4"
            />
          </div>
        </div>
        <div className="home-faq"></div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container26">
              <span className="home-text65">
                © 2023 fulgram Inc., All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-header {
            height: var(--dl-size-size-large);
            display: flex;
            z-index: 10000;
            position: fixed;
            max-width: auto;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: transparent;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-left: 112px;
            padding-right: 112px;
            flex-direction: row;
            justify-content: space-between;
            object-position: center;
          }
          .home-image {
            width: 200px;
            align-self: center;
            object-fit: cover;
          }
          .home-link {
            display: contents;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            justify-content: space-between;
            text-decoration: none;
          }

          .home-icon {
            fill: #54b5f2;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
          }
          .home-icon:hover {
            fill: var(--dl-color-primary-100);
          }
          .home-button {
            color: rgb(255, 255, 255);
            height: 36px;
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Raleway';
            font-weight: 700;
            border-width: 0px;
            border-radius: 0px;
            background-color: #54b5f2;
          }
          .home-button:hover {
            background-color: var(--dl-color-primary-100);
          }
          .home-gallery-card {
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
          }
          .home-video {
            top: 50%;
            left: 50%;
            position: absolute;
            min-width: 100%;
            transform: translate(-50%, -50%);
            min-height: 100vh;
            -moz-transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
          }
          .home-banner {
            width: 80%;
            height: auto;
            display: flex;
            z-index: 100;
            position: relative;
            align-self: center;
            margin-top: -12%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            color: #ffffff;
            display: none;
            font-size: 48px;
            align-self: flex-start;
            font-family: 'Impact';
            letter-spacing: 1.2px;
          }
          .home-text03 {
            color: rgb(255, 255, 255);
            width: auto;
            height: auto;
            font-size: 72px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Impact';
            font-weight: 500;
            line-height: 1;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .home-features {
            width: 100%;
            display: flex;
            z-index: 10;
            position: relative;
            max-width: auto;
            align-self: center;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            padding-top: 144px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 144px;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            color: #ffffff;
            font-size: 72px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Raleway';
            font-weight: bold;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .home-text10 {
            color: #c7c7c7;
            width: 70%;
            font-size: 24px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            text-align: left;
            font-family: 'Raleway';
            margin-left: 0px;
            padding-top: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            z-index: 20;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .home-video1 {
            width: 100%;
            height: 600px;
            z-index: 30;
            position: relative;
            max-width: 700px;
            align-self: center;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .home-feature-card {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-gray-white);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text13 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
          }
          .home-text15 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
          }
          .home-feature-card01 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-gray-white);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text17 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
          }
          .home-text18 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
          }
          .home-feature-card02 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-gray-white);
            border-width: 0.5px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text19 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
          }
          .home-text21 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
          }
          .home-feature-card03 {
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0px;
            border-color: var(--dl-color-gray-white);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 0px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            font-family: 'Raleway';
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            color: var(--dl-color-gray-700);
            font-size: 24px;
            align-self: flex-start;
            text-align: left;
            font-family: 'Raleway';
          }
          .home-text24 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
          }
          .home-event-details {
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            padding-top: 144px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: 144px;
            background-color: #ee7325;
          }
          .home-text25 {
            font-size: 72px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Raleway';
            font-weight: bold;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-bottom: 0px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card04 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-black);
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text26 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-feature-card05 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: var(--dl-color-gray-black);
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text28 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card06 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon06 {
            fill: var(--dl-color-gray-black);
            width: 32pxm;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text30 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text31 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-feature-card07 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon08 {
            fill: var(--dl-color-gray-black);
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text32 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-li {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text33 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-li1 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text34 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature-card08 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: var(--dl-color-gray-black);
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container16 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text35 {
            font-size: 24px;
            font-family: 'Raleway';
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-li2 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text36 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-li3 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text37 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-li4 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text40 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-feature-card09 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-black);
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text43 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-li5 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text44 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-li6 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text45 {
            font-size: 24px;
            font-family: 'Raleway';
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 700px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text46 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text47 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text48 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            text-align: right;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text49 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text50 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            text-align: right;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text51 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text52 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            text-align: right;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-container23 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 400px;
            align-self: center;
            align-items: center;
            padding-top: 0px;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text53 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text54 {
            color: var(--dl-color-gray-black);
            font-size: 24px;
            font-style: normal;
            text-align: right;
            font-family: 'Raleway';
            font-weight: 700;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            max-width: 400px;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            justify-content: flex-start;
          }
          .home-text55 {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-black);
            position: absolute;
            font-size: 24px;
            text-align: right;
            font-family: 'Raleway';
          }
          .home-image1 {
            width: 600px;
            align-self: center;
            margin-top: 132px;
            object-fit: cover;
          }
          .home-taxnomy {
            width: 100%;
            display: flex;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: 144px;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: 144px;
            background-color: #000000;
          }
          .home-text56 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Raleway';
            font-weight: bold;
            margin-bottom: 0px;
            text-transform: capitalize;
          }
          .home-text59 {
            color: #c7c7c7;
            width: 70%;
            font-size: 24px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            font-family: 'Raleway';
            margin-left: 0px;
            padding-top: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .home-text60 {
            color: rgb(199, 199, 199);
            width: 75%;
            font-size: 36px;
            align-self: center;
            text-align: center;
            font-family: 'Raleway';
            margin-left: 0px;
            padding-top: var(--dl-space-space-sixunits);
            margin-right: 0px;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-gallery {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-gallery1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: center;
            padding-top: 144px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 144px;
          }
          .home-text63 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            margin-top: var(--dl-space-space-threeunits);
            font-family: 'Raleway';
            font-weight: bold;
            margin-bottom: 0px;
          }
          .home-text64 {
            color: #c7c7c7;
            width: 70%;
            font-size: 24px;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            font-family: 'Raleway';
            margin-left: 0px;
            padding-top: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
          }
          .home-video2 {
            width: 100%;
            height: auto;
          }
          .home-image2 {
            width: 100%;
            height: 660px;
            object-fit: cover;
          }
          .home-image3 {
            width: 100%;
            object-fit: cover;
          }
          .home-banner1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 144px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            font-size: 72px;
            font-style: normal;
            text-align: center;
            font-family: 'Impact';
            font-weight: 500;
            line-height: 1;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 0px;
          }
          .home-link1 {
            display: contents;
          }
          .home-container25 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            text-decoration: none;
          }
          .home-icon14 {
            fill: #54b5f2;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            transition: 0.3s;
          }
          .home-icon14:hover {
            fill: var(--dl-color-primary-100);
          }
          .home-button1 {
            color: rgb(255, 255, 255);
            height: 36px;
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Raleway';
            font-weight: 700;
            border-width: 0px;
            border-radius: 0px;
            background-color: #54b5f2;
          }
          .home-button1:hover {
            background-color: var(--dl-color-primary-100);
          }
          .home-image4 {
            width: 100%;
            height: 480px;
            object-fit: cover;
          }
          .home-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .home-container26 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text65 {
            color: var(--dl-color-secondary-gray500);
          }
          @media (max-width: 1600px) {
            .home-video {
              width: 100%;
              height: 100vh;
            }
            .home-text03 {
              margin-top: 0px;
            }
            .home-container04 {
              z-index: 20;
            }
            .home-video1 {
              z-index: 30;
            }
          }
          @media (max-width: 1200px) {
            .home-header {
              background-color: transparent;
            }
            .home-container01 {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-container02 {
              align-self: center;
            }
            .home-button {
              color: rgb(255, 255, 255);
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              background-color: #54b5f2;
            }
            .home-video {
              width: 100%;
              height: 100vh;
            }
            .home-banner {
              margin-top: -25%;
            }
            .home-text {
              font-family: Impact;
              letter-spacing: 1.2px;
            }
            .home-text03 {
              font-size: 64px;
            }
            .home-features {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-sixunits);
              padding-top: 144px;
              padding-bottom: 144px;
              background-color: transparent;
            }
            .home-text07 {
              font-size: 72px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-text10 {
              font-size: 24px;
            }
            .home-video1 {
              max-width: 500px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container05 {
              max-width: 500px;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              max-width: 500px;
              align-items: flex-end;
            }
            .home-text25 {
              font-size: 72px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-container08 {
              width: 100%;
              max-width: 550px;
            }
            .home-container18 {
              width: 100%;
              max-width: 550px;
            }
            .home-text56 {
              font-size: 72px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text59 {
              color: rgb(199, 199, 199);
              font-size: 24px;
              text-align: center;
              font-family: Raleway;
            }
            .home-text63 {
              font-size: 72px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-text64 {
              color: rgb(199, 199, 199);
              font-size: 24px;
              text-align: center;
              font-family: Raleway;
            }
            .home-image2 {
              height: 492px;
            }
            .home-banner-heading {
              font-size: 64px;
            }
            .home-image4 {
              height: 360px;
            }
          }
          @media (max-width: 991px) {
            .home-header {
              height: var(--dl-size-size-medium);
              background-color: transparent;
            }
            .home-container01 {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-image {
              width: 150px;
            }
            .home-container02 {
              align-self: center;
            }
            .home-icon {
              width: 30px;
              height: 30px;
            }
            .home-button {
              color: rgb(255, 255, 255);
              height: 23px;
              font-size: 14px;
              align-self: center;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              background-color: #54b5f2;
            }
            .home-video {
              width: 100%;
              height: 100vh;
            }
            .home-banner {
              width: 90%;
              height: auto;
              margin-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text {
              letter-spacing: 1.2px;
            }
            .home-text03 {
              font-size: 56px;
              font-style: normal;
              font-family: Impact;
              font-weight: 500;
            }
            .home-features {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-sixunits);
              padding-top: 144px;
              padding-bottom: 144px;
            }
            .home-text07 {
              font-size: 64px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-text10 {
              font-size: 24px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-video1 {
              max-width: 400px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container05 {
              max-width: 400px;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              max-width: 400px;
            }
            .home-feature-card {
              width: 100%;
              min-width: var(--dl-size-size-medium);
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature-card01 {
              width: 100%;
              min-width: var(--dl-size-size-medium);
            }
            .home-text16 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .home-text17 {
              color: var(--dl-color-gray-700);
              font-family: Raleway;
            }
            .home-feature-card02 {
              width: 100%;
              min-width: var(--dl-size-size-medium);
            }
            .home-text19 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .home-text20 {
              color: var(--dl-color-gray-700);
              font-family: Raleway;
            }
            .home-feature-card03 {
              width: 100%;
              min-width: var(--dl-size-size-medium);
            }
            .home-text22 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 500;
            }
            .home-text23 {
              color: var(--dl-color-gray-700);
              font-family: Raleway;
            }
            .home-text25 {
              font-size: 64px;
              font-family: Raleway;
            }
            .home-container07 {
              flex-direction: column;
            }
            .home-container08 {
              max-width: 800px;
              border-right-width: 0px;
            }
            .home-container18 {
              max-width: 800px;
              align-self: center;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-container19 {
              max-width: 900px;
              align-self: center;
            }
            .home-text46 {
              align-self: center;
              text-align: center;
            }
            .home-container20 {
              max-width: 600px;
            }
            .home-text47 {
              font-size: 20px;
            }
            .home-text48 {
              font-size: 20px;
            }
            .home-container21 {
              max-width: 600px;
            }
            .home-text49 {
              font-size: 20px;
            }
            .home-text50 {
              font-size: 20px;
            }
            .home-text51 {
              font-size: 20px;
            }
            .home-text52 {
              font-size: 20px;
            }
            .home-text53 {
              font-size: 20px;
            }
            .home-text54 {
              font-size: 20px;
            }
            .home-text55 {
              font-size: 16px;
            }
            .home-image1 {
              width: 637px;
              margin-top: var(--dl-space-space-unit);
            }
            .home-taxnomy {
              padding-top: 144px;
              padding-bottom: 144px;
            }
            .home-text56 {
              font-size: 64px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text59 {
              font-size: 24px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-text60 {
              text-align: center;
            }
            .home-text63 {
              font-size: 64px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-text64 {
              font-size: 24px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-image2 {
              height: 390px;
            }
            .home-icon14 {
              width: 30px;
              height: 30px;
            }
            .home-button1 {
              color: rgb(255, 255, 255);
              height: 23px;
              font-size: 14px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              background-color: #54b5f2;
            }
            .home-footer1 {
              align-self: center;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .home-container01 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              width: var(--dl-size-size-large);
            }
            .home-container02 {
              align-self: center;
            }
            .home-button {
              color: rgb(255, 255, 255);
              width: 70px;
              padding: 0px;
              font-size: 14px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              background-color: #54b5f2;
            }
            .home-video {
              width: 100%;
              height: 100vh;
            }
            .home-banner {
              width: 100%;
              height: auto;
              margin-top: 0px;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text {
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text03 {
              font-size: 42px;
              font-style: normal;
              margin-top: var(--dl-space-space-unit);
              font-family: Impact;
              font-weight: 400;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              width: 100%;
              height: auto;
              margin-top: var(--dl-space-space-sixunits);
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text07 {
              font-size: 48px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 700;
              line-height: 1.1;
              margin-bottom: 0px;
            }
            .home-text10 {
              width: 80%;
              font-size: 24px;
              margin-top: var(--dl-space-space-threeunits);
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-container04 {
              flex-direction: column;
            }
            .home-video1 {
              height: auto;
              max-width: 100%;
              margin-right: 0px;
            }
            .home-container05 {
              max-width: 800px;
              align-self: center;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-container06 {
              width: 100%;
              max-width: 800px;
            }
            .home-feature-card {
              padding-top: var(--dl-space-space-twounits);
              border-width: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              border-bottom-width: 0.1px;
            }
            .home-feature-card01 {
              padding: var(--dl-space-space-twounits);
              border-width: 0px;
              border-bottom-width: 0.1px;
            }
            .home-feature-card02 {
              padding-top: var(--dl-space-space-twounits);
              border-width: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
              border-bottom-width: 0.1px;
            }
            .home-feature-card03 {
              padding-top: var(--dl-space-space-twounits);
              border-width: 0px;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-event-details {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text25 {
              font-size: 48px;
              font-family: Raleway;
              line-height: 1.1;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-feature-card04 {
              flex-direction: row;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-feature-card05 {
              flex-direction: row;
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-feature-card06 {
              flex-direction: row;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-feature-card07 {
              flex-direction: row;
            }
            .home-container14 {
              flex-direction: column;
            }
            .home-feature-card08 {
              flex-direction: row;
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-feature-card09 {
              flex-direction: row;
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-container19 {
              max-width: auto;
              flex-direction: column;
            }
            .home-text46 {
              font-size: 24px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .home-container20 {
              width: 100%;
              height: auto;
              max-width: 500px;
              align-self: center;
              margin-top: var(--dl-space-space-threeunits);
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-line {
              width: var(--dl-size-size-xxlarge);
              border-color: var(--dl-color-gray-black);
              border-style: dashed;
              border-width: 1px;
              border-top-width: 2px;
              border-left-width: 0px;
            }
            .home-container21 {
              max-width: 500px;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-black);
              border-style: dashed;
              border-width: 1px;
              border-top-width: 2px;
              border-left-width: 0px;
            }
            .home-container22 {
              max-width: 500px;
            }
            .home-line2 {
              border-color: var(--dl-color-gray-black);
              border-style: dashed;
              border-width: 1px;
              border-top-width: 2px;
              border-left-width: 0px;
            }
            .home-container23 {
              max-width: 500px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-black);
              border-style: dashed;
              border-width: 1px;
              border-top-width: 2px;
              border-left-width: 0px;
            }
            .home-container24 {
              max-width: 500px;
            }
            .home-taxnomy {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text56 {
              font-size: 48px;
              font-style: normal;
              text-align: center;
              font-family: Raleway;
              font-weight: 700;
              line-height: 1.1;
              margin-bottom: 0px;
            }
            .home-text59 {
              color: rgb(199, 199, 199);
              font-size: 20px;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
              font-family: Raleway;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-gallery1 {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text63 {
              font-size: 48px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              line-height: 1.1;
              margin-bottom: 0px;
            }
            .home-text64 {
              color: rgb(199, 199, 199);
              font-size: 20px;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Raleway;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-image2 {
              height: 314px;
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-heading {
              font-size: 42px;
              font-style: normal;
              font-weight: 400;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-button1 {
              color: rgb(255, 255, 255);
              width: 70px;
              padding: 0px;
              font-size: 14px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              background-color: #54b5f2;
            }
            .home-footer1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container26 {
              width: auto;
              height: auto;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text65 {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              height: var(--dl-size-size-small);
              padding-left: var(--dl-space-space-twounits);
            }
            .home-container01 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image {
              width: var(--dl-size-size-medium);
            }
            .home-container02 {
              width: auto;
              align-self: center;
            }
            .home-button {
              color: rgb(255, 255, 255);
              width: 70px;
              height: 22px;
              padding: 0px;
              font-size: 14px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 600;
              background-color: #54b5f2;
            }
            .home-gallery-card {
              margin-top: -87%;
            }
            .home-video {
              width: 100%;
              height: 100vh;
              min-width: 120%;
              padding-top: 87%;
            }
            .home-banner {
              top: 176px;
              left: 0px;
              width: 100%;
              height: auto;
              position: relative;
              margin-top: -60%;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text {
              font-size: 1.2em;
              font-style: normal;
              font-weight: 400;
            }
            .home-text03 {
              color: rgb(255, 255, 255);
              width: 100%;
              height: auto;
              font-size: 32px;
              align-self: center;
              font-style: normal;
              margin-top: 0px;
              text-align: left;
              font-family: Impact;
              font-weight: 400;
              line-height: 1;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
              text-transform: capitalize;
            }
            .home-features {
              width: 100%;
              height: auto;
              position: relative;
              margin-top: 50%;
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: transparent;
            }
            .home-container03 {
              max-width: auto;
            }
            .home-text07 {
              font-size: 32px;
              align-self: center;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              line-height: 1.1;
              margin-bottom: 0px;
            }
            .home-text10 {
              color: rgb(199, 199, 199);
              width: 85%;
              font-size: 16px;
              align-self: center;
              margin-top: var(--dl-space-space-threeunits);
              text-align: left;
              font-family: Raleway;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-container04 {
              position: relative;
              max-width: auto;
              flex-direction: column;
            }
            .home-video1 {
              flex: 1;
              max-width: 100%;
              margin-right: 0px;
            }
            .home-container05 {
              width: 450px;
              max-width: 400px;
              align-self: center;
              justify-content: center;
            }
            .home-container06 {
              max-width: 400px;
              align-items: center;
            }
            .home-feature-card {
              max-width: 360px;
              min-width: var(--dl-size-size-xxlarge);
              align-self: center;
              align-items: center;
              padding-top: 0px;
              border-style: solid;
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
              border-bottom-width: 0.1px;
            }
            .home-text13 {
              font-size: 24px;
            }
            .home-text14 {
              font-size: 16px;
            }
            .home-feature-card01 {
              max-width: 360px;
              min-width: auto;
              align-self: center;
              padding-top: 0px;
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
              border-top-width: 0px;
              border-bottom-width: 0.1px;
            }
            .home-text17 {
              font-size: 16px;
            }
            .home-feature-card02 {
              max-width: 360px;
              min-width: auto;
              align-self: center;
              padding-top: 0px;
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
              border-top-width: 0px;
              border-bottom-width: 0.1px;
            }
            .home-text20 {
              color: var(--dl-color-gray-700);
              font-size: 16px;
              font-family: Raleway;
            }
            .home-feature-card03 {
              max-width: 360px;
              min-width: auto;
              align-self: center;
              padding-top: 0px;
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-text23 {
              font-size: 16px;
            }
            .home-event-details {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text25 {
              font-size: 32px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-container07 {
              max-width: 400px;
            }
            .home-container08 {
              max-width: auto;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-feature-card04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-icon02 {
              width: 2rem;
              height: 2rem;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-text26 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text27 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-feature-card05 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-text28 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text29 {
              font-size: 16px;
            }
            .home-feature-card06 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-text30 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text31 {
              font-size: 16px;
            }
            .home-feature-card07 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container14 {
              flex-direction: column;
            }
            .home-text32 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text33 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-text34 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-feature-card08 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container16 {
              flex-direction: column;
            }
            .home-text35 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text36 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-text37 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-text40 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-feature-card09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container17 {
              flex-direction: column;
            }
            .home-text43 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-li5 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-text44 {
              font-size: 16px;
            }
            .home-text45 {
              font-size: 16px;
              font-family: Raleway;
            }
            .home-container18 {
              width: auto;
              align-self: stretch;
              margin-top: var(--dl-space-space-unit);
            }
            .home-container19 {
              width: 100%;
              height: auto;
              max-width: 400px;
            }
            .home-text46 {
              font-size: 20px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-container20 {
              width: 90%;
              max-width: 400px;
              margin-top: var(--dl-space-space-unit);
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-text47 {
              font-size: 16px;
            }
            .home-line {
              border-color: var(--dl-color-gray-black);
              border-style: dashed;
              border-width: 1px;
              border-top-width: 1px;
            }
            .home-text48 {
              font-size: 16px;
            }
            .home-container21 {
              width: 90%;
              max-width: 400px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text49 {
              font-size: 16px;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-top-width: 1px;
              border-left-width: 0px;
            }
            .home-text50 {
              color: var(--dl-color-gray-black);
              font-size: 16px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-container22 {
              width: 90%;
              max-width: 400px;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text51 {
              font-size: 16px;
            }
            .home-line2 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-top-width: 1px;
              border-left-width: 0px;
            }
            .home-text52 {
              color: var(--dl-color-gray-black);
              font-size: 16px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-container23 {
              width: 90%;
              max-width: 400px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text53 {
              font-size: 16px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-top-width: 1px;
              border-left-width: 0px;
            }
            .home-text54 {
              color: var(--dl-color-gray-black);
              font-size: 16px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
            }
            .home-container24 {
              width: 90%;
              max-width: 400px;
            }
            .home-text55 {
              font-size: 16px;
            }
            .home-image1 {
              width: 360px;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-taxnomy {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text56 {
              font-size: 32px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              margin-bottom: 0px;
            }
            .home-text59 {
              color: rgb(199, 199, 199);
              width: 85%;
              font-size: 16px;
              align-self: center;
              margin-top: var(--dl-space-space-threeunits);
              text-align: center;
              font-family: Raleway;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-gallery1 {
              position: relative;
              padding-top: var(--dl-space-space-sixunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text63 {
              font-size: 32px;
              font-style: normal;
              font-family: Raleway;
              font-weight: 700;
              margin-bottom: 0;
            }
            .home-text64 {
              color: rgb(199, 199, 199);
              width: 85%;
              font-size: 16px;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              font-family: Raleway;
              padding-top: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-bottom: 0px;
            }
            .home-video2 {
              width: 90%;
              height: auto;
            }
            .home-image2 {
              width: 90%;
              height: var(--dl-size-size-xlarge);
            }
            .home-image3 {
              width: 90%;
            }
            .home-banner1 {
              width: auto;
              align-self: stretch;
            }
            .home-banner2 {
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-banner-heading {
              width: auto;
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
              padding-left: var(--dl-space-space-threeunits);
              margin-bottom: 0px;
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-button1 {
              width: 70px;
              font-style: normal;
              font-weight: 600;
            }
            .home-image4 {
              width: 100%;
            }
            .home-footer1 {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-container26 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-text65 {
              text-align: center;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
