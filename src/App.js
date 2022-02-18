import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

export default function App()
{
    const [characters, setCharacters] = useState(null);
    const [currentCharacter, setCurrentCharacter] = useState(null);

    const openDetails = id =>
    {
        const character = characters.filter(item => item.id === id);
        setCurrentCharacter(character);
    };

    const closeDetails = () =>
    {
        setCurrentCharacter(null);
    };

    useEffect(() =>
    {

        axios.get('https://swapi.dev/api/people')
            .then(response =>
            {
                const characters = response.data;
                let counter = 1;
                characters.forEach(item => item.counter = counter++);
                setCharacters(characters);
            })

            .catch(err =>
            {
                console.log(err);
            });
    }, []);



    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {
                characters &&
                characters.map(fr =>
                {
                        return <Character
                        key={fr.name}
                        info={fr}
                        openDetails={openDetails}
                        closeDetails={closeDetails} />;
                })
            }
        </div>
    );
}