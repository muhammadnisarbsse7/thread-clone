import { Stack, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../src/components/common/Header';
import AddPost from '../../src/components/modals/AddPost';
import EditProfile from '../../src/components/modals/EditProfile';
import MainMenu from '../../src/components/menu/MainMenu';

const ProtectedLayout = () => {
  const _700 = useMediaQuery('(min-width:700px)');
  return (
    <Stack
      flexDirection={'column'}
      maxWidth={_700 ? '800px' : '90%'}
      minWidth={'100%'}
      mx={'auto'}
      overflow={'hidden'}
    >
      <Header />
      {/* <AddPost /> */}
      {/* <EditProfile /> */}
      {/* <MainMenu /> */}
      <Outlet />
    </Stack>
  );
};

export default ProtectedLayout;
