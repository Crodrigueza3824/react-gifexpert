export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=me8yXXNxlEYDEuEq8kZRAEynot7M9KJv&q=${ category }&limit=10`;

    const resp = await fetch( url );

    
    const { data } = await resp.json();
    
   

    
    
    const gifs = data.map( images => ({
        title: images.title,
        id: images.id,
        url: images.images.fixed_height_downsampled.url
    }));

    

 


    return gifs;



    

    

}


