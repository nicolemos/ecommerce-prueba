 //codigo de pruebaaaaaaaaa
 
 //para un solo video
 // Crea un elemento iframe para mostrar el video
 var iframe = document.createElement("iframe");
 iframe.src = "https://www.youtube.com/embed/C_eFawNnmC4";
 iframe.width = "560";
 iframe.height = "315";
 iframe.frameBorder = "0";
 iframe.allowFullscreen = true;

 // Agrega el elemento iframe al contenedor de video
 document.getElementById("videoContainer").appendChild(iframe);

 // Obtiene información del video usando la API de YouTube
 gapi.client.init({
   "apiKey": "AIzaSyDjKVXdAOYTxDfWud8hLl_zkxT6WzqwZbw",
   "discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
 }).then(function() {
   gapi.client.youtube.videos.list({
     "part": "snippet",
     "id": "C_eFawNnmC4"
   }).then(function(response) {
     var video = response.result.items[0];
     document.getElementById("title").innerText = video.snippet.title;
     document.getElementById("description").innerText = video.snippet.description;
     document.getElementById("thumbnail").src = video.snippet.thumbnails.default.url;
   });
 });

 //para una lista de videos con href

 //SE ESTAN PISANDO adas>>DSA
 <script>
      const API_KEY = "AIzaSyDjKVXdAOYTxDfWud8hLl_zkxT6WzqwZbw";
      const videoListContainer = document.querySelector(".video-list");

      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=simpsons&type=video&key=${API_KEY}`
      )
        .then(response => response.json())
        .then(data => {
          data.items.forEach(item => {
            const videoItem = document.createElement("div");
            videoItem.classList.add("video-item");

            const videoThumb = document.createElement("div");
            videoThumb.classList.add("video-thumbnail");
            videoThumb.style.backgroundImage = `url(${item.snippet.thumbnails.default.url})`;
            videoItem.appendChild(videoThumb);

            const videoTitle = document.createElement("h3");
            videoTitle.innerText = item.snippet.title;
            videoItem.appendChild(videoTitle);

            const videoDescription = document.createElement("p");
            videoDescription.innerText = item.snippet.description;
            videoItem.appendChild(videoDescription);

            videoListContainer.appendChild(videoItem);
          });
        });
    </script>

