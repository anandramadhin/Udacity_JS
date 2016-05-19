var name = HTMLheaderName.replace("%data%", "Anand Ramadhin");
var role = HTMLheaderRole.replace("%data%", "WEB DEVELOPER");

$("#header").prepend(role);
$("#header").prepend(name);

$("#main").append(bio.name);
$("#main").append(bio.role);

$("#main").append(work.position);
$("#main").append(education.last_school);