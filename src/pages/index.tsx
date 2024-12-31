import { NextPage } from 'next';
import { getHomePageData } from '../controllers/indexController';

const Home: NextPage = () => {
    const data = getHomePageData();
    
    return (
        <div>
            <h1>malesnugas</h1>
            <p>{data.message}</p>
        </div>
    );
};

export default Home;
