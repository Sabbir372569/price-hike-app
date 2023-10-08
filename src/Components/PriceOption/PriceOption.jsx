import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {name,price,description,duration,features} = option

    return (
        <div className='p-8 w-auto  bg-indigo-400 text-slate-950 rounded-lg shadow-2xl text-center'>
            <h4 className='text-4xl text-white py-3'>{name}</h4>
            <h2 className='py-2'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-3xl font-medium'>/Mon</span>
            </h2>
            <p className='text-2xl font-medium'>{duration}</p>
            <p className='text-lg font-semibold rounded-md p-2'>{description}</p>
                <div className='pl-4 text-left'>
                    {
                        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                    }
                </div>
            <button className='w-full text-lg font-medium text-white bg-violet-600 p-2 rounded-lg my-4'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;