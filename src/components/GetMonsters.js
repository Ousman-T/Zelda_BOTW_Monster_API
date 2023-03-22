import { useState, useEffect } from "react";
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
    console.log(monsters);
    return (
        <>
        {monsters.map(({name, image, common_location, drops, description }) => (
          <div>
            <h2>{name}</h2>
            <img src={image} />
            <p>{common_location}</p>
            <p>{description}</p>
            <p>{drops}</p>
                
            </div>
        ))}
        </>
    );
}

// {users.map(
//     ({
//       name: { first, last },
//       login: { uuid },
//       picture: { large },
//       location: { street, city, state, country, postcode },
//     }) => {