function Account(name, deposit){
  this.name = name;
  this.ballance = deposit;
}

Account.prototype.deposit = function(value){
  this.ballance += value;
}
Account.prototype.withdraw = function(value){
  this.ballance -= value;
}



$(document).ready(function() {
  $("#accountRegisterForm").submit(function(event) {
  event.preventDefault();


  var myAccount = $("#nameInput").val();
  // console.log(myAccount);
  var myInitialDeposit = parseInt($("#initialInput").val());

  // console.log(myInitialDeposit);


  var newAccount = new Account(myAccount, myInitialDeposit);
  console.log(newAccount.ballance);
  });

  $("#changeMoney").click(function(event) {
  event.preventDefault();
  var myDeposit = parseInt($("#depositInput").val());
  console.log(myDeposit);
  var myWithdraw = parseInt($("#withdrawInput").val());
  console.log(myWithdraw);
  var totalDeposit = myDeposit - myWithdraw;
  var depositNow = myInitialDeposit + totalDeposit;
  $("#currentBallance").text(depositNow);
  });
});


// $("#new-contact").submit(function(event) {
// //     event.preventDefault();
// //   $("#add-address").click(function () {
// ///back end
// // oldMovies = [Jurassic_Park, Goonies];
// newMovies = ["Superman", "Batman"]
// rMovies = ["Jurasic_Park"]
// function toType(title){
//   for (i=0; i<newMovies.length; i++){
//     if (title === newMovies[i]){
//
//       alert(title)
//       return "newMovie";
//     }
//   } return "oldMovie";
// }
// function toRating(title){
//   for (i=0; i<newMovies.length; i++){
//     if (title === rMovies[i]){
//       return "RatedR";
//     }
//   }return "PG-13";
// }
//
//
// function Ticket(title, time, age){
//   this.title = title;
//   this.time = time;
//   this.age = age;
//   this.type = [];
//   this.cost = "";
// }
//
//
// Ticket.prototype.price = function(){
//   var price = 0;
//   console.log(price);
//   if (this.type[0] === "newMovie") {
//     price +=7  ;
//     console.log(price);
//   } else if (this.type[0] === "oldMovie") {
//     price+=6;
//     console.log(price);
//   }if (this.time >= "15") {
//     price+=1;
//   } else if (this.time < "15") {
//     price+=0;
//     console.log(price);
//   }if (this.age === "child") {
//     price -= 1;
//   } else if (this.age === "adult") {
//     price +=2;
//   } else if (this.age === "senior") {
//     price +=0;
//   }
//   console.log(price);
//     this.cost = price
//   }
//
// //
// //
// //
// //
// //   }else if ( ticket.time === "isMatinee") {
// //     price += 0;
// //   } else if (ticket.time === "isNotMatinee") {
// //     price +=1;
// //   } else if (ticket.age === "child") {
// //     price -=1 ;
// //   } else if ticket.age === "adult") {
// //     price +=2 ;
// //   } else if ticket.age === "senior") {
// //     price +=0 ;
// //   } return price;
// // }
//
// // front END
// $(document).ready(function() {
//   $(".basicForm").submit(function(event) {
//     event.preventDefault();
//     var movieInput = $("#movie").val();
//     var timeInput = $("#timeOfDay").val();
//     var ageInput = $("#age").val();
//
//
//     var newTicket = new Ticket(movieInput, timeInput, ageInput);
//     console.log(newTicket)
//     var myType = toType(movieInput);
//     var myRating = toRating(movieInput);
//
//     newTicket.type.push(myType);
//     newTicket.type.push(myRating);
//
//     console.log(newTicket);
//
//
//     // newTicket.price.push();
//     console.log(newTicket);
//   console.log(newTicket.type[0]);
//
//   var price = newTicket.price();
// console.log(newTicket);
//   });
// });
//
//
//
// //
// // ///BACK END
// // function Contact(first, last){
// //   this.firstName = first;
// //   this.lastName = last;
// //   this.addresses = [];
// // }
// // function Address(type1, street1, city1, state1){
// //   this.type = type1;
// //   this.street = street1;
// //   this.city = city1;
// //   this.state = state1;
// // }
// // Contact.prototype.firstAndLast = function () {
// //   return this.firstName + " "+this.lastName;
// // }
// // Address.prototype.fullAddress = function () {
// //   return this.type + ", "+this.street+", " + this.city+ ", "+this.state;
// // }
// // function resetFields(){
// //   $("input#new-first-name").val("");
// //   $("input#new-last-name").val("");
// //   $("input.new-type").val("");
// //   $("input.new-street").val("");
// //   $("input.new-city").val("");
// //   $("input.new-state").val("");
// // }
// // /////FRONT END
// // $(document).ready(function() {
// //   $("#add-address").click(function () {
// //     $("#new-addresses").append('<div class="new-address added">' +
// //     '<div class="form-group">' +
// //       '<label for="new-type">Type</label>' +
// //       '<input type="text" class="form-control new-type">' +
// //     '</div>'+
// //       '<div class="form-group">' +
// //         '<label for="new-street">Street</label>' +
// //         '<input type="text" class="form-control new-street">' +
// //       '</div>' +
// //       '<div class="form-group">'+
// //         '<label for="new-city">City</label>'+
// //         '<input type="text" class="form-control new-city">' +
// //       '</div>'+
// //       '<div class="form-group">' +
// //         '<label for="new-state">State</label>' +
// //         '<input type="text" class="form-control new-state">'+
// //       '</div>'+
// //     '</div>')
// //   });
// //   $("#new-contact").submit(function(event) {
// //     event.preventDefault();
// //     $(".added").remove();
// //
// //     var firstNameInputted = $("#new-first-name").val();
// //     var lastNameInputted = $("#new-last-name").val();
// //
// //     var newContact = new Contact(firstNameInputted, lastNameInputted);
// //
// //     $(".new-address").each(function (){
// //       var typeInputted = $(this).find(".new-type").val();
// //       var streetInputted = $(this).find(".new-street").val();
// //       var cityInputted = $(this).find(".new-city").val();
// //       var stateInputted = $(this).find(".new-state").val();
// //       var newAddress = new Address(typeInputted, streetInputted, cityInputted, stateInputted);
// //       newContact.addresses.push(newAddress);
// //     });
// //
// //     $("ul#contacts").append("<li><span class='contact'>" + newContact.firstAndLast() + "</span></li>");
// //
// //
// //     $(".contact").last().click(function() {
// //       $("#show-contact").show();
// //       $("#show-contact h2").text(newContact.firstName);
// //       $(".first-name").text(newContact.firstName);
// //       $(".last-name").text(newContact.lastName);
// //       $("#addresses").text("");
// //         newContact.addresses.forEach(function(address){
// //           $("#addresses").append("<li>" + address.fullAddress()+ "</li>" );
// //         });
// //     });
// //     resetFields();
// //
// //   });
// //
// // });
