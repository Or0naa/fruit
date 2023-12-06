import Fruit from "./Fruit";

let fruits = [{
    name: "apple",
    image: "https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_1280.jpg",
    price: 15
},
{
    name: "banana",
    image: "https://media.istockphoto.com/id/636739634/photo/banana.jpg?s=2048x2048&w=is&k=20&c=UMVzc2Z6f5GOFN8MfaExPeuwGTYk8mYqwWzx3Tnjr1s=",
    price: 5
},
{
    name: "kiwi",
    image: "https://media.istockphoto.com/id/537403487/photo/kiwi.jpg?s=2048x2048&w=is&k=20&c=K3LkyCjDARx7E9BKPh44F3omBWfVIZ4zC4KXN2mU53k=",
    price: 7
}]

function Items() {
    return (
        <div>
            <h1>Companies</h1>
            <hr />
            {fruits.map((fruit) => (
                <Fruit key={fruit.name} name={fruit.name} image={fruit.image} price={fruit.price} />
            ))}
        </div>)
}
export default Items;