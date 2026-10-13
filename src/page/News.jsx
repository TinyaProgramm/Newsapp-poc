import {useEffect} from 'react'
import Wrapper from '../component/Wrapper'  
import { useNewsContext } from '../context/NewsContext.jsx'
import Loader from '../component/Loader.jsx';

const News = ({ className }) => {
 const {news,setNews ,fetchNews, loading } = useNewsContext();
 //loading data from api and setting it to news state

 
    useEffect(() => {
        (async ()=>{
            const data = await fetchNews()
            setNews(data.articles)
        })()
    }, [])
    if(loading) return <Loader className={'m-auto py-32'}/>

  return (
    
        <Wrapper >
            <div className={`text-2xl font-bold py-4 grid-cols-1 gap-6 grid md:grid-cols-3 lg:grid-cols-4 ${className}`}>
                {
                    news.map((details,index)=>{
                        if(!details.urlToImage || !details.title || !details.description){
                            return null
                        }   
                        return(
                            <Newscard key={index} details={details} />
                        )
                    })
                }
              
        </div>
        </Wrapper>
   
  )
}

const Newscard = ({ details }) => {
  return (
    <div className="card bg-gray-300  shadow-sm" >
       <figure>
            <img className='w-full aspect-video object-cover'
            src={details?.urlToImage}
            alt={details?.title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-2">{details?.title}  </h2>
            <p className="line-clamp-3">{details?.description}</p>
            <div className="card-actions justify-end">
            <button onClick={()=>window.open(details?.url, '_blank')} className="btn btn-primary mt-2">Read More</button>
            </div>
        </div>
    </div>
  )
}
export default News
