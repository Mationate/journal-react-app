import { Box } from "@mui/system"
import { Navbar } from "../components/";
const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
        <Box sx={{display: 'flex'}}>
            {/* navbar drawerwidth*/}
            <Navbar/>
            {/* sidebar drawerwidth*/}
            <Box component='main'
                sx={{flexGrow:1,p:3}}
                >
                    {/* toolbar */}
                    {children}
            </Box>
        </Box>
    )
}
