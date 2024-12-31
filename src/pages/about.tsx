import { NextPage } from 'next';
import { getAboutPageData } from '../controllers/aboutController';

const Home: NextPage = () => {
    const data = getAboutPageData();
    
    return (
        <div>
            <h1>malesnugas</h1>
            <p>{data.message}</p>
        </div>
    );
};

export default Home;
