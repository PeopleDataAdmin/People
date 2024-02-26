
permission: 
  ID: "P123"
  permittedObject_id: "O123"
  canEdit: "true"
    "if": has {value} in field [field]
    "if": has [predicate] to [object]
  createdAt: "2018-01-01T00:00:00Z"
  createdBy: "U123"


//in user's data lake:

"User": {
  "id": "U123",
  "agentId": "A123",
  "firstName": "Cam",
    "permission": [pID]
  "lastName": "Alot", // String
  "name": "Cam Alot", // String
  "nickname": "CamAlot", // String
  "userName": "camalot", // String
  "alternateIdentities": [ // can login as a different user (character or organization) custom identities - special user-types
    {"id": "A123",
    "firstName": "Barry",
    "lastName": "Allen",
    "name": "Barry Allen",
    "moniker": "Scarlet Speedster",
    "userName": "CrimsonKing",
    "alternateIdentities": [Agent],
    "catchphrase": "run fast", // String
    "email": "flash52@gmail.com",
    }
    ],
  "email": "camalot999@gmail.com",
  "phone": "123-456-7890",
  "address": [location],
  "liveLocation": [location]
  "password": "password"
  "refferedBy": [User]
  "profilePicture": "https://www.google.com"
  "backgroundPicture": "https://www.google.com"
  "description": String //
  "birthday": "2018-01-01T00:00:00Z"
  "birthPlace":
    "location"
  "interests": [Interest] // "Interests that the user has"
  "gender": 
  "sexualOrientation":
  "relationshipStatus":
  "politicalIdentity":
  "religiousIdentity":
  "subCulturalIdentity":
  "education": [Education] // "Education that the user has"
  "employment": [Employment] // "Employment history of the user"
  "homeowner": // "true"
  "householdSize": // "5"
  "income": // "$100,000"
  "wealth": [cash, crypto, inGameToken, giftPoints, resource] // "Wealth that the user has"
  "health": [Health] // "Health of the user"
  citizenship: [Citizenship] // "Citizenship of the user"
  "traits": [Attribute] // "Attributes that the user has"
    physical traits: [height, weight, measurements, hair color, eye color, etc] // "Physical traits that the user has"
    personality traits: [personality, etc] // "Personality traits that the user has" 
    wealth: [cash, crypto, inGameToken, giftPoints, resource] // "Wealth that the user has"
  "organizations": [Organization] // "hackhouse" "Organizations that the user is a part of"  /user.camalot/org.hackhouse/roles - displays camalots' roles in hackhouse. camalot/hackhouse/ceo displays camalot's hackhouse ceo role object
  "events": [Event] // "Events that the user is a part of"
  "projects": [Project] // "Projects that the user is working on"
  "groups": [Group] // "Groups that the user is a part of"
  "roles": [Role] // "Roles that the user has"
  "tasks": [Task] // "Tasks that the user has"
  "skills": [Skill] // "Skills that the user has"
  "resources": [Resource] // "Resources that the user owns"
  services: [Service] // "Services that the user offers"
  products: [Product] // "Products that the user is selling"
  badges: [Badge] // "Badges that the user has"
  memberships: [Membership] // "Memberships that the user has"
    Individual: [User] // "Individual memberships that the user has"

  "offers": [Offer] // "Offers that the user has made"
  "requests": [Request]   // "Requests that the user has made"  
  "posts": [Post] // "Posts that the user has made"
  "comments": [Comment] // "Comments that the user has made"
  "interests": [Interest] // "Interests that the user has"
  "purchases": [Purchase] // "Purchases that the user has made"
  "relations: [User] // "relations that the user has"
    type: [stranger, heard_of, acquaintance, friend, related, intimate, business connection, physical, comitted_relationship, open_relationship] // "type of friend"
      user: [User] // "user that the user has relationship to"
      closeness: [admire, adore, like, dislike, trust, distrust, neutral] // "closeness of friend"
      view permissions: [Permission] // "Permissions that the user has"
    quality: [admire, adore, like, dislike, trust, distrust, neutral] // "quality of friendship"
  "platformData" // data and schema from connectd platforms
    "polly"
      "associatedPolIdentities": (progressive, libertarian, independant),
      "subculturalIdentity": (hipster, punk, goth, nerd)
      "votingHistory": 
        "questionID":
        "question": of these three, how likely are you to vote for each?
          "responses":
            "name": Kennedy
            "sliderResponse": 3.5
              "Permissions" (person type users named bob, who live in denver can view during the day)
                "action" (can view, can edit,
            "name": Biden
            "sliderResponse": -5
          "comments" //user's comments on this question
    "ONELocal"

    "location"
      "name": "Cam's House",
      "picture": "https://www.google.com",
      "city": "Boulder",
      "state": "Co",
      "country": "USA",
      "province": "null",
      "region": "West",
      "continent": "North America",
      "planet": "Earth",
      "lv1_ecoregion:": "Great Plains",
      "lv2_ecoregion": "South Central Semi-arid Praries",
      "lv3_ecoregion": "High Plains",
      "lv4_ecoregion":"Front Range Fans",
      "zip": "94105",
      "latitude": "37.783692",
      "longitude": "-122.409972",

organizations: [Organization] // "Organizations in the network"
  name: // "name of the organization"
  description: // "description of the organization"
  type: [business, non-profit, government, educational, religious, social, political, environmental, health, sports, arts, entertainment, science, technology, media, agriculture, food, hospitality, travel, transportation, real estate, construction, manufacturing, retail, wholesale, finance, insurance, professional, scientific, technical, management, administrative, waste, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative, waste, management, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative, waste, management, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative, waste, management, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative, waste, management, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative, waste, management, remediation, services, educational, health, care, social, assistance, arts, entertainment, recreation, accommodation, food, services, other, services, public, administration, utilities, trade, transportation, warehousing, information, finance, insurance, real, estate, rental, leasing, professional, scientific, technical, management, administrative
  members: [User] // "Users that are part of the organization"
  events: [Event] // "Events that the organization is hosting"
  projects: [Project] // "Projects that the organization is working on"
  groups: [Group] // "Groups that the organization has"
  roles: [Role] // "Roles that the organization has"
  tasks: [Task] // "Tasks that the organization has"
  resources: [Resource] // "Resources that the Organization owns" 
  products: [Product] // "Products that the Organization is selling"
  services: [Service] // "Services that the org is offering"
            
group: [Group]
  name: // "name of the group"
  description: // "description of the group"
  members: [User] // "Users that are part of the group"
  events: [Event] // "Events that the group is hosting"
  projects: [Project] // "Projects that the group is working on"
  roles: [Role] // "Roles that the group has"
  tasks: [Task] // "Tasks that the group has"
  resources: [Resource] // "Resources that the group owns"
  products: [Product] // "Products that the group is selling"
  services: [Service] // "Services that the group is offering"
  badges: [Badge] // "Badges that the group has"



roles: [Role] // "roles in the group"
  responsibilities: //responsibilities for the role
  tasks: [Task] // "Tasks for the role"
      name: // "name of the task"
      summary: // "summary of the task"
      description: // "full description of the task"
      status: // pending, in progress, done, stuck (what's in the way?)
      dueDate: // "due date of the task"
      priority: [high, mid, low] // "priority of the task"
      assignedTo: [User] // "user that the task is assigned to"
      assignedBy: [User] // "user that assigned the task"
      attachments: [String] // "attachments of the task (pics, docs)"
      followers: [User] // "users that are following the task"
      comments: [Comment] // "comments that are on the task"
      subtasks: [Task] // "subtasks that are part of the task"
