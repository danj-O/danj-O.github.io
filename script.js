// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 375 || document.documentElement.scrollTop > 375) {
    document.getElementById("push-a").style.width = "3em";
    // document.getElementsByClassName("push-b").style.font-size = "2em";
  } else {
    document.getElementById("push-a").style.width = "7em";
    // document.getElementsByClassName("push-b").style.font-size = "1em";
  }
}