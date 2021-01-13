import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">로그인</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">파멸의 길</Link></li>
      </ul>
    </div>
  );
}
