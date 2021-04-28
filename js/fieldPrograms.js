
function openProgram(evt, programName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("card");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(programName).style.display = "block";
    evt.currentTarget.className += " active";

}

  // Get the element with id="defaultOpen" and click on it

     
function openProgramSub(evt, programName) {
  var i, tabcontentsub, tablinks;
  tabcontentsub = document.getElementsByClassName("tabcontentsub");
  for (i = 0; i < tabcontentsub.length; i++) {
    tabcontentsub[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("card");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(programName).style.display = "block";
    evt.currentTarget.className += " active";
}

var defaultSubmenu = document.getElementById("openDefaultSubmenu");
if(defaultSubmenu !== null){
  defaultSubmenu.click();
}

