import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/get-promo', fetcher)
    //return(<pre>{JSON.stringify(data)}</pre>)

    return(
        <>
        <div>
            <PageTitle title='Seja Bem Vindo' />
            <p className='mt-6 text-center'>
                O restaurante X sempre busca atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir sua opinião
            </p>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 px-12 py-4 font-bold rounded-lg hover: shadow'>Dar sua opinião ou sugestão</a>
                </Link>
            </div>
            { !data && <div><p className='text-center'>Carregando...</p></div>}
            {!error && data && data.showCoupon &&
            <p className='mt-6 text-center'>
            {data.message}
            </p>
            }
        </div>
            
        </>
    )
}

export default Index