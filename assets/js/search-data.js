// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "See [Google Scholar](https://scholar.google.com/citations?user=CIPv2JQAAAAJ&amp;hl) for the most up-to-date information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-internship-at-ibm-research-on-the-future-of-climate-team",
          title: 'Started my internship at IBM Research on the Future of Climate team.',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-best-student-award-from-cvpr-earthvision-workhop",
          title: 'Honored to receive the Best Student Award from CVPR EarthVision Workhop.',
          description: "",
          section: "News",},{id: "news-selected-as-columbia-dream-sports-ai-phd-fellow",
          title: 'Selected as Columbia-Dream Sports AI PhD Fellow.',
          description: "",
          section: "News",},{id: "news-we-will-present-chaosbench-as-an-oral-presentation-at-neurips-2024-see-you-in-vancouver",
          title: 'We will present ChaosBench as an Oral presentation at NeurIPS 2024, see you...',
          description: "",
          section: "News",},{id: "news-deep-koopman-operators-for-causal-discovery-is-accepted-to-nature-communications-physics",
          title: 'Deep Koopman operators for causal discovery is accepted to Nature Communications Physics.',
          description: "",
          section: "News",},{id: "news-causaldynamics-is-accepted-to-neurips-2025-see-you-in-san-diego",
          title: 'CausalDynamics is accepted to NeurIPS 2025, see you in San Diego.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6E%32%38%30%38@%63%6F%6C%75%6D%62%69%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/juannat7", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CIPv2JQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/juannat7", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
