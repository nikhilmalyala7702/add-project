const container = document.querySelector('.container')
const body=document.querySelector('body')
const countries = document.querySelector('.countries')




fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data)

    data.forEach(val=>{

        
        const countries =document.querySelector('.countries')
        const division = document.createElement('div')
        division.setAttribute("class","division")
        
        const population = document.createElement('h2')
        population.setAttribute("class","population")

        const continents = document.createElement('h1')
        continents.setAttribute("class","continents")

        const region = document.createElement('h3')
        region.setAttribute("class","region")

        const area = document.createElement('h4')
        area.setAttribute("class","area")

        const image = document.createElement('img')
        image.setAttribute("class","image")
        image.src=val.flags.png



        // cont.appendchild(division)
        body.append(container)
        container.append(countries)
        countries.append(division)
        division.append(continents,image,population,region,area)
        

        population.innerHTML=val.population
        area.innerHTML=val.area
        continents.innerHTML=val.continents
        region.innerHTML=val.region
        image.innerHTML=val.flags;

    })


})


