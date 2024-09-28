import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
  return (
    <>
    <div className='flex bg-blue-200 dark:bg-gray-600 p-4 lg:text justify-center gap-6 '>
        <NavItem title="Trending" param="trending/all/day"/>
        <NavItem title="Popular" param="movie/popular"/>
        <NavItem title="Top Rated" param="movie/top_rated"/>
        <NavItem title="Upcoming" param="movie/upcoming"/>
    </div>
    </>
  )
}

export default Navbar