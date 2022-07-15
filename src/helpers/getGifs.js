export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=me8yXXNxlEYDEuEq8kZRAEynot7M9KJv&q=${ category }&limit=10`;

    const resp = await fetch( url );

    /*const resp = await fetch({ url }, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    });*/
   

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        title: img.title,
        id: img.id,
        url: img.url
    }));


    return gifs;



    

    

}


