import { Link, useParams } from "react-router-dom";

const youtubeImages = ["/10.jpeg", "/06.jpeg", "/07.jpeg", "/08.jpeg", "/09.jpeg", "/10.jpeg", "/11.jpeg", "/12.jpeg", "/05.jpeg"];
const rightSideBars = youtubeImages.map (z => <RightSideBar clip = {z}/>)

function Youtube2nd() {
    const params = useParams();
    return (
        <div className="flex w-full h-full">
            <div className=" w-9/12 h-full m-2">
                <img src={"youtube-images/" + params.image} className="w-full h-full" />
            </div>
            <div className="w-5/12 h-full">
                {rightSideBars}
            </div>
        </div >
    )
};
function RightSideBar({ clip }) {
    return (
        
        <Link to = {clip}>
        <div className="w-[70%] h-2/6 flex flex-row m-2">
            <img src={"/youtube-images" + clip} className="w-[50%] h-full" />
            <div className="m-1">
                <p className="text-lg text-bold">Bangladeshi Food</p>
                <p className="text-sm">Lectures about Food</p>
                <p className="text-sm"> 10k Views . 1 month</p>
            </div>
        </div></Link>
    )
}
export default Youtube2nd;
