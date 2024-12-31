import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getHomePageData } from '../controllers/indexController';
import { IndexHtml } from './index/navbar';

const Home: NextPage = () => {
    const index = IndexHtml();
    const [data, setData] = useState({ message: '' });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getHomePageData();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            {index}
        </div>
    );
};

export default Home;
