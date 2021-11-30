import React, { useState, useEffect } from 'react'
import PageTitle from '../components/PageTitle'


const Pesquisa = () => {

    const [form, setForm] = useState({
        Nome:'',
        Email:'',
        Whatsapp:'',
        Nota: 0,
        Sugestao:'',
        Indica: ''
        
    })

      
    const notas = [0, 1, 2, 3, 4, 5]
    const indica = ['Sim', 'Não']
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
    
    const errors = {
        Nome: false,
        Email: false,
        Whatsapp: false,
        Sugestao: false
    }

    if(form.Nome === ''){
        errors.Nome = true
    }

    if(form.Email === '' || form.Email.indexOf('@') <0){
        errors.Email = true
    }

    if(form.Whatsapp === ''){
        errors.Whatsapp = true
    }

    if(form.Sugestao === ''){
        errors.Sugestao = true
    }

    const hasErrors = Object.keys(errors).reduce(
        (prev, curr) => prev || errors[curr],
        false
    )

    return(
        <>
            <div className='mt-6'>
                <PageTitle title='Pesquisa' />
                <h1 className='my-4 text-center font-bold text-2xl'>Critica e sugestões</h1>
                <p className='mt-6 text-center'>
                O restaurante TOP sempre privando pela satisfação de seus clientes.
                Participe da nossa pesquisa e concorra a descontos!
                </p>
                {!sucess &&
                <div className='w-2/5 mx-auto mt-4'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' className='bg-blue-100 mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-500' placeholder='Nome' onChange={onChange} name='Nome' id='Nome' value={form.Nome} required></input>
                    {errors.Nome && <p className='mb-1 text-red-400'>Por favor, informe seu nome.</p>}
                    <label className='font-bold'>Email:</label>
                    <input type='text' className='bg-blue-100 mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-500' placeholder='Email' onChange={onChange} name='Email' value={form.Email}></input>
                    {errors.Email && <p className='mb-1 text-red-400'>Informe um email válido.</p>}
                    <label className='font-bold'>Whatsapp:</label>
                    <input type='text' className='bg-blue-100 mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-500' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>
                    {errors.Whatsapp && <p className='mb-1 text-red-400'>Informe seu whatsapp.</p>}
                    <label className='font-bold'>Sugestão / Critica:</label>
                    <textarea className='bg-blue-100 mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-gray-500' onChange={onChange} name='Sugestao' value={form.Sugestao}></textarea>
                    {errors.Sugestao && <p className='mb-1 text-red-400'>Por favor, digite aqui sua sugestão ou crítica.</p>}
                    
                    <p className='text-center'>Qual a sua nota para nosso Estabelecimento? </p>
                    <div className='flex py-6'>
                        {notas.map(nota => {
                            return (
                                <label className='block w-1/6 text-center' key={nota}>
                                    {nota}<br />
                                    <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                                </label>
                            )
                        })}
                    </div>

                    <p className='text-center'>Você nos indicaria para algum amigo?</p>
                    <label className='text-red-400' id='indicaReq' hidden>*Campo obrigatório</label>        
                    <div className='flex py-6'>
                      {indica.map(indica => {
                          return (
                            <label className='block w-1/2 font-bold text-center' key={indica}>
                              <input type='radio' name='Indica' value={indica} onChange={onChange} />
                              <br />{indica}
                            </label>
                          )
                        })
                      }
                    </div>

                    <button onClick={save} className='w-full text-center mt-4 bg-blue-400 px-12 py-4 font-bold rounded-lg hover: shadow' name='button' disabled={hasErrors}>Salvar</button>                    
                    
                </div>
                }
                {sucess &&
                    <div className='w-2/5 mx-auto'>
                        <div class="mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-6 text-center" role="alert">
                            <p className="font-bold">Mensagem enviada com sucesso!</p>
                            <p className="text-sm">Obrigado por contribui com sua sugestão ou crítica</p>
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

