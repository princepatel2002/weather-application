const apiUrl='https://api.openweathermap.org/data/2.5/weather?&units=metric'
const apiKey='a6cd12e43f3d446137507ccfcf15882b'


const searchBox=document.querySelector('#searchBox')
const searchBtn=document.querySelector('#search')
const errorBtn= document.querySelector('#error')

async function check(city){
    const resposnse =await fetch(apiUrl+ `&q=${city}`+`&appid=${apiKey}`)
    if(resposnse.status==404){
        errorBtn.innerHTML='invalid city'
        document.querySelector('#city').style.display='none'
    }
    else{
        var data = await resposnse.json()

        document.querySelector('#cityName').innerHTML=data.name
        document.querySelector('#temp').innerHTML=Math.round(data.main.temp) +'°c'
        document.querySelector('#wind').innerHTML=Math.round(data.wind.speed ) +'Km/h'
        document.querySelector('#humidity').innerHTML=data.main.humidity +'%'
        errorBtn.innerHTML=''
        document.querySelector('#city').style.display="block"
    }

    
   
}

searchBtn.addEventListener('click',()=>{
    check(searchBox.value)
})
