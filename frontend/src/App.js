import './App.css';
import {Routes,Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import CrearteUsers from './components/CrearteUsers';
import UserList from './components/UsersList';



function App() {
  return (
    <div>
     
     <Navigation/>
     <div className='container p-4'></div>
     <Routes>
      <Route path='/listaUsuarios' element={<UserList/>}></Route>
      <Route path='/crearusuario' element={<CrearteUsers/>}></Route>
      <Route path='/edit/:id' element={<CrearteUsers/>}></Route>


     </Routes>
      


     
    </div>
  );
}

export default App;
