import './assets/styles/style.scss'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <h1>hello world</h1>
        </>
    );
}

export default App;
