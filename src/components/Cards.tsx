import Image from "next/image"

 function Card({card}:{card:any}){
return (
<>
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-4 mr-4 mt-12">
        <Image 
        width={1200}
        height={770}
        className="w-full" src={card.source} alt={card.title}/>
        
        <div className="px-6 py-4 md:px-6 md:py-4">
          <div className="font-bold text-lg md:text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">
            {card.content}
          </p>
        </div>
 
</div>
</>
)

}

export default function Cards({cards}:{cards:any}){
    return(
        <div className="flex flex-col md:flex md:flex-row justify-items-center items-center">
        {cards.map((card:any,index:any)=>{
            return( <Card card={card} key={index} /> )
        }
         
          
        
      )
    }
        
        </div>
    )
      
}

