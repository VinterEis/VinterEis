const search = document.querySelector('form.search input');
const blogs = document.querySelectorAll('section.blogs');


// const filterSearch = (searches) => {

//     console.log(searches);

//     Array.from(blogsContain.children)
//         .filter((searches) => !blogs.textContent.toLowerCase().includes(searches))
//         .forEach((searches) => blogs.classList.add('filtered'));

//     Array.from(blogsContain.children)
//         .filter((searches) => blogs.textContent.includes(searches))
//         .forEach((searches)=> blogs.classList.remove('filtered'));
    
// };


// the search
const filterSearch = (searches) => {

    blogs.forEach(blogContainer => {

        Array.from(blogContainer.children)
            .forEach(blog => {
                if (blog.textContent.toLowerCase().includes(searches)) {
                    blog.classList.remove('filtered');
                } else {
                    blog.classList.add('filtered');
                }
            });

    });

};

search.addEventListener('keyup', () => {

    // get the value
    const searches = search.value.trim().toLowerCase();
    filterSearch(searches);
});