animal: {
  number: Number,
  earTag: Number,
  cage: Number,
  sex: {
    type: String,
    enum: [ 'F' , 'M' ],
    required: [true, 'Please specify subject sex'],
  },
  DOB: Date,
  IACUC: String,
  strain: [String],
  genotype: [Number],
  species: String,
  waterRestriction: {
    number: Number,
    weightStart: Number,
    dateStarted: Date,
    dailyWater: Number,
  },
  housing: {
    wheelInCage: Boolean,
    dayNightReversed: Boolean,
  },
}
