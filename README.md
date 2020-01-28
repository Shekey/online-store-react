This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Simple Online Store

The goal of the Simple Online Store is to give your users the capability of selecting a product to purchase, 
viewing purchase information, adding it to
 an online shopping cart, and finally, actually purchasing the products in the shopping cart.

Constraints
Starting out you may implement your product inventory as an array of JavaScript objects 
if you are developing in JavaScript. For other
 languages feel free to choose the in memory solution of your choice.

User Stories
•	User can click on a ‘View Products’ button on the Landing Page to display the Products Page.
•	User can see a card on the Products Page for each Product showing the product thumbnail, name, price, a short description, and a ‘Select’ button.
•	User can see a Product Details page displayed when the ‘Select’ button is clicked showing the same information from the product card, but also a unique product id, a long description, ‘Add to Cart’ button, and a ‘See More Products’ button.
•	User can see a confirmation message when the product is added to the shopping cart.
•	User can click on the ‘See More Products’ page to return to the Products Page.
•	User can see a ‘Shopping Cart’ button on both the Landing Page or the Products Page. Hint: a top bar might be a good common location for this button.
•	User can click on the ‘Shopping Cart’ button to display the Shopping Cart page containing the product id, name, price, and quantity ordered input box for each product previously added to the Shopping Cart.
•	User can see a total purchase amount on the Shopping Card that is calculated as the sum of the quantities multiplied by the unit price for each product ordered.
•	User can adjust the quantity ordered for any product to adjust the total purchase amount.
•	User can click a ‘Place Order’ button on the Shopping Cart Page to complete the order. User will see a confirmation number when the order has been placed.
•	[ ) User can click a ‘Cancel Order’ button on the Shopping Cart Page to cancel the order. User will see the product quantities and the total purchase amount reset to zero.
•	User can click a ‘See More Products’ button on the Shopping Cart Page to return to the Products Page. If the order hasn’t been placed yet this will not clear the products that have already been added to the Products Page.
•	Bonus features
•	User can see an error message if the quantity ordered exceeds the “on hand” quantity of the product.
•	User can specify a bill to and ship to address when the order is placed from the Shopping Cart Page
•	User can see shipping charges added to the total purchase amount
•	User can see sales taxes added to the total purchase amount
•	Developer will implement the product inventory in an external file or a database.
•	Useful links and resources
•	There are plenty of eCommerce Site Pages out there. You can use Dribbble and Behance for inspiration.
•	Example projects
•	eCommerce Animations
•	The goal of the Simple Online Store is to give your users the capability of selecting a product to purchase, 
•	viewing purchase information, adding it to
•	an online shopping cart, and finally, actually purchasing the products in the shopping cart. 
Constraints
Starting out you may implement your product inventory as an array of JavaScript objects 
if you are developing in JavaScript. For other
 languages feel free to choose the in memory solution of your choice. User Stories

Bonus features
User can see an error message if the quantity ordered exceeds the “on hand” quantity of the product.
User can specify a bill to and ship to address when the order is placed from the Shopping Cart Page
User can see shipping charges added to the total purchase amount
User can see sales taxes added to the total purchase amount
Developer will implement the product inventory in an external file or a database.

