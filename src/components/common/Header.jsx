import { Grid, Stack, useMediaQuery } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  const _700 = useMediaQuery('(min-width:700px)');
  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={'row'}
          height={52}
          justifyContent={'space-around'}
          alignItems={'sticky'}
          top={0}
          py={1}
        >
          <img src="/Threads-logo-black-bg.webp" alt="logo" width={60} height={48} />
          <Stack
            justifyContent={'center'}
            width={'550px'}
            bgcolor={'aliceblue'}
            //   color={'white'}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>
          <p>
            <IoMenu size={36} className="image-icon" color="gray" />
          </p>
        </Stack>
      ) : (
        <>
          <Stack
            position={'fixed'}
            bottom={0}
            justifyContent={'center'}
            width={'100%'}
            height={52}
            p={1}
            bgcolor={'aliceblue'}
            zIndex={2}
          >
            <Navbar />
          </Stack>
          <Grid container height={60} justifyContent={'flex-end'} alignItems={'center'} p={1}>
            <Grid item xs={6}>
              <img src="/Threads-logo-black-bg.webp" alt="logo" width={60} height={35} />
            </Grid>
            <IoMenu size={36} className="image-icon" color="gray" />
          </Grid>
        </>
      )}
    </>
  );
};

export default Header;
