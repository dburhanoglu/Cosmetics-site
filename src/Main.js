import React, { Component } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ProductDetail from './ProductDetail';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';




 function Main() {
  const navigate = useNavigate();
   

  const handleProductClick = (id) => {
    navigate(`/urun/${id}`);
  };
  
    const handlelick = () => {
        navigate('./Urun');
    };
    return (
      <div>
        <p>Main Component</p>
        <button onClick={handlelick} sx={{bgcolor:'pink'}}>URUNE GİT</button>
        <ImageList sx={{ display:'grid',alignItems:'center',margin:'70px'}}>
          {productData.map((item) =>(
            <ImageListItem 
            key={item.img}
             sx={{marginBottom:'40px',width:'100%',height:'auto'}}
             onClick={()=>handleProductClick(item.id)}
             >
              <img
             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
             src={`${item.img}?w=248&fit=crop&auto=format`}
             alt={item.title}
             loading="lazy"
               
              />
              <ImageListItemBar
                sx={{bgcolor:'#6A17AD',color:'white'}}
                title={item.title}
                subtitle={<span>Fiyat:{item.price}</span>}
                position="below"
              />
            </ImageListItem>
               ))}
            </ImageList>
            <Routes>
            <Route path="urun/:id" element={<ProductDetail productData={productData} />} />
        </Routes>
      </div>
    );
}
 export const productData =[{
  id:'1',
  img:"https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1187130_1_613x613.jpg",
  title:"Incandessence Kadın Vücut Spreyi 100 ml",
  price:"99,99 TL",
  },
  {
  id:'2',
  img:"https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1193492_1_310x310.jpg",
  title:"	Wish of Love EDT Kadın Parfüm Bahara Özel Ambalaj 50 ml",
  price:"99,99 TL",
  },
  {
  id:'3',
  img:"https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1184992_1_613x613.jpg",
  title:"	Far Away Beyond Kadın Parfüm EDP 50 ml",
  price:"99,99 TL",
  },
  {
  id:'4',
  img:"https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1182123_1_613x613.jpg",
  title:"	Individual Blue Antiperspirant Roll-On Deodorant 50 ml",
  price:"99,99 TL",
  },
  {
  id:'5',
  img:"https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_20231230_1_613x613.jpg",
  title:"Attraction EDP 50 ml Kadın Parfüm Seti",
  price:"99,99 TL",
  },
  
  ];
export default  Main;