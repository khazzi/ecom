
import React from 'react'
import { client } from "../app/lib/sanity";
import  Link  from 'next/link';
import PopularGadgetCarousel from './PopularGadgetCarousel';
const getData = async ()=> {
  const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Trending']._id, categories)] {
    _id,
      name,
      description,
      images,
      price,
      price_id,
      "slug":slug.current,
      "categories": categories[]->{
      name
      }
  }`;
  const data = await client.fetch(query);
  return data;
}
const PopularTech = async () => {
    const gadgets = await getData();
    //console.log(gadgets);

  return( 
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Most Popular Gadgets</h2>
        <p className='text-center mb-[30px]'>The World's Premium Brands in one Shop</p>
        <PopularGadgetCarousel gadgets={gadgets}/>
        <Link href='/our-gadgets'>
          <button className='btn btn-accent mx-auto'>See all gadgets</button>
        </Link>
      </div>
    </section>
);
  
}

export default PopularTech