import React from 'react';
import Card from './Card';

const CyberSec = ({data}) => {
    const CyberSecurityData = data.filter((item) => item.course === 'Cyber Security')
    return (
        <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {CyberSecurityData.map((item, index) => {
                        return (
                            <>
                                <Card item={item} index={index} />
                            </>
                        )
                    })}
                </div>
            </div>
    );
};

export default CyberSec;