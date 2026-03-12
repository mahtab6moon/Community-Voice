Community Voice – Community Event Feedback Portal

Community Voice is a simple web application where users can submit feedback about community events and view previously submitted feedback. The project is designed to demonstrate form validation, client-side data storage, and basic front-end development using modern web technologies.
The application consists of two main pages: a feedback submission page and a feedback display page. All submitted feedback is stored in the browser's localStorage, so no backend or database is required.

Features

1. Submit feedback about community events
2. Form validation for all input fields
3. Unique email validation
4. Rating system (1–5)
5. Feedback stored in localStorage
6. View all submitted feedback on a separate page
7. Previously submitted feedback is preserved and new feedback is appended

Feedback Submission Fields
The feedback form contains the following required fields:

1. First Name – Text input
2. Last Name – Text input
3. Phone Number – Numeric input (digits only)
4. Email Address – Must be a valid and unique email
5. Event Name – Text input
6. Event Date – Date input
7. Rating – Number input (between 1 and 5)
8. Feedback Message – Textarea
All fields are required. If any validation fails, appropriate error messages will be displayed.

Data Storage

The application uses the browser’s localStorage to store feedback data.
Each new submission is appended to the existing feedback list
Previously stored feedback is not overwritten
The display page reads and shows all stored feedback from localStorage

Technologies Used
React
Vite
Formik (for form handling and validation)
Yup (for validation schema)
HTML5
CSS3
JavaScript (ES6)

Running the Project

Clone the repository
git clone https://github.com/yourusername/community-voice.git

Navigate to the project folder
cd community-voice

Install dependencies
npm install

Run the development server
npm run dev
