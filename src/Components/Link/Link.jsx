import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Link = ({route}) => {
    return (
        <li className="mr-12">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};


Link.propTypes ={
    route: PropTypes.object
}
export default Link;