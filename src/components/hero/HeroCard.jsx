import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
  return <div className='col'>
    <div className='card'>
        <div className="row no-gutters">
            <div className="col-4">
                <img src={`/assets/${id}.jpg`} 
                    alt={superhero}
                    className="card-img" />
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h1 className="card-title">{superhero}</h1>
                    <p>{alter_ego}</p>
                    {
                        (alter_ego !== characters) && 
                        <p className='text-muted'>{ characters }</p>
                    }
                    <p className='card-text'>
                        <small className='text-muted'>{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                        Más...
                    </Link>
                </div>
            </div>
        </div>
    </div>
  </div>;
};
