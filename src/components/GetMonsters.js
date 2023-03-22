import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card'
export function GetMonster(){
    const [monsters, setMonsters] = useState([]);
    useEffect(() => {
        async function fetchMonsters(){
            const response = await fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
            const data = await response.json();
            setMonsters(data.data)
          }
          // console.log(data);
        // console.log(data);
        fetchMonsters();
    }, [])
    // console.log(monsters);
    return (
        <> 

        {monsters.map(({name, image, common_locations, drops, description }) => (
        <Card className="card">
            <div>
            <h2>{name}</h2>
            <img src={image} alt="Monster"/>
            <p><strong>Locations:</strong> {common_locations}</p>
            <p><strong>Description:</strong>{description}</p>
            <p><strong>Loot:</strong> {drops}</p>
                
            </div>
        </Card>
        ))}
        </>
    );
}