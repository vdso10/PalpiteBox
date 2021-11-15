import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return(
        <>
            <div>
                <PageTitle title='Contato' />
                <h1 className='font-bold mb-6'>Contato</h1>
                <div>
                    <p>Email: teste@teste.com.br</p>
                    <p>Tel: (31)3000-0000</p>
                    <p>Whattapp: (31) 00000-00000</p>
                </div>
            </div>
        </>
        
    )
}

export default Contato