
function Home() {
    return (
        <>
            <div className="bg-[#3C6B62] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
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
        </>
    )
}

export default Home