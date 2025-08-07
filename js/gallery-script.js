const mainImg = document.getElementById("latest-main-image");
const collectionList = document.getElementById("item-gallery");
let thumbGallery = document.querySelectorAll(".latest-thumb");

const thumbsArr = [...thumbGallery]; // create an array to iterate thru

// add unique id to each image 
thumbsArr.forEach((item,i)=>{
    item.setAttribute("id", `thumb-${i+1}`)
    filter(item)
})

function filter(item){
    //grab `div` parent of image
    const wrapper = item.parentNode
    
    //console.log(wrapper)
   if(item.id === "thumb-1"){
        mainImg.appendChild(thumbsArr[0])
    } else if (item.id === "thumb-2"){
        item.style.display = "block";
    } else {
        // item.remove() // it removes images but will keep parent `div` 
        wrapper.remove() // this remove image and parent `div`
}}