function Item({name,isPacked}){
    return <li className="item">{name</li>
}

export default function PackingList(){
    return (
       <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
            <Item name="Space Suit" isPacked={true} />
            <Item name="Helmet with a Golden Leaf" isPacked={true} />
            <Item name="Photo" isPacked={false} />
        </ul>
       </section> 
    );
}