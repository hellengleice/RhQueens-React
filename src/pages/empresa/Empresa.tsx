function Empresa() {
  return (
            <div className="flex justify-center  bg-green-200 rounded-xl p-10">
                <div className='container grid grid-cols-2 text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        
                        <h2 className='text-5xl font-bold p-5 font-serif'>
                            Seja Bem Vinde!
                        </h2>
                        
                        
                        <h3 className='text-xl font-bold text-black p-2 flex justify font-serif'>
                        Sobre nossa empresa:
                        </h3>

                        <p className='text-xl text-black p-3 flex justify-start font-serif'>                       
                        Nosso sistema de RH foi desenvolvido para simplificar a gestão de pessoas em empresas 
                        que valorizam eficiência, organização e agilidade nos processos.
                        Através de uma interface intuitiva, é possível realizar o cadastro, edição e 
                        exclusão de categorias essenciais para o dia a dia do setor de Recursos Humanos. 
                        Cada funcionalidade foi pensada para facilitar o controle de informações e proporcionar 
                        uma experiência fluida ao usuário.
                        Embora estejamos em fase inicial, nosso produto entrega
                        valor ao oferecer uma base sólida e escalável para futuras integrações e funcionalidades,
                        como gestão de talentos, controle de vagas e relatórios inteligentes.
                        Nosso objetivo é transformar tarefas operacionais em processos simples e organizados, 
                        para que equipes de RH possam focar no que realmente importa, as pessoas.
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.postimg.cc/QxM0ZwJs/Design-sem-nome-3.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>   
            </div> 
  )
}

export default Empresa