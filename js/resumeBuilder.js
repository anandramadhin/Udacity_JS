var name = HTMLheaderName.replace("%data%", "Anand Ramadhin");
var role = HTMLheaderRole.replace("%data%", "WEB DEVELOPER");

var skills = ["HTML5 ", "CSS3 ", "JS "];

var bio = {
	"name" : "Anand Ramadhin ",
	"role" : "WEB DEVELOPER ",
	"contact_info" : 
	{
		"mobile" : "(868) 460-6839 ",
		"email" : "anandramadhin1@gmail.com ",
		"github" : "https://github.com/anandramadhin ",
		"location" : "Trinidad and Tobago "
	},
	"pic_url" : "images/me.jpg",
	"welcome" : "Welcome to my resume ",
	"skills" : skills
};

var work = {};
work.position = "Web Develoer/Sys Admin ";
work.employer = "Ganesh Ramsahai ";
work.years_worked = "1.5 years ";
work.city = "Marabella ";


var education = {};
education["last_school"] = "University of the West Indies ";
education["years_attended"] = "2010 - 2014 ";
education["school_location"] = "St. Augustine ";

$("#header").prepend(role);
$("#header").prepend(name);

$("#main").append(bio.name);
$("#main").append(bio.role);

$("#main").append(work.position);
$("#main").append(education.last_school);

