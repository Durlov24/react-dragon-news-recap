import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className='col-span-3'>
                <h2 className='text-2xl'>News Details</h2>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;