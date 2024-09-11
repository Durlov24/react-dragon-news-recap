import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import Newsfeed from "./Newsfeed";


const Home = () => {
    const news = useLoaderData();
//    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* News container  or Newsfeed */}
                <div className="md:col-span-2 ">
                    {
                        news.map(anews => <Newsfeed key={anews.id} news = {anews}></Newsfeed>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;