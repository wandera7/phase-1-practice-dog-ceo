//console.log('%c HI', 'color: firebrick')
function fetchImages(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((res)=>res.json())
    .then((data)=>{
        const {message}=data;
        displayImages(message);    
    })
}
fetchImages()
function displayImages(array){
    array.forEach((url)=> {
        const imageContainer=document.createElement('div')
        imageContainer.innerHTML=`
        <div id="dog-image-container">
        <img src=${url} alt='dogimage'/>
        </div>        
        `
        document.querySelector('#dog-image-container').appendChild(imageContainer);
    })
}

function fetchAll(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res)=>res.json())
    .then((data)=>{
        const{message}=data ;  
        displayDog(message)})
}
fetchAll()

function displayDog(obj){
    
        const list=document.querySelector('#dog-breeds');
        const li =document.createElement('li');
        let filterValue='';
        //Dealing with the dropDown
        const selectElement = document.querySelector('#breed-dropdown');
        selectElement.addEventListener('click',(e)=>{
            if(filterValue){
                list.removeChild(li);
            }
        const value = e.target.value;    
        const text = selectElement.options[selectElement.selectedIndex].text;
        filterValue=text;
        const filterKeys=Object.keys(obj);
        const newDog= filterKeys.filter((specify)=>{
            return specify.charAt(0) === filterValue;
    
        })
        li.innerHTML=newDog.map(dog => `<li>${dog}</li>`).join('');
        li.addEventListener('click',(e)=>{
            e.target.style.color='red';
        })
        list.appendChild(li);
        
    })

}