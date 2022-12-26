import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Toolbar } from "@mui/material"

export const Navbar = () => {
  return (
    <AppBar position="fixed"
    sx={{

    }}>

        <Toolbar>
            <MenuOutlined/>
        </Toolbar>
    </AppBar>
    )
}
