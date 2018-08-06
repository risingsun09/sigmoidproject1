fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   document.getElementById('doc').innerHTML=myJson.data[0].title 
   document.getElementById('info1').innerHTML=myJson.data[0].advertisementPrice.sellPrice
   document.getElementById('info2').innerHTML=myJson.data[0].realestateSummary.numberOfRooms+" Zimmer"
   document.getElementById('info3').innerHTML=myJson.data[0].realestateSummary.space+" m2"
   document.getElementById('pic').src = myJson.data[0].advertisementAssets[0].advertisementThumbnails.thumb_xs.url
   //alert(myJson.data[0]._id.$id);
   //alert("hhh");
   //alert("hello again");
  })

