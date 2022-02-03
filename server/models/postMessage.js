import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String], // Array of strings
  selectedFile: String,
  likes: {
    //object
    type: [String],
    default: [],
  },
  comments: { type: [String], default: [] },
  createdAt: {
    //object
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
