import React from 'react';
import Navbar from '../src/Navbar/Navbar';
import Cards from '../src/Cards/Cards';
import Imagen from './Imagen/Imagen';
import Footer from './Footer/Footer';


function App() {

  const historias = [
    { 
        titulo: "Historia 1", 
        descripcion: "Descripción de la historia 1", 
        imagen: "https://media.canalnet.tv/2021/04/guerra-las-islas-malvinas.png" ,
        autor: "Pedro Garcia",
        fotoAutor: "https://elnueve-compress.s3-accelerate.amazonaws.com/files/1525263728890el%20testimonio%20de%20un%20veterano%20tomba.jpg",
        fecha: "12/05/2023"
    },
    { 
        titulo: "Historia 2", 
        descripcion: "Descripción de la historia 2", 
        imagen: "https://conlagentenoticias.com/wp-content/uploads/2020/10/malvinas-th-768x432.jpg" ,
        autor: "Mario Rodriguez",
        fotoAutor: "https://c1.staticflickr.com/4/3650/3407092802_8f6ecb75a8.jpg",
        fecha: "12/05/2023"
    },

    { 
      titulo: "Historia 3", 
      descripcion: "Descripción de la historia 3", 
      imagen: "https://www.elclarin.cl/wp-content/uploads/2020/04/guerra-de-malvinas-1982-211903.jpg",
      autor: "Juan Clark",
      fotoAutor: "https://media.minutouno.com/adjuntos/150/imagenes/024/106/0024106794.jpg",
      fecha: "12/05/2023"
      
  },
  { 
    titulo: "Historia 4", 
    descripcion: "Descripción de la historia 4", 
    imagen: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/03/15082659/guerra-malvinas-bando-britanico-6.jpg" ,
    autor: "Pedro Garcia",
    fotoAutor: "https://elnueve-compress.s3-accelerate.amazonaws.com/files/1525263728890el%20testimonio%20de%20un%20veterano%20tomba.jpg",
    fecha: "12/05/2023"
},
{ 
    titulo: "Historia 5", 
    descripcion: "Descripción de la historia 5", 
    imagen: "https://img.europapress.es/fotoweb/fotonoticia_20170402084523-999309_1024.jpg" ,
    autor: "Mario Rodriguez",
    fotoAutor: "https://c1.staticflickr.com/4/3650/3407092802_8f6ecb75a8.jpg",
    fecha: "12/05/2023"
},

{ 
  titulo: "Historia 6", 
  descripcion: "Descripción de la historia 6", 
  imagen: "https://static.misionesonline.news/wp-content/uploads/2023/05/ejercito-argentino.jpg",
  autor: "Juan Clark",
  fotoAutor: "https://media.minutouno.com/adjuntos/150/imagenes/024/106/0024106794.jpg",
  fecha: "12/05/2023"
  
},
    
];


  return (
    <div>
      <Navbar />
      <Imagen />
     < Cards historias={historias} />
     <Footer />
    </div>
  );
}

export default App;
