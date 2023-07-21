import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Card({ item }) {
  const navigate = useNavigate()
  return (
    <>
      <article key={item.id} className="post-entry">
        <header className="entry-header">
          <img draggable="false" src={item.imageURL} alt="photo of Kevin" title="photo of Kevin" height="300" width="300"></img>

          <div className='footer'>
            <div className='entry-content'>
              <NavLink to={`/view/${item.id}`} >
                <h2> {`${item.name}`}</h2>
              </NavLink>
              <div onClick={() => {
                navigate(`/edit/${item.id}`)
              }}>

                <div className="Layout-sc-1xcs6mc-0 jMGsUf">
                  <figure className="ScFigure-sc-wkgzod-0 jCwWPp tw-svg">

                    <svg width="1.4rem" height="2rem" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" data-a-selector="tw-core-button-icon" class="ScIconSVG-sc-1q25cff-1 dSicFr">
                      <g><path fill-rule="evenodd" d="M17.303 4.303l-1.606-1.606a2.4 2.4 0 00-3.394 0L2 13v5h5L17.303 7.697a2.4 2.4 0 000-3.394zM4 16v-2.171l7.207-7.208 2.172 2.172L6.172 16H4zm10.793-8.621l1.096-1.096a.4.4 0 000-.566l-1.606-1.606a.4.4 0 00-.566 0l-1.096 1.096 2.172 2.172z" clip-rule="evenodd">

                      </path></g></svg>
                  </figure>
                </div>
              </div>
            </div>
            <p className='entry-content'>{item.description}</p>
            {/*--------youtube-------- */}


            <div className="entry-content">

              {/* YouTube Link */}
              <div className="Layout-sc-1xcs6mc-0 hPGueI">
              {item.url.youtube &&(
              <>
                <div className="Layout-sc-1xcs6mc-0 fszUIe social-media-link">
                  <div className="Layout-sc-1xcs6mc-0 nzqFb social-media-link__container">
                    <div className="Layout-sc-1xcs6mc-0 social-media-link__accent">
                      <NavLink
                        className="ScCoreLink-sc-16kq0mq-0 gZxBHd tw-link"
                        rel="noopener noreferrer"
                        to={item.url.youtube}
                      >

                        <div className="Layout-sc-1xcs6mc-0 nzqFb">
                          <div className="Layout-sc-1xcs6mc-0 khhxTE">
                            <span className="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 bKlmuY">
                              <figure className="ScFigure-sc-1hrsqw6-0 geZUHx tw-svg">
                                <svg
                                  type="color-fill-current" width="20px" height="20px"
                                  version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                                  className="ScSvg-sc-1hrsqw6-1 hdNNzQ"
                                >
                                  <g><path
                                    fillRule="evenodd"
                                    d="M8.16 12.676V7.323L12.863 10 8.16 12.676zm10.464-7.037a2.26 2.26 0 00-1.592-1.602C15.628 3.659 10 3.659 10 3.659s-5.628 0-7.032.378a2.261 2.261 0 00-1.591 1.602C1 7.052 1 9.999 1 9.999s0 2.948.377 4.36c.207.78.817 1.394 1.59 1.603 1.405.38 7.033.38 7.033.38s5.628 0 7.032-.38a2.262 2.262 0 001.592-1.602C19 12.947 19 10 19 10s0-2.948-.376-4.361z"
                                    clipRule="evenodd"
                                  ></path>
                                  </g></svg>
                              </figure>
                            </span>
                          </div>
                          <p className="CoreText-sc-1txzju1-0 feJdGm">
                            YouTube
                          </p>
                        </div>
                      </NavLink>

                    </div>
                  </div>
                </div>
              
              </>
            )}
      {/* Twitter Link */}
      {item.url.twitter && (
        <>
          <div className="Layout-sc-1xcs6mc-0 fszUIe social-media-link">
                  <div className="Layout-sc-1xcs6mc-0 nzqFb social-media-link__container">
                    <div className="Layout-sc-1xcs6mc-0 social-media-link__accent">
                      <NavLink
                        className="ScCoreLink-sc-16kq0mq-0 gZxBHd tw-link"
                        rel="noopener noreferrer"
                        to={item.url.twitter}
                      >

                        <div className="Layout-sc-1xcs6mc-0 nzqFb">
                          <div className="Layout-sc-1xcs6mc-0 khhxTE">
                            <span className="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 bKlmuY">
                              <figure className="ScFigure-sc-1hrsqw6-0 geZUHx tw-svg">
                              <svg type="color-fill-current" 
                              width="20px" height="20px" 
                              version="1.1" viewBox="0 0 20 20" x="0px" y="0px" 
                              className="ScSvg-sc-1hrsqw6-1 hdNNzQ">
                                <g>
                                <path d="M19 3.844a7.07 7.07 0 01-2.12.62 3.912 3.912 0 001.623-2.178 7.075 7.075 0 01-2.345.955 3.613 3.613 0 00-2.694-1.24c-2.04 0-3.694 1.76-3.694 3.94 0 .31.037.61.1.9C6.8 6.668 4.078 5.1 2.253 2.72c-.33.606-.5 1.286-.498 1.977 0 1.363.653 2.567 1.643 3.273a3.49 3.49 0 01-1.672-.493v.05c0 1.906 1.272 3.496 2.963 3.857-.55.156-1.12.18-1.67.067.47 1.57 1.83 2.7 3.45 2.73a7.07 7.07 0 01-5.47 1.63 9.954 9.954 0 005.66 1.77c6.79 0 10.51-5.99 10.51-11.19 0-.17-.01-.34-.01-.51.73-.56 1.35-1.25 1.84-2.03">
                                </path></g></svg>
                              </figure>
                            </span>
                          </div>
                          <p className="CoreText-sc-1txzju1-0 feJdGm">
                            Twitter
                          </p>
                        </div>
                      </NavLink>

                    </div>
                  </div>
                </div>
        </>
      )}
{/* Instagram Link */}
{item.url.instagram && (
        <>
          <div className="Layout-sc-1xcs6mc-0 fszUIe social-media-link">
                  <div className="Layout-sc-1xcs6mc-0 nzqFb social-media-link__container">
                    <div className="Layout-sc-1xcs6mc-0 social-media-link__accent">
                      <NavLink
                        className="ScCoreLink-sc-16kq0mq-0 gZxBHd tw-link"
                        rel="noopener noreferrer"
                        to={item.url.instagram}
                      >

                        <div className="Layout-sc-1xcs6mc-0 nzqFb">
                          <div className="Layout-sc-1xcs6mc-0 khhxTE">
                            <span className="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 bKlmuY">
                              <figure className="ScFigure-sc-1hrsqw6-0 geZUHx tw-svg">
                              <svg type="color-fill-current" width="20px" 
                              height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" 
                              className="ScSvg-sc-1hrsqw6-1 hdNNzQ">
                                <g><path 
                                fill-rule="evenodd" clip-rule="evenodd" d="M10 5.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.774a2.667 2.667 0 110-5.333 2.667 2.667 0 010 5.333z">
                                  </path><path d="M15.23 5.73a.96.96 0 11-1.92 0 .96.96 0 011.92 0z"></path>
                                  <path fill-rule="evenodd" 
                                  clip-rule="evenodd" 
                                  d="M10 2c-2.173 0-2.445.01-3.299.048-.851.039-1.432.174-1.941.372a3.918 3.918 0 00-1.417.923c-.445.445-.719.89-.923 1.417-.198.509-.333 1.09-.372 1.941C2.01 7.555 2 7.827 2 10s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.372C7.555 17.99 7.827 18 10 18s2.445-.01 3.298-.048c.852-.039 1.434-.174 1.942-.372a3.918 3.918 0 001.417-.923 3.92 3.92 0 00.923-1.417c.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.299c-.039-.851-.174-1.433-.372-1.941a3.918 3.918 0 00-.923-1.417 3.92 3.92 0 00-1.417-.923c-.51-.198-1.09-.333-1.942-.372C12.445 2.01 12.172 2 10 2zm0 1.441c2.136 0 2.389.009 3.232.047.78.036 1.204.166 1.486.275.373.146.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.165 1.204-.275 1.486-.145.373-.319.64-.598.92-.28.28-.547.454-.92.598-.282.11-.706.24-1.486.276-.843.038-1.096.046-3.232.046s-2.39-.008-3.233-.046c-.78-.036-1.203-.166-1.485-.276a2.481 2.481 0 01-.92-.598 2.474 2.474 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.843-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.145-.374.319-.64.599-.92.28-.28.546-.454.92-.599.282-.11.705-.24 1.485-.275.844-.038 1.097-.047 3.233-.047z">
                                </path></g></svg>
                              </figure>
                            </span>
                          </div>
                          <p className="CoreText-sc-1txzju1-0 feJdGm">
                            Instagram
                          </p>
                        </div>
                      </NavLink>

                    </div>
                  </div>
                </div>
        </>
      )}

              </div>
            </div>
          </div>
        </header>


      </article>
    </>
  )
}

export default Card