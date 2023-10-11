import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export  const AppContext = createContext();

export default function AppContextProvider({children}){
        const [loading, setLoading] = useState(false);
        const [posts, setPosts] = useState([]);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState(null);
        const navigate = useNavigate();

        const fetchBlogPosts = async(page = 1,tag = null, category) => {
            setLoading(true);
            let url = `${baseUrl}?page=${page}`;
            if(tag){
                url += `&tag=${tag}`
            }
            if(category){
                url += `&category=${category}`
            }
            try{
                const result = await fetch(url);
                const data = await result.json();
                if(!data.posts || data.posts.length === 0)
                throw new Error("Something went wrong");
                console.log("Api response",data);
                setPage(data.page);
                setPosts(data.posts);
                setTotalPages(data.totalPages);
            }
            catch(error){
                console.log("error in fetching data",error);
                setPage(1);
                setPosts([]);
                setTotalPages(null);
            }
            setLoading(false);
        }

        const handlePageChange = (page) => {
            navigate({search:`?page=${page}`});
            setPage(page);
        
        }


        const value = {
            posts,
            setPosts,
            loading,
            setLoading,
            page,
            setPage,
            totalPages,
            setTotalPages,
            fetchBlogPosts,
            handlePageChange
        };

        return <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
}