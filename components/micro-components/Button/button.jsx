
const button = ({value, onButtonClick}) => {

    const textColorClass = value === "X" ? "text-red-500" : "text-green-500";

    return (
        <button className={`rounded-lg  w-14 bg-slate-200 h-14 m-2 shadow-md shadow-black font-Alkatra font-extrabold text-3xl text-center ${textColorClass}`}
                onClick={onButtonClick}
        >{value}</button>
    )
}

export default button