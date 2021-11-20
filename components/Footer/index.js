import React from 'react'

const Footer = () =>{
    return(
        <>
            <div className='bg-gray-700 p-4 mt-6 position-absolute bottom-0 roda'>
                <div className='container mx-auto text-center font-bold text-white'>
                    Projeto desenvolvido por Vagner Oliveira @2021
                    <div className='mt-4'>
                        <img className='inline p-4 w-40' src='./logo_semana_fsm.png' />
                        <img className='inline p-4 w-40' src='./logo_devpleno.png' />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Footer