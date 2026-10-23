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

    /* ------------------------------------------------------- */
    {
      id:          'maker-space-entrance',
      name:        'Maker Space at Hayden Library',
      subtitle:    'Entrance',
      description: 'The main entrance of the Maker Space.',
      imagePath:   'images/scenes/makerspace/placeholder.jpg',
      emoji:       '🚪',

      initialViewParameters: {
        yaw:   0.0,
        pitch: 0.0,
        fov:   1.4
      },

      linkHotspots: [
        {
          yaw:      0.5,
          pitch:    0.0,
          rotation: 0,
          target:   'placeholder',
          label:    'placeholder'
        },
        {
          yaw:     -0.5,
          pitch:    0.0,
          rotation: 0,
          target:   'placeholder',
          label:    'placeholder'
        }
      ],

      infoHotspots: []
    },

    /* ------------------------------------------------------- */
    {
      id:          'maker-space-3d-printers',
      name:        'Maker Space at Hayden Library',
      subtitle:    '3D Printers',
      description: 'The 3D printing and rapid prototyping area.',
      imagePath:   'images/scenes/makerspace/placeholder.jpg',
      emoji:       '🖨️',

      initialViewParameters: {
        yaw:   0.0,
        pitch: 0.0,
        fov:   1.4
      },

      linkHotspots: [
        {
          yaw:      3.14,
          pitch:    0.0,
          rotation: 0,
          target:   'placeholder',
          label:    'placeholder'
        },
        {
          yaw:      1.0,
          pitch:    0.0,
          rotation: 0,
          target:   'placeholder',
          label:    'placeholder'
        }
      ],

      infoHotspots: []
    },

    /* ------------------------------------------------------- */
    {
      id:          'maker-space-laser-cutters',
      name:        'Maker Space at Hayden Library',
      subtitle:    'Laser Cutters',
      description: 'Laser cutting and engraving stations.',
      imagePath:   'images/scenes/makerspace/placeholder.jpg',
      emoji:       '✂️',

      initialViewParameters: {
        yaw:   0.0,
        pitch: 0.0,
        fov:   1.4
      },

      linkHotspots: [
        {
          yaw:      3.14,
          pitch:    0.0,
          rotation: 0,
          target:   'placeholder',
          label:    'placeholder'
        }
      ],

      infoHotspots: []
    },

     
/* ---- TOOKER TOUR ------------------------------------------ */
{
  id: 'tooker-bridge',
  name: 'Tooker Bridge',
  group: 'TOOKER HALL',
  subtitle: 'Starting Point',
  description: 'Start your tour at the Tooker Bridge.',
  imagePath: 'images/scenes/tooker bridge-2.jpg',
  emoji: '🌉',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-view-15',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-view-15',
  name: 'Tooker View 1.5',
  group: 'TOOKER HALL',
  subtitle: 'Second Stop',
  description: 'Continue your tour through Tooker Hall.',
  imagePath: 'images/scenes/tooker house view 1.5-2.jpg',
  emoji: '🏠',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-bridge',
      label: 'Previous Stop'
    },
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-house-view',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-house-view',
  name: 'Tooker House View',
  group: 'TOOKER HALL',
  subtitle: 'Third Stop',
  description: 'Explore the Tooker House view.',
  imagePath: 'images/scenes/tooker house view.jpg',
  emoji: '🏡',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-view-15',
      label: 'Previous Stop'
    },
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-1',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-space-1',
  name: 'Tooker Space 1',
  group: 'TOOKER HALL',
  subtitle: 'Fourth Stop',
  description: 'Explore the first Tooker space.',
  imagePath: 'images/scenes/tooker space 1.jpg',
  emoji: '🛋️',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-house-view',
      label: 'Previous Stop'
    },
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-2',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-space-2',
  name: 'Tooker Space 2',
  group: 'TOOKER HALL',
  subtitle: 'Fifth Stop',
  description: 'Explore the second Tooker space.',
  imagePath: 'images/scenes/tooker space 2.0-2.jpg',
  emoji: '🛋️',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-1',
      label: 'Previous Stop'
    },
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-3',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-space-3',
  name: 'Tooker Space 3',
  group: 'TOOKER HALL',
  subtitle: 'Sixth Stop',
  description: 'Explore the third Tooker space.',
  imagePath: 'images/scenes/tooker space 3.0-2.jpg',
  emoji: '🛋️',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-2',
      label: 'Previous Stop'
    },
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-espace-1',
      label: 'Next Stop'
    }
  ],
  infoHotspots: []
},
{
  id: 'tooker-espace-1',
  name: 'Espace 1',
  group: 'TOOKER HALL',
  subtitle: 'Final Stop',
  description: 'Finish your tour at Espace 1.',
  imagePath: 'images/scenes/espace 1 tooker.jpg',
  emoji: '🏁',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'tooker-space-3',
      label: 'Previous Stop'
    }
  ],
  infoHotspots: []
},


/* ---- NEW CAMPUS SPACES ---------------------------------- */
{
  id: 'ecf-espaces-placeholder',
  name: 'ECF E-Spaces',
  group: 'ECF E-SPACES',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for ECF e-spaces. A 360-degree photo will be added later.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '📍',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'ecf-placeholder',
      label: 'Next: ECF'
    }
  ],
  infoHotspots: []
},
{
  id: 'ecf-placeholder',
  name: 'ECF',
  group: 'ECF',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for ECF. A 360-degree photo will be added later.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '🏢',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'ecf-espaces-placeholder',
      label: 'Previous: ECF E-Spaces'
    },
    {
      yaw: 0.8,
      pitch: 0,
      rotation: 0,
      target: 'ecg-placeholder',
      label: 'Next: ECG Spaces'
    }
  ],
  infoHotspots: []
},
{
  id: 'ecg-placeholder',
  name: 'ECG Spaces',
  group: 'ECG',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for ECG spaces. A 360-degree photo will be added later.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '🏫',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'ecf-placeholder',
      label: 'Previous: ECF'
    },
    {
      yaw: 0.8,
      pitch: 0,
      rotation: 0,
      target: 'brickyard-placeholder',
      label: 'Next: Brickyard'
    }
  ],
  infoHotspots: []
},
{
  id: 'brickyard-placeholder',
  name: 'Brickyard',
  group: 'BRICKYARD',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for Brickyard. A 360-degree photo will be added later.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '🧱',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'ecg-placeholder',
      label: 'Previous: ECG Spaces'
    },
    {
      yaw: 0.8,
      pitch: 0,
      rotation: 0,
      target: 'study-spaces-placeholder',
      label: 'Next: Study Spaces'
    }
  ],
  infoHotspots: []
},
{
  id: 'study-spaces-placeholder',
  name: 'Study Spaces',
  group: 'STUDY SPACES',
  subtitle: 'Photo Coming Soon',
  description: 'Placeholder for study spaces. A 360-degree photo will be added later.',
  imagePath: 'images/scenes/makerspace/placeholder.jpg',
  emoji: '📚',
  initialViewParameters: { yaw: 0, pitch: 0, fov: 1.4 },
  linkHotspots: [
    {
      yaw: 0,
      pitch: 0,
      rotation: 0,
      target: 'brickyard-placeholder',
      label: 'Previous: Brickyard'
    }
  ],
  infoHotspots: []
}
    
   
    ] /* end scenes */

}; /* end APP_DATA */
