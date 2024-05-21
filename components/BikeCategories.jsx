'use client';
import {useState, useEffect} from 'react';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import Gadget from './Gadget';

const BikeCategories = ({gadget}) => {
    const [category, setCategory] = useState('all');
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [price, setPrice] = useState(100);
useEffect(()=> {
    const filtered = gadget.filter((gadgets)=> {
        const categoryMatch = 
        category === 'all' 
        ? gadgets 
        : gadgets.categories.some((categ)=> categ.name === category)
    const priceMatch = gadgets.price <= price;
    return categoryMatch && priceMatch;
    
    });
    setFilteredGadgets(filtered)
}, [category, price, gadget])

  return (
    <section className='min-h-[1200px] py-10'>
        <div className='container mx-auto'>
        <div className='flex flex-col'>
        <aside className='bg-yellow-100 w-full p-4
            mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
                <RadioGroup defaultValue='all'
                className='flex flex-col gap-6 mb-12' >
                <div>
                    <RadioGroupItem value='all' id='all'
                    onclick={()=> setCategory('all')} />
                    <Label htmlFor='all'>All</Label>
                </div>
                <div>
                    <RadioGroupItem value='Trad' id='Trad'
                    onclick={()=> setCategory('Trad')}/>
                    <Label htmlFor='Trad'>Trad</Label>
                </div>
                <div>
                    <RadioGroupItem value='Young' id='Young'
                    onclick={()=> setCategory('Young')}/>
                    <Label htmlFor='Young'>Young</Label>
                </div>
                <div>
                    <RadioGroupItem value='Popular' id='Popular'
                    onclick={()=> setCategory('Popular')}/>
                    <Label htmlFor='Popular'>Popular</Label>
                </div>
                </RadioGroup>
                {/* price slider */}
                <div className='max-w-56'>
                    <div className='text-lg mb-4 font-medium'>
                        Max Price: <span className='text-accent font-semibold ml-2'>${price}</span>
                    <span className='ml-2'>({filteredGadgets.length > 1 
                    ? `${filteredGadgets.length} items` 
                    : filteredGadgets === 0 
                    ? `${filteredGadgets.length} items` 
                    : `${filteredGadgets.length} item`})</span>
                    </div>
                    <Slider defaultValue={[10]} max={100} step={1} onValueChange={(val)=> setPrice(val[0])} />
                </div>
            </aside>
        <div className=' w-full xl:w-[1050px] ml-auto'>
             <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
             {filteredGadgets.map((gadgets) => {
                return <Gadget gadget={gadgets} key={gadget.price_id}/>
             })}
             </div>

        </div>
        </div>
        </div>
    </section>
  )
}

export default BikeCategories