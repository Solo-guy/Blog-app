import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const BlogPost = [
        { tiltle: 'BlogPost #1'},
        { tiltle: 'BlogPost #2'}
    ];

    return (
    <BlogContext.Provider value={BlogPost}>
        {children}
    </BlogContext.Provider>
    );
};

export default BlogContext;