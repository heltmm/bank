
///BACK END
function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(type1, street1, city1, state1){
  this.type = type1;
  this.street = street1;
  this.city = city1;
  this.state = state1;
}
Contact.prototype.firstAndLast = function () {
  return this.firstName + " "+this.lastName;
}
Address.prototype.fullAddress = function () {
  return this.type + ", "+this.street+", " + this.city+ ", "+this.state;
}
function resetFields(){
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-type").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
}
/////FRONT END
$(document).ready(function() {
  $("#add-address").click(function () {
    $("#new-addresses").append('<div class="new-address added">' +
    '<div class="form-group">' +
      '<label for="new-type">Type</label>' +
      '<input type="text" class="form-control new-type">' +
    '</div>'+
      '<div class="form-group">' +
        '<label for="new-street">Street</label>' +
        '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">'+
        '<label for="new-city">City</label>'+
        '<input type="text" class="form-control new-city">' +
      '</div>'+
      '<div class="form-group">' +
        '<label for="new-state">State</label>' +
        '<input type="text" class="form-control new-state">'+
      '</div>'+
    '</div>')
  });
  $("#new-contact").submit(function(event) {
    event.preventDefault();
    $(".added").remove();

    var firstNameInputted = $("#new-first-name").val();
    var lastNameInputted = $("#new-last-name").val();

    var newContact = new Contact(firstNameInputted, lastNameInputted);

    $(".new-address").each(function (){
      var typeInputted = $(this).find(".new-type").val();
      var streetInputted = $(this).find(".new-street").val();
      var cityInputted = $(this).find(".new-city").val();
      var stateInputted = $(this).find(".new-state").val();
      var newAddress = new Address(typeInputted, streetInputted, cityInputted, stateInputted);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstAndLast() + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("#addresses").text("");
        newContact.addresses.forEach(function(address){
          $("#addresses").append("<li>" + address.fullAddress()+ "</li>" );
        });
    });
    resetFields();

  });

});
