import React, { useState } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import Card from '../components/Card';
function ViewCreators({ creatorsList }) {
  const pid = useParams().id
  const navigate = useNavigate();
  return (
    <>
      <main className='main'>
        <header class="post-header">
          <div class="breadcrumbs">
          <a onClick={()=> navigate("/")}>
            Home</a>&nbsp;»&nbsp;
          <a>
            {`view`}</a>
        </div>
        </header>
        {creatorsList.filter((item) => item.id == pid).map(creator => (
          <Card item={creator} />
        ))}
      </main>
    </>
  );
}
export default ViewCreators;
// {
//   "discord": "https://discord.gg/ysnpXnY7ba",
//   "youtube":,
//   "twitter":,
//   "github":,
//   "instagram":,
// }