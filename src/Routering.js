import React from 'react'
import VCPage from './Pages/VCPage';
import WFMPage from './Pages/WFMPage';
import Home from './Pages/Home';
import AlarmDashPage from './Pages/AlarmDashPage';
import ScadaDashPage from './Pages/ScadaDashPage';
import { useRoutes } from 'react-router-dom'

const Routering = () => {

    const element = useRoutes([
      {path:"/", element:<Home />},
      {path:"/vcpage", element:<VCPage />},
      {path:"/wfmpage", element:<WFMPage />},
      // {path:"/alarmdashpage", element:<AlarmDashPage />},
      {path:"/scadadashpage", element:<ScadaDashPage />},


    ])
    return element;
    // return (
    //   let 
    //     <Router>
    //      <Routes>
    //        <Route path="/" element={<Home />} />
    //        <Route path="/vcpage" element={<VCPage />} />
    //        <Route path="/wfmpage" element={<WFMPage />} />
    //      </Routes>
    //    </Router>
    // )
}

export default Routering
