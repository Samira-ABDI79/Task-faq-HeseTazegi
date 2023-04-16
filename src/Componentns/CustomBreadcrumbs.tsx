
import { Link } from "react-router-dom"
interface type {
  
  name:string;
  
 

 }
export default function CustomBreadcrumbs({name})  {
  return <>
  <div className="CustomBreadcrumbs-link mt-[16px] flex ">
  

    <Link to="/" className="text-[#B0BF24] " >صفحه اصلی</Link>
    <span className="px-1">&gt;</span>
    <p className="text-[#3A3A3A]">{name}</p>
    </div> 
  
  </>
    
}
