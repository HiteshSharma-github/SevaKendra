# 🛞 SevaKendra 🛞
A web app based platform that focuses on connecting NGOs of different categories with people for donations, while also providing a comprehensive list of banned NGOs. 

## Tech Stack -

[![My Skills](https://skillicons.dev/icons?i=mongodb,express,react,nodejs,gcp,netlify,git,github)]()     

## Minor Softwares required for Dynamic Processing and Accessibility: Google Drive, Google Spreadsheet, PWA, Botsupp, Razorpay

## Targeted Users:                                                                                                              
➤Admin: -                                                 
o Manages list of Blacklist NGOs.                                        
o Manage User's interst.                                  
o Manages posts.                                            
o Manage Events.                                                                  

➤ Patron:                                                         
o Can donate money with Razorpay Interface.                                                            
o Patron can posts with an intention of creating awarness and can view events held by other NGOs.                                                    
o Manage personal profile.                                                  
o Manage its own view gallery.                                                                      


# Requirement Specification and Features:

## Functional Requirements:

> 1. User Registration and Authentication:
Users be able to create an account and log in to the website.
User authentication is done securely with appropriate password hashing and encryption.
The website supports government authentication for NGOs, allowing them to verify their identity.

> 2. NGO Profile Management:
NGOs being able to create and manage their profiles on the website.
Profile information may include the organization's name, mission, contact details, and other relevant information.
NGOs being able to update their profiles and add a logo or image.

> 3. Event Posting and Management:
NGOs being able to create and post events on the website.
Event information may include the event name, description, date, time, location, and any additional details.
NGOs have the ability to edit or delete their posted events.

> 4. Event Discovery and Search:
Users being able to search for events based on different criteria such as location, date, and NGO name.
The website provides a user-friendly interface to browse and discover events easily.

> 5.Blacklist Management:
Data Fetching, Data cleaning, Data manipulation had been done.
The admin have the ability to manage a dynamic blacklist of NGOs.
The website integrate with Google Cloud services to store and retrieve the blacklist information securely.
The admin being able to add or remove NGOs from the blacklist.

> 6. Progressive Web App (PWA) Functionality:
The website being built as a Progressive Web App, allowing users to install it as a shortcut on their devices.
Users  being able to access the website through the shortcut, enhancing accessibility and convenience.

> 7.Social Interaction Features:
Users are able to like or upvote posts and events to show their support.
Users are able to post comments or messages related to NGOs and their activities.

> 8.Job Posting for NGOs:
NGOs have the ability to post job openings or hiring details on the website.
Job postings may include job descriptions, requirements, application instructions, and contact information.

> 9. Alerts:
The website support alerts to inform users about responses generated by website in a user friendly manner.
Users have the option to subscribe to specific NGOs or event categories to receive relevant notifications.

> 10. Reporting and Feedback:
Chatbot is provided for interactive engagement of user to provide feedback or grievnance about NGOs.
Users are able to report inappropriate content or activities.

## Non-Functional Requirements:
> Security:
  Only authorized user can access the system with username and
  password. Private Routing is beig done via React Hooks.

> Performance :
 Files are genrated and fetch in a dynamic environment using google cloud.

> User Friendly:
 The system is very interactive. Chatbot is provide for any grievnance report.

> Constructive Environment:
  User Cannot post unethical words as filter is applied over all posts.

## 3. Testing

BOTTOM UP TESTING -

> FIRST LEVEL:
Checking filed of forms and validation of data. Some fields take
automatic data from existing database.

> SECOND LEVEL:
Checking of forms of system (working properly or not).

> THIRD LEVEL:
Tested the integration of the different forms. If retrieves data in proper
manner. Correct format and stores it. Checking system met its requirements
specification or not.

> FOURTH LEVEL:
Checked all the modules link and whether the data value is passed or
not with the other module.



## Screenshots:
> HOMEPAGE : A toast popup on successful sign or unsuccessful sign for providing feedback to user.Validators are applied in all fields.
![1](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/f09ed3ff-bd43-4504-ae1f-2de9958b40bd)

<br></br>                               
 > Our Vision Page: User can download the spreadsheet authenticated by Government
![2](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/ce20c9b6-de3a-4e4c-af1a-4b6ee104cbcf)

![3](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/60c7a3a1-7812-4e77-bae7-adc275443a44)

<br></br>
                                                                                                                                                                                                                                            
 > Feed Section: User can comment and like a post
 <br></br>                               

![4](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/0cb30d7c-ebf2-46ed-a872-213decf8f562)

<br></br>                               
> Search Section: Fuzzy search by email Id
![5](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/4bc4c1f9-aafb-4864-8dfd-53b97e4ec863)

<br></br>                               
> Profile Section:
![6](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/6a212c13-f8cf-45e4-b0d4-598369bda779)

<br></br>                               
> Walling Section: User can post over their wall, unethical fitler is applied.
![7](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/0eea7cb6-ac8d-4494-8daf-a88c29d68591)

<br></br>                               
> Payment: RazorPay Integration, User gets alert on successful payment
![8](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/0c5c442c-5d79-436d-a682-28bba3271680)

<br></br>

![9](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/3e4ab513-4a80-41f7-847d-a896dcba8803)

<br></br>                               

## MongoDb - Schema Design:
![10](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/e1388b10-bb3d-439a-8880-371de6668dee)

<br></br>
![11](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/6baacb16-daec-4a2a-8f44-1c3d6ea586fa)


<br></br>


## Use Case Diagrams
![12](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/504af38d-68f3-4a8f-b8c3-38f1107fd2b1)

<br></br>

## Sequence Diagram
![13](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/1e1f7f6f-fbc2-4196-9612-d3e1531e6fa6)

<br></br>

![14](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/1b3349fa-24ac-4f4e-8a6d-8eb4624913ba)

<br></br>

##  Entity Relationship Diagram
![15](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/b6b6a440-bd56-4572-b729-057f3a7e9ffc)

<br></br>


## Chatbot Preview: Botsupp API
![16](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/6d08cfc8-a6b7-4c42-b2bc-faf3bbf6e3d4)

<br></br>
 > Chatbot block diagram 
![17](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/3df2f5e4-045c-4c49-9a17-18d825fe1aac)

<br></br>

## Google Drive File with exxtension as .xlsx: Files can be modifed dynamically by authenticated user

![18](https://github.com/HiteshSharma-github/SevaKendra/assets/85629794/7776c049-b7ba-48fb-b317-ec7bcc802d4e)

<br></br>
## Live link:
 > https://sevakendra.netlify.app/
<br></br>                                                                                                                                                                                                       
Hosting Sites: Front End- Netlify , Backend : Cyclic.sh                                                                                                                                                          
Sign In as-                Email Id:        test@gmail.com                                                                                                                                                                     
                           Password:         test@123                                                                                                              


<br></br>
## To host locally :
#### What you need to run this code                                                                                                              
1. Node (13.12.0)                                                                  
2. NPM (6.14.4) or Yarn (1.22.4)                                                                                                                         
3. MongoDB (4.2.0)                                                                                                                                               

   


####  How to run this code                                                                                                                                                                                                                                                             
1. Make sure MongoDB is running on your system                                                                                                                                     
2. Clone this repository                                                                                                                                                          
3. Open command line in the cloned folder,                                                                                                                                                                                
   - To install dependencies, run ```  npm install  ``` or ``` yarn ```                                                                                                                                    
   - To run the application for development, run ```  npm run development  ``` or ``` yarn development ```                                                                  
4. Open [localhost:3000](http://localhost:3000/) in the browser                                                                             
----                                                                                                    

<p align="center">
   Made with ❤️ by Hitesh Sharma.
  <br/>
<p align="center">
  :star: Star me on this repo — it means a lot to me!
</p>
                 

