
function VideoItem ({clip, heading, about, viwes }){
    const Vsize = "w-3/12 p-1 m-2 box-border border ";
    const logo = "youtube-images/darsgah.png";
    const LogoSize = "h-[60%] mt-1 border rounded-full";
    const HeadingSize = "w-10/12 h-full ml-1 mt-1";
    
    return (
        <div className={Vsize}>
                <img src={clip} className="h-[70%] w-[full]"/>
                <div className="flex flex-row">
                    <div className= "w-2/12">
                       <img src={logo} className={LogoSize}/>
                    </div> 
                    <div className={HeadingSize}><p><b>{heading}</b></p>
                        <p className= "text-sm">{about}</p><p class="text-sm">{viwes}</p> 
                    </div>
                </div>
        </div>
    )
}
export default VideoItem;
