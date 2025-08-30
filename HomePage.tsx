import React from 'react';
import { EVENTS } from '../constants';
import { Page } from '../types';
import type { ClubEvent } from '../types';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const featuredEvent: ClubEvent | undefined = EVENTS.find(event => event.isFeatured);

  return (
    <div className="space-y-24 md:space-y-32 mb-16 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center -mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-white uppercase">
            Future. Amplified. <span className="text-brand-primary">Connected.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-dark-text/80 mb-8 font-mono">
            We are the nexus of innovation, creativity, and technology. A community for builders, thinkers, and pioneers shaping tomorrow.
          </p>
          <button
            onClick={() => navigateTo(Page.EVENTS)}
            className="px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-secondary hover:text-dark-bg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/30"
          >
            Explore Events
          </button>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-brand-primary tracking-wider uppercase font-mono">// About Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Who We Are</p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-dark-text/80">
              The Forum for Aspiring Computer Engineers (FACE) is more than just a club; it's a launchpad for the next generation of tech leaders. We provide a platform for students to learn, collaborate, and innovate beyond the confines of the classroom.
            </p>
          </div>
      </section>

      {/* Featured Event Section */}
      {featuredEvent && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-brand-primary tracking-wider uppercase font-mono">// Next Big Thing</h2>
                <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Upcoming Event</p>
            </div>
          <div className="bg-dark-card rounded-lg overflow-hidden shadow-2xl shadow-brand-primary/10 border border-brand-primary/20 md:flex">
            <div className="md:w-1/2">
                <img className="h-full w-full object-cover" src={featuredEvent.imageUrl} alt={featuredEvent.title} />
            </div>
            {/* FIX: The file was truncated here. Completed the component and added a default export. */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{featuredEvent.title}</h3>
                <p className="mt-2 text-sm font-mono text-brand-secondary">{featuredEvent.date}</p>
                <p className="mt-4 text-dark-text/80">{featuredEvent.description}</p>
                <div className="mt-6">
                    <button
                        onClick={() => navigateTo(Page.EVENTS)}
                        className="inline-block px-6 py-3 bg-brand-secondary text-dark-bg font-semibold rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300"
                    >
                        Learn More
                    </button>
                </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
