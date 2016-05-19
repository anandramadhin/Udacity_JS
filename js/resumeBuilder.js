//Biography JSON
var skills = ["HTML5 ", "CSS3 ", "JS ", "JAVA ", "C ", "ANDROID PROGRAMMING "];
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

//---------------------------------------------------------------------
//Educatinon JSON
var education = {
	"schools" : [
		{
			"name" : "Hillview College",
			"city" : "Tunapuna",
			"major" : "CAPE",
			"graduation_year" : "2010"
		},
		{
			"name" : "University of the West Indies",
			"city" : "St. Augustine",
			"major" : "Computer Science",
			"graduation_year" : "2014"
		}
		],
			"onlineCourses" : [
			{
			"title" :	"Javascript Syntax",
			"school" : "Udacity",
			"dates" : "2015"
			}
			]
		};

//---------------------------------------------------------------------
//Work JSON
var work = {
	"jobs" : [
		{
			"workTitle" : "Web Devloper/Systems Administrator",
			"employer" : "Advanced Intelligent Modeling Solutions",
			"years_worked" : "2015-2016",
			"city" : "Marabella"
		},
		{
			"workTitle" : "Youth Programme Coordinator",
			"employer" : "Office of Social and Economic Development",
			"years_worked" : "2014-2015",
			"city" : "North East of Trinidad"
		}
	]
};

//---------------------------------------------------------------------
//Projects JSON
var projects = {
	"games" : [
	{
		"name" : "Brick Breaker",
		"language_used" : "Java",
		"type" : "platform",
		"description" : "Move a paddle to hit a ball to collide with bricks so that they can be removed from play. Remove all bricks to win."
	},
	{
		"name" : "Santa's Rescue",
		"language_used" : "Java",
		"type" : "side scroller",
		"description" : "Move a character around and fire projectiles to destroy enemies. Destroy all enemies to win"
	}
	],

	"apps" : [
		{
			"name" : "Sunshine",
			"technologies" : "Android Studio",
			"description" : "Displays the weather forecast for your country for the next 7 days"
		}
	],

	"web" : [
		{
			"name" : "Javascript Resume",
			"technologies" : ["Javascript", "Sublime Text Editor", "HTML", "CSS"],
			"description" : "A creative resume designed to showcase some skills as a programmer"
		}
	]
};

var myName = HTMLheaderName.replace("%data%", "Anand Ramadhin");
$("#name").append(myName);

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

for(jobs in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append("This is an entry");
}