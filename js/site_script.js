var photos = []; //Declaring an empty array to store image elements
      var fileNames = []; //Declaring an empty element to store image filename
      var imageList = []; //Declaring an empty array to store html list that contains image
      var image; //Declare empty variable to store the assembled image list codes
      var openList = "<li id='photo'>"; // Declare a variable to contain the open list tag
      var closeList = "</li>"; //Declare a variable to contain the close list tag

      // create a loop to creATE 6 images  starting with index 0
      for (var i = 0; i < 10; i++) {
        fileNames.push("pet-" + (i + 1)); //create image filename and store in the array
        photos.push("<img src='imagess/" + fileNames[i] + ".jpg'>"); //Assemblingthe filename into a large element
        // image = openList + photos[i] + closeList;
        // imageList.push(image);
        image =
          openList +
          photos[i] +
          "<div class='caption'>Caption for Image " +
          (i + 1) +
          "</div>" +
          closeList;
        imageList.push(image);
      }
      document.getElementById("album").innerHTML = imageList;
