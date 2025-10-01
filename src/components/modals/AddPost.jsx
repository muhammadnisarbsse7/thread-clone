import { Avatar, Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaImages } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { addPostModal } from '../../redux/slice'

const AddPost = () => {
    const { openAddPostModal } = useSelector((state) => state.service)

    const _700 = useMediaQuery('(min-width:700px)')
    const _500 = useMediaQuery('(min-width:500px)')
    const _300 = useMediaQuery('(min-width:300px)')

    const [text, setText] = useState()
    const [media, setMedia] = useState()
    const MediaRef = useRef()
    const dispatch = useDispatch()
    const handleclose = () => {
        dispatch(addPostModal(false))
    }
    const handleMediaRef = () => {
        MediaRef.current.click()
    }
    const handlePost = () => {

    }
    return (
        <>
            <Dialog open={openAddPostModal} onClose={handleclose} fullWidth fullScreen={_700 ? false : true}>
                <Box position={'absolute'} top={20} right={20} ><RxCross2 onClick={handleclose} size={28} className='image-icon' /></Box>
                <DialogTitle textAlign={'center'} mb={5}>
                    New Thread ....
                </DialogTitle>
                <DialogContent>
                    <Stack flexDirection={'row'} gap={2} mb={5}>
                        <Avatar src='' alt='' />
                        <Stack>
                            <Typography variant='h6' fontWeight={'bold'} fontSize={'1rem'}>Aditya_001</Typography>
                            <textarea cols={_500 ? 40 : 25} rows={2} className='text1' placeholder='Start a Thread....' autoFocus onChange={((e) => setText(e.target.value))} />
                            {media ? <img src={URL.createObjectURL(media)} alt='' id='url-img' width={_500 ? 300 : _300 ? 200 : 100} height={_500 ? 300 : _300 ? 200 : 100} /> : null}
                            <FaImages size={28} className='image-icon' onClick={handleMediaRef} />
                            <input type='file' accept='image/*' className='file-input' ref={MediaRef} onChange={(e) => setMedia(e.target.files[0])} />
                        </Stack>
                    </Stack>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h6' fontSize={'1rem'} color='gray'> Anyone Can Reply</Typography>
                        <Button size='large' sx={{ bgcolor: 'gray', cursor: 'pointer' }}>Post</Button>
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddPost