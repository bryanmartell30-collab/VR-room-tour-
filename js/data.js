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
    yaw: 0.8,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.7,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Maker Space Entrance',
      text: 'This is the entrance to the Maker Space, located on the third floor of Hayden Library at ASU. Students can use this space to create projects, laser cut materials, and 3D print their designs.'
    }
  ]
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
    yaw: 3,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1.2,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance',
      label: 'Previous Area'
    },
    {
      yaw: 3,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Maker Space Overview',
      text: 'This viewpoint provides a wider look at the Maker Space entrance. You can see a whiteboard and chairs, giving students an area to gather, collaborate, and discuss their projects.'
    }
  ]
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
    yaw: -1.3,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.6,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-1',
      label: 'Previous Area'
    },
    {
      yaw: -1.3,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Maker Space Work Area',
      text: 'This view shows the back of the Maker Space, including the workbenches and tables where students can work on their projects, build creations, and collaborate with others.'
    }
  ]
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
    yaw: 2.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -4,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-2',
      label: 'Previous Area'
    },
    {
      yaw: 2.4,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Whiteboard and Maker Equipment',
      text: 'This view highlights the whiteboard at the back of the room and the different types of machines available in the Maker Space. Students can use this equipment to create, design, and work on hands-on projects.'
    }
  ]
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
    yaw: -1.8,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-entrance-point-3',
      label: 'Previous Area'
    },
    {
      yaw: -1.8,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Laser Cutting Area',
      text: 'This view introduces the laser cutters available in the Maker Space. In the next scene, we will take a closer look at the room where the laser cutters are located.'
    }
  ]
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
    yaw: -0.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -0.7,
      pitch: 0.2,
      rotation: 0,
      target: 'maker-space-laser-point-1',
      label: 'Previous Area'
    },
    {
      yaw: -0.4,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Laser Cutters and Workstation',
      text: 'This view shows two laser cutters and a desk with a computer in the middle. Students can use the computer as a workstation when preparing and working on their laser-cutting projects.'
    }
  ]
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
    yaw: -0.9,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -1,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-2',
      label: 'Previous Area'
    },
    {
      yaw: -3,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-4',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Laser Cutting Room – Outside View',
      text: 'This view shows the laser-cutting room from the outside, giving students a look at the room’s layout and its surroundings within the Maker Space.'
    }
  ]
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
    yaw: -0.5,
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
      yaw: -0.7,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-room',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Maker Space – Room Overview',
      text: 'This view provides a look across the middle of the Maker Space, showing the overall layout of the room and the different areas students can use to work on their projects.'
    }
  ]
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
    yaw: -0.9,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 2.5,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-laser-point-4',
      label: 'Previous Area'
    },
    {
      yaw: 0.4,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: '3D Printing Room',
      text: 'This view introduces the room where the Maker Space’s 3D printers are located. Students can use these printers to turn their digital designs into physical objects and bring their projects to life.'
    }
  ]
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
    yaw: 3.5,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -3.4,
      pitch: 0.5,
      rotation: 0,
      target: 'maker-space-3d-print-room',
      label: 'Previous Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: '3D Printers and Room Access',
      text: 'This view shows the back of the 3D printing room, including the different 3D printers available for student projects. It also provides a view of how students can access the room from the main Maker Space area.'
    }
  ]
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

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Palm Walk',
      text: 'This is Palm Walk, a major pedestrian walkway on the ASU Tempe campus. Students use this pathway to travel between classes and campus buildings. It provides access to nearby engineering classrooms and other academic spaces.'
    }
  ]
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

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Science Center',
      text: 'As you continue along Palm Walk, the Science Center is on your left. This building houses many of the science labs where students attend lab classes and complete hands-on coursework.'
    }
  ]
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

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'ECG Walkway Intersection',
      text: 'This area is a cross-section where Palm Walk divides into multiple walkways, allowing students to travel between different parts of campus. Straight ahead are the ECG Center building and the ECG E-Spaces, which provide additional academic and study spaces for students.'
    }
  ]
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
    yaw: 0.2,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 3.2,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-cross-section-near',
      label: 'Previous Area'
    },
    {
      yaw: 3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-1',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Inside the ECG Center',
      text: 'This is a view inside the ECG Center. As you continue through the next images, you will get a closer look at one of the classrooms and the learning spaces students use.'
    }
  ]
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
    yaw: -3,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: -2.5,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-entrance',
      label: 'Previous Area'
    },
    {
      yaw: -3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-2',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'ECG Classrooms & Study Spaces',
      text: 'These are classroom and study spaces inside the ECG Center where students can work on assignments, study, and collaborate. Students may also have opportunities to receive help from tutors and get support with their coursework.'
    }
  ]
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
      yaw: -0.1,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-3',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'View of ECF Spaces',
      text: 'This is another view of the classroom, looking outside toward the ECF Spaces. Students in FSE 104 and FSE 404 use these spaces to work on class projects, collaborate with classmates, and apply what they learn through hands-on activities.'
    }
  ]
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
      yaw: 0.3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-4',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Another View of the Classroom',
      text: 'This image shows another view of the ECG Center classroom. These spaces give students an area to attend class, work on assignments, collaborate on projects, and study.'
    }
  ]
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
    yaw: -3.3,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 1.9,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-3',
      label: 'Previous Area'
    },
    {
      yaw: -3,
      pitch: 0.4,
      rotation: 0,
      target: 'ecg-point-5',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Classroom Study Display',
      text: 'This classroom also has a TV display that students can use as a study tool. It can be used to share presentations, review class materials, work through examples, and collaborate on group projects.'
    }
  ]
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
      yaw: -3.3,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-4',
      label: 'Previous Area'
    },
    {
      yaw: 0.5,
      pitch: 0.2,
      rotation: 0,
      target: 'ecg-point-6',
      label: 'Next Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Tutor Center',
      text: 'Located just outside the classroom, the Tutor Center is a place where students can ask for help with their coursework, review challenging topics, and get extra academic support. It is a helpful resource for students who want guidance with their classes.'
    }
  ]
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
      yaw: -2.9,
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

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Classroom Tables',
      text: 'This view shows the back of the classroom, where students can use the tables to work on assignments, study, and collaborate with classmates. These tables provide additional space for group activities and hands-on coursework.'
    }
  ]
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
    yaw: 3.2,
    pitch: 0,
    fov: 1.4
  },

  linkHotspots: [
    {
      yaw: 0.4,
      pitch: 0.5,
      rotation: 0,
      target: 'ecg-point-6',
      label: 'Previous Area'
    }
  ],

  infoHotspots: [
    {
      yaw: 0,
      pitch: 0,
      title: 'Classroom Whiteboard',
      text: 'This view highlights the large whiteboard in the classroom. Students and instructors can use it to work through problems, explain concepts, brainstorm ideas, and collaborate during class activities or group study sessions.'
    }
  ]
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
