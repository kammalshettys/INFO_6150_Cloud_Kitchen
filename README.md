# INFO_6150_Cloud_Kitchen
this is end sem project for course info_6150

clone this repo :
#npm install 
#npm start

* this skeleton has Async Redux setup to make ajax call with redux. 
* localhost:3000/login -> will give the login page.

* From now we will be restricting the pages based on the roles. 
* to add pages which are related to customer add it under the parent route <CustomerRoute> please follow as I did for Home. 

<Route exact path='/customer' element={<CustomerRoute/>}>
            <Route exact path='/customer/home' element={<Home/>}/>
            <Route exact path='/customer/about' element={<About/>}/>
</Route>

