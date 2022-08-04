## Firebase Movie App
<p><a href="#"><img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png"  alt="react" height="30"> </a>  <a href="#"> <img src="https://user-images.githubusercontent.com/94041207/182938610-4596ffdd-eaa9-42c0-8a5b-277582ab7750.png"  alt="firebase" height="30"> </a>  <img src="https://user-images.githubusercontent.com/94041207/182937776-0d83e2b1-0e2c-49e3-ae86-cd47d8ba6046.jpeg"  alt="bootstrap" height="30"> </a>  <a href="#"> <img src="https://user-images.githubusercontent.com/94041207/182937904-c3e112b6-5ad6-4df4-bbd9-35375a928d8a.png"  alt="context api" height="30"></a>  <a href="#"> <img src="https://user-images.githubusercontent.com/94041207/182919629-cb95a2ee-7628-4899-bb7b-275e1dbd3a85.png"  alt="axios" height="30"> </a>  <a href="#"><img src="https://user-images.githubusercontent.com/94041207/182910527-3818a588-68a6-41c4-919f-75325d63112f.jpg"  alt="formik_yup" height="30"> </a>  <a href="#"> <img src="https://user-images.githubusercontent.com/94041207/182910558-4b78b2e3-7a72-4c98-98a8-b42e421c0c8a.png"  alt="react_toastify" height="30"> </a> <a href="#"> <img src="https://user-images.githubusercontent.com/94041207/182938058-da1ca9a4-08db-43e9-8910-08e82c5d71db.png"  alt="netlify" height="30"></a></p>


## <a href="https://bugur-firebase-movie-search-app.netlify.app/" target="_blank"> Go to project 🚀 </a>
## Preview of the project:
![movie_app_gif (1)](https://user-images.githubusercontent.com/94041207/182935716-f05366c3-f925-497b-a248-3fc190cfefd1.gif)
## Description 
<p>In this project, it is aimed to create blog posts and display them on the dashboard. There are six cards on the dashboard. When the <b>View More</b> button is clicked, six more cards are loaded thanks to <b>pegination</b> (if there is six more cards). </p>
<p>Anonymous user could enter dashboard page and see post cards. He/She could not enter detail page thanks to <b>private routing</b>. Only authenticated user can enter detail page. So to enter detail page anonymous user must log in or register.  </p>
<p>Post card and detail page include post title, post picture, post category, post content, number of likes, number of views, number of comments, writer name, writed profile picture and how long ago was post created. In detail page, there is also like/dislike button, comment form and comments. Every comment div includes not only comment content but also who made the comment and how long ago was comment created.  </p>
<p>The number of views is unique for each authenticated user. In other words, <b>when a authenticated user re-opens the detail page, the number of views will not increase.</b> </p>
<p><b>Authenticated user can add , delete and update blog posts.</b> While post creation if authenticated user select ‘Publish’ on the combo box the post will be shown in de dashboard, if he/she select ‘Draft’ the post won’t be shown. <b>He/She also can update his/her profile informations.</b></p>
<p>If the user has not uploaded the post picture, a default post picture will be seen as post picture. The same is true for the profile picture.   </p>
<p>After registration, log in, log out, post adding, deleting, update, profile update or comment adding  processes a notify div will appear for a while thanks to <b>react toastify.</b> This div tell whether the process is done successfully or not. If process is succesfull this div will be green, if not it will be red.</p>

## What is in the project? 
In this project:   
* Frontend was made by using  <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png"  alt="react" height="30">
* Register, log in, log out and authentication operations were made by using <img src="https://user-images.githubusercontent.com/94041207/182938610-4596ffdd-eaa9-42c0-8a5b-277582ab7750.png"  alt="firebase" height="30">
* Style operations were made by using <img src="https://user-images.githubusercontent.com/94041207/182937776-0d83e2b1-0e2c-49e3-ae86-cd47d8ba6046.jpeg"  alt="material ui" height="30"> 
* State management was made by using <img src="https://user-images.githubusercontent.com/94041207/182937904-c3e112b6-5ad6-4df4-bbd9-35375a928d8a.png"  alt="redux" height="30">
* CRUD operations were made by using <img src="https://user-images.githubusercontent.com/94041207/182919629-cb95a2ee-7628-4899-bb7b-275e1dbd3a85.png"  alt="axios" height="30">
* Form validations were made by using <img src="https://user-images.githubusercontent.com/94041207/182910527-3818a588-68a6-41c4-919f-75325d63112f.jpg"  alt="formik_yup" height="30">
* Notifications were made by using react <img src="https://user-images.githubusercontent.com/94041207/182910558-4b78b2e3-7a72-4c98-98a8-b42e421c0c8a.png"  alt="react_toastify" height="30">
* Frontend part was deployed to <img src="https://user-images.githubusercontent.com/94041207/182938058-da1ca9a4-08db-43e9-8910-08e82c5d71db.png"  alt="netlify" height="30">
* **React Router Dom** was used for changing gage. Also **private router** was used to prevent anonymous user to enter some pages.
* **Responsiveness** for different screen size was done. 


