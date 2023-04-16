import { useState , useEffect } from "react";
import axios from "axios";
import CustomBreadcrumbs from "src/Componentns/CustomBreadcrumbs";
import Card from "src/Componentns/Card";



function Home (){
    const [articles,setArticle]=useState([])
    const sendrequest= () => {
        axios({
          method: "get",
          url: "https://api-dev.hesetazegi.com/FAQ/List",
          params: {
              _limit: 5
          }
        })
          .then((response) => setArticle(response.data.content.items))
          .catch((error) => console.log(error));
      };
    
      useEffect(()=>{
          
        sendrequest()
    },[])
    return(
        <>
<div dir="rtl" className="px-[60px] pb-16">




<div>
<h1 className="text-black leading-[40px] text-[34px] font-[800] not-italic mt-[16px]">سوالات متداول</h1>
<div className="flex justify-between relative">
<CustomBreadcrumbs name="سوالات متداول" />
    <span className="bg-[#FFFFFF] p-2 flex justify-center items-center text-[#656565]
shadow-3xl  rounded-[8px] absolute left-0 bottom-[16px]" >
    <svg className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
</svg>

    </span>
</div>
    <div className="bg-[#E4E6EF] w-full h-[1px] my-[16px] mb-[32px]" ></div>
</div>
<main className="flex flex-wrap  gap-[24px]" >
{articles.map((item, index) => (
  <div className="lg:w-[49%] w-full" >
       <Card title={item.title} description={item.description} index={index} />
  </div>
))}
   
</main>
</div>
      
        </>
    )
}

export default Home;