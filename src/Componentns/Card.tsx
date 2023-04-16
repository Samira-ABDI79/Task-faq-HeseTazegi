import {useState} from "react"
import { toPersianNumber } from "src/data/digitsToPersian";
interface type{
    title:string;
    description:string;
    index:number;
}
const hindiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹" ,  , , ];
export default function Card(props:type){
    const [isCollapsed, setIsCollapsed] = useState(true)
    // const index = toPersianNumber()
    const index = hindiDigits[Number(props.index +1)]
    return (
        <>
      
        <article className="bg-white shadow-[0px_4px_16px_rgba(137, 137, 137, 0.1)] rounded-[8px] px-[24px] pb-[24px] pt-[16px]" >
    
<div className="flex justify-between items-center">
    
<p id="card-title" dir="rtl" className="text-[#3A3A3A] leading-[24px] text-[16px] font-[600] not-italic" >{index}.{props.title}</p>
<span onClick={()=> setIsCollapsed((prev) => !prev )} >

{isCollapsed ? 
    <svg className="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
:
    <svg className="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
</svg>

}
</span>

</div>
<div className={` ${isCollapsed? "hidden" : "block"}`}>

<div className="bg-[#EFEFEF] h-[1px] w-full my-[16px]"></div>

<div id="text"  dangerouslySetInnerHTML={{__html: props.description}} className={`text-DanaFaNum max-w-max text-[#656565] text-justify leading-[32px] text-[16px] font-[500] not-italic`} >

</div>
</div>
        </article>
        </>
    )
}