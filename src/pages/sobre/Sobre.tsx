import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

interface DevasSobre {
    nome: string;
    imagem: string;
    sobre: string;
    github: string;
    linkedin: string;
    }


    function Sobre() {
    const devas: DevasSobre[] = [
    {
    nome: 'Evelyn Santos',
    imagem: 'https://i.postimg.cc/KY3hmQBp/Design-sem-nome-5.png',
    sobre: 'Desenvolvedora FullStack Java',
    github: 'https://github.com/EvelynSantos6',
    linkedin: 'https://www.linkedin.com/in/evelyn-santos-devti/'
    },
    {
    nome: 'Hellen Gleice',
    imagem: 'https://i.postimg.cc/CLnGHqCT/Design-sem-nome-9.png',
    sobre: 'Desenvolvedora Fullstack.',
    github: 'https://github.com/hellengleice',
    linkedin: 'https://www.linkedin.com/in/hellenjr'
    },
    {
    nome: 'Thainara Cruz',
    imagem: 'https://i.postimg.cc/x8CRSpbc/Design-sem-nome-7.png',
    sobre: 'Desenvolvedora FullStack Java',
    github: 'https://github.com/ThainaraCruz',
    linkedin: 'http://www.linkedin.com/in/thainara-cruz-48183517b'
    },
    {
    nome: 'Isabela Santos',
    imagem: 'https://i.postimg.cc/RZXZWP3M/Design-sem-nome-4.png',
    sobre: 'Desenvolvedora FullStack',
    github: 'https://github.com/Isabela-prog',
    linkedin: 'https://www.linkedin.com/in/isabela-santos-837541351/'
    },
    {
    nome: 'Maytê Araujo',
    imagem: 'https://i.postimg.cc/3RLX9jb7/Design-sem-nome-8.png',
    sobre: 'Desenvolvedora Java Fullstack',
    github: 'https://github.com/maytearaujo',
    linkedin: 'https://www.linkedin.com/in/maytearaujo/'
    },
    {
    nome: 'Abiqueila Souza',
    imagem: 'https://i.postimg.cc/pLygBkGV/Design-sem-nome-6.png',
    sobre: 'Densenvolvedora Java Fullstack.',
    github: 'https://github.com/Abilafora',
    linkedin: 'https://www.linkedin.com/in/abiqueila-souza/'
    }];

    return (
        <div className="flex justify-center p-20">
            {devas.map((deva, index) => (
        <div className='border-4 border-green-700 rounded-2xl p-6 flex flex-col items-center gap-4 z'>
            <h2 className='text-fuchsia-600 text-xl font-bold text-center'>{deva.nome}
            </h2>
            <p className='text-gray-700 text-center'>
            </p>
        <div> 
            <img
                src={deva.imagem}
                alt={deva.nome}
                    className='w-2/3'/>
        </div>

        <div className='flex gap-2'>
            <a href={deva.linkedin} target="_blank">
            <LinkedinLogo size={32} weight='bold' />
            </a>
        </div> 

        <div className='flex gap-2'>
            <a href={deva.github} target="_blank">
            <GithubLogo size={32} weight='bold' />
            </a>
        </div> 
        </div>
            ))}
        </div>
    )
}

export default Sobre;