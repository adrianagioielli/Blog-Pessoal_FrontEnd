import {useState} from 'react';
import reactLogo from './assets/react.svg'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './contexts/UserContext';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagem/listaPostagem/ListaPostagem';
import FormularioPostagem from './components/postagem/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem';
import Perfil from './paginas/perfil/Perfil';


function App() {
  return (
    <>
      <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastroTema" element={<FormularioTema />} />
                <Route path="/editarTema/:id" element={<FormularioTema />} />
                <Route path="/deletarTema/:id" element={<DeletarTema />} />
                <Route path="/postagens" element={<ListaPostagens />} />
                <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
      </AuthProvider>
    </>
);
}
export default App;