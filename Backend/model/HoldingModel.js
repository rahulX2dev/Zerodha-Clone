const {model} = require('mongoose');

const HoldingSchema = require('../schemas/HoldingSchemas');
const HoldingModel = model('Holding', HoldingSchema);

    
module.exports = {HoldingModel};


