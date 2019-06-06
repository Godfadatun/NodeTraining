document.addEventListener('DOMContentLoaded',function(){
    
    document.getElementById('getMessage').onclick=function(){
        // document.getElementsByClassName('message')[0].textContent="Here is the message";
        req=new XMLHttpRequest();
        req.open("GET",'/json/cats.json',true);
        req.send();
        req.onload=function(){
            json=JSON.parse(req.responseText);
            // document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);

            var html = "";
        
            json = json.filter(function(val) {
            return (val.id !== 1);
            });
            
            json.forEach(function(val) {
                html += `<div class = "cat">`
                html += `<img src ="${val.imageLink}" alt="${val.altText}">`
                html += `</div>`
            });
            document.getElementsByClassName('message')[0].innerHTML=html;
        };
    };    
    
    
  });

  //GeoLocation for currentPosition for browser
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      document.getElementById('data').innerHTML=`latitude ${position.coords.latitude}<br>longitude:${position.coords.longitude}`;
    })
  }