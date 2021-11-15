import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return(
        <>
            <div>
                <PageTitle title='Sobre' />
                <h1 className='font-bold mb-6'>Sobre nós</h1>
                <div>
                    <p>
                    A qualidade dos nossos produtos e o nosso atendimento tem sido o grande diferencial da empresa, que busca sempre conduzir os seus negócios de modo a garantir o respeito aos direitos humanos e ao meio ambiente.

Nosso principal objetivo é a satisfação dos nossos clientes que estão cada vez mais exigentes.

A melhoria contínua é sempre um grande desafio que tem sido encarado como o principal objetivo dos nossos colaboradores, objetivando sempre o foco no Cliente e em conformidade com o foco do Cliente.
                    </p>
                </div>
            </div>

        </>
        
    )
}

export default Sobre