import VideoItem from "./VideoItem";


function Row ({items}){
    const VideoItems = items.map(x =>
        <VideoItem clip = {x.clip} heading= {x.heading} about= {x.about} viwes={x.viwes}/>
    )
    return (
        <div class="flex flex-row w-full h-2/6 ml-3 mt-3 mr-3 mb-1 p-2">
            {VideoItems}
        </div>
    )
};
export default Row;
