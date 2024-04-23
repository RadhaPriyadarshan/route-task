import All from "./All";
import PropTypes from 'prop-types';

export default function Career({blogData}){
    return(
        <>
        <All blogData={blogData} ></All>
        </>
    );
}

Career.propTypes = {
    blogData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        sample: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    })).isRequired
};