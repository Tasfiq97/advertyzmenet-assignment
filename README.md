## method of solving the problem is given below:

 the project is built with react with styled-components.
 
 Creating a navbar and  have a Get User button to fetch the data.

 For fetching the data, axios is used.

 when get user button is pressed fetching data is done,it is stored in state and passed to another component as prop.

after passing the data, user data is visualized in another component using prop drilling. the data is taken using object destructuring method.

before showing the user data, a loader is included.

when get user button is pressed, another state is changed. using ternary operators, this state is toggled between user and loader gif. if the state is true then the loader is shown but after fetching the data, the state is false and loader is removed and user data is visualized.

setTimeout is executed to visualize the loader is working or not.

clean code is applied.
