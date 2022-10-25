import "./style.css";

document.querySelector("#app").innerHTML = `
  <div  class="container">
    <input type="file" id="upload-button" multiple accept="image/*"/>
    <label for="upload-button"><i class="fa-solid fa-upload"></i>&nbsp; Choose Or Drop Photos </label>
    <div id="error">  </div>
    <div id="image-display"> 
  </div>
`;
const script = document.createElement("script");
script.src = "./script.js";
document.body.appendChild(script);
