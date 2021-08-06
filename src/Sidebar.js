import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { UseDataLayerValue } from './DataLayer';
//icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
  const [{ playlists }, dispatch] = UseDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {/* <SidebarOption title='Hip hop' />
      <SidebarOption title='Rick' /> */}

      {playlists ? console.log('found playlist') : console.log('no playlist')}
      {playlists?.items?.map((playlist) => (
        // console.log(playlist.name);
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
