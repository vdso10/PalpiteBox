import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'


const Contato = () => {
    return(
        <>
            <div>
                <PageTitle title='Contato' />                
                <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-5">

                    <div class="text-3xl mb-6 text-center ">
                        Entre em contato conosco.
                    </div>

                    <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">

                        <div class="col-span-2 lg:col-span-1">
                        <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Nome"/>
                        </div>

                        <div class="col-span-2 lg:col-span-1">
                        <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email"/>
                        </div>

                        <div class="col-span-2">
                        <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Mensagem"></textarea>
                        </div>

                        <div class="col-span-2 text-right">
                        <button class="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32">
                            Enviar
                        </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Contato