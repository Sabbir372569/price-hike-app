import PropTypes from 'prop-types'; 
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className=' flex gap-2 text-lg items-center'> <AiFillCheckCircle className='text-sky-800 text-base'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;