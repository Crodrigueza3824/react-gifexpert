

export const GifItem = ({ title, url, id }) => {



    console.log({ url });
   
    return (
        <div className="card">
            <img src={ url } title={ title }/>
            <p>{ title }</p>
        </div>
    )
}