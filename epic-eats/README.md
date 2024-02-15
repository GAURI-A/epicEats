# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/**
 *header 
   -logo
   - navitems 
 *body
   - Serach
   - resto container
   -resto card
  * footer 
     - copyright
     -links
     -address   
 */

swiggy api backup if it changes in future : 
{
"statusCode": 0,
"data": {
"statusMessage": "done successfully",
"pageOffset": {},
"cards": [
{},
{},
{},
{},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
"layout": {
"columns": 4
},
"id": "restaurant_grid_listing",
"gridElements": {
"infoWithStyle": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
"restaurants": [
{
"info": {
"id": "289338",
"name": "BOX8 - Desi Meals",
"cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
"locality": "Zeal College Road",
"areaName": "Narhe",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"Biryani",
"Thalis",
"Home Food"
],
"avgRating": 4.5,
"parentId": "10655",
"avgRatingString": "4.5",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 16,
"lastMileTravel": 3.9,
"serviceability": "SERVICEABLE",
"slaString": "11-21 mins",
"lastMileTravelString": "3.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 02:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/box8-desi-meals-zeal-college-road-narhe-pune-289338",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "699593",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Near Nanded City Destination Center",
"areaName": "Nanded City",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.1,
"parentId": "61955",
"avgRatingString": "4.1",
"totalRatingsString": "500+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 10.1,
"serviceability": "SERVICEABLE",
"slaString": "42 mins",
"lastMileTravelString": "10.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "EVERY ITEM",
"subHeader": "@ ₹149"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/chinese-wok-near-destination-center-nanded-city-pune-699593",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "53754",
"name": "Pizza Hut",
"cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
"locality": "Pune Satara Road",
"areaName": "Katraj",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4,
"parentId": "721",
"avgRatingString": "4.0",
"totalRatingsString": "5K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "29 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/pizza-hut-satara-road-katraj-pune-53754",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "717983",
"name": "Burger King",
"cloudinaryImageId": "aa77cb6fce4d94f3ad4b4e7fb42782db",
"locality": "Nakshatra",
"areaName": "Bibwewadi",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 3.9,
"parentId": "166",
"avgRatingString": "3.9",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 3.5,
"serviceability": "SERVICEABLE",
"slaString": "33 mins",
"lastMileTravelString": "3.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/burger-king-nakshatra-bibwewadi-pune-717983",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "37467",
"name": "Subway",
"cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
"locality": "Chandrabhaga Nagar Rd",
"areaName": "Katraj",
"costForTwo": "₹350 for two",
"cuisines": [
"Healthy Food",
"Salads",
"Snacks",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "2",
"avgRatingString": "4.3",
"totalRatingsString": "5K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 2.2,
"serviceability": "SERVICEABLE",
"slaString": "33 mins",
"lastMileTravelString": "2.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 03:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/subway-chandrabhaga-nagar-rd-katraj-pune-37467",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "46005",
"name": "McDonald's",
"cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
"locality": "Datta Nagar",
"areaName": "Dhankawadi",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
"avgRating": 4.3,
"parentId": "630",
"avgRatingString": "4.3",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "23 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-25 01:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "ABOVE ₹1000",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/mcdonalds-datta-nagar-dhankawadi-pune-46005",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "170281",
"name": "Domino's Pizza",
"cloudinaryImageId": "qjf0cmuuyxw8yj29sx24",
"locality": "Ambegaon BK",
"areaName": "Katraj",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 30,
"serviceability": "SERVICEABLE",
"slaString": "30 mins",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-24 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/dominos-pizza-ambegaon-bk-katraj-pune-170281",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "720362",
"name": "Wendy's Burgers",
"cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
"locality": "Datta nagar chowk",
"areaName": "Ambegaon Bk",
"costForTwo": "₹200 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Snacks",
"Beverages"
],
"avgRating": 4.2,
"parentId": "972",
"avgRatingString": "4.2",
"totalRatingsString": "500+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 2.2,
"serviceability": "SERVICEABLE",
"slaString": "27 mins",
"lastMileTravelString": "2.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-24 23:59:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/wendys-burgers-datta-nagar-chowk-ambegaon-bk-pune-720362",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"info": {
"id": "450812",
"name": "Krushnasagar Veg Restaurant",
"cloudinaryImageId": "388725b6b33e1a4beed65db2d9d3554a",
"locality": "Shyam Vihar",
"areaName": "Katraj",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"South Indian",
"Chinese",
"Snacks"
],
"avgRating": 4.2,
"veg": true,
"parentId": "271178",
"avgRatingString": "4.2",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "25 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-01-24 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {
"context": "seo-data-c2067fb6-c853-4d92-906d-aedf73770055"
},
"cta": {
"link": "https://www.swiggy.com/restaurants/krushnasagar-veg-restaurant-shyam-vihar-katraj-pune-450812",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
],
"theme": "SeoRestaurantListingGridWidget"
}
}
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
"message": "Show More",
"id": "show_more_button"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
"title": "Best Places to Eat Across Cities",
"brands": [
{
"text": "Best Restaurants in Bangalore",
"link": "https://www.swiggy.com/city/bangalore/best-restaurants"
},
{
"text": "Best Restaurants in Pune",
"link": "https://www.swiggy.com/city/pune/best-restaurants"
},
{
"text": "Best Restaurants in Mumbai",
"link": "https://www.swiggy.com/city/mumbai/best-restaurants"
},
{
"text": "Best Restaurants in Delhi",
"link": "https://www.swiggy.com/city/delhi/best-restaurants"
},
{
"text": "Best Restaurants in Hyderabad",
"link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
},
{
"text": "Best Restaurants in Kolkata",
"link": "https://www.swiggy.com/city/kolkata/best-restaurants"
},
{
"text": "Best Restaurants in Chennai",
"link": "https://www.swiggy.com/city/chennai/best-restaurants"
},
{
"text": "Best Restaurants in Chandigarh",
"link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
},
{
"text": "Best Restaurants in Ahmedabad",
"link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
},
{
"text": "Best Restaurants in Jaipur",
"link": "https://www.swiggy.com/city/jaipur/best-restaurants"
},
{
"text": "Best Restaurants in Nagpur",
"link": "https://www.swiggy.com/city/nagpur/best-restaurants"
},
{
"text": "Best Restaurants in Bhubaneswar",
"link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
},
{
"text": "Best Restaurants in Kochi",
"link": "https://www.swiggy.com/city/kochi/best-restaurants"
},
{
"text": "Best Restaurants in Surat",
"link": "https://www.swiggy.com/city/surat/best-restaurants"
},
{
"text": "Best Restaurants in Dehradun",
"link": "https://www.swiggy.com/city/dehradun/best-restaurants"
},
{
"text": "Best Restaurants in Ludhiana",
"link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
},
{
"text": "Best Restaurants in Patna",
"link": "https://www.swiggy.com/city/patna/best-restaurants"
},
{
"text": "Best Restaurants in Mangaluru",
"link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
},
{
"text": "Best Restaurants in Bhopal",
"link": "https://www.swiggy.com/city/bhopal/best-restaurants"
},
{
"text": "Best Restaurants in Gurgaon",
"link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
},
{
"text": "Best Restaurants in Coimbatore",
"link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
},
{
"text": "Best Restaurants in Agra",
"link": "https://www.swiggy.com/city/agra/best-restaurants"
},
{
"text": "Best Restaurants in Noida",
"link": "https://www.swiggy.com/city/noida/best-restaurants"
},
{
"text": "Best Restaurants in Vijayawada",
"link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
},
{
"text": "Best Restaurants in Guwahati",
"link": "https://www.swiggy.com/city/guwahati/best-restaurants"
},
{
"text": "Best Restaurants in Mysore",
"link": "https://www.swiggy.com/city/mysore/best-restaurants"
},
{
"text": "Best Restaurants in Pondicherry",
"link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
},
{
"text": "Best Restaurants in Thiruvananthapuram",
"link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
},
{
"text": "Best Restaurants in Ranchi",
"link": "https://www.swiggy.com/city/ranchi/best-restaurants"
},
{
"text": "Best Restaurants in Vizag",
"link": "https://www.swiggy.com/city/vizag/best-restaurants"
},
{
"text": "Best Restaurants in Udaipur",
"link": "https://www.swiggy.com/city/udaipur/best-restaurants"
},
{
"text": "Best Restaurants in Vadodara",
"link": "https://www.swiggy.com/city/vadodara/best-restaurants"
}
],
"id": "restaurant_near_me_links"
}
}
},
{},
{},
{},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
"cities": [
{
"text": "Bangalore",
"link": "https://www.swiggy.com/city/bangalore"
},
{
"text": "Gurgaon",
"link": "https://www.swiggy.com/city/gurgaon"
},
{
"text": "Hyderabad",
"link": "https://www.swiggy.com/city/hyderabad"
},
{
"text": "Delhi",
"link": "https://www.swiggy.com/city/delhi"
},
{
"text": "Mumbai",
"link": "https://www.swiggy.com/city/mumbai"
},
{
"text": "Pune",
"link": "https://www.swiggy.com/city/pune"
},
{
"text": "Kolkata",
"link": "https://www.swiggy.com/city/kolkata"
},
{
"text": "Chennai",
"link": "https://www.swiggy.com/city/chennai"
},
{
"text": "Ahmedabad",
"link": "https://www.swiggy.com/city/ahmedabad"
},
{
"text": "Chandigarh",
"link": "https://www.swiggy.com/city/chandigarh"
},
{
"text": "Jaipur",
"link": "https://www.swiggy.com/city/jaipur"
},
{
"text": "Kochi",
"link": "https://www.swiggy.com/city/kochi"
},
{
"text": "Coimbatore",
"link": "https://www.swiggy.com/city/coimbatore"
},
{
"text": "Lucknow",
"link": "https://www.swiggy.com/city/lucknow"
},
{
"text": "Nagpur",
"link": "https://www.swiggy.com/city/nagpur"
},
{
"text": "Vadodara",
"link": "https://www.swiggy.com/city/vadodara"
},
{
"text": "Indore",
"link": "https://www.swiggy.com/city/indore"
},
{
"text": "Guwahati",
"link": "https://www.swiggy.com/city/guwahati"
},
{
"text": "Vizag",
"link": "https://www.swiggy.com/city/vizag"
},
{
"text": "Surat",
"link": "https://www.swiggy.com/city/surat"
},
{
"text": "Dehradun",
"link": "https://www.swiggy.com/city/dehradun"
},
{
"text": "Noida",
"link": "https://www.swiggy.com/city/noida"
},
{
"text": "Ludhiana",
"link": "https://www.swiggy.com/city/ludhiana"
},
{
"text": "Trichy",
"link": "https://www.swiggy.com/city/trichy"
},
{
"text": "Vijayawada",
"link": "https://www.swiggy.com/city/vijayawada"
},
{
"text": "Kanpur",
"link": "https://www.swiggy.com/city/kanpur"
},
{
"text": "Mysore",
"link": "https://www.swiggy.com/city/mysore"
},
{
"text": "Nashik",
"link": "https://www.swiggy.com/city/nashik"
},
{
"text": "Udaipur",
"link": "https://www.swiggy.com/city/udaipur"
},
{
"text": "Pondicherry",
"link": "https://www.swiggy.com/city/pondicherry"
},
{
"text": "Agra",
"link": "https://www.swiggy.com/city/agra"
},
{
"text": "Aurangabad",
"link": "https://www.swiggy.com/city/aurangabad"
},
{
"text": "Jalandhar",
"link": "https://www.swiggy.com/city/jalandhar"
},
{
"text": "Kota",
"link": "https://www.swiggy.com/city/kota"
},
{
"text": "Madurai",
"link": "https://www.swiggy.com/city/madurai"
},
{
"text": "Allahabad",
"link": "https://www.swiggy.com/city/allahabad"
},
{
"text": "Manipal",
"link": "https://www.swiggy.com/city/manipal"
},
{
"text": "Amritsar",
"link": "https://www.swiggy.com/city/amritsar"
},
{
"text": "Bareilly",
"link": "https://www.swiggy.com/city/bareilly"
},
{
"text": "Meerut",
"link": "https://www.swiggy.com/city/meerut"
},
{
"text": "Bhopal",
"link": "https://www.swiggy.com/city/bhopal"
},
{
"text": "Ooty",
"link": "https://www.swiggy.com/city/ooty"
},
{
"text": "Bhubaneswar",
"link": "https://www.swiggy.com/city/bhubaneswar"
},
{
"text": "Raipur",
"link": "https://www.swiggy.com/city/raipur"
},
{
"text": "Bikaner",
"link": "https://www.swiggy.com/city/bikaner"
},
{
"text": "Rajkot",
"link": "https://www.swiggy.com/city/rajkot"
},
{
"text": "Kozhikode",
"link": "https://www.swiggy.com/city/kozhikode"
},
{
"text": "Central Goa",
"link": "https://www.swiggy.com/city/central-goa"
},
{
"text": "Sirsa",
"link": "https://www.swiggy.com/city/sirsa"
},
{
"text": "Gwalior",
"link": "https://www.swiggy.com/city/gwalior"
},
{
"text": "Thrissur",
"link": "https://www.swiggy.com/city/thrissur"
},
{
"text": "Kharagpur",
"link": "https://www.swiggy.com/city/kharagpur"
},
{
"text": "Tirupati",
"link": "https://www.swiggy.com/city/tirupati"
},
{
"text": "Tirupur",
"link": "https://www.swiggy.com/city/tirupur"
},
{
"text": "Vellore",
"link": "https://www.swiggy.com/city/vellore"
},
{
"text": "Thiruvananthapuram",
"link": "https://www.swiggy.com/city/thiruvananthapuram"
},
{
"text": "Warangal",
"link": "https://www.swiggy.com/city/warangal"
},
{
"text": "Varanasi",
"link": "https://www.swiggy.com/city/varanasi"
},
{
"text": "Mangaluru",
"link": "https://www.swiggy.com/city/mangaluru"
},
{
"text": "Patna",
"link": "https://www.swiggy.com/city/patna"
},
{
"text": "Ranchi",
"link": "https://www.swiggy.com/city/ranchi"
},
{
"text": "Faridabad",
"link": "https://www.swiggy.com/city/faridabad"
},
{
"text": "Guntur",
"link": "https://www.swiggy.com/city/guntur"
},
{
"text": "Ujjain",
"link": "https://www.swiggy.com/city/ujjain"
},
{
"text": "Patiala",
"link": "https://www.swiggy.com/city/patiala"
},
{
"text": "Karnal",
"link": "https://www.swiggy.com/city/karnal"
},
{
"text": "Kakinada",
"link": "https://www.swiggy.com/city/kakinada"
},
{
"text": "Rajahmundry",
"link": "https://www.swiggy.com/city/rajahmundry"
},
{
"text": "Bilaspur",
"link": "https://www.swiggy.com/city/bilaspur"
},
{
"text": "Bhilai",
"link": "https://www.swiggy.com/city/bhilai"
},
{
"text": "Anand",
"link": "https://www.swiggy.com/city/anand"
},
{
"text": "Bhavnagar",
"link": "https://www.swiggy.com/city/bhavnagar"
},
{
"text": "Jammu",
"link": "https://www.swiggy.com/city/jammu"
},
{
"text": "Muktsar",
"link": "https://www.swiggy.com/city/muktsar"
},
{
"text": "Panipat",
"link": "https://www.swiggy.com/city/panipat"
},
{
"text": "Dhanbad",
"link": "https://www.swiggy.com/city/dhanbad"
},
{
"text": "Hubli",
"link": "https://www.swiggy.com/city/hubli"
},
{
"text": "Belgaum",
"link": "https://www.swiggy.com/city/belgaum"
},
{
"text": "Jabalpur",
"link": "https://www.swiggy.com/city/jabalpur"
},
{
"text": "Kolhapur",
"link": "https://www.swiggy.com/city/kolhapur"
},
{
"text": "Solapur",
"link": "https://www.swiggy.com/city/solapur"
},
{
"text": "Shillong",
"link": "https://www.swiggy.com/city/shillong"
},
{
"text": "Cuttack",
"link": "https://www.swiggy.com/city/cuttack"
},
{
"text": "Aligarh",
"link": "https://www.swiggy.com/city/aligarh"
},
{
"text": "Salem",
"link": "https://www.swiggy.com/city/salem"
},
{
"text": "Jodhpur",
"link": "https://www.swiggy.com/city/jodhpur"
},
{
"text": "Ajmer",
"link": "https://www.swiggy.com/city/ajmer"
},
{
"text": "Jhansi",
"link": "https://www.swiggy.com/city/jhansi"
},
{
"text": "Gorakhpur",
"link": "https://www.swiggy.com/city/gorakhpur"
},
{
"text": "Thanjavur",
"link": "https://www.swiggy.com/city/thanjavur"
},
{
"text": "Erode",
"link": "https://www.swiggy.com/city/erode"
},
{
"text": "Nellore",
"link": "https://www.swiggy.com/city/nellore"
},
{
"text": "Rourkela",
"link": "https://www.swiggy.com/city/rourkela"
},
{
"text": "Anantapur",
"link": "https://www.swiggy.com/city/anantapur"
},
{
"text": "Kurnool",
"link": "https://www.swiggy.com/city/kurnool"
},
{
"text": "Ahmednagar",
"link": "https://www.swiggy.com/city/ahmednagar"
},
{
"text": "Phagwara",
"link": "https://www.swiggy.com/city/phagwara"
},
{
"text": "Ambala",
"link": "https://www.swiggy.com/city/ambala"
},
{
"text": "Ballari",
"link": "https://www.swiggy.com/city/ballari"
},
{
"text": "Saharanpur",
"link": "https://www.swiggy.com/city/saharanpur"
},
{
"text": "Tirunelveli",
"link": "https://www.swiggy.com/city/tirunelveli"
},
{
"text": "Bathinda",
"link": "https://www.swiggy.com/city/bathinda"
},
{
"text": "Mathura",
"link": "https://www.swiggy.com/city/mathura"
},
{
"text": "Haridwar",
"link": "https://www.swiggy.com/city/haridwar"
},
{
"text": "Ratnagiri",
"link": "https://www.swiggy.com/city/ratnagiri"
},
{
"text": "Sangli",
"link": "https://www.swiggy.com/city/sangli"
},
{
"text": "Amravati",
"link": "https://www.swiggy.com/city/amravati"
},
{
"text": "Rishikesh",
"link": "https://www.swiggy.com/city/rishikesh"
},
{
"text": "Nagercoil",
"link": "https://www.swiggy.com/city/nagercoil"
},
{
"text": "KanyaKumari",
"link": "https://www.swiggy.com/city/kanyakumari"
},
{
"text": "Kadapa",
"link": "https://www.swiggy.com/city/kadapa"
},
{
"text": "Nizamabad",
"link": "https://www.swiggy.com/city/nizamabad"
},
{
"text": "Shivamogga",
"link": "https://www.swiggy.com/city/shivamogga"
},
{
"text": "Davanagere",
"link": "https://www.swiggy.com/city/davanagere"
},
{
"text": "Roorkee",
"link": "https://www.swiggy.com/city/roorkee"
},
{
"text": "Nanded",
"link": "https://www.swiggy.com/city/nanded"
},
{
"text": "Rewa",
"link": "https://www.swiggy.com/city/rewa"
},
{
"text": "Satna",
"link": "https://www.swiggy.com/city/satna"
},
{
"text": "Muzaffarpur",
"link": "https://www.swiggy.com/city/muzaffarpur"
},
{
"text": "Valsad",
"link": "https://www.swiggy.com/city/valsad"
},
{
"text": "Vapi",
"link": "https://www.swiggy.com/city/vapi"
},
{
"text": "Chhapra",
"link": "https://www.swiggy.com/city/chhapra"
},
{
"text": "Dharamshala",
"link": "https://www.swiggy.com/city/dharamshala"
},
{
"text": "Kollam",
"link": "https://www.swiggy.com/city/kollam"
},
{
"text": "Silchar",
"link": "https://www.swiggy.com/city/silchar"
},
{
"text": "Alappuzha",
"link": "https://www.swiggy.com/city/alappuzha"
},
{
"text": "Sonipat",
"link": "https://www.swiggy.com/city/sonipat"
},
{
"text": "Rohtak",
"link": "https://www.swiggy.com/city/rohtak"
},
{
"text": "Mehsana",
"link": "https://www.swiggy.com/city/mehsana"
},
{
"text": "Kullu",
"link": "https://www.swiggy.com/city/kullu"
},
{
"text": "Dhule",
"link": "https://www.swiggy.com/city/dhule"
},
{
"text": "Dharwad",
"link": "https://www.swiggy.com/city/dharwad"
},
{
"text": "Latur",
"link": "https://www.swiggy.com/city/latur"
},
{
"text": "Vizianagaram",
"link": "https://www.swiggy.com/city/vizianagaram"
},
{
"text": "Khammam",
"link": "https://www.swiggy.com/city/khammam"
},
{
"text": "Hampi",
"link": "https://www.swiggy.com/city/hampi"
},
{
"text": "Nainital",
"link": "https://www.swiggy.com/city/nainital"
},
{
"text": "Akola",
"link": "https://www.swiggy.com/city/akola"
},
{
"text": "Kalaburagi",
"link": "https://www.swiggy.com/city/kalaburagi"
},
{
"text": "Gaya",
"link": "https://www.swiggy.com/city/gaya"
},
{
"text": "Muzaffarnagar",
"link": "https://www.swiggy.com/city/muzaffarnagar"
},
{
"text": "Dewas",
"link": "https://www.swiggy.com/city/dewas"
},
{
"text": "Korba",
"link": "https://www.swiggy.com/city/korba"
},
{
"text": "Mussoorie",
"link": "https://www.swiggy.com/city/mussoorie"
},
{
"text": "Jalgaon",
"link": "https://www.swiggy.com/city/jalgaon"
},
{
"text": "Yamuna Nagar",
"link": "https://www.swiggy.com/city/yamuna-nagar"
},
{
"text": "Bhagalpur",
"link": "https://www.swiggy.com/city/bhagalpur"
},
{
"text": "Hapur",
"link": "https://www.swiggy.com/city/hapur"
},
{
"text": "Morena",
"link": "https://www.swiggy.com/city/morena"
},
{
"text": "Hassan",
"link": "https://www.swiggy.com/city/hassan"
},
{
"text": "Hisar",
"link": "https://www.swiggy.com/city/hisar"
},
{
"text": "Godhra",
"link": "https://www.swiggy.com/city/godhra"
},
{
"text": "Kolar ",
"link": "https://www.swiggy.com/city/kolar"
},
{
"text": "Rampur",
"link": "https://www.swiggy.com/city/rampur"
},
{
"text": "Sitapur",
"link": "https://www.swiggy.com/city/sitapur"
},
{
"text": "Etawah",
"link": "https://www.swiggy.com/city/etawah"
},
{
"text": "Porbandar",
"link": "https://www.swiggy.com/city/porbandar"
},
{
"text": "Nadiad",
"link": "https://www.swiggy.com/city/nadiad"
},
{
"text": "Sagar",
"link": "https://www.swiggy.com/city/sagar"
},
{
"text": "Morbi",
"link": "https://www.swiggy.com/city/morbi"
},
{
"text": "Chhindwara",
"link": "https://www.swiggy.com/city/chhindwara"
},
{
"text": "Tumakuru",
"link": "https://www.swiggy.com/city/tumakuru"
},
{
"text": "Singrauli",
"link": "https://www.swiggy.com/city/singrauli"
},
{
"text": "Thoothukudi",
"link": "https://www.swiggy.com/city/thoothukudi"
},
{
"text": "Katni",
"link": "https://www.swiggy.com/city/katni"
},
{
"text": "Khandwa",
"link": "https://www.swiggy.com/city/khandwa"
},
{
"text": "Eluru",
"link": "https://www.swiggy.com/city/eluru"
},
{
"text": "Malappuram",
"link": "https://www.swiggy.com/city/malappuram"
},
{
"text": "Dibrugarh",
"link": "https://www.swiggy.com/city/dibrugarh"
},
{
"text": "Deoghar",
"link": "https://www.swiggy.com/city/deoghar"
},
{
"text": "Khanna",
"link": "https://www.swiggy.com/city/khanna"
},
{
"text": "Bidar",
"link": "https://www.swiggy.com/city/bidar"
},
{
"text": "Madikeri",
"link": "https://www.swiggy.com/city/madikeri"
},
{
"text": "Haldwani",
"link": "https://www.swiggy.com/city/haldwani"
},
{
"text": "Farrukhabad",
"link": "https://www.swiggy.com/city/farrukhabad"
},
{
"text": "Malegaon",
"link": "https://www.swiggy.com/city/malegaon"
},
{
"text": "Dindigul",
"link": "https://www.swiggy.com/city/dindigul"
},
{
"text": "Shahjahanpur",
"link": "https://www.swiggy.com/city/shahjahanpur"
},
{
"text": "Beed",
"link": "https://www.swiggy.com/city/beed"
},
{
"text": "Junagadh",
"link": "https://www.swiggy.com/city/junagadh"
},
{
"text": "Asansol",
"link": "https://www.swiggy.com/city/asansol"
},
{
"text": "Beawar",
"link": "https://www.swiggy.com/city/beawar"
},
{
"text": "Kishangarh",
"link": "https://www.swiggy.com/city/kishangarh"
},
{
"text": "Parbhani",
"link": "https://www.swiggy.com/city/parbhani"
},
{
"text": "Gondia",
"link": "https://www.swiggy.com/city/gondia"
},
{
"text": "Ichalkaranji",
"link": "https://www.swiggy.com/city/ichalkaranji"
},
{
"text": "Jalna",
"link": "https://www.swiggy.com/city/jalna"
},
{
"text": "Yavatmal",
"link": "https://www.swiggy.com/city/yavatmal"
},
{
"text": "Shivpuri",
"link": "https://www.swiggy.com/city/shivpuri"
},
{
"text": "Moga",
"link": "https://www.swiggy.com/city/moga"
},
{
"text": "Abohar",
"link": "https://www.swiggy.com/city/abohar"
},
{
"text": "Adoni",
"link": "https://www.swiggy.com/city/adoni"
},
{
"text": "Madanapalle",
"link": "https://www.swiggy.com/city/madanapalle"
},
{
"text": "Tiruvannamalai",
"link": "https://www.swiggy.com/city/tiruvannamalai"
},
{
"text": "Satara",
"link": "https://www.swiggy.com/city/satara"
},
{
"text": "Ambur",
"link": "https://www.swiggy.com/city/ambur"
},
{
"text": "Karimnagar",
"link": "https://www.swiggy.com/city/karimnagar"
},
{
"text": "Ratlam",
"link": "https://www.swiggy.com/city/ratlam"
},
{
"text": "Moradabad",
"link": "https://www.swiggy.com/city/moradabad"
},
{
"text": "Machilipatnam",
"link": "https://www.swiggy.com/city/machilipatnam"
},
{
"text": "Ongole",
"link": "https://www.swiggy.com/city/ongole"
},
{
"text": "Kottayam",
"link": "https://www.swiggy.com/city/kottayam"
},
{
"text": "Darbhanga",
"link": "https://www.swiggy.com/city/darbhanga"
},
{
"text": "Kurukshetra",
"link": "https://www.swiggy.com/city/kurukshetra"
},
{
"text": "Unnao",
"link": "https://www.swiggy.com/city/unnao"
},
{
"text": "Bulandshahr",
"link": "https://www.swiggy.com/city/bulandshahr"
},
{
"text": "Durgapur",
"link": "https://www.swiggy.com/city/durgapur"
},
{
"text": "Siliguri",
"link": "https://www.swiggy.com/city/siliguri"
},
{
"text": "Pali",
"link": "https://www.swiggy.com/city/pali"
},
{
"text": "Tadepalligudem",
"link": "https://www.swiggy.com/city/tadepalligudem"
},
{
"text": "Ramagundam",
"link": "https://www.swiggy.com/city/ramagundam"
},
{
"text": "Mahbubnagar",
"link": "https://www.swiggy.com/city/mahbubnagar"
},
{
"text": "Bhiwani",
"link": "https://www.swiggy.com/city/bhiwani"
},
{
"text": "Cuddalore",
"link": "https://www.swiggy.com/city/cuddalore"
},
{
"text": "Kaithal",
"link": "https://www.swiggy.com/city/kaithal"
},
{
"text": "Jagtial",
"link": "https://www.swiggy.com/city/jagtial"
},
{
"text": "Palakkad",
"link": "https://www.swiggy.com/city/palakkad"
},
{
"text": "Guna",
"link": "https://www.swiggy.com/city/guna"
},
{
"text": "Kumbakonam",
"link": "https://www.swiggy.com/city/kumbakonam"
},
{
"text": "Maunath Bhanjan",
"link": "https://www.swiggy.com/city/maunath-bhanjan"
},
{
"text": "Baripada",
"link": "https://www.swiggy.com/city/baripada"
},
{
"text": "Orai",
"link": "https://www.swiggy.com/city/orai"
},
{
"text": "Bhadrak",
"link": "https://www.swiggy.com/city/bhadrak"
},
{
"text": "Batala",
"link": "https://www.swiggy.com/city/batala"
},
{
"text": "Firozpur",
"link": "https://www.swiggy.com/city/firozpur"
},
{
"text": "Barnala",
"link": "https://www.swiggy.com/city/barnala"
},
{
"text": "Raigarh",
"link": "https://www.swiggy.com/city/raigarh"
},
{
"text": "Nagaon",
"link": "https://www.swiggy.com/city/nagaon"
},
{
"text": "Mainpuri",
"link": "https://www.swiggy.com/city/mainpuri"
},
{
"text": "Balurghat",
"link": "https://www.swiggy.com/city/balurghat"
},
{
"text": "Giridih",
"link": "https://www.swiggy.com/city/giridih"
},
{
"text": "Ghazipur",
"link": "https://www.swiggy.com/city/ghazipur"
},
{
"text": "Jagdalpur",
"link": "https://www.swiggy.com/city/jagdalpur"
},
{
"text": "Vidisha",
"link": "https://www.swiggy.com/city/vidisha"
},
{
"text": "Dimapur",
"link": "https://www.swiggy.com/city/dimapur"
},
{
"text": "Shikohabad",
"link": "https://www.swiggy.com/city/shikohabad"
},
{
"text": "Imphal",
"link": "https://www.swiggy.com/city/imphal"
},
{
"text": "Lakhimpur",
"link": "https://www.swiggy.com/city/lakhimpur"
},
{
"text": "Rudrapur",
"link": "https://www.swiggy.com/city/rudrapur"
},
{
"text": "Ambikapur",
"link": "https://www.swiggy.com/city/ambikapur"
},
{
"text": "Rae Bareli",
"link": "https://www.swiggy.com/city/rae-bareli"
},
{
"text": "Tinsukia",
"link": "https://www.swiggy.com/city/tinsukia"
},
{
"text": "Rajapalayam",
"link": "https://www.swiggy.com/city/rajapalayam"
},
{
"text": "Rajnandgaon",
"link": "https://www.swiggy.com/city/rajnandgaon"
},
{
"text": "Kashipur",
"link": "https://www.swiggy.com/city/kashipur"
},
{
"text": "Ranibennur",
"link": "https://www.swiggy.com/city/ranibennur"
},
{
"text": "Burhanpur",
"link": "https://www.swiggy.com/city/burhanpur"
},
{
"text": "Bhadravati",
"link": "https://www.swiggy.com/city/bhadravati"
},
{
"text": "Chittoor",
"link": "https://www.swiggy.com/city/chittoor"
},
{
"text": "Pudukkottai",
"link": "https://www.swiggy.com/city/pudukkottai"
},
{
"text": "Hardoi",
"link": "https://www.swiggy.com/city/hardoi"
},
{
"text": "Basti",
"link": "https://www.swiggy.com/city/basti"
},
{
"text": "Karaikkudi",
"link": "https://www.swiggy.com/city/karaikkudi"
},
{
"text": "Lalitpur",
"link": "https://www.swiggy.com/city/lalitpur"
},
{
"text": "Hospet",
"link": "https://www.swiggy.com/city/hospet"
},
{
"text": "Budaun",
"link": "https://www.swiggy.com/city/budaun"
},
{
"text": "Neemuch",
"link": "https://www.swiggy.com/city/neemuch"
},
{
"text": "Pilibhit",
"link": "https://www.swiggy.com/city/pilibhit"
},
{
"text": "Barshi",
"link": "https://www.swiggy.com/city/barshi"
},
{
"text": "Sri Ganganagar",
"link": "https://www.swiggy.com/city/sri-ganganagar"
},
{
"text": "Wardha",
"link": "https://www.swiggy.com/city/wardha"
},
{
"text": "Sehore",
"link": "https://www.swiggy.com/city/sehore"
},
{
"text": "Bhimavaram",
"link": "https://www.swiggy.com/city/bhimavaram"
},
{
"text": "Hanumangarh",
"link": "https://www.swiggy.com/city/hanumangarh"
},
{
"text": "Pathankot",
"link": "https://www.swiggy.com/city/pathankot"
},
{
"text": "Puri",
"link": "https://www.swiggy.com/city/puri"
},
{
"text": "Fatehpur",
"link": "https://www.swiggy.com/city/fatehpur"
},
{
"text": "Surendranagar Dudhrej",
"link": "https://www.swiggy.com/city/surendranagar-dudhrej"
},
{
"text": "Jamnagar",
"link": "https://www.swiggy.com/city/jamnagar"
},
{
"text": "Bhuj",
"link": "https://www.swiggy.com/city/bhuj"
},
{
"text": "Gandhidham",
"link": "https://www.swiggy.com/city/gandhidham"
},
{
"text": "Bharuch",
"link": "https://www.swiggy.com/city/bharuch"
},
{
"text": "Navsari",
"link": "https://www.swiggy.com/city/navsari"
},
{
"text": "Amreli",
"link": "https://www.swiggy.com/city/amreli"
},
{
"text": "Palanpur",
"link": "https://www.swiggy.com/city/palanpur"
},
{
"text": "Bhilwara",
"link": "https://www.swiggy.com/city/bhilwara"
},
{
"text": "Suratgarh",
"link": "https://www.swiggy.com/city/suratgarh"
},
{
"text": "Sikar",
"link": "https://www.swiggy.com/city/sikar"
},
{
"text": "Churu",
"link": "https://www.swiggy.com/city/churu"
},
{
"text": "Alwar",
"link": "https://www.swiggy.com/city/alwar"
},
{
"text": "Bhiwadi",
"link": "https://www.swiggy.com/city/bhiwadi"
},
{
"text": "Bharatpur",
"link": "https://www.swiggy.com/city/bharatpur"
},
{
"text": "Mount Abu",
"link": "https://www.swiggy.com/city/mount-abu"
},
{
"text": "Bundi",
"link": "https://www.swiggy.com/city/bundi"
},
{
"text": "Sawai Madhopur",
"link": "https://www.swiggy.com/city/sawai-madhopur"
},
{
"text": "Purulia",
"link": "https://www.swiggy.com/city/purulia"
},
{
"text": "Bardhaman",
"link": "https://www.swiggy.com/city/bardhaman"
},
{
"text": "Raniganj",
"link": "https://www.swiggy.com/city/raniganj"
},
{
"text": "Darjeeling",
"link": "https://www.swiggy.com/city/darjeeling"
},
{
"text": "Jalpaiguri",
"link": "https://www.swiggy.com/city/jalpaiguri"
},
{
"text": "Chittorgarh",
"link": "https://www.swiggy.com/city/chittorgarh"
},
{
"text": "Dholpur",
"link": "https://www.swiggy.com/city/dholpur"
},
{
"text": "Uluberia",
"link": "https://www.swiggy.com/city/uluberia"
},
{
"text": "Nabadwip",
"link": "https://www.swiggy.com/city/nabadwip"
},
{
"text": "Bongaon",
"link": "https://www.swiggy.com/city/bongaon"
},
{
"text": "Kanchrapara",
"link": "https://www.swiggy.com/city/kanchrapara"
},
{
"text": "Habra",
"link": "https://www.swiggy.com/city/habra"
},
{
"text": "Firozabad",
"link": "https://www.swiggy.com/city/firozabad"
},
{
"text": "Nalgonda",
"link": "https://www.swiggy.com/city/nalgonda"
},
{
"text": "Chandrapur",
"link": "https://www.swiggy.com/city/chandrapur"
},
{
"text": "Bijapur",
"link": "https://www.swiggy.com/city/bijapur"
},
{
"text": "Bhusawal",
"link": "https://www.swiggy.com/city/bhusawal"
},
{
"text": "Raichur",
"link": "https://www.swiggy.com/city/raichur"
},
{
"text": "Bahraich",
"link": "https://www.swiggy.com/city/bahraich"
},
{
"text": "Azamgarh",
"link": "https://www.swiggy.com/city/azamgarh"
},
{
"text": "Bahadurgarh",
"link": "https://www.swiggy.com/city/bahadurgarh"
},
{
"text": "Jind",
"link": "https://www.swiggy.com/city/jind"
},
{
"text": "Rewari",
"link": "https://www.swiggy.com/city/rewari"
},
{
"text": "Palwal",
"link": "https://www.swiggy.com/city/palwal"
},
{
"text": "Hathras",
"link": "https://www.swiggy.com/city/hathras"
},
{
"text": "Sambalpur",
"link": "https://www.swiggy.com/city/sambalpur"
},
{
"text": "Banda",
"link": "https://www.swiggy.com/city/banda"
},
{
"text": "Hoshiarpur",
"link": "https://www.swiggy.com/city/hoshiarpur"
},
{
"text": "Faridkot",
"link": "https://www.swiggy.com/city/faridkot"
},
{
"text": "Mandsaur",
"link": "https://www.swiggy.com/city/mandsaur"
},
{
"text": "Suryapet",
"link": "https://www.swiggy.com/city/suryapet"
},
{
"text": "Adilabad",
"link": "https://www.swiggy.com/city/adilabad"
},
{
"text": "Narasaraopet",
"link": "https://www.swiggy.com/city/narasaraopet"
},
{
"text": "Faizabad",
"link": "https://www.swiggy.com/city/faizabad"
},
{
"text": "Tadpatri",
"link": "https://www.swiggy.com/city/tadpatri"
},
{
"text": "Gonda",
"link": "https://www.swiggy.com/city/gonda"
},
{
"text": "Mughalsarai",
"link": "https://www.swiggy.com/city/mughalsarai"
},
{
"text": "Medinipur",
"link": "https://www.swiggy.com/city/medinipur"
},
{
"text": "Nagda",
"link": "https://www.swiggy.com/city/nagda"
},
{
"text": "Raiganj",
"link": "https://www.swiggy.com/city/raiganj"
},
{
"text": "Deoria City",
"link": "https://www.swiggy.com/city/deoria-city"
},
{
"text": "Sultanpur",
"link": "https://www.swiggy.com/city/sultanpur"
},
{
"text": "Shamli",
"link": "https://www.swiggy.com/city/shamli"
},
{
"text": "Krishnanagar",
"link": "https://www.swiggy.com/city/krishnanagar"
},
{
"text": "Ballia",
"link": "https://www.swiggy.com/city/ballia"
},
{
"text": "Guntakal",
"link": "https://www.swiggy.com/city/guntakal"
},
{
"text": "Miryalaguda",
"link": "https://www.swiggy.com/city/miryalaguda"
},
{
"text": "Etah",
"link": "https://www.swiggy.com/city/etah"
},
{
"text": "Berhampore",
"link": "https://www.swiggy.com/city/berhampore"
},
{
"text": "Gudivada",
"link": "https://www.swiggy.com/city/gudivada"
},
{
"text": "Haldia",
"link": "https://www.swiggy.com/city/haldia"
},
{
"text": "Santipur",
"link": "https://www.swiggy.com/city/santipur"
},
{
"text": "Basirhat",
"link": "https://www.swiggy.com/city/basirhat"
},
{
"text": "Udgir",
"link": "https://www.swiggy.com/city/udgir"
},
{
"text": "Proddatur",
"link": "https://www.swiggy.com/city/proddatur"
},
{
"text": "Nagapattinam",
"link": "https://www.swiggy.com/city/nagapattinam"
},
{
"text": "Chikmagalur",
"link": "https://www.swiggy.com/city/chikmagalur"
},
{
"text": "Chandausi",
"link": "https://www.swiggy.com/city/chandausi"
},
{
"text": "Bhind",
"link": "https://www.swiggy.com/city/bhind"
},
{
"text": "Mandya",
"link": "https://www.swiggy.com/city/mandya"
},
{
"text": "Bagalkot",
"link": "https://www.swiggy.com/city/bagalkot"
},
{
"text": "Nandurbar",
"link": "https://www.swiggy.com/city/nandurbar"
},
{
"text": "Chitradurga",
"link": "https://www.swiggy.com/city/chitradurga"
},
{
"text": "Osmanabad",
"link": "https://www.swiggy.com/city/osmanabad"
},
{
"text": "Modinagar",
"link": "https://www.swiggy.com/city/modinagar"
},
{
"text": "Gadag-Betigeri",
"link": "https://www.swiggy.com/city/gadag-betigeri"
},
{
"text": "Hoshangabad",
"link": "https://www.swiggy.com/city/hoshangabad"
},
{
"text": "Jaunpur",
"link": "https://www.swiggy.com/city/jaunpur"
},
{
"text": "Port Blair",
"link": "https://www.swiggy.com/city/port-blair"
},
{
"text": "Jorhat",
"link": "https://www.swiggy.com/city/jorhat"
},
{
"text": "Nandyal",
"link": "https://www.swiggy.com/city/nandyal"
},
{
"text": "Biharsharif",
"link": "https://www.swiggy.com/city/biharsharif"
},
{
"text": "Buxar",
"link": "https://www.swiggy.com/city/buxar"
},
{
"text": "Siwan",
"link": "https://www.swiggy.com/city/siwan"
},
{
"text": "Dehri",
"link": "https://www.swiggy.com/city/dehri"
},
{
"text": "Bettiah",
"link": "https://www.swiggy.com/city/bettiah"
},
{
"text": "Kishanganj",
"link": "https://www.swiggy.com/city/kishanganj"
},
{
"text": "Saharsa",
"link": "https://www.swiggy.com/city/saharsa"
},
{
"text": "Hajipur",
"link": "https://www.swiggy.com/city/hajipur"
},
{
"text": "Motihari",
"link": "https://www.swiggy.com/city/motihari"
},
{
"text": "Sasaram",
"link": "https://www.swiggy.com/city/sasaram"
},
{
"text": "Munger",
"link": "https://www.swiggy.com/city/munger"
},
{
"text": "Katihar",
"link": "https://www.swiggy.com/city/katihar"
},
{
"text": "Arrah",
"link": "https://www.swiggy.com/city/arrah"
},
{
"text": "Srikakulam",
"link": "https://www.swiggy.com/city/srikakulam"
},
{
"text": "Begusarai",
"link": "https://www.swiggy.com/city/begusarai"
},
{
"text": "Neyveli",
"link": "https://www.swiggy.com/city/neyveli"
},
{
"text": "Waidhan",
"link": "https://www.swiggy.com/city/waidhan"
},
{
"text": "Markapur",
"link": "https://www.swiggy.com/city/markapur"
},
{
"text": "Chikkaballapur",
"link": "https://www.swiggy.com/city/chikkaballapur"
},
{
"text": "Bhatkal",
"link": "https://www.swiggy.com/city/bhatkal"
},
{
"text": "Gokak",
"link": "https://www.swiggy.com/city/gokak"
},
{
"text": "Itarsi",
"link": "https://www.swiggy.com/city/itarsi"
},
{
"text": "Dhar",
"link": "https://www.swiggy.com/city/dhar"
},
{
"text": "Chalisgaon",
"link": "https://www.swiggy.com/city/chalisgaon"
},
{
"text": "Thiruvallur",
"link": "https://www.swiggy.com/city/thiruvallur"
},
{
"text": "Namakkal",
"link": "https://www.swiggy.com/city/namakkal"
},
{
"text": "Dharmapuri",
"link": "https://www.swiggy.com/city/dharmapuri"
},
{
"text": "Bhandara",
"link": "https://www.swiggy.com/city/bhandara"
},
{
"text": "Virudhunagar",
"link": "https://www.swiggy.com/city/virudhunagar"
},
{
"text": "Siddipet",
"link": "https://www.swiggy.com/city/siddipet"
},
{
"text": "Gadwal",
"link": "https://www.swiggy.com/city/gadwal"
},
{
"text": "Bodhan-Rural",
"link": "https://www.swiggy.com/city/bodhan-rural"
},
{
"text": "Kamareddy",
"link": "https://www.swiggy.com/city/kamareddy"
},
{
"text": "Jhunjhunu",
"link": "https://www.swiggy.com/city/jhunjhunu"
},
{
"text": "Kapurthala",
"link": "https://www.swiggy.com/city/kapurthala"
},
{
"text": "Sangrur",
"link": "https://www.swiggy.com/city/sangrur"
},
{
"text": "Gurdaspur",
"link": "https://www.swiggy.com/city/gurdaspur"
},
{
"text": "Ramgarh",
"link": "https://www.swiggy.com/city/ramgarh"
},
{
"text": "Bantwal",
"link": "https://www.swiggy.com/city/bantwal"
},
{
"text": "Doddaballapura",
"link": "https://www.swiggy.com/city/doddaballapura"
},
{
"text": "Buldana",
"link": "https://www.swiggy.com/city/buldana"
},
{
"text": "Karad",
"link": "https://www.swiggy.com/city/karad"
},
{
"text": "Krishnagiri",
"link": "https://www.swiggy.com/city/krishnagiri"
},
{
"text": "Tiptur",
"link": "https://www.swiggy.com/city/tiptur"
},
{
"text": "Bhadrachalam",
"link": "https://www.swiggy.com/city/bhadrachalam"
},
{
"text": "Mancherial",
"link": "https://www.swiggy.com/city/mancherial"
},
{
"text": "Balrampur",
"link": "https://www.swiggy.com/city/balrampur"
},
{
"text": "Bharabanki",
"link": "https://www.swiggy.com/city/bharabanki"
},
{
"text": "Malout",
"link": "https://www.swiggy.com/city/malout"
},
{
"text": "Fatehgarh Sahib",
"link": "https://www.swiggy.com/city/fatehgarh-sahib"
},
{
"text": "Ropar",
"link": "https://www.swiggy.com/city/ropar"
},
{
"text": "Nangal",
"link": "https://www.swiggy.com/city/nangal"
},
{
"text": "Narnaul",
"link": "https://www.swiggy.com/city/narnaul"
},
{
"text": "Naraingarh",
"link": "https://www.swiggy.com/city/naraingarh"
},
{
"text": "Himmatnagar",
"link": "https://www.swiggy.com/city/himmatnagar"
},
{
"text": "Dausa",
"link": "https://www.swiggy.com/city/dausa"
},
{
"text": "Jahanabad",
"link": "https://www.swiggy.com/city/jahanabad"
},
{
"text": "Samastipur",
"link": "https://www.swiggy.com/city/samastipur"
},
{
"text": "Purnea",
"link": "https://www.swiggy.com/city/purnea"
},
{
"text": "Berhampur",
"link": "https://www.swiggy.com/city/berhampur"
},
{
"text": "Malda",
"link": "https://www.swiggy.com/city/malda"
},
{
"text": "Tuni",
"link": "https://www.swiggy.com/city/tuni"
},
{
"text": "Puttur",
"link": "https://www.swiggy.com/city/puttur"
},
{
"text": "Rayachoty",
"link": "https://www.swiggy.com/city/rayachoty"
},
{
"text": "Nirmal",
"link": "https://www.swiggy.com/city/nirmal"
},
{
"text": "Mirzapur",
"link": "https://www.swiggy.com/city/mirzapur"
},
{
"text": "Tanuku",
"link": "https://www.swiggy.com/city/tanuku"
},
{
"text": "Dahod",
"link": "https://www.swiggy.com/city/dahod"
},
{
"text": "Barmer",
"link": "https://www.swiggy.com/city/barmer"
},
{
"text": "Gangapur City",
"link": "https://www.swiggy.com/city/gangapur-city"
},
{
"text": "Mandi Gobindgarh",
"link": "https://www.swiggy.com/city/mandi-gobindgarh"
},
{
"text": "Tarn Taran Sahib",
"link": "https://www.swiggy.com/city/tarn-taran-sahib"
},
{
"text": "Nakodar",
"link": "https://www.swiggy.com/city/nakodar"
},
{
"text": "Ankleshwar",
"link": "https://www.swiggy.com/city/ankleshwar"
},
{
"text": "Vyara",
"link": "https://www.swiggy.com/city/vyara"
},
{
"text": "Bardoli",
"link": "https://www.swiggy.com/city/bardoli"
},
{
"text": "Halol",
"link": "https://www.swiggy.com/city/halol"
},
{
"text": "Bijnor",
"link": "https://www.swiggy.com/city/bijnor"
},
{
"text": "Sangamner",
"link": "https://www.swiggy.com/city/sangamner"
},
{
"text": "Baramati",
"link": "https://www.swiggy.com/city/baramati"
},
{
"text": "Betul",
"link": "https://www.swiggy.com/city/betul"
},
{
"text": "Chhatarpur",
"link": "https://www.swiggy.com/city/chhatarpur"
},
{
"text": "Balaghat",
"link": "https://www.swiggy.com/city/balaghat"
},
{
"text": "Sivakasi",
"link": "https://www.swiggy.com/city/sivakasi"
},
{
"text": "Viluppuram",
"link": "https://www.swiggy.com/city/viluppuram"
},
{
"text": "Ramanathapuram",
"link": "https://www.swiggy.com/city/ramanathapuram"
},
{
"text": "Sirsi",
"link": "https://www.swiggy.com/city/sirsi"
},
{
"text": "Theni",
"link": "https://www.swiggy.com/city/theni"
},
{
"text": "Karur",
"link": "https://www.swiggy.com/city/karur"
},
{
"text": "Karwar",
"link": "https://www.swiggy.com/city/karwar"
},
{
"text": "Sindhanur",
"link": "https://www.swiggy.com/city/sindhanur"
},
{
"text": "Kannur",
"link": "https://www.swiggy.com/city/kannur"
},
{
"text": "Noida 1",
"link": "https://www.swiggy.com/city/noida-1"
},
{
"text": "Thiruvalla",
"link": "https://www.swiggy.com/city/thiruvalla"
},
{
"text": "Thodupuzha",
"link": "https://www.swiggy.com/city/thodupuzha"
},
{
"text": "Kadiri",
"link": "https://www.swiggy.com/city/kadiri"
},
{
"text": "Kavali",
"link": "https://www.swiggy.com/city/kavali"
},
{
"text": "Tezpur",
"link": "https://www.swiggy.com/city/tezpur"
},
{
"text": "Kayamkulam",
"link": "https://www.swiggy.com/city/kayamkulam"
},
{
"text": "Kottarakkara",
"link": "https://www.swiggy.com/city/kottarakkara"
},
{
"text": "Mandi Dabwali",
"link": "https://www.swiggy.com/city/mandi-dabwali"
},
{
"text": "Fatehabad",
"link": "https://www.swiggy.com/city/fatehabad"
},
{
"text": "Jagraon",
"link": "https://www.swiggy.com/city/jagraon"
},
{
"text": "Mansa",
"link": "https://www.swiggy.com/city/mansa"
},
{
"text": "Pinjore City",
"link": "https://www.swiggy.com/city/pinjore-city"
},
{
"text": "Fazilka",
"link": "https://www.swiggy.com/city/fazilka"
},
{
"text": "Baddi",
"link": "https://www.swiggy.com/city/baddi"
},
{
"text": "Solan",
"link": "https://www.swiggy.com/city/solan"
},
{
"text": "Daltonganj",
"link": "https://www.swiggy.com/city/daltonganj"
},
{
"text": "Balangir",
"link": "https://www.swiggy.com/city/balangir"
},
{
"text": "Kothagudem",
"link": "https://www.swiggy.com/city/kothagudem"
},
{
"text": "Hansi",
"link": "https://www.swiggy.com/city/hansi"
},
{
"text": "Aurangabad_Bihar",
"link": "https://www.swiggy.com/city/aurangabadbihar"
},
{
"text": "Gopalganj",
"link": "https://www.swiggy.com/city/gopalganj"
},
{
"text": "Jharsuguda",
"link": "https://www.swiggy.com/city/jharsuguda"
},
{
"text": "Tohana",
"link": "https://www.swiggy.com/city/tohana"
},
{
"text": "Jhalawar",
"link": "https://www.swiggy.com/city/jhalawar"
},
{
"text": "Sivasagar",
"link": "https://www.swiggy.com/city/sivasagar"
},
{
"text": "Bagdogra",
"link": "https://www.swiggy.com/city/bagdogra"
},
{
"text": "Kendrapada",
"link": "https://www.swiggy.com/city/kendrapada"
},
{
"text": "Mallapuram (Do not Use)",
"link": "https://www.swiggy.com/city/mallapuram-do-not-use"
},
{
"text": "Veraval",
"link": "https://www.swiggy.com/city/veraval"
},
{
"text": "Daman",
"link": "https://www.swiggy.com/city/daman"
},
{
"text": "Chiplun",
"link": "https://www.swiggy.com/city/chiplun"
},
{
"text": "Silvassa",
"link": "https://www.swiggy.com/city/silvassa"
},
{
"text": "Lonavla",
"link": "https://www.swiggy.com/city/lonavla"
},
{
"text": "Bongaigaon",
"link": "https://www.swiggy.com/city/bongaigaon"
},
{
"text": "Golaghat",
"link": "https://www.swiggy.com/city/golaghat"
},
{
"text": "Duliajan",
"link": "https://www.swiggy.com/city/duliajan"
},
{
"text": "Bolpur",
"link": "https://www.swiggy.com/city/bolpur"
},
{
"text": "Madhubani",
"link": "https://www.swiggy.com/city/madhubani"
},
{
"text": "Balasore",
"link": "https://www.swiggy.com/city/balasore"
},
{
"text": "Palampur",
"link": "https://www.swiggy.com/city/palampur"
},
{
"text": "Kotdwar",
"link": "https://www.swiggy.com/city/kotdwar"
},
{
"text": "Koppal",
"link": "https://www.swiggy.com/city/koppal"
},
{
"text": "Chikhli",
"link": "https://www.swiggy.com/city/chikhli"
},
{
"text": "Dahanu",
"link": "https://www.swiggy.com/city/dahanu"
},
{
"text": "Itanagar",
"link": "https://www.swiggy.com/city/itanagar"
},
{
"text": "Rangpo",
"link": "https://www.swiggy.com/city/rangpo"
},
{
"text": "Aizawl",
"link": "https://www.swiggy.com/city/aizawl"
},
{
"text": "Gangtok",
"link": "https://www.swiggy.com/city/gangtok"
},
{
"text": "Mayiladuthurai",
"link": "https://www.swiggy.com/city/mayiladuthurai"
},
{
"text": "Kannauj",
"link": "https://www.swiggy.com/city/kannauj"
},
{
"text": "Cooch Behar",
"link": "https://www.swiggy.com/city/cooch-behar"
},
{
"text": "Palani",
"link": "https://www.swiggy.com/city/palani"
},
{
"text": "Bilimora",
"link": "https://www.swiggy.com/city/bilimora"
},
{
"text": "Boisar",
"link": "https://www.swiggy.com/city/boisar"
},
{
"text": "Kohima",
"link": "https://www.swiggy.com/city/kohima"
},
{
"text": "Naharlagun",
"link": "https://www.swiggy.com/city/naharlagun"
},
{
"text": "Dumka",
"link": "https://www.swiggy.com/city/dumka"
},
{
"text": "Rajsamand",
"link": "https://www.swiggy.com/city/rajsamand"
},
{
"text": "Gauriganj",
"link": "https://www.swiggy.com/city/gauriganj"
},
{
"text": "Bodinayakanur",
"link": "https://www.swiggy.com/city/bodinayakanur"
},
{
"text": "Bhawanipatna",
"link": "https://www.swiggy.com/city/bhawanipatna"
},
{
"text": "Baran",
"link": "https://www.swiggy.com/city/baran"
},
{
"text": "Narsinghpur",
"link": "https://www.swiggy.com/city/narsinghpur"
},
{
"text": "Kovilpatti",
"link": "https://www.swiggy.com/city/kovilpatti"
},
{
"text": "Pusad",
"link": "https://www.swiggy.com/city/pusad"
},
{
"text": "Kendujhar",
"link": "https://www.swiggy.com/city/kendujhar"
},
{
"text": "Manali",
"link": "https://www.swiggy.com/city/manali"
},
{
"text": "Diu",
"link": "https://www.swiggy.com/city/diu"
},
{
"text": "Khamgaon",
"link": "https://www.swiggy.com/city/khamgaon"
},
{
"text": "Ramanagara",
"link": "https://www.swiggy.com/city/ramanagara"
},
{
"text": "Alipurduar",
"link": "https://www.swiggy.com/city/alipurduar"
},
{
"text": "Almora",
"link": "https://www.swiggy.com/city/almora"
},
{
"text": "Jhargram",
"link": "https://www.swiggy.com/city/jhargram"
},
{
"text": "Arambagh",
"link": "https://www.swiggy.com/city/arambagh"
},
{
"text": "Bhadohi",
"link": "https://www.swiggy.com/city/bhadohi"
},
{
"text": "Tenkasi",
"link": "https://www.swiggy.com/city/tenkasi"
},
{
"text": "Srivilliputhur",
"link": "https://www.swiggy.com/city/srivilliputhur"
},
{
"text": "Chidambaram",
"link": "https://www.swiggy.com/city/chidambaram"
},
{
"text": "Rajgarh",
"link": "https://www.swiggy.com/city/rajgarh"
},
{
"text": "Pratapgarh",
"link": "https://www.swiggy.com/city/pratapgarh"
},
{
"text": "Washim",
"link": "https://www.swiggy.com/city/washim"
},
{
"text": "Raghunathpur",
"link": "https://www.swiggy.com/city/raghunathpur"
},
{
"text": "Suri",
"link": "https://www.swiggy.com/city/suri"
},
{
"text": "Kadayanallur",
"link": "https://www.swiggy.com/city/kadayanallur"
},
{
"text": "Thiruvarur",
"link": "https://www.swiggy.com/city/thiruvarur"
},
{
"text": "Ranaghat-WB",
"link": "https://www.swiggy.com/city/ranaghat-wb"
},
{
"text": "Wayanad",
"link": "https://www.swiggy.com/city/wayanad"
},
{
"text": "Perambalur",
"link": "https://www.swiggy.com/city/perambalur"
},
{
"text": "Paramakudi",
"link": "https://www.swiggy.com/city/paramakudi"
},
{
"text": "Bela Pratapgarh",
"link": "https://www.swiggy.com/city/bela-pratapgarh"
},
{
"text": "Mahoba",
"link": "https://www.swiggy.com/city/mahoba"
},
{
"text": "Sitamarhi",
"link": "https://www.swiggy.com/city/sitamarhi"
},
{
"text": "Chakdaha",
"link": "https://www.swiggy.com/city/chakdaha"
},
{
"text": "Khalilabad",
"link": "https://www.swiggy.com/city/khalilabad"
},
{
"text": "Pattukkottai",
"link": "https://www.swiggy.com/city/pattukkottai"
},
{
"text": "Tindivanam",
"link": "https://www.swiggy.com/city/tindivanam"
},
{
"text": "Tiruttani",
"link": "https://www.swiggy.com/city/tiruttani"
},
{
"text": "Gangarampur",
"link": "https://www.swiggy.com/city/gangarampur"
},
{
"text": "Dharapuram",
"link": "https://www.swiggy.com/city/dharapuram"
},
{
"text": "Arakkonam",
"link": "https://www.swiggy.com/city/arakkonam"
},
{
"text": "Sirkali",
"link": "https://www.swiggy.com/city/sirkali"
},
{
"text": "Mettupalayam",
"link": "https://www.swiggy.com/city/mettupalayam"
},
{
"text": "Digboi",
"link": "https://www.swiggy.com/city/digboi"
},
{
"text": "Biswanath Chariali",
"link": "https://www.swiggy.com/city/biswanath-chariali"
},
{
"text": "Nalbari",
"link": "https://www.swiggy.com/city/nalbari"
},
{
"text": "Shirdi city",
"link": "https://www.swiggy.com/city/shirdi-city"
},
{
"text": "Mukerian",
"link": "https://www.swiggy.com/city/mukerian"
},
{
"text": "Hosur",
"link": "https://www.swiggy.com/city/hosur"
},
{
"text": "Palakollu",
"link": "https://www.swiggy.com/city/palakollu"
},
{
"text": "Ravulapalem",
"link": "https://www.swiggy.com/city/ravulapalem"
},
{
"text": "Barh",
"link": "https://www.swiggy.com/city/barh"
},
{
"text": "Palghar",
"link": "https://www.swiggy.com/city/palghar"
},
{
"text": "Kushalnagar",
"link": "https://www.swiggy.com/city/kushalnagar"
},
{
"text": "Dungarpur",
"link": "https://www.swiggy.com/city/dungarpur"
},
{
"text": "Chaibasa",
"link": "https://www.swiggy.com/city/chaibasa"
},
{
"text": "Haveri",
"link": "https://www.swiggy.com/city/haveri"
},
{
"text": "Karaikal",
"link": "https://www.swiggy.com/city/karaikal"
},
{
"text": "Jjajjar",
"link": "https://www.swiggy.com/city/jjajjar"
},
{
"text": "Kokrajhar",
"link": "https://www.swiggy.com/city/kokrajhar"
},
{
"text": "Rangia",
"link": "https://www.swiggy.com/city/rangia"
},
{
"text": "Hamirpur",
"link": "https://www.swiggy.com/city/hamirpur"
},
{
"text": "Una",
"link": "https://www.swiggy.com/city/una"
},
{
"text": "Sulthan Bathery",
"link": "https://www.swiggy.com/city/sulthan-bathery"
},
{
"text": "Rayagada",
"link": "https://www.swiggy.com/city/rayagada"
},
{
"text": "Paradeep",
"link": "https://www.swiggy.com/city/paradeep"
},
{
"text": "Mandapeta",
"link": "https://www.swiggy.com/city/mandapeta"
},
{
"text": "Jamui",
"link": "https://www.swiggy.com/city/jamui"
},
{
"text": "Pilkhuwa",
"link": "https://www.swiggy.com/city/pilkhuwa"
},
{
"text": "Parvathipuram",
"link": "https://www.swiggy.com/city/parvathipuram"
},
{
"text": "Ambajogai",
"link": "https://www.swiggy.com/city/ambajogai"
},
{
"text": "Araria",
"link": "https://www.swiggy.com/city/araria"
},
{
"text": "North Lakhimpur",
"link": "https://www.swiggy.com/city/north-lakhimpur"
},
{
"text": "Rajampet",
"link": "https://www.swiggy.com/city/rajampet"
},
{
"text": "Udumalaipettai",
"link": "https://www.swiggy.com/city/udumalaipettai"
},
{
"text": "Tirupattur",
"link": "https://www.swiggy.com/city/tirupattur"
},
{
"text": "Hojai",
"link": "https://www.swiggy.com/city/hojai"
},
{
"text": "Khagaria",
"link": "https://www.swiggy.com/city/khagaria"
},
{
"text": "Dasuya",
"link": "https://www.swiggy.com/city/dasuya"
},
{
"text": "Gudur",
"link": "https://www.swiggy.com/city/gudur"
},
{
"text": "Sullurpeta",
"link": "https://www.swiggy.com/city/sullurpeta"
},
{
"text": "Piler",
"link": "https://www.swiggy.com/city/piler"
},
{
"text": "SankaranKoil",
"link": "https://www.swiggy.com/city/sankarankoil"
},
{
"text": "Nabha",
"link": "https://www.swiggy.com/city/nabha"
},
{
"text": "LPU - Phagwara",
"link": "https://www.swiggy.com/city/lpu-phagwara"
},
{
"text": "Jangipur",
"link": "https://www.swiggy.com/city/jangipur"
},
{
"text": "Roha",
"link": "https://www.swiggy.com/city/roha"
}
],
"id": "footer_content"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
"citySlug": "pune",
"lat": "18.4392432",
"lng": "73.8580788",
"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
"gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-c2067fb6-c853-4d92-906d-aedf73770055\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\"}}",
"id": "meta_data",
"metaInfo": {
"pageType": "FOOD_HOME_PAGE",
"pageTitle": "Order Food Online from India's Best Food Delivery Service | Swiggy",
"pageMetaDescription": "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
"pageKeywords": "Food delivery, Online food order, Online food dleivery"
},
"screenType": "filteredCollection",
"seoParams": {
"apiName": "FoodHomePage",
"seoUrl": "www.swiggy.com",
"pageType": "FOOD_HOME_PAGE"
}
}
}
}
],
"firstOffsetRequest": true,
"cacheExpiryTime": 240,
"nextFetch": 1
},
"tid": "79789dd1-601e-4563-aa19-4dd07fad4649",
"sid": "brza7c96-3a05-442b-9f07-bee6083bec6c",
"deviceId": "7fa4d50a-fdee-969e-f7ec-03e73caa9af8",
"csrfToken": "elfSa1drDsps-gq3pIrtTNrj8gXC6WuwpsZeYL7I"
}