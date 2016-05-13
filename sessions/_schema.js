session: {
  date: Date,
  animal: Number,
  weight: Number,

  whiskersLeft: [{
      type: String,
      enum: [ 'alpha', 'A1' , 'A2' , 'A3' , 'A4' ,
        'beta', 'B1' , 'B2' , 'B3' , 'B4' ,
        'gamma', 'C1' , 'C2' , 'C3' , 'C4' , 'C5' , 'C6' , 'C7' ,
        'delta', 'D1' , 'D2' , 'D3' , 'D4' , 'D5' , 'D6', 'D7', 'D8',
        'E1' , 'E2' , 'E3' , 'E4' , 'E5' , 'E6' , 'E7' , 'E8' , 'E9' , 'E10' ,
        'orbital' , 'genal', 'mandibular' , 'carpal' , 'microvibrissae' ,
      ],
    }],
  
  whiskersRight: [{
      type: String,
      enum: [ 'alpha', 'A1' , 'A2' , 'A3' , 'A4' ,
        'beta', 'B1' , 'B2' , 'B3' , 'B4' ,
        'gamma', 'C1' , 'C2' , 'C3' , 'C4' , 'C5' , 'C6' , 'C7' ,
        'delta', 'D1' , 'D2' , 'D3' , 'D4' , 'D5' , 'D6', 'D7', 'D8',
        'E1' , 'E2' , 'E3' , 'E4' , 'E5' , 'E6' , 'E7' , 'E8' , 'E9' , 'E10' ,
        'orbital' , 'genal' , 'mandibular' , 'carpal' , 'microvibrissae' ,
      ],
    }],
  
  headPosition: {
    height: Number,
    roll: Number,
    pitch: Number,
  },

  boxLights: Boolean,
  wallLeft: Boolean,
  wallRight: Boolean,
  wallFront: Boolean,

  physiology: {
    type: String,
    enum: [ 'none' , 'calcium-imaging' , 'silicon-probe' ]
  },

  protocol: {
    type: String,
    enum: [ 'free-running' , 'open-loop' , 'closed-loop' , 'mixed' ]
  },

  rig: String,
  location: String,
  experimentor: String,
}