import React, { useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import { useEffect } from 'react';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const nameRef = useRef(null); // Initialize the ref with null, or you can provide an initial value if needed
  const imageRef = useRef(null);
  const youtubeRef = useRef(null);
  const twitterRef = useRef(null);
  const instagramRef = useRef(null);
  const descriptionRef = useRef(null);
  const [creatorsList, setCreatorList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const youtubeURL = youtubeRef.current.value;
    const twitterURL = twitterRef.current.value;
    const instagramURL = instagramRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const imageURL = imageRef.current.value;
    // form validation
    if ( !name || !description ) {
      alert("Name and description are required before submitting.");
      return;
    }
    if (!youtubeURL && !twitterURL && !instagramURL) {
      alert("Please fill out at least one social link before submitting.");
      return;
    }
    if (!imageURL) {
      // use default image if user did not select an image 
      imageURL = "https://static-cdn.jtvnw.net/ttv-static/404_preview-320x180.jpg"
    }
    try {
      const { data, error } = await supabase
        .from("creators")
        .update({
          description: description,
          name: name,
          url: {
            youtube: youtubeURL,
            twitter: twitterURL,
            instagram: instagramURL
          },
          imageURL: imageURL,
        })
        .eq("id", id)
      if (error) {
        console.error('Error updating creator:', error);
        // Handle error scenario if needed
      } else {
        console.log('Creator updated successfully:');
        // Redirect to the creator's page or perform any other actions on success
        navigate(`/`);
      }
    } catch (error) {
      console.error('Error updating creator:', error);
      // Handle error scenario if needed
    }
  };
  const handleDelete = async () => {
    try {
      const { error } = await supabase.from('creators').delete().eq('id', id);
      if (error) {
        console.error('Error deleting creator:', error);
        // Handle error scenario if needed
      } else {
        console.log('Creator deleted successfully');
        // Redirect to a different page or perform any other actions on success
        navigate(`/`);
      }
    } catch (error) {
      console.error('Error deleting creator:', error);
      // Handle error scenario if needed
    }
  };

  useEffect(() => {
    async function getCreatorsList() {
      let { data: creators, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id);
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setCreatorList(creators); // Update the state with the fetched data
      }
    }
    getCreatorsList();
  }, [id]);

  return (
    <>
      {
        creatorsList.map((item) => (
          <main className='main' key={id}>

            <form onSubmit={handleSubmit}>


              <header class="post-header">
                <div class="breadcrumbs">
                  <a onClick={() => navigate("/")}>
                    Home</a>&nbsp;»&nbsp;
                  <a>{`Edit`}</a>
                </div>
              </header>
              <article key={id} className="post-entry">
                <header class="entry-header label">
                  <label class="entry-content">Display Name</label>
                  <div >
                    <input aria-invalid="false" id="display-name" aria-describedby="display-name-description"
                      aria-labelledby="display-name-label"
                      type="text"
                      class="entry-content eeTKnM"
                      autocapitalize="off"
                      autocorrect="off"
                      data-a-target="tw-input"
                      ref={nameRef}
                      placeholder={item.name}
                      defaultValue={item.name}
                    />
                    <p class="entry-content">You may update your username</p>
                  </div>
                </header>
                <header class="entry-header label">
                  <label class="entry-content">Description</label>
                  <div className='footer'>
                    <textarea
                      placeholder={item.description}
                      defaultValue={item.description}
                      ref={descriptionRef}
                      className='eeTKnM'
                      aria-invalid="false"
                      id="bio"
                      aria-describedby="bio-description"
                      aria-labelledby="bio-label"
                      data-a-target="profile-bio-input"
                      maxlength="300" style={{ width: "400px", height: "139px" }}>
                    </textarea>
                    <p class="entry-content">
                      Description of creator in under 300 characters
                    </p>
                  </div>
                </header>
                <header class="entry-header">
                  <img draggable="false" src={item.imageURL}
                    alt="photo of Kevin"
                    title="photo of Kevin"
                    height="300" width="300"
                  />
                  <div className='footer'>
                    <input aria-invalid="false" id="display-name" aria-describedby="display-name-description"
                      aria-labelledby="display-name-label"
                      type="text"
                      class="entry-content eeTKnM"
                      autocapitalize="off"
                      autocorrect="off"
                      data-a-target="tw-input"
                      ref={imageRef}
                      placeholder={item.imageURL}
                      defaultValue={item.imageURL}
                    />
                    <label class="entry-content">Provide a description of the creator. Who are they? What makes them interesting?</label>
                  </div>
                </header>
                <header className="entry-header">
                  <div class="Layout-sc-1xcs6mc-0 fszUIe social-media-link">
                    <div class="Layout-sc-1xcs6mc-0 nzqFb social-media-link__container">
                      <div class="Layout-sc-1xcs6mc-0 social-media-link__accent">
                        <div class="Layout-sc-1xcs6mc-0 nzqFb">
                          <div class="Layout-sc-1xcs6mc-0 khhxTE">
                            <span class="CoreText-sc-1txzju1-0 InjectLayout-sc-1i43xsx-0 bKlmuY"><figure class="ScFigure-sc-1hrsqw6-0 geZUHx tw-svg"><svg width="1.4rem" height="1.4rem" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScIconSVG-sc-1q25cff-1 dSicFr"><g><path fill-rule="evenodd" d="M7 5a3 3 0 114 2.83v.503c0 .369.299.667.667.667.736 0 1.333.597 1.333 1.333V18H7v-7.667C7 9.597 7.597 9 8.333 9A.667.667 0 009 8.333V7.83A3.001 3.001 0 017 5zm3 1a1 1 0 110-2 1 1 0 010 2zM9 16v-5.084c.37-.095.71-.268 1-.5.29.232.63.405 1 .5V16H9z" clip-rule="evenodd"></path><path d="M3 7.5a1.5 1.5 0 112 1.415V18H2v-6.667C2 10.597 2.597 10 3.333 10A.667.667 0 004 9.333v-.418A1.5 1.5 0 013 7.5zM15.5 6a1.5 1.5 0 01.5 2.915v.418c0 .369.299.667.667.667.736 0 1.333.597 1.333 1.333V18h-3V8.915A1.5 1.5 0 0115.5 6z"></path></g></svg></figure></span></div><p class="CoreText-sc-1txzju1-0 feJdGm">Social Links</p></div></div></div></div>
                  {/* ---------social media------------ */}

                  {creatorsList.map(({ url }) => (
                    <>
                      <div>
                        <input
                          aria-invalid="false"
                          id="display-name"
                          aria-describedby="display-name-description"
                          aria-labelledby="display-name-label"
                          type="text"
                          class="entry-content eeTKnM"
                          autocapitalize="off"
                          autocorrect="off"
                          data-a-target="tw-input"
                          ref={youtubeRef}
                          placeholder={url.youtube}
                          defaultValue={url?.youtube}
                        />
                        <p class="entry-content">
                          Youtube
                        </p>
                      </div>
                      <div>
                        <input
                          aria-invalid="false"
                          id="display-name"
                          aria-describedby="display-name-description"
                          aria-labelledby="display-name-label"
                          type="text"
                          class="entry-content eeTKnM"
                          autocapitalize="off"
                          autocorrect="off"
                          data-a-target="tw-input"
                          ref={twitterRef}
                          placeholder={url?.twitter}
                          defaultValue={url?.twitter}
                        />
                        <p class="entry-content">
                          Twitter
                        </p>
                      </div>
                      <div>
                        <input
                          aria-invalid="false"
                          id="display-name"
                          aria-describedby="display-name-description"
                          aria-labelledby="display-name-label"
                          type="text"
                          class="entry-content eeTKnM"
                          autocapitalize="off"
                          autocorrect="off"
                          data-a-target="tw-input"
                          ref={instagramRef}
                          placeholder={url?.instagram}
                          defaultValue={url?.instagram}
                        />
                        <p class="entry-content">
                          Instagram
                        </p>
                      </div>

                    </>
                  ))

                  }

                </header>
                <div class="footer  entry-edit">
                  <button className="ktFzpA" >
                    <div className='kHQqnO'>
                      <div className='ktFzpA'>
                        Save Changes
                      </div>
                    </div >
                  </button>
                  <button className="ktFzpA" onClick={handleDelete}>
                    <div className='kHQqnO'>
                      <div className='ktFzpA'>
                        Delete
                      </div>
                    </div >
                  </button>
                </div>
              </article>
            </form>
          </main>

        ))
      }

    </>
  )
}

export default EditCreator