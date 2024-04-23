import PropTypes from 'prop-types'

export default function All({blogData}){
    return(
    <> 
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
           
            {blogData.map((article, index)=>( 
                 <div className="col" key={index}>    
                <div className="card h-100" >
                <img src={article.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.sample}</p>
                </div>
                </div> 
             </div>
            ))}
               
          
        </div>

    </>
    );
}

All.propTypes = {
    blogData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        sample: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    })).isRequired
};