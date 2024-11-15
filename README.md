Post App

=> Overview

The Post App is a full-stack application for managing posts. It enables users to create, view, update, and delete posts. The app combines a user-friendly interface with a robust backend for seamless post management. With a responsive, card-based UI, the app ensures an engaging experience across devices.

=> Features

-> Add Post: Users can create new posts.
-> View Posts: Posts are displayed in a card-based layout for easy navigation.
-> Edit Post: Users can update post titles and details.
-> Delete Post: Allows users to remove unwanted posts.
-> Responsive Design: Optimized for desktops, tablets, and mobile devices.

----- Technologies Used ----

=> Frontend
-> React for building the user interface.
-> Bootstrap for responsive design and styling.
-> React-Bootstrap for pre-styled components.
-> React-Router-Dom for navigation.

=> Backend
->JSON Placeholder API for mock data.
-> JSON Server for managing local data.

=> Additional Tools
-> Axios for API communication.
-> React-Toastify for notifications.


--------  Installation --------

=> Clone the Repository

git clone https://github.com/abhishek-475/Post-App.git
cd post-app


=> Install Dependencies

npm install Json Server
take PORT = 3001
add db.json with the following data
{
    "posts:[]
}
set scripts "start" :"node index.js" in package.json
Start the Development Server by command node index.js

=> Project Structure

src/
├── Components/
│   ├── Add.js               # Add new posts
│   ├── Dashboard.js         # Display posts and manage CRUD operations
│   └── Home.js              # Landing page
├── Services/
│   └── Allapis.js           # API service functions
├── App.js                   # Root component
├── index.js                 # Entry point
└── styles/                  # Custom CSS (optional)


------ Usage --------

=> Home Page

-> Introduction to the app with a "Let's Go" button.
-> Navigate to the dashboard to manage posts.

=> Dashboard

Add: Click the "ADD +" button to create a new post.
Edit: Use the "Edit" button on a post to modify its content.
Delete: Click the "Delete" button to remove a post.

=> Notifications

-> Success and error messages are displayed using Toast notifications.

=> API Endpoints

-> JSON Placeholder API (https://jsonplaceholder.typicode.com/posts)
-> GET: Retrieve posts.
-> POST: Add new posts.
-> PUT: Update existing posts.
-> DELETE: Remove posts.

=> Local JSON Server (http://localhost:3001/posts)

-> Functions similarly to JSON Placeholder but operates on db.json.


=> Future Enhancements

-> Add user authentication for personalized post management.
-> Implement pagination for better data handling.
-> Integrate a cloud database for real-world deployment.

License
This project is licensed under the MIT License.

Author
Abhishek Pavithran
Feel free to contribute to the project by submitting issues or pull requests!