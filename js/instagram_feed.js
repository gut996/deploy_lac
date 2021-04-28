$(function () {

    $token = 'EAAD3tnavw0wBAMeKAoSiWwLZAUvZACpalH2epKj949WwnNB0kjsZC3v49nlz1v1mwZAkoeQNEWB1l2iajRkzBZAKMZCi0HGMj0cDKpBHpsLO1U4cTYpRUIuaHFy74ag2n42mlBsnNBS7tFsdGXQgNc1x21pLXbZBiZCyiXkeZCrm9EymGiy8yy5NZC';
    $userId = '17841405957250416';
    $postNum = '4';

    $.ajax({
        type: 'GET',
        url: 'https://graph.facebook.com/v3.0/' + $userId 
            + '?fields=name%2C'
            + 'media.limit('+ $postNum +')%7B'
            + 'caption%2C'
            + 'like_count%2C'
            + 'media_url%2C'
            + 'permalink%2C'
            + 'timestamp%2C' 
            + 'thumbnail_url%2C'
            + 'username%7D'            
            + '&access_token='+ $token,
        dataType: 'json',
        success: function (json) {
            console.log(json);
            var html = '';
            var insta = json.media.data;
            var p = $('<p></p>');
           
            for (var i = 0; i < insta.length; i++) {
                var caption = p.html(insta[i].caption)[0].textContent;                
          
                    if(i == 0 || i == 2){
                        html += '<div class="instagram-block">';    
                    }

                    html += '<a href="' + insta[i].permalink + '" target="_blank">'
                            + '<div class="instagram-item">';
                                
                                    if(insta[i].media_url.indexOf('video') > 0){//video                                        
                                        html += '<div class="container-img">'
                                                    + '<img class="post-img" src="' + insta[i].thumbnail_url + '">'
                                                +'</div>';
                                    }else{//picture
                                        html += '<div class="container-img">'
                                                    + '<img class="post-img" src="' + insta[i].media_url + '">'
                                                +'</div>';
                                    }

                    html +=     '<div class="instagram-div-caption">'
                                    + '<p class="instagram-caption">' + caption.substring(0,200) + '</p>'
                              + '</div>'
                                // + '<button type ="button" class="btn-flat-border">READ MORE</button>'
                            + '</div>'
                         + '</a>';    

                    if(i == 1 || i == 3){
                        html += '</div>';    
                    }
            }
            $(".insta-container").append(html);
        },
        error: function (error) {
            console.log(error);
        }
    });
});