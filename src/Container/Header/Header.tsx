import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import { green } from '@mui/material/colors'
import Menu from '@mui/icons-material/Menu'

import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    const appBar = true
    return (
        <AppBar 
        position="static" 
        className="app-bar" 
        style={{
          backgroundColor: appBar ? 'green' : 'purple',
        }}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header