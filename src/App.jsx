import React from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import About from './components/About';

function app() {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <About />
    </div>
  );
}
export default app;
