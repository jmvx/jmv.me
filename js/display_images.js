$(document).ready(function() {
  
  var json_link = "https://vast-basin-9405.herokuapp.com/users/1.json"
  var result = $.getJSON( json_link, {
    format: "json"
  })
    .done(function(result) {
      for (i in result) {
          photo_title = result[i].title
          photo_location = result[i].image.image.resized.url
          thumb_location = result[i].image.image.small_thumb.url
          $("div#content").append(" <a href=' " + photo_location + " ' data-lightbox='gallery' data-title=' " + photo_title + " '><img src=' " + thumb_location + "' />")
      }
    })
});