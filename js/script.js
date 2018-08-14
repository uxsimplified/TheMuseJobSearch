
$(document).ready(function () {

  //Global variables
  var categoryQuery, levelQuery, locationQuery, api, data;

  //On Search button click
  $("#search-btn").click(function () {

    $(".search-result").empty(); // clearing previous results
    categoryQuery = $("#search1-query").val();
    levelQuery = $("#search2-query").val();
    locationQuery = $("#search3-query").val();  
    api = "https://api-v2.themuse.com/jobs?location=Flexible%20%2F%20Remote&page=1";

    $.getJSON(api, function(data) {
      console.log(data);
      console.log (data.results[0].refs.landing_page);
      console.log (data.results[0].name);
      console.log(data.results[0].company.name);


      var queryLink = data.results[0].refs.landing_page;
      var queryName = data.results[0].name;
      var queryCompany = data.results[0].company.name;
 
    //Returns No result
     if (data.results[0].length === 0) {
        $(".search-result").append("<li class='no-result'><p>Oops, no results!</p></li>");
      }
      //Iritating through arrays
      for(var i = 0; i < data.results[0].length; i++) {
        $(".search-result").append("<li> <a href = " + queryLink[i] + " target='_blank'>" + queryName[i] + "</a> <p>" + queryCompany[i] + "</p> </li>");
      }

    })
      

    //Push heading up after clicking Search
    $(".title").animate({"margin-top":"20px","margin-bottom":"20px"});
    //On smaller devices
    var mq = window.matchMedia("(min-width: 575px)");
    if (mq) {
      $(".search-box").animate({"margin-top":"1em","margin-bottom":"1em"});
    }
  });

 //Using Enter key for searching
  $("#search-query").keypress(function (e){
      if (e.which === 13) {
          e.preventDefault();
          $("#search-btn").click();
      };
    })
});
