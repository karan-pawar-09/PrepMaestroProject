//code for selecting options
for (var i = 0; i < document.querySelectorAll(".option").length; i++) {
  $(".option")[i].addEventListener("click", function () {
    if ($(this).hasClass("selectedOption")) {
      $(".option").removeClass("selectedOption");
    } else {
      $(".option").removeClass("selectedOption");
      $(this).addClass("selectedOption");
    }
  });
}

//code for showing warnig on refresh
window.onbeforeunload = function() {
  return "Dude, are you sure you want to leave? Think of the kittens!";
}

//Questions and class array
var questions = [  
  "ctetur adipisicing elit. Nisi adipisci reiciendis provident ill ctetur adipisicing elit. Nisi adipisci reiciendis provident illLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci reiciendis provident illo rerum libero, aliquam facere quasi Lorem i",
  "mmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently w",
  "able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like",
  "Lorem ipsum doloLorem ipsum dolor sit amet consectetur adipisicing elit. Nisi adipisci reiciendis provident illo rerum libero, aliquam facere quasi Lorem ir sit amet consectetur adipisicing elit. Nisi adipisci reiciendis provident illo rerum libero, aliquam facere quasi Lorem i",
  "<p class='questionDis'><a data-bs-toggle='collapse' href='#collapse' role='button' aria-expanded='false' aria-controls='collapseExample'>Paragraph</a>, amet consectetur adipisicing</p>"
];
var nm = [
  "one",
  "two",
  "three",
  "four",
  "five"
]

//Next Previus and Submit button
var thisQuestiondata
var no = 0;
var size=questions.length;
console.log(no);
$(".next").click(function () { 
  $('.collapse').collapse('hide');
  if(no<size-1) {
    no++;
  }  
  $(".questionDis").html(questions[no]);
  console.log(no);
  $(".option").removeClass("selectedOption");
  $(".check").removeClass("checkbox");
  $("h5").html("Quension: "+(no+1));
});
$(".previus").click(function(){
  $('.collapse').collapse('hide');
  if(no>0) {
    no--;
  }     
  $(".questionDis").html(questions[no]);
  console.log(no);

  $(".option").removeClass("selectedOption");
  $(".check").removeClass("checkbox");
  $("h5").html("Quension: "+(no+1));
});
$(".submit").click(function () {
  console.log(no);
  var answered=false;
  var review=false;

  $(".option").each(function() {
    if($(this).hasClass('selectedOption')) {
      answered=true;
    }
  });
  if($(".check").hasClass("checkbox")) {
    review=true;
  }
  console.log(answered);
  console.log(review);
  if(answered&&review) {
    $("."+nm[no]).removeClass("notSolvedReview");
    $("."+nm[no]).removeClass("solved");
    $("."+nm[no]).removeClass("notSolved");
    $("."+nm[no]).addClass("solvedReview");
  }
  else if(!answered&&review) {
    $("."+nm[no]).removeClass("solved");
    $("."+nm[no]).removeClass("notSolved");
    $("."+nm[no]).removeClass("solvedReview");
    $("."+nm[no]).addClass("notSolvedReview");
  }
  else if(answered&&!review) {
    $("."+nm[no]).removeClass("notSolved");
    $("."+nm[no]).removeClass("solvedReview");
    $("."+nm[no]).removeClass("notSolvedReview");
    $("."+nm[no]).addClass("solved");
  }
  else if(!answered&&!review) {
    $("."+nm[no]).removeClass("solvedReview");
    $("."+nm[no]).removeClass("notSolvedReview");
    $("."+nm[no]).removeClass("solved");
    $("."+nm[no]).addClass("notSolved");
  }
});


//Mark For review button
$(".check").click(function() {
  $(".check").toggleClass("checkbox");
});


//mobile view of questions data
function myFunction(x) {
  if (x.matches) {
    $(".nos").hide();
    $(".mobilenos").show();
    $(".whitespace").hide();
  } else {
    $(".nos").show();
    $(".mobilenos").hide();
    $(".whitespace").show();
  }
}
var x = window.matchMedia("(max-width: 700px)");
myFunction(x); 
x.addListener(myFunction); 



//Clock
var d = new Date();
var n = d.getTime();
var starting_time=Math.floor(n/1000);
var total_seconds=7200;
sessionStorage.setItem('key', starting_time);
var time =setInterval(function(){  
let data=sessionStorage.getItem('key');
var d = new Date();
var n = d.getTime();
var current_time=Math.floor(n/1000);    
var seconds=current_time-starting_time;
var hr=parseInt(Math.floor((total_seconds-seconds)/3600));
var mini=Math.floor((120-(seconds/60))+6000)%60;
var sec=(total_seconds-seconds+600000)%60;
if(hr<0) {
    sessionStorage.clear();
    clearInterval(time); 
}
$(".livetime").html(hr+":"+mini+":"+sec);
}, 1000);

