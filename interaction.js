// after click buying 
function buyFunction()
{
  var cus_name = document.getElementById('name').value //get name
  var menu_gen = document.getElementById('gender'); // get select menu
  var text_gen = menu_gen.options[menu_gen.selectedIndex].text; // get select menu index
  var menu_typ = document.getElementById('type');
  var text_typ = menu_typ.options[menu_typ.selectedIndex].text;

  alert("Hi, " + cus_name + "! Thank you for your interest in our clothing! Please call 0987-654-321 and someone will give you a quote!");

// check gender for alert
  if (menu_gen.options[menu_gen.selectedIndex].value == 'male'){
    alert("It is our factory's anniversary soon. If you call and place your order today, we will give you a handsome tie as a gift!");
  }
    else {
    alert("It is our factory's anniversary soon. If you call and place your order today, we will give you a beautiful scarf as a gift!")
  }

  document.getElementById("your_name").textContent = `Your Name:  ${cus_name}`;
  document.getElementById("clo_sort").textContent = `Catergory: ${text_gen}`;
  document.getElementById("clo_type").textContent = `Type:  ${text_typ}`;


}

function knowFunction()
{
  alert("Our factory is located in New Taipei City and has passed the international ISO9001 certification, so you can rest assured of the quality!");
}