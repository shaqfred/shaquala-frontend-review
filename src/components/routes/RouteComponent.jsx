import {Routes, Route} from "react-router-dom"
import Home from "../../pages/Home.jsx"
import New from "../../pages/New.jsx"
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Candy from "../../pages/Candy.jsx"
import About from "../../pages/About.jsx"
import Edit from "../../pages/Edit.jsx"

            
import {Navigate} from "react-router-dom"

export default function RouteComponent(){

    return(
        <Routes>

            <Route path="/" element= {<Home />} />
            <Route path="/candy" element ={<Candy />}/>
            <Route path="/candy/:id" element={<Show />}/>
            <Route path="/candy/new" element={<New/>}/>
            <Route path="/candy/:id/edit" element={<Edit/>}/>
            <Route path="/candy/about" element={<About/>}/>
            <Route path="/candy/not-found" element={<Error/>}/>
            <Route path="*" element={<Navigate to ="/candy/not-found"/>}/>
            <Route path="/candy/scrap" element={<Navigate to ="/candy/:id/edit"/>}/>



            </Routes>

        
    )
}