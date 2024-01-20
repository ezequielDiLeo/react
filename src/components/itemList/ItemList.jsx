import React from 'react'
import './itemList.scss'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const ItemList = ({productos}) => {
  return (
    <section className='list_contaier'>
      {/* {productos.map((item)=>(
        <div>
          <h1 className='list_title'>{item.category}</h1>
          <hr />
        </div>
      ))} */}
        <h1 className='list_title'>productos</h1>
        <hr />

        {/*catalogo de prodctos*/}
      <div className='flex flex-wrap gap-8 items-center justify-center'>
        {productos.map((item) => (
          <article key={item.id} className='justify-center'>
            <img src={item.img} alt={item.name} className='imagen m-5 items-center justify-center' />
            <h3 className='text-2x1 font-semibold text-center'>{item.name}</h3>
            {/* <p className='text-center '>{item.description}</p> */}
            <p className='text-xl font-bold text-center'>${item.price}</p>
            <hr />
            <Button>
              <Link to={`/item/${item.id}`}>ver más</Link>
            </Button>
          </article>
      
        ))}
      </div>
    </section>
  )
}
