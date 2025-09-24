import { Stack, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div>
      <Stack
        flexDirection={'row'}
        minHeight={'50vh'}
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        my={5}
      >
        <CircularProgress />
      </Stack>
    </div>
  );
};

export default Loading;
