import React from 'react';
import SearchInput from '../../src/components/search/SearchInput';
import ProfileBar from '../../src/components/search/ProfileBar';
import { Stack } from '@mui/material';

const Search = () => {
  return (
    <>
      <SearchInput />
      <Stack flexDirection={'column'} gap={1} mb={5} width={'60%'} maxWidth={'750px'} mx={'auto'}>
        <ProfileBar />
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </>
  );
};

export default Search;
