function Header (){
    return (
        <div class="flex flex-row w-full h-[10%]">
            
            <div class="w-3/12 h-full ml-5">
                <img src="youtube-images/01yt.jpg" alt="Logo" class="h-[80%] w-[40%]"/>
            </div>

            <div class="w-7/12 h-full flex flex-row m-2">
                <input type="text" placeholder="Search..." class=" h-[60%] w-10/12 p-2 border "/> 
                <div class="w-[6.5%] h-[60%] border bg-gray-100 hover:bg-gray-200"><img src="youtube-images/04searchicon.jpeg" class="h-full w-full border p-1"/></div>
                <div class="w-1/12 h-[60%]"><img src="youtube-images/01mic.jpeg" class="h-full w-full p-2"/></div>
            </div>

            <div class="w-4/12 h-full flex flex-row-reverse ">
                <div class="w-3/12 h-full m-2"><img src="youtube-images/darsgah.png" class="h-[65%] w-[95%] border rounded-full"/></div>
                <div class="w-3/12 h-full m-2"><img src="youtube-images/01appicon.jpeg" class="h-[60%] w-[70%] p-1"/></div>
                <div class="w-3/12 h-full m-2"><img src="youtube-images/01notifacatioicon.jpeg" class="h-[60%] w-[70%] p-1"/></div>
                <div class="w-3/12 h-full m-2"><img src="youtube-images/01cameraicon.jpeg" alt="Create" class="h-[60%] w-[70%] p-1"/></div>
                <div class="w-6/12 h-full m-2"></div>
            </div>
            <div>My Name</div>
        </div>
    )
};
export default Header;