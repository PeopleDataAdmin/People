"User": {
  "id": "string", // Unique identifier for the user. Example: "U123" people.org/user/id/u123 - brings up user profile if viewer attributes match object action condition. // Routing: GET /users/{userId} to retrieve user information
  "firstName": "string", // User's first name. Example: "Cam"
  "lastName": "string", // User's last name. Example: "Alot"
  "email": "string", // User's email address. Example: "camalot999@gmail.com" // Routing: POST /users/{userId}/update to update user's basic information
  "phone": "string", // User's phone number. Example: "+1234567890"
  "profilePictureUrl": "string", // URL to the user's profile picture. Example: "https://example.com/profile.jpg"
  "backgroundPictureUrl": "string", // URL to the user's background picture. Example: "https://example.com/background.jpg"
  "description": "string" // Short bio or description of the user. Example: "I'm a cool guy" 
  "location": {
    "latitude": "float", // Latitude part of the user's current location. Example: 40.0149856
    "longitude": "float", // Longitude part of the user's current location. Example: -105.2705456
    "description": "string" // Human-readable location description. Example: "Boulder, CO" // Routing: PATCH /users/{userId}/location to update user's current location
}

}
