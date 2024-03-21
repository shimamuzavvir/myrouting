import React from 'react';
import Card from './Card';

const Home = ({data}) => {
    return (
        <div className='container px-4 px-lg-5 mt-5'>
            <div className="row">
            {data.map((item, index) => (
                    <Card key={index} item={item} />
                        
            ))}
            </div>
            </div>
    
    );
};

export default Home;