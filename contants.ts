
import { Page, NavLink, TeamMember, ClubEvent, EventStatus } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', page: Page.HOME },
  { name: 'Team', page: Page.TEAM },
  { name: 'Events', page: Page.EVENTS },
  { name: 'Contact', page: Page.CONTACT },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alex "Glitch" Ryder',
    role: 'President & Chief Architect',
    imageUrl: 'https://picsum.photos/seed/alex/400/400',
    bio: 'Visionary leader with a passion for disruptive tech and building future-proof communities.',
  },
  {
    name: 'Jasmine "Cypher" Kaur',
    role: 'Vice President, Operations',
    imageUrl: 'https://picsum.photos/seed/jasmine/400/400',
    bio: 'The operational mastermind ensuring all systems run smoothly. Specializes in cryptography and secure networks.',
  },
  {
    name: 'Ben "Kernel" Carter',
    role: 'Head of Technology',
    imageUrl: 'https://picsum.photos/seed/ben/400/400',
    bio: 'Deep-level coder and hardware enthusiast. If it has a circuit, Ben can make it better.',
  },
  {
    name: 'Chloe "Nova" Chen',
    role: 'Lead Event Strategist',
    imageUrl: 'https://picsum.photos/seed/chloe/400/400',
    bio: 'Designs unforgettable experiences that merge technology with creativity. Expert in AR/VR events.',
  },
  {
    name: 'Leo "Forge" Martinez',
    role: 'Community Manager',
    imageUrl: 'https://picsum.photos/seed/leo/400/400',
    bio: 'The heart of the club. Fosters collaboration and connects members with opportunities.',
  },
  {
    name: 'Mia "Echo" Wallace',
    role: 'Marketing & Communications',
    imageUrl: 'https://picsum.photos/seed/mia/400/400',
    bio: 'Crafts our story and broadcasts it to the world. A wizard of digital outreach and social algorithms.',
  },
];

export const EVENTS: ClubEvent[] = [
  {
    title: 'CyberTronix 2024: The AI Revolution',
    date: 'OCT 28, 2024',
    description: 'Our flagship annual conference. Dive deep into the world of Artificial Intelligence with keynote speakers, hands-on workshops, and a futuristic tech expo. Explore the ethical, creative, and technical frontiers of AI.',
    imageUrl: 'https://picsum.photos/seed/event1/1200/600',
    status: EventStatus.UPCOMING,
    isFeatured: true,
  },
  {
    title: 'CodeNight: Quantum Challenges',
    date: 'NOV 15, 2024',
    description: 'An all-night hackathon focused on solving complex problems using quantum computing principles. Prizes for the most innovative solutions.',
    imageUrl: 'https://picsum.photos/seed/event2/800/400',
    status: EventStatus.UPCOMING,
  },
  {
    title: 'VR/AR Creators Meetup',
    date: 'DEC 05, 2024',
    description: 'A showcase and networking event for virtual and augmented reality developers and artists. Demo your latest project and connect with fellow creators.',
    imageUrl: 'https://picsum.photos/seed/event3/800/400',
    status: EventStatus.UPCOMING,
  },
  {
    title: 'SynthWave Synthesis Workshop',
    date: 'SEP 20, 2024',
    description: 'Learned to create retro-futuristic music using modern digital audio workstations. A blend of tech and 80s nostalgia.',
    imageUrl: 'https://picsum.photos/seed/event4/800/400',
    status: EventStatus.PAST,
  },
  {
    title: 'Intro to Blockchain & DApps',
    date: 'AUG 12, 2024',
    description: 'A comprehensive seminar on the fundamentals of blockchain technology and how to build decentralized applications.',
    imageUrl: 'https://picsum.photos/seed/event5/800/400',
    status: EventStatus.PAST,
  },
  {
    title: 'Robotics Build-a-Thon',
    date: 'JUL 01, 2024',
    description: 'Teams competed to build and program autonomous robots for a series of challenges. A fantastic display of engineering and teamwork.',
    imageUrl: 'https://picsum.photos/seed/event6/800/400',
    status: EventStatus.PAST,
  },
];
