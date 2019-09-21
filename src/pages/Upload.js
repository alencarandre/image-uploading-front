import React from 'react';
import Topbar from '../components/Topbar';
import FormUpload from '../components/FormUpload';

function Home() {
  return (
    <div>
      <header>
        <Topbar />
      </header>

      <br />

      <section id="content">
        <FormUpload />
      </section>
    </div>
  );
}

export default Home;
