var coll = document.getElementsByClassName("collapsible");
		
for (var i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

function MathIIMenu() {
	document.write("<div class=\"navbar\">");
	document.write("<a href=\"..\/index.html\">Home<\/a>");

	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Mathematics II &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"Pre Integration.html\">Pre Integration<\/a>");
	document.write("<a href=\"FTC.html\">Fundamental Theorems of Calculus (FTC)<\/a>");
	document.write("<a href=\"Techniques.html\">Integration Techniques<\/a>");
	document.write("<a href=\"Applications.html\">Applications of Integration<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Mathematics III &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"..\/Mathematics III\/Introduction.html\">Introduction & Definitions<\/a>");
	document.write("<a href=\"..\/Mathematics III\/Forms.html\">Forms of Differential Equations<<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Electricity I &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"..\/Electricity I\/Basic Circuit Analysis.html\">Basic Circuit Analysis<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<\/div>");
}

function MathIIIMenu() {
	document.write("<nav class=\"navbar\">");
	document.write("<a href=\"..\/index.html\">Home<\/a>");

	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Mathematics II &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"..\/Mathematics II\/Pre Integration.html\">Pre Integration<\/a>");
	document.write("<a href=\"..\/Mathematics II\/FTC.html\">Fundamental Theorems of Calculus (FTC)<\/a>");
	document.write("<a href=\"..\/Mathematics II\/Techniques.html\">Integration Techniques<\/a>");
	document.write("<a href=\"..\/Mathematics II\/Applications.html\">Applications of Integration<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Mathematics III &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"Introduction.html\">Introduction & Definitions<\/a>");
	document.write("<a href=\"Forms.html\">Forms of Differential Equations<<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<div class=\"dropdown\">");
	document.write("<button class=\"dropbtn\">Electricity I &#9662;<\/button>");
	document.write("<div class=\"dropdown-content\">");
	document.write("<a href=\"..\/Electricity I\/Basic Circuit Analysis.html\">Basic Circuit Analysis<\/a>");
	document.write("<\/div>");

	document.write("<\/div> ");
	document.write("<\/nav>");
}