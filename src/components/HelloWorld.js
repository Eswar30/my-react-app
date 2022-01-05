import React from "react";

function HelloWorld() {
    const people = [{ name: 'Eswar' }, { name: 'Ayya' }, { name: 'GS' }];
    return (
        <div>
            <h1>Hello Eswar</h1>
            <ol>
                { people.map((person) => 
                    <li key={person.name} >{person.name}</li>
                )}
            </ol>
        </div>

    )
}

export default HelloWorld;