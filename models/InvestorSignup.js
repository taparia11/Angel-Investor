const mongoose = require('mongoose');
const { Schema } = mongoose;

const InvestorSignup = new Schema({

username:{
    type: String,
    required: true
},

name:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
phone:{
    type: String,
    required: true
},

role:{
    type: String,
    required: true
},

companyName:{
    type: String,
    required: true
},

socialMediaHandle:{
    type: String,
    required: true
},

industries:{
    type: String,
    required: true
},

industriesType:{
    type: String,
    required: true
},

chequesSize:{
    type: String,
    required: true
},

angleSyndicate:{
    type: String,
    required: true
},

leadRounds:{
    type: String,
    required: true
},

shortIntro:{
    type: String,
    required: true
},

topInvestments:{
    type: String,
    required: true
},

date:{
    type: Date, 
    default:Date.now
}

});

module.exports = mongoose.model('investorsignup', InvestorSignup)