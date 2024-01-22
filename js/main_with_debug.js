// Initialize cities function called when script loads
function initialize(){
    cities();
};


// Function to create a table with cities and population
function cities(){
	
	// Array for city and population data
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

    // Create the table
	var table = document.createElement("table");  
    
    // Create a header
	var headerRow = document.createElement("tr");  
    
    // Append header to table
	table.appendChild(headerRow);                   

	// Create the column headings
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>");

	// Loops through cityPop array to create the table
	cityPop.forEach(function(cityObject){

		// Create strings of data for each row and create the table
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		table.insertAdjacentHTML("beforeend", rowHtml);  
	});

    // Append the table to the div
	document.querySelector("#mydiv").appendChild(table);

    // Pass the cityPop array to the addColumns function
	addColumns(cityPop); 
    
    // Call addEvents which adds events to the table
	addEvents();            

};


// Function to associate a citySize var with a city in the array
function addColumns(cityPop){
	
	var row = document.querySelectorAll("tr");  
    
	// Queries rows of data in the array and passes the row to an anonymous function within the loop
    document.querySelectorAll("tr").forEach(function(row, i){
		
    	if (i == 0){  
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>'); 

		} else {

    		var citySize;   

    		if (cityPop[i-1].population < 100000){    
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		}

			// Writes citySize var into array
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	}
    });
};


// Add events on mouseover
function addEvents(){

	// Query the table, add the event with addEventListener, create and return a random RGB color
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb("; 

        // Create 3 numbers, one for each RGB
		for (var i=0; i<3; i++){    

			// Create a variable for a random number
			var random = Math.round(Math.random() * 255);

            // Append the string form of the number to color
			color += random;    

			// Add commas to the string var color to format RGB for CSS
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};

        // Apply color to table with CSS
		document.querySelector("table").style.color = color;    
	});

    
    // Create pop up box when text is clicked
	function clickme(){    

		alert('Hey, you clicked me!');
	};

    // Apply the clickme alert pop up box to the table
	document.querySelector("table").addEventListener("click", clickme)    
};


// Call initialize function when window has loaded
window.onload = initialize();