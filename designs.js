
$(function() {
  //Set the grid and current color to #000
  var theGrid = $("#pixelCanvas");
  var currentColor = "#6495ed";

  // Prevent default submit behavior and call makeGrid function
  $("#sizePicker").submit(function(e) {
    e.preventDefault();
    makeGrid();
  });

  //Change the currentColor to the selected one
  $("#colorPicker").change(function() {
    currentColor = $(this).val();
  });

  /**If the user clicks or moves the mouse in the grid
  while holding the left mouse button down draw the pixels
  **/
  theGrid.on("mousemove", "td", function(e) {
    if (e.buttons == 1) {
      $(this).css("background-color", currentColor); //Draw the td that the user hovers
    }
  });

  theGrid.on("click", "td", function(e) {
    $(this).css("background-color", currentColor); //Draw the td that the user clicks
  });

  //Build the grid
  function makeGrid() {
    //Set the grid dimensions;
    const gridHeight = $("#inputHeight").val();
    const gridWidth = $("#inputWidth").val();
    theGrid.empty(); 
	//Empty the grid and start over Loop -> Create rows
    
	for ( x = 0; x <= gridHeight - 1; x++) {
      theGrid.append("<tr>"); //Start Row
      //Loop -> Create columns for each row
	  var y=0;
      while ( y <= gridWidth - 1 ) {
        $("tr:eq(" + x + ")").append("<td></td>");
		y++;
      }
      theGrid.append("</tr>"); //End Row
    }
  }
});

