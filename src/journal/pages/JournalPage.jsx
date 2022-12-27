import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant=''>Veniam excepteur excepteur dolore consequat eu non culpa dolore dolore ullamco cupidatat velit Lorem eiusmod. Proident fugiat est aliqua enim pariatur laborum quis proident quis est laborum magna. Esse adipisicing qui tempor dolor anim labore fugiat adipisicing ea.</Typography> */}
      {/* <MailOutline/> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor:'error.main',
        ':hover': {backgroundColor:'error.main', opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}>
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}
