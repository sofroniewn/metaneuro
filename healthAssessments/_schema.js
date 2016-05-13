healthAssessment: {
  animal: String,
  date: Date,
  weightBefore: Number,
  weightAfter: Number,
  waterDuring: Number,
  waterAfter: Number,
  seeds: Number,
  fur: {
    type: String,
    enum: [ 'OK' , 'SR' , 'MR' , 'VR' ],
  },
  posture: {
    type: String,
    enum: [ 'OK' , 'SH' , 'MH' , 'VH' ],
  },
  QHA: Number,
}