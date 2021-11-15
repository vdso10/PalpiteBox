import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome:'',
        Email:'',
        Whatsapp:'',
        Nota: 0
    })

    const notas = [0, 1, 2, 3, 4, 5]
    const [ sucess, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    const save = async() =>{
      
       try {
        const response = await fetch ('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSuccess(true)
        setRetorno(data)
           
       } catch (error) {
           console.log(error)
       }
      
    }

    const onChange = evt => {

        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    return(
        <>
            <div className='mt-6'>
                <PageTitle title='Pesquisa' />
                <h1 className='my-4 text-center font-bold text-2xl'>Critica e sugestões</h1>
                <p className='mt-6 text-center'>
                O restaurante X sempre busca atender melhor seus clientes.
Por isso, estamos sempre abertos a ouvir sua opinião
                </p>
                {!sucess &&
                <div className='w-48 mx-auto mt-4'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' className='p-4 block shadow bg-blue-200 rounded w-96' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} required></input>
                    <label className='font-bold'>Email:</label>
                    <input type='text' className='p-4 block shadow bg-blue-200 rounded w-96' placeholder='Email' onChange={onChange} name='Email' value={form.Email}></input>
                    <label className='font-bold'>Whatsapp:</label>
                    <input type='text' className='p-4 block shadow bg-blue-200 rounded w-96' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>
                    <label className='font-bold'>Nota:</label>
                    <div className='flex py-6'>
                        {notas.map(nota => {
                            return (
                                <label className='block w-1/6 text-center'>
                                    {nota}<br />
                                    <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                                </label>
                            )
                        })}
                    </div>

                    <button onClick={save} className='mt-4 bg-blue-400 px-12 py-4 font-bold rounded-lg hover: shadow'>Salvar</button>
                    
                </div>
                }
                {sucess &&
                    <div className='w-2/5 mx-auto'>
                        <div class="mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-6 text-center" role="alert">
                            <p class="font-bold">Mensagem enviada com sucesso!</p>
                            <p class="text-sm">Obrigado por contribui com sua sugestão ou crítica</p>
                        </div>
                        
                        {
                            retorno.showCoupon &&
                            <div className='text-center p-4 border border-gray-400'>
                                <h2 className='text-blue-900 font-bold text-2x1'>Seu cupom é:</h2> <br />
                                <span className='font-bold rounded py-2 px-2 bg-indigo-400 text-3xl'>{retorno.Cupom}</span>
                            </div>
                        }
                        {
                            retorno.showCoupon &&
                            <div className='text-center p-4'>
                                <span className='text-blue-900 font-bold mb-4'>{retorno.Promo}</span><br />
                                <p className='mt-4 text-2xl text-black-500 border border-gray-500 '>Tire um print ou uma foto desta tela e apresente no estabelecimento.</p>

                            </div>
                        }
                        
                    </div>
                }
                                                    
            </div>
        </>
    )
}

export default Pesquisa