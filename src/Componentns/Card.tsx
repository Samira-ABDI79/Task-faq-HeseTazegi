import {useState} from "react"
interface type{
    title:string;
    description:string
}
export default function Card(props:type){
    const [isCollapsed, setIsCollapsed] = useState(true)
    return (
        <>
      
        <article className="bg-white shadow-[0px 4px 16px rgba(137, 137, 137, 0.1)] rounded-[8px] px-[24px] pb-[24px] pt-[16px]" >
    
<div className="flex justify-between items-center">
    
<p id="card-title" className="text-[ #3A3A3A] leading-[24px] text-[16px] font-[600] not-italic" >{props.title}</p>
<span onClick={()=> setIsCollapsed((prev) => !prev )} >
<svg className="h-5 w-5"  width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
</svg>
</span>

</div>
<div className="bg-[#EFEFEF] h-[1px] w-full my-[16px]"></div>

<div id="text"  dangerouslySetInnerHTML={{__html: props.description}} className={` ${isCollapsed? "hidden" : "block"} max-w-max text-[#656565] text-justify leading-[32px] text-[16px] font-[500] not-italic`} >

</div>
        </article>
        </>
    )
}