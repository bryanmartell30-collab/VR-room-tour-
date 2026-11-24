/* =============================================================
   data.js  –  FSE VR Campus Tour scene definitions
   
   To use your own 360° panoramic photos:
     1. Export / convert them to equirectangular JPEG format.
     2. Name each file to match the `imagePath` field below.
     3. Place the files in the  images/scenes/  directory.
     4. Reload index.html in your browser.
   
   Each scene's  imagePath  is relative to index.html.
   Recommended image resolution: 4096 × 2048 pixels (or 8192 × 4096
   for higher fidelity), 90–95 % JPEG quality.
   ============================================================= */

var APP_DATA = {

  /* ----- Global settings ------------------------------------- */
  settings: {
    mouseViewMode:    'drag',   // 'drag' | 'qtvr'
    autorotateEnabled: true,
    autorotateDelay:   3000,    // ms before autorotate kicks in
    autorotateSpeed:   0.1,     // yaw speed in radians per second (~5.73°/sec)
    fullscreenButton:  true
  },

  /* ----- Scene list ------------------------------------------ */
  scenes: [
    {
      id:          '3d-printlab-ecg',
      name:        'Engineering Center 3D Printing and Lasercutting Lab',
      subtitle:    'Entrance',
      description: 'A 3D printing lab located in the Engineering Center, featuring various printers and prototyping tools',
      imagePath:   'images/scenes/3d-printlab-ecg/middle-of-3dprintlab.jpg',
      emoji:       '🚪',

      initialViewParameters: {
        yaw:   0.0,
        pitch: 0.0,
        fov:   1.4
      },

      linkHotspots: [
        {
          yaw:      0.8405,
          pitch:    0.3276,
          rotation: 0,
          target:   '3d-printlab-ecg-computers',
          label:    'Go to Computers'
        }
      ],

      infoHotspots: [
        {
          yaw:      2.9838,
          pitch:    0.4157,
          title:    'Front Desk',
          text:     'The front desk is where visitors can check in, ask questions, and get assistance from the staff. It also serves as a hub for accessing resources and information about the lab.\n More information can be accessed by going to their <a href="https://students.engineering.asu.edu/3d-print-lab/" target="_blank">website</a> or they can be contacted through the email <span class="highlight">fse3dprintlab@gmail.com</span> or the phone number <span class="highlight">(480) 727-7330</span>.'
        }
      ]
    },

    /* ------------------------------------------------------- */
    {
      id:          '3d-printlab-ecg-computers',
      name:        'Engineering Center 3D Printing and Lasercutting Lab',
      subtitle:    'Computers',
      description: 'Computers for designing and uploading models inside the 3d print lab',
      imagePath:   'images/scenes/3d-printlab-ecg/computers-3dprintlab.jpg',
      emoji:       '🖥️',

      initialViewParameters: {
        yaw:   0.0,
        pitch: 0.0,
        fov:   1.4
      },

      linkHotspots: [
        {
          yaw:      -1.2133,
          pitch:    0.2559,
          rotation: 0,
          target:   '3d-printlab-ecg',
          label:    'Go to Entrance'
        }
      ],

      infoHotspots: [
        {
          yaw:      0.1182,
          pitch:    0.3051,
          title:    'Design Computers',
          text:     'These computers are used for designing and uploading 3D models to the printers. They have software like <span class="highlight">Fusion 360</span> and <span class="highlight">Cura</span> installed for 3D modeling and slicing.'
        },
        {
          yaw:      1.8735,
          pitch:    0.1665,
          title:    'Leo and Alex',
          text:     'Bums'
        },
        {
          yaw:      -3.0342,
          pitch:    1.5154,
          title:    'Rin',
          text:     'NOT a bum (unlike leo and alex)'
        }
      ]
    },

   
/* ---- MAKER SPACE WALKTHROUGH ------------------------------- */

{
  id: 'maker-space-entrance',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Entrance',
  description: 'Welcome to the Maker Space at Hayden Library. Begin exploring the space using the navigation arrows.',
  imagePath: 'images/scenes/makerspace/entrance MakerSpace.JPG',
  emoji: '🚪',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-entrance-point-1',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Entrance Point 1',
  description: 'Explore the first viewpoint inside the Maker Space.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/entrance point 1 view .JPG',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-entrance-point-2',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Entrance Point 2',
  description: 'Continue exploring the Maker Space from another viewpoint.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/entrance point 2 view .JPG',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-1',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-entrance-point-3',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Entrance Point 3',
  description: 'Continue through the Maker Space toward the equipment areas.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/entrance point 3 view .JPG',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-2',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-laser-point-1',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Laser Cutters Point 1',
  description: 'Explore the laser cutting area of the Maker Space.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/laser cutters point 1.JPG',
  emoji: '✂️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-3',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-laser-point-2',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Laser Cutters Point 2',
  description: 'Continue exploring the laser cutting equipment.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/laser cutters point 2.JPG',
  emoji: '✂️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-1',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-laser-point-3',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Laser Cutters Point 3',
  description: 'View another part of the laser cutting area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/laser cutters point 3 .JPG',
  emoji: '✂️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-2',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-4',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-laser-point-4',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: 'Laser Cutters Point 4',
  description: 'Explore the final viewpoint of the laser cutting area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/laser cutters point 4.JPG',
  emoji: '✂️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-3',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-room',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-3d-print-room',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: '3D Printing Room',
  description: 'Explore the 3D printing and prototyping area of the Maker Space.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/makerspace 3d print room .JPG',
  emoji: '🖨️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-4',
      label: 'Previous Area'
    },
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'maker-space-3d-print-point-1',
  name: 'Maker Space at Hayden Library',
  group: 'MAKER SPACE',
  subtitle: '3D Printing Point 1',
  description: 'Continue exploring the 3D printing area from another viewpoint.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/makerspace/makerspace 3d print 1.5.JPG',
  emoji: '🖨️',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-room',
      label: 'Previous Area'
    }
  ],

  infoHotspots: []
},

/* ---- END MAKER SPACE WALKTHROUGH --------------------------- */
     

/* ---- TOOKER HALL WALKTHROUGH ------------------------------- */

{
  id: 'tooker-bridge',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Explore Tooker Hall',
  description: 'Welcome to the Tooker Hall virtual walkthrough! This bridge is the walkway students cross to get to class. Use the arrows to explore each area.',
  imagePath: 'images/scenes/tooker bridge-2.jpg',
  emoji: '🌉',

  initialViewParameters: {
    yaw: -0.9,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.9,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-view-15',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'tooker-view-15',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Tooker Hall Exterior',
  description: 'This is the outside view of Tooker Hall, a residence hall where students in the Ira A. Fulton Schools of Engineering live. It provides students with a place to live, connect with fellow engineering students, and experience campus life at ASU.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/tooker house view 1.5-2.jpg',
  emoji: '🏠',

  initialViewParameters: {
    yaw: -2.8,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-bridge',
      label: 'Previous Area'
    },
    {
      yaw: -2.8,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-house-view',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'tooker-house-view',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Outdoor Walkway',
  description:'This outdoor walkway is part of the shared space around Tooker Hall. Students use this walkway to get to class, visit the POD Market, and access nearby seating areas and the dining hall. It is a convenient pathway that connects students to different parts of campus.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/tooker house view.jpg',
  emoji: '🏡',

  initialViewParameters: {
    yaw: -3.2,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.9,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-view-15',
      label: 'Previous Area'
    },
    {
      yaw: -3.2,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-space-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'tooker-space-1',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Outdoor Seating Area',
  description: 'This outdoor common area is located near the Tooker Hall dining hall. It provides students with tables and chairs where they can sit, relax, enjoy a meal, socialize with friends, or take a break between classes.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/tooker space 1.jpg',
  emoji: '🛋️',

  initialViewParameters: {
    yaw: -3.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-house-view',
      label: 'Previous Area'
    },
    {
      yaw: -3.5,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-space-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'tooker-space-2',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Walkway Near the E-Spaces',
  description: 'This walkway is located near the Tooker Hall dining area and the E-Spaces classrooms. Students use this area to walk between different parts of Tooker Hall, including the dining hall and nearby classrooms. Continue to the next stop for a closer view of the E-Spaces.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/tooker space 2.0-2.jpg',
  emoji: '🛋️',

  initialViewParameters: {
    yaw: 0.0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 2.5,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-space-1',
      label: 'Previous Area'
    },
    {
      yaw: 0.0,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-space-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'tooker-space-3',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'E-Spaces Exterior',
  description: 'This is the outdoor view of the Tooker E-Spaces. These learning and collaboration spaces are used by students for classes, group activities, projects, and innovation workshops. Continue to the next stop to see inside one of the E-Spaces.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/tooker space 3.0-2.jpg',
  emoji: '🛋️',

  initialViewParameters: {
    yaw: -1.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.10,
      pitch: 0.4,
      rotation: 0,
      target: 'tooker-space-2',
      label: 'Previous Area'
    },
    {
      yaw: -1.5,
      pitch: 0.5,
      rotation: 0,
      target: 'tooker-espace-1',
      label: 'Next Area'
    }
  ],

infoHotspots: [
  {
    yaw: -2.5,
    pitch: 0,
    title: 'Tooker E-Spaces',
    text: 'These ground-floor makerspaces are commonly used by students in EPICS for lectures and meeting times, as well as innovation workshops and skill session events. Key card access is required to enter these spaces. For more information, call Tooker House at (480) 727-3463.'
  }
]
},

{
  id: 'tooker-espace-1',
  name: 'Tooker Hall',
  group: 'TOOKER HALL',
  subtitle: 'Inside the E-Spaces',
  description: 'This is an inside view of one of the Tooker E-Spaces, showing the lockers and desks available in the room. These spaces give students an area to attend classes, work on projects, collaborate with others, and participate in hands-on learning activities.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/espace 1 tooker.jpg',
  emoji: '🏁',

  initialViewParameters: {
    yaw: -2.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-3',
      label: 'Previous Area'
    }
  ],

  infoHotspots: [
    {
      yaw: -2.5,
      pitch: 0,
      title: 'Tooker Hall Project Lockers',
      text: 'These lockers are used to store student projects, materials, and other items related to their work.'
    }
  ]
},

/* ---- END TOOKER HALL WALKTHROUGH --------------------------- */


/* ---- ECG SPACES WALKTHROUGH ------------------------------- */

{
  id: 'ecg-placeholder',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Palm Walk',
  description: 'Explore Palm Walk at the ECG campus.',
  imagePath: 'images/scenes/ECG Espaces/palm walk.jpg',
  emoji: '🌴',

  initialViewParameters: {
    yaw: -0.2,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.15,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-palm-walk-continued',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-palm-walk-continued',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Palm Walk Continued',
  description: 'Continue exploring Palm Walk at ECG.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/palm walk continued.jpg',
  emoji: '🌴',

  initialViewParameters: {
    yaw: 3.8,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-placeholder',
      label: 'Previous Area'
    },
    {
      yaw: -2.7,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-cross-section-near',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-cross-section-near',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Cross Section Near ECG',
  description: 'This view shows another area near the ECG campus buildings. Continue exploring the surrounding campus environment.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/cross Section near ECG.jpg',
  emoji: '🏫',

  initialViewParameters: {
    yaw: -3,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-palm-walk-continued',
      label: 'Previous Area'
    },
    {
      yaw: -3.0,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-entrance',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-entrance',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Entrance',
  description: 'Explore the entrance area of the ECG Spaces walkthrough.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Entrance.jpg',
  emoji: '🚪',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-cross-section-near',
      label: 'Previous Area'
    },
    {
      yaw: 0.3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-1',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 1',
  description: 'This panorama shows the first viewpoint inside the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 1.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: -2.8,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-entrance',
      label: 'Previous Area'
    },
    {
      yaw: -2.6,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-2',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 2',
  description: 'This panorama shows the second viewpoint in the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 2.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -1.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-1',
      label: 'Previous Area'
    },
    {
      yaw: -0.9,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-3',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 3',
  description: 'This panorama shows the third viewpoint in the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 3.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -1.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-2',
      label: 'Previous Area'
    },
    {
      yaw: -0.8,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-4',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-4',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 4',
  description: 'This panorama shows the fourth viewpoint in the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 4.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: -2.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1.8,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-3',
      label: 'Previous Area'
    },
    {
      yaw: -2.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-5',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-5',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 5',
  description: 'This panorama shows the fifth viewpoint in the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 5.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0.6,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -1.9,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-4',
      label: 'Previous Area'
    },
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-6',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-6',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 6',
  description: 'This panorama shows the sixth viewpoint in the ECG area.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 6.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -2.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-5',
      label: 'Previous Area'
    },
    {
      yaw: 0.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-7',
      label: 'Next Area'
    }
  ],

  infoHotspots: []
},

{
  id: 'ecg-point-7',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Point 7',
  description: 'This panorama shows the final viewpoint in the ECG area walkthrough.',
  hideFromSidebar: true,
  imagePath: 'images/scenes/ECG Espaces/Point 7.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 2.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-6',
      label: 'Previous Area'
    }
  ],

  infoHotspots: []
},

/* ---- ECF E-SPACES PLACEHOLDER ----------------------------- */

{
  id: 'ecf-espaces-placeholder',
  name: 'ECF E-Spaces',
  group: 'ECF E-SPACES',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for ECF e-spaces.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '📍',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [],
  infoHotspots: []
},

/* ---- ECF PLACEHOLDER -------------------------------------- */

{
  id: 'ecf-placeholder',
  name: 'ECF',
  group: 'ECF',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for ECF.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '🏢',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [],
  infoHotspots: []
},

/* ---- BRICKYARD PLACEHOLDER ------------------------------- */

{
  id: 'brickyard-placeholder',
  name: 'Brickyard',
  group: 'BRICKYARD',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for Brickyard.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '🧱',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [],
  infoHotspots: []
},

/* ---- STUDY SPACES PLACEHOLDER ----------------------------- */

{
  id: 'study-spaces-placeholder',
  name: 'Study Spaces',
  group: 'STUDY SPACES',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for study spaces.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '📚',

  initialViewParameters: {
    yaw: 0,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [],
  infoHotspots: []
}

 
    ] /* end scenes */

}; /* end APP_DATA */
