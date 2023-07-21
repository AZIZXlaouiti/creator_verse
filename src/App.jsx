import { useEffect, useState } from 'react'
import { useRoutes } from "react-router-dom";
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import ShowCreators from './pages/ShowCreators'
import EditCreator from './pages/EditCreator'
import {supabase}  from './client'
function App() {

  const [creatorsList, setCreatorList] = useState([])

  useEffect(() => {
    async function getCreatorsList() {
      let { data: creators, error } = await supabase
        .from('creators')
        .select('*')
      setCreatorList(creators)
    }
    getCreatorsList()
  }, [creatorsList])
    
    const routes = useRoutes([
      /*
       * main page Home /
       * view page 
       * new page
       * edit page
      */
      { path: "/", element: <ShowCreators creatorsList = {creatorsList}/> },
      { path: "/view/:id", element: <ViewCreator creatorsList = {creatorsList}/> },
      { path: "/new", element: <AddCreator /> },
      { path: "/edit/:id", element: <EditCreator  /> },
      { path: "*", element: <div>404 NOT FOUND</div> },
    ]);


  return (
    <>
    {routes}
    </>
  )
}
export default App
