var name = HTMLheaderName.replace("%data%", "Anand Ramadhin");
var role = HTMLheaderRole.replace("%data%", "WEB DEVELOPER");

var skills = ["HTML5 ", "CSS3 ", "JS "];

var bio = {
	"name" : HTMLheaderName.replace("%data%", "Anand Ramadhin"),
	"role" : HTMLheaderRole.replace("%data%", "WEB DEVELOPER"),
	"contact_info" : 
	{
		"mobile" : "(868) 460-6839",
		"email" : "anandramadhin1@gmail.com",
		
	},
	"pic_url" : "images/me.jpg",
	"welcome" : "Welcome to my resume",
	"skills" : skills
};

$("#header").prepend(role);
$("#header").prepend(name);

$("#main").append(bio.name);
$("#main").append(bio.role);
//$("#main").prepend(bio.contact_info);

