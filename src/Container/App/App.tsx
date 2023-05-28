import { CssBaseline } from '@mui/material'
import Header from 'Container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Container/Main/Main'

const App = () => {
    return (
    <StyledEngineProvider injectFirst>
        <CssBaseline/>
        < Header/>
        <Main/>
    </StyledEngineProvider>
    )
}

export default App
