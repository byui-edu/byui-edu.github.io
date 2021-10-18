// mainMenu
const mainMenu = document.querySelector('.mainMenu');
let menuOpen = false;
mainMenu.addEventListener('click', () => {
  if(!menuOpen) {
    mainMenu.classList.add('open');
    menuOpen = true;
  }
  else {
    mainMenu.classList.remove('open');
    menuOpen = false;
  }
});

function myFunction() {
  document.getElementById('dropDn').classList.toggle('mainNavShow');
}
window.onclick = function(event) {
  if (!event.target.matches('.menuBar')) {
    var dropdowns = document.getElementsByClassName('mainNav');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('mainNavShow')) {
        openDropdown.classList.remove('mainNavShow');
      }
    }
  }
}

/* ************************************************************pie chart*********************************************************************** */
// $(function () {
//   $('.chart').easyPieChart({
//     //rest of my statements goes here
//   });
// });

// testimonials

function testimonials() {


 
}

//comment section

function myComment() {

  //declarations
  let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
  let date = new Date();
  let monthName = month_names[date.getMonth()];

  // variable assignments for user input
  var name = document.getElementById('name').value;
  var comment = document.getElementById('comment').value;


  // display testimonial
  var Comment = "By "+name+" <br> "+comment+" <br> "+monthName+" "+date.getDate()+", "+date.getFullYear()+"";


  document.getElementById('commentOut').innerHTML = Comment;
  


}


// footer
  let week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];
let date = new Date();
let weekname = week_names[date.getDay()];
let monthname = month_names[date.getMonth()];

const dateoutput = document.querySelector('#currentdate');

dateoutput.textContent = "Updated: " + weekname + ", " + date.getDate() + " " + monthname + " " + date.getFullYear();