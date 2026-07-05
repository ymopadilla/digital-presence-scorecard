export const PRO_SECTIONS = [
  {
    title: 'Website / Portfolio',
    icon: 'ti-world',
    questions: [
      {
        id: 'p1',
        text: 'Do you have a personal website or portfolio?',
        options: [
          { value: 2, label: "Yes, it's live and represents me well" },
          { value: 1, label: "Yes, but it needs work" },
          { value: 0, label: "No, I don't have one" },
        ],
      },
      {
        id: 'p2',
        text: 'Does your site clearly show who you are, what you do, and how to work with you?',
        options: [
          { value: 2, label: "Yes — it's clear and compelling" },
          { value: 1, label: "Somewhat, but it could be sharper" },
          { value: 0, label: "Not really" },
        ],
      },
    ],
  },
  {
    title: 'LinkedIn',
    icon: 'ti-brand-linkedin',
    questions: [
      {
        id: 'p3',
        text: 'Is your LinkedIn profile complete — photo, headline, summary, and experience?',
        options: [
          { value: 2, label: "Yes, fully filled out" },
          { value: 1, label: "Partially — some sections missing" },
          { value: 0, label: "Incomplete or I don't have one" },
        ],
      },
      {
        id: 'p4',
        text: 'Does your LinkedIn headline explain what you offer — not just your job title?',
        options: [
          { value: 2, label: "Yes — it describes what I do and who I help" },
          { value: 1, label: "It's mainly just my job title" },
          { value: 0, label: "I haven't touched it" },
        ],
      },
    ],
  },
  {
    title: 'Freelance / Client Platforms',
    icon: 'ti-briefcase',
    questions: [
      {
        id: 'p5',
        text: 'Do you have a profile on any freelance or client platform (Upwork, Fiverr, etc.)?',
        options: [
          { value: 2, label: "Yes, and it's optimized" },
          { value: 1, label: "Yes, but it's pretty basic" },
          { value: 0, label: "No, I don't use any" },
        ],
      },
      {
        id: 'p6',
        text: "Does your profile speak directly to your ideal client — not just list your skills?",
        options: [
          { value: 2, label: "Yes — it's written for them" },
          { value: 1, label: "It reads more like a resume" },
          { value: 0, label: "Not sure / haven't thought about it" },
        ],
      },
    ],
  },
  {
    title: 'Social Media',
    icon: 'ti-brand-instagram',
    questions: [
      {
        id: 'p7',
        text: 'Do your social profiles clearly reflect your professional brand?',
        options: [
          { value: 2, label: "Yes — bio, photo, and content all align" },
          { value: 1, label: "Somewhat, but it's inconsistent" },
          { value: 0, label: "No, or I don't use social for my work" },
        ],
      },
      {
        id: 'p8',
        text: 'Do you share content that showcases your expertise or work?',
        options: [
          { value: 2, label: "Yes, regularly" },
          { value: 1, label: "Occasionally" },
          { value: 0, label: "Rarely or never" },
        ],
      },
    ],
  },
]

export const BIZ_SECTIONS = [
  {
    title: 'Website',
    icon: 'ti-world',
    questions: [
      {
        id: 'b1',
        text: 'Do you have a business website?',
        options: [
          { value: 2, label: "Yes, it's live and professional" },
          { value: 1, label: "Yes, but it needs updating" },
          { value: 0, label: "No, I don't have one" },
        ],
      },
      {
        id: 'b2',
        text: 'Can a first-time visitor quickly understand what your business does and how to buy or contact you?',
        options: [
          { value: 2, label: "Yes — very clear" },
          { value: 1, label: "Sort of — it could be clearer" },
          { value: 0, label: "Probably not" },
        ],
      },
    ],
  },
  {
    title: 'Google Business Profile',
    icon: 'ti-map-pin',
    questions: [
      {
        id: 'b3',
        text: 'Do you have a Google Business Profile set up?',
        options: [
          { value: 2, label: "Yes, fully filled out with photos and hours" },
          { value: 1, label: "Yes, but it's incomplete" },
          { value: 0, label: "No, I don't have one" },
        ],
      },
      {
        id: 'b4',
        text: 'Do you have Google reviews from customers?',
        options: [
          { value: 2, label: "Yes — several positive reviews" },
          { value: 1, label: "One or two, but not many" },
          { value: 0, label: "None" },
        ],
      },
    ],
  },
  {
    title: 'Social Media',
    icon: 'ti-brand-facebook',
    questions: [
      {
        id: 'b5',
        text: 'Do your social profiles (Facebook, Instagram) clearly represent your business?',
        options: [
          { value: 2, label: "Yes — bio, photos, and content all align" },
          { value: 1, label: "Somewhat, but it's inconsistent" },
          { value: 0, label: "No, or I don't use social media" },
        ],
      },
      {
        id: 'b6',
        text: 'How often do you post content about your business?',
        options: [
          { value: 2, label: "Regularly — a few times a week" },
          { value: 1, label: "Occasionally — a few times a month" },
          { value: 0, label: "Rarely or never" },
        ],
      },
    ],
  },
  {
    title: 'LinkedIn',
    icon: 'ti-brand-linkedin',
    questions: [
      {
        id: 'b7',
        text: 'Does your business have a LinkedIn company page?',
        options: [
          { value: 2, label: "Yes, it's active and complete" },
          { value: 1, label: "Yes, but it's barely used" },
          { value: 0, label: "No" },
        ],
      },
      {
        id: 'b8',
        text: "Does your LinkedIn presence reflect what makes your business different?",
        options: [
          { value: 2, label: "Yes — our value is clear" },
          { value: 1, label: "It's generic — could be any business" },
          { value: 0, label: "We haven't thought about this" },
        ],
      },
    ],
  },
]

export const PRO_TIPS = {
  p1: [null, "Your website needs a refresh. A polished personal site is your most credible online asset.", "You don't have a personal website yet — this is the foundation of your professional brand online."],
  p2: [null, "Sharpen your website messaging. Visitors should know who you are and how to work with you within seconds.", "Your site needs a clearer message. Who you are, what you do, and how to hire you should be front and center."],
  p3: [null, "Finish filling out your LinkedIn. Incomplete profiles get skipped — every missing section costs you credibility.", "A complete LinkedIn profile is one of the easiest wins available. Fill in every section, including a professional photo."],
  p4: [null, "Your LinkedIn headline is prime real estate. Replace your job title with a description of what you do and who you help.", "Your LinkedIn headline isn't working for you. Tell people what problem you solve, not just what your title is."],
  p5: [null, "A basic freelance profile won't win clients. Your bio, skills, and portfolio need to work together to stand out.", "If your clients are on platforms like Upwork, you should be too — with a fully optimized profile."],
  p6: [null, "Rewrite your profile to speak to your client, not about yourself. Lead with their problem, not your credentials.", "Your freelance profile should read like a pitch, not a resume. Make it about them, not you."],
  p7: [null, "Inconsistent social profiles confuse potential clients. Align your bio, photo, and content across every platform.", "Your social media presence should clearly reflect your professional brand. Bio, photo, and content should all tell the same story."],
  p8: [null, "Posting a few times a week keeps you visible. You don't need to go viral — you just need to show up consistently.", "Start sharing your expertise on social media. Even one or two posts a week builds trust with your audience over time."],
}

export const BIZ_TIPS = {
  b1: [null, "Your website needs updating. An outdated site can hurt your credibility as much as having none at all.", "You don't have a business website yet — this is your most important digital asset for attracting customers."],
  b2: [null, "Visitors should understand your business and how to contact you within 5 seconds. If that's not happening, your messaging needs work.", "Make your offer and contact info impossible to miss. Confused visitors leave — and they don't come back."],
  b3: [null, "Complete your Google Business Profile. Add photos, hours, and a full description — incomplete profiles rank lower in search.", "A Google Business Profile is free and helps customers find you in local searches. Set one up — it takes less than an hour."],
  b4: [null, "A handful of reviews isn't enough. Make asking for reviews a regular habit after every purchase or project.", "Google reviews build trust with both customers and search engines. Start asking happy customers to leave you a review."],
  b5: [null, "Inconsistent social profiles send mixed signals. Pick a clear message and make every platform tell the same story.", "Your social profiles should make it immediately clear what your business does. Bio, photos, and content should all align."],
  b6: [null, "Posting more consistently will keep your business visible. Even 2–3 times a week makes a difference.", "Regular social media posting builds trust and keeps your business top of mind. Start small and stay consistent."],
  b7: [null, "An inactive LinkedIn page misses opportunities. Keep it current and use it to build credibility with business clients.", "A LinkedIn company page expands your business's professional reach. Set one up and keep it active."],
  b8: [null, "Generic LinkedIn presence blends in. Share what makes your business different — your story, your process, your results.", "Your LinkedIn presence should tell people why they should choose you. Make your unique value impossible to miss."],
}

export const LABELS = {
  p1: 'Website', p2: 'Website clarity', p3: 'LinkedIn profile', p4: 'LinkedIn headline',
  p5: 'Freelance profile', p6: 'Freelance pitch', p7: 'Social media', p8: 'Social posting',
  b1: 'Website', b2: 'Website clarity', b3: 'Google Business Profile', b4: 'Google reviews',
  b5: 'Social media', b6: 'Social posting', b7: 'LinkedIn', b8: 'LinkedIn presence',
}