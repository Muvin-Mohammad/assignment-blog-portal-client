import AllBlogs from "../AllBlogs/AllBlogs";
import { useEffect, useState } from "react";

const AllBlogSection = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://blog-portal-server-pink.vercel.app/add_blog')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllBlogs(data);
            setFilteredBlogs(data);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <p className="text-center mt-12"><span className="loading loading-spinner loading-lg"></span></p>
    }

    const handleCategoryFilter = filter => {
        console.log(filter);

        if (filter === 'all') {
            setFilteredBlogs(allBlogs);
        }
        else if (filter === 'history') {
            const categoryHistory = allBlogs.filter(data => data.category === 'history');
            setFilteredBlogs(categoryHistory);
        }
        else if (filter === 'politics') {
            const categoryPolitics = allBlogs.filter(data => data.category === 'politics');
            setFilteredBlogs(categoryPolitics);
        }
        else if (filter === 'economics') {
            const categoryEconomics = allBlogs.filter(data => data.category === 'economics');
            setFilteredBlogs(categoryEconomics);
        }
    }

    return (
        <div>
            <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto flex justify-end items-center gap-8 md:gap-16 lg:gap-72">
                <div className="w-[50%] lg:w-1/3">
                    <label className="input input-bordered flex items-center gap-2 mt-8 w-full">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow w-full" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-red-500 border border-red-600">Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCategoryFilter('all')}><a>All</a></li>
                        <li onClick={() => handleCategoryFilter('history')}><a>History</a></li>
                        <li onClick={() => handleCategoryFilter('politics')}><a>Politics</a></li>
                        <li onClick={() => handleCategoryFilter('economics')}><a>Economics</a></li>
                    </ul>
                </div>
            </div>

            <div className="w-[90%] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-12">
                {
                    filteredBlogs.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                    }).map(allBlog => <AllBlogs
                        key={allBlog._id}
                        allBlog={allBlog}
                    ></AllBlogs>)
                }
            </div>
        </div>
    );
};

export default AllBlogSection;
