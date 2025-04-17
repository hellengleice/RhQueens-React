
function Home() {
    return (
        <>
            <div className="bg-[#3bb49d] flex justify-center min-h-full">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold font-serif'>
                            RH Queens
                        </h2>
                        <p className='text-xl font-serif'>
                            Ambiente saudável começa com respeito e empatia.
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.postimg.cc/QxM0ZwJs/Design-sem-nome-3.png"
                            alt="Imagem Página Home"
                            className='w-2/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home