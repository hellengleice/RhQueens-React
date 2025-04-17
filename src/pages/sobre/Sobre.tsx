
interface DevasSobre {
    nome: string;
    imagem: string;
    sobre: string;
    github: string;
    linkedin: string;
}

const devas: DevasSobre[] = [

    {
        nome: 'Isabela Santos',
        imagem: '/isabela.png',
        sobre: 'Biriribororo.',
        github: 'link',
        linkedin: 'Link'
    },

    {
        nome: 'Isabela Santos',
        imagem: '/isabela.png',
        sobre: 'Biriribororo.',
        github: 'link',
        linkedin: 'Link'

    },
];                 

function Sobre() {

    return (
    {devas.map((deva, index) => (
        <div>Sobre
            <div className='border-4 border-fuchsia-800 rounded-2xl p-6 flex row items-center gap-4'>
                <h2 className='text-fuchsia-600 text-xl font-bold text-center'>
                </h2>
                <p className='text-gray-700 text-center'>Desenvolvedoras
                    {deva}
                </p>
                <p>Contato</p>
                <div className='flex gap-1'>
                    <a href="https://github.com/Abilafora/projeto_integrador_rh_queens_-front.git" target="_blank">
                    <GithubLogo size={32} weight='bold' />
                    </a>
                </div> 

                <div className='flex gap-1'>
                    <a href="https://github.com/Abilafora/projeto_integrador_rh_queens_-front.git" target="_blank">
                    <LinkedinLogo size={32} weight='bold' />
                    </a>
                </div> 
            </div>
        </div>
        )
    )
}

export default Sobre