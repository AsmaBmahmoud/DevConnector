const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Shema({
  user: {
    type: Schema.Types.ObjectId;
    ref: 'users'
  },
  tesxt: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
   type: String
  },
  likes: [
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  comments: [
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    text: {
      type: String,
      required: true 
    },
    name: {
      type: String
    },
    avatar: {
      type: string
    },
    date: {
      type: DataCue,
      default: Date.now
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = PPost = mongoose.model('post', PostSchema);