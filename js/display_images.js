$(document).ready(function() {
  // var json_link = "https://vast-basin-9405.herokuapp.com/users/1.json"
  var json_link = "http://localhost:3000/users/1.json"
  var result = $.getJSON( json_link, {
    format: "json"
  })
    .done(function(result) {
      for (i in result) {
        album_title = result[i].album.title;
        // Do not display "hidden" categories
        if (album_title != "Uncategorized" && album_title != "uncategorized" && album_title != "null") {
          photo_title = result[i].title;
          photo_location = "http://localhost:3000" + result[i].image.image.resized.url;
          thumb_location = "http://localhost:3000" + result[i].image.image.small_thumb.url;
          var album_title_formatted = album_title.toLowerCase().split(' ').join('_');
          if (document.getElementById(album_title_formatted) == undefined) {
            var new_album = $("<div>", {id: album_title_formatted, class: "album"});
            $("div#content").append("<h1 class='album'>"+album_title+"</h1>").append(new_album);
          }
          var album_div_name = "div#" + album_title_formatted;
          $(album_div_name).append(" <a href=' " + photo_location + " ' data-lightbox='gallery' data-title=' " + photo_title + " '><img src=' " + thumb_location + "' />");
        }
      }
    })
});