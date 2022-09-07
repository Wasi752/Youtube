const youtubeImages = ["youtube-images/youtube.jpg", "youtube-images/06.jpeg", "youtube-images/07.jpeg", "youtube-images/08.jpeg", "youtube-images/09.jpeg", "youtube-images/10.jpeg", "youtube-images/11.jpeg", "youtube-images/12.jpeg", "youtube-images/05.jpeg"];
const rightSideBars = youtubeImages.map (z => <RightSideBar clip = {z}/>)

function Youtube3rd() {
    return (
        <div className="flex w-full h-full">
            <div className=" w-9/12 h-full m-2">
                <img src="youtube-images/09.jpeg" className="w-full h-full" />
            </div>
            <div className="w-5/12 h-full">
                {rightSideBars}
            </div>
        </div >
    )
};
function RightSideBar({ clip }) {
    return (
        <div className="w-[70%] h-2/6 flex flex-row m-2">
            <img src={clip} className="w-[50%] h-full" />
            <div className="m-1">
                <p className="text-lg text-bold">Bangladeshi Food</p>
                <p className="text-sm">Lectures about Food</p>
                <p className="text-sm">10k Views . 1 month</p>
            </div>
        </div>
    )
}
export default Youtube3rd;