function Fruit(props) {
    return (
        <div>
            {props.name}
            <img src={props.image} alt={props.name} />
            <div>price = {props.price}$</div>
        </div>
    )
}
export default Fruit;