function Item({name,isPacked}){
    // if(isPacked){
        // return null
        // return <li className="item packed">{name}✅</li>
    // }
    // return <li className="item" >{name}</li>
    // return<li className="item packed">{isPacked ? (<del>{ name + '✅'} </del>) : name }</li>
    return<li className="item packed">{name} {isPacked && '✅'}</li>

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