import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/common/Loading';
import Header from './components/common/Header';
import Home from '../pages/protected/Home';
import Search from '../pages/protected/Search';
import Error from '../pages/protected/Error';
import Register from '../pages/protected/Register';
import ProtectedLayout from '../pages/protected/ProtectedLayout';
import { Box } from '@mui/material';
import Post from './components/home/Post';
import ProfileLayout from '../pages/protected/Profile/ProfileLayout';
import Thread from '../pages/protected/Profile/Thread';
import Replies from '../pages/protected/Profile/Replies';
import Repost from '../pages/protected/Profile/Repost';
import SinglePost from './../pages/protected/Profile/SinglePost.jsx';
// import Register from './../pages/protected/Register.jsx';

const App = () => {
  const data = true;
  return (
    <>
      <Box minHeight={'100vh'}>
        <BrowserRouter>
          <Routes>
            {
              data ? <Route exact path="/" element={<ProtectedLayout />}>
                <Route exact path="" element={<Home />} />
                <Route exact path="post/:id" element={<SinglePost />} />
                <Route exact path="search" element={<Search />} />
                <Route exact path="profile" element={<ProfileLayout />}>
                  <Route exact path="threads/:id" element={<Thread />} />
                  <Route exact path="replies/:id" element={<Replies />} />
                  <Route exact path="reposts/:id" element={<Repost />} />
                </Route>
              </Route> : (
                <Route exact path="/register" element={<Register />} />
              )
            }
            <Route exact path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Box>
      {/* <Register /> */}
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
