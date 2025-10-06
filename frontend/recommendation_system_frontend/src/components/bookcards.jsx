import React from 'react';


const urls=['https://images.gr-assets.com/books/1447303603m/2767052.jpg',
 'https://images.gr-assets.com/books/1474154022m/3.jpg',
 'https://images.gr-assets.com/books/1361039443m/41865.jpg',
 'https://images.gr-assets.com/books/1361975680m/2657.jpg',
 'https://images.gr-assets.com/books/1490528560m/4671.jpg',
 'https://images.gr-assets.com/books/1360206420m/11870085.jpg',
 'https://images.gr-assets.com/books/1372847500m/5907.jpg',
 'https://images.gr-assets.com/books/1398034300m/5107.jpg',
 'https://images.gr-assets.com/books/1320399351m/1885.jpg',
 'https://images.gr-assets.com/books/1484565687m/77203.jpg']



 
const Bookcards = () => {
    return (
        <div className='grid grid-cols-5 grid-rows-2 gap-4'>
            {urls.map((url,index)=>(
            
            <div id="books" className='h-[300px] w-[230px] bg-white  flex items-center justify-center flex-col m-10' >
                   <img src={url} alt={`Book ${index + 1}`}  className='h-[240px] w-[170px] '/>
                   <div className='flex items-center mx-3 '>
                                      <h1 className='font-bold text-pretty'>The Hunger Games by seith collins</h1>
                   </div>
            </div>
            ))}
        </div>
    );
}

export default Bookcards;
