import PropTypes from 'prop-types'

const Button = ({title, onClick, backgroundColor='red', color='white'}) => {

  const style = {
    backgroundColor,
    padding: '5px',
    color,
    border: 'none'
  }

  return (
    <button style={style} onClick={onClick}>{title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,

}

export default Button