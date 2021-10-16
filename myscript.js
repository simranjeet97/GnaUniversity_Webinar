$(document).ready(function() {
      $("#createTicket").click(function() {
        $("#ticketform").toggle();
      });
    });


function changeddl($this){
      $("#divprice").text($this.value>0?("Price: " + $this.value + " $"):"");
    };

function calculatePrice() {
    dest = document.getElementById("destination").value
    tax = 800 * .13
    total = dest * 800 + tax
    
    document.getElementById("fullprice").innerHTML = "Total Price is :" + total;
  }