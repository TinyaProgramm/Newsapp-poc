import React from 'react'
import { useNewsContext } from '../context/NewsContext.jsx'
import Wrapper from './Wrapper'

const Category = ({ className }) => {
    const {setNews, fetchNews } = useNewsContext();
    const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
    const handleCategoryClick = async(e) => { 
        const cat = e.target.value
        const data = await fetchNews(`/everything?q=${cat.toLowerCase()}`)
        setNews(data.articles)
      }
  return (
 <div className={` bg-base-200   ${className}`}>
    <Wrapper>
        <div className={` max-w-full mx-auto w-fit flex gap-4 overflow-x-auto py-4 ${className}`}>
            {categories.map((category) => (
                <button onClick={handleCategoryClick} value={category} key={category} className="btn btn-primary">
                    {category}
                </button>
            ))}
        </div>
    </Wrapper>
 </div>
  )
}

export default Category
