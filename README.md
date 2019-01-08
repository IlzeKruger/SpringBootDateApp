# SpringBootDateApp
Small DatePicker app in Spring Boot

Note
This was my first Spring Boot App ever and most of the time was taken to determine how Spring Boot works and how to create the project
etc. 

First Assumption
I made the assumption that the 2 Input Date fields can be initialised to today. This would be dependant on reguirements and I 
think a better approach would have been to not initialise and rather give an error (Changing the input box to red and supplying an
error below the input field.)
The only reason this was not done, was because I took a bit longer on the batch processing and trying to figure out how exactly Spring 
Batch works. 
I will have a second itteration on this project, fixing this issue.

Second Assumption
The external Error Message (when the end date is prior to start date) was placed in application.properties and used from there. 
So it is not defined within the HTML or within the JS and assume this was the requirement.

I have created a maven jar file called datevalidation-0.0.1-SNAPSHOT.jar. 
This can be run using the java -jar datevalidation-0.0.1-SNAPSHOT.jar
