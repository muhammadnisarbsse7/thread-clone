import { Stack, TextField } from '@mui/material';
import Post from '../../../src/components/home/Post';
import Comments from '../../../src/components/home/post/Comments';
import { useState } from 'react';

const SinglePost = () => {
  const [comment, setComment] = useState('');
  return (
    <>
      <Stack flexDirection={'column'} my={5} gap={2}>
        <Post />
        <Stack flexDirection={'column'} gap={2} width={'80%'} mx={'auto'}>
          <Comments />
        </Stack>
        <TextField
          variant="outlined"
          autoFocus
          placeholder="comment here ..."
          id="comment"
          sx={{ width: '50%', mx: 'auto', my: 5, p: 1 }}
          onChange={(e) => setComment(e.target.value)}
        ></TextField>
      </Stack>
    </>
  );
};

export default SinglePost;
