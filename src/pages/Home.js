import React from 'react';
import Topbar from '../components/Topbar';
import ImageList from '../components/ImageList';

function Home() {
  return (
    <div>
      <header>
        <Topbar />
      </header>

      <br />

      <section id="content">
        <ImageList />
      </section>
    </div>
  );
}

export default Home;
