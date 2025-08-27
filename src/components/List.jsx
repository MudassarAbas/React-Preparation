import PropTypes from "prop-types";

function List(props) {
    
  const itemlist = props.items;
  const catagory = props.catagory;

    const listItems = itemlist.map(item => <li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b>
                                            </li>);                                     
      return (
            <>
                 <h3 className="list-catagory">{catagory}</h3>
                 <ol className="list-items">{listItems}</ol>   
            </>
      );
    
      /*const fruits = [{id: 1, name: "Apple", calories: 95},
                      {id: 2, name: "Banana", calories: 56},
                      {id: 3, name: "Chounsa", calories: 75},
                      {id: 4, name: "Sindhri", calories: 185}, 
                      {id: 5, name: "Orange", calories: 87}];

      const vegetables = [{id: 6, name: "Apple", calories: 95},
                          {id: 7, name: "Banana", calories: 56},
                          {id: 8, name: "Chounsa", calories: 75},
                          {id: 9, name: "Sindhri", calories: 185}, 
                          {id: 10, name: "Orange", calories: 87}];               

      fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabatical Order
      fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabatical Order

      fruits.sort((a, b) => a.calories - b.calories);  //Numeric 
      fruits.sort((a, b) => b.calories - a.calories);  //Reverse Numeric 

      //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
      //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

      /*const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b>
                                            </li>);

         const listItems = fruits.map(fruit => <li key={fruit.id}>
                                          {fruit.name}: &nbsp;
                                          <b>{fruit.calories}</b>
                                            </li>);                                     
      return (<ul>{listItems}</ul>);*/
    
}

List.prototype = {
  catagory : PropTypes.string,
  items : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number,
                                            }))
}

List.defaultProps = {
  catagory : "Catagory",
  items : [],
}

export default List