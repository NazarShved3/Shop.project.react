import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return  <h1>Hello App Component</h1>
}

const Content = () => {
    return ( 
    <div>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, magni error, voluptatum consectetur ducimus perspiciatis sequi esse sunt nisi numquam, ab dolores reiciendis possimus! Debitis quis veniam nam culpa sunt!
        </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam ducimus provident, blanditiis ipsam vel, dolor ut necessitatibus repellat temporibus, natus in accusantium corporis eius harum praesentium dignissimos inventore dicta?

    </p>
    </div>
    )
}

const App = () => {
    return(
        <div>
            <Title/>
            <Content/> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)
