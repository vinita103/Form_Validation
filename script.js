
// Create a function that will fire when the submit <button> is clicked

$(function() {
    $('#submit').on('click', function(event){
        alert ("Submitted");

//  create variables for each of the form inputs. use jQuery to accomplish this task

  let inputname = $("#name");
  let inputemail =$("#email");
  let inputphone =$("#phone");
  
  
  // create an array named required. store the variables you've name, email, and phone number

  let required = [inputname, inputemail, inputphone];

  // Utilize a for loop to iterate of the entire required array . Inside the for loop: use an if statement to check the value of each array item

  for (let i = 0; i <required.length; i++){

    // if the array item is equal to an empty string ("").

    if (required[i].val() == ""){

//  populate the message <p> with the following text: "Please Fill Out Required Fields"

    $("#message").html("Please Fill Out Required Fields")

// add the warning class to this message. Attach the warning class to the array item's <label>

    $("#message").addClass("warning")

//  You want the label to turn red, if the field is empty

      required[i].prev().addClass("warning")

    } else { 

// once the field has something other than a blank string. make sure the warning class is removed

      required[i].prev().removeClass("warning")

    }
  } 

// utilize another if statement.verify that no <label>'s have the warning class

  if ($("label").hasClass("warning")){

  } else {

// if true remove the form from the DOM

    $("#form").remove()

// manipulate the <h2> to say: "Thanks for your feedback!"

    $("h2").text("Thanks for your feedback!")

  }})
  
});
  
// close your function