import { CssBaseline } from '@mui/material'
import Header from 'Container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'

const App = () => {
    return (
    <StyledEngineProvider injectFirst>
        <CssBaseline/>
        < Header/>
    </StyledEngineProvider>
    )
}

export default App
