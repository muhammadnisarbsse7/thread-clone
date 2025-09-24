

import { Menu, MenuItem } from '@mui/material'

const MyMenu = () => {
    const handleClose = () => {
        // console.log('Menu closed')
    }
    const handleDeletePost = () => {
        // console.log('Post deleted')   
    }
    return (
        <>
            <Menu anchorEl={''} open={true} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
            </Menu>
        </>
    )
}

export default MyMenu