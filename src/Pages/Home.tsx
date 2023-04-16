import { useState , useEffect } from "react";
import axios from "axios";
import CustomBreadcrumbs from "src/Componentns/CustomBreadcrumbs";
import Card from "src/Componentns/Card";



function Home (){
    const [articles,setArticle]=useState([])
    const sendrequest= () => {
        axios({
          method: "get",
          url: "http://localhost:3004/content",
          params: {
              _limit: 5
          }
        })
          .then((response) => setArticle(response.data.items))
          .catch((error) => console.log(error));
      };
    
      useEffect(()=>{
          
        sendrequest()
    },[])
    return(
        <>
<div dir="rtl" className="px-[60px]">




<div>
<h1 className="text-black leading-[40px] text-[34px] font-[800] not-italic mt-[16px]">سوالات متداول</h1>
    <CustomBreadcrumbs name="سوالات متداول" />
    <div className="bg-[#E4E6EF] w-full h-[1px] my-[16px]" ></div>
</div>
<main className="grid grid-cols-2 gap-4 gri " >
{articles.map((item, index) => (
     <Card title={item.title} description={item.description} />
))}
   
</main>
</div>
      
        </>
    )
}

export default Home;