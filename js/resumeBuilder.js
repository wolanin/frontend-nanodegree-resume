var bio = {
	"name" : "John Wolanin",
	"role" : "UI/UX Designer",
	"welcomeMessage" : "Yo",
	"contacts" : {
		"mobile" : "330-327-6822",
		"email" : "john@waxmusic.co",
		"github" : "drwolanin",
		"twitter" : "@drwolanin",
		"location" : "Cincinnati"
	},
	"skills" : [
		"Being Awesome", "Branding", "Sleeping", "Eating Hot Sauce"
	],
	"bioPic" : "images/fry.jpg"
}

var education = {
	"schools" : [
	{
		"name" : "California School of Professional Psychology",
		"location" : "Los Angeles, CA",
		"degree" : "Psy. D.",
		"majors" : ["Clinical Psychology"],
		"dates" : 2008,
		"url" : "http://www.alliant.edu"
	},
	{
		"name" : "The Ohio State University",
		"location" : "Columbus, OH",
		"degree" : "B.A. with Honors and Distinction",
		"majors" : ["Psychology"],
		"dates" : 2004,
		"url" : "http://www.osu.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "JavaScript Syntax",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "http://www.udacity.com/course/ud804"
	}]
}

var work = {
	"jobs" : [
	{
		"employer" : "Wax Music",
		"title" : "Co-Founder and CPO",
		"location" : "Los Angeles, CA",
		"dates" : "2013-2015",
		"description" : "Where passionate fans power music and concert discovery"
	},
	{
		"employer" : "Beastly Creative",
		"title" : "Co-Founder",
		"location" : "Los Angeles, CA",
		"dates" : "2014-2015",
		"description" : "We help entrepreneurs build businesses that scale"
	}
	]
}

var projects = {
	"projects" : [
	{
		"title" : "Popsweeps",
		"dates" : "October 2012 - January 2013",
		"description" : "A modern social sweepstakes",
		"images" : ["images/197x148.gif", "images/197x148.gif"]
	},
	{
		"title" : "Spoiler Shield",
		"dates" : "October 2013 - December 2013",
		"description" : "Use social media spoiler free. Available in the App Store.",
		"images" : ["images/197x148.gif", "images/197x148.gif"]
	}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedNameRole = formattedName + formattedRole;
	$("#header").prepend(formattedNameRole);

	var formattedPicture = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedPicture);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(formattedSkills);
	}

}
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
initializeMap();

var displayWork = function(){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	  }
	}
}

projects.display();

education.display = function() {
	for (smart in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[smart].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[smart].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[smart].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[smart].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[smart].majors);
		$(".education-entry:last").append(formattedMajor);
		}
	
	$("#education").append(HTMLonlineClasses);
		
	for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedURL);
		}	
	  }
	
education.display();



