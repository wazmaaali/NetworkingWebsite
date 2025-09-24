# NetworkingWebsite

# Networking and Security Research Group (NRG) - Web Page

# Overview

This HTML page serves as the website for the Networking and Security Research Group (NRG) at Saint Louis University. The group holds weekly sessions where research papers in networking, systems, and security are discussed. The website provides information about the group, including meeting schedules, presenter details, and a form for signing up to present a paper.

# Features

# 1: Group Information:

    -Overview of the NRG group's activities, including the goals and details of the weekly reading sessions.
    -Basic information on meeting times and location.

# 2: Schedule of Presenters:

    -A dynamic table listing past and upcoming presenters, along with the date, presenter name, research paper title, and a link to the paper.

# 3: Sign-Up Form:

    -A form allowing users to sign up as presenters for future sessions by submitting their name, email, paper title, date, and a link to the paper.
    -Form validation to ensure proper data input (e.g., valid email addresses).

# 4: Firebase Integration:

    -The form submissions are integrated with Firebase to store the information in a real-time database.

# Dependencies

# CSS Files:

    -nicepage.css: General styling for the page.
    -NetwrokingWebiste.css: Additional styles specific to this page.

# JavaScript Files:

    -jquery-1.11.2.min.js: A jQuery library for DOM manipulation and AJAX calls.
    -nicepage.js: Handles interactive behavior and page animations.
    -script.js: Custom script for managing form validation and Firebase integration.

# NetwrokingWebiste html Files:

    -This is the main HTML file that serves as the landing page for the project. It is the default page that loads when the project is run.

# Firebase Configuration

    -The Firebase integration allows the form data to be stored in the Firebase Realtime Database. The following configuration is used to initialize Firebase:

    "
    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID",
    };
    firebase.initializeApp(firebaseConfig);

"

# Responsive Design:

    -The page layout is responsive and optimized for various screen sizes.

# External Resources

    # Fonts:
        -The page uses Google Fonts, specifically Montserrat and Open Sans.
    # Icons:
        -Icons are used for visual cues, such as marking required fields in the form and providing clickable links to maps and papers.

# License

    -This project is licensed under the MIT License.
