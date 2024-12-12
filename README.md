# Website Name: Blog Portal Website
# Website Live Link: https://blog-portal-auth.web.app/

## Key Features

1. **Home Page**
   - Responsive navbar with conditional rendering for authentication.
   - Hero section with a banner.
   - Recent blogs section showcasing six blogs with essential details.
   - Newsletter subscription with user feedback via toast messages.
   - Two unique additional sections for enhanced user experience.

2. **Blogs Management**
   - Add, update, and view blogs.
   - Blog filtering by category and search functionality.
   - Blog details page with user comments and conditional interactions.

3. **Wishlist**
   - Add blogs to a personal wishlist.
   - View and manage wishlisted blogs.

4. **Authentication**
   - Email/password registration and login.
   - Social login integration (e.g., Google).
   - Error handling for login and registration.

5. **Other Features**
   - Featured blogs page with sortable data tables.
   - Loading skeletons and animations for improved UX.
   - Secure private routes using JWT authentication.
   - Framer Motion animations on the home page.

# Bullet Points 
* This is the blog portal site for blog content lovers. Using the site, a user can read all blogs and, if they wish, write a new blog for the readers.
* Users can update their data only and cannot comment on their own written blogs.
* If a user wishes to add any favorite data, they can add those to the wishlist by clicking the wishlist button, and only the user can see their wishlist section.
* On the client side, React framework, MongoDB as a database, and Firebase authentication are used to authenticate users, and environment variables are used to securely restrict information.
* In the backend, Express.js is used, and JWT tokens are used to secure the Express API.

# used packages
* framer motion
* react-data-table-component
* swipper slider
* react toastify
* sweet alert

