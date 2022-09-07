function Pill ({name, isBlack}){
    let kalar;
    if (isBlack) kalar = "p-1 m-2 border rounded-full bg-black text-white";
    else kalar = "p-1 m-2 border rounded-full bg-gray-200 hover:bg-gray-300"
    return (
        <span className= {kalar}>{name}</span>
        

    )
}


function MenuBar (){
    return (
        <div className="flex flex-row w-full mt-2 ml-5">
            
            <Pill name = 'All' isBlack={true}/>
            <Pill name = 'Food Plan'/>
            <Pill name = "Vegetables"/>
            <Pill name = "Food"/>
            <Pill name = 'Diet chart'/>
            <Pill name = 'food supplement'/>
            <Pill name = 'Fresh food'/>
            <Pill name = 'Dry Food'/>
            <Pill name = 'Fruits'/>
            <Pill name = 'Seeds'/>
        </div>
    )
};
export default MenuBar;