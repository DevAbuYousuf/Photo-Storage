import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import AppLayout from './components/layout/AppLayout'
import PhotosPages from './pages/PhotosPages'
import FavoritesPages from './pages/FavoritesPages'
import AlbumsPage from './pages/AlbumsPage'
import AlbumDetailPages from './pages/AlbumDetailPages'
import TrashPages from './pages/TrashPages'

const App = () => {
  return (
    <>
    <Toaster position=''/>
    <Routes>
      <Route path='/login' element={<AuthPage />} />

      {/* Protected Route */}
      <Route element={<AppLayout />}>
        <Route path='/' element={<PhotosPages />} />
        <Route path='/favorites' element={<FavoritesPages />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <React path='/albums/:id' element={<AlbumDetailPages />} />
        <React path='/trash' element={<TrashPages />} />
       </Route>
    </Routes>
    
    </>
  )
}

export default App
