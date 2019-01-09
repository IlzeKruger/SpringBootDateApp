# SpringBootDateApp
Small DatePicker app in Spring Boot

Note: 
My first Spring Boot App.

Desc
Spring Boot application with Thymeleaf template engine and Bootstrap front-end framework.
The application provides a UI form with two input fields as start date and end date, and a Confirm button to submit the form and display the number of days between the two date inputs.
If the end date is before the start date, the application display an error message 

Assumption
The external Error Message (when the end date is prior to start date) was placed in application.properties and used from there. 
So it is not defined within the HTML or within the JS and assume this was the requirement.

I have created a maven jar file called datevalidation-0.0.1-SNAPSHOT.jar. 
This can be run using the java -jar datevalidation-0.0.1-SNAPSHOT.jar locally and the app the run from URL: localhost:8080
