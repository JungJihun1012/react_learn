const Button = ({
    onClick = () => {}, 
    children, 
    ...args
}) => {
    return(
        <button
            onClick={onClick}
            {...args}
        >
            {children}
        </button>
    )
}

export default Button;