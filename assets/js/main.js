var myMusic = [
    {
      artist: "The Beatles",
      title: "Abbey Road",
      release_jahr: 1969,
      format: ["LP", "CD", "MC", "Download"],
      gold: true,
      genratorHTML:function(){
        return `<h1> ${this.artist}</h1> 
                <h1> ${this.title}</h1>
                <h1> ${this.format}</h1>  `
        
    }
      
    },
    {
      artist: "Pink Floyd",
      title: "Dark Side of the Moon",
      release_jahr: 1978,
      format: ["CS", "CD", "LP", "Download"],
      gold: true,
      genratorHTML:function(){
        return `<h1> ${this.artist}</h1> 
                <h1> ${this.title}</h1>
                <h1> ${this.format}</h1>  `
        
    }
    },
    {
      artist: "Led Zeppelin",
      title: "Led Zeppelin IV",
      release_jahr: 1971,
      format: ["CS", "LP", "Download"],
      gold: true,
      genratorHTML:function(){
        return `<h1> ${this.artist}</h1> 
                <h1> ${this.title}</h1>
                <h1> ${this.format}</h1>  `
        
    }
    },
    {
      artist: "Metallica",
      title: "Kill ’Em All und Ride the Lightning",
      release_jahr: 1983,
      format: ["LP", "CD", "MC", "Download"],
      gold: true,
      genratorHTML:function(){
        return `<h1> ${this.artist}</h1> 
                <h1> ${this.title}</h1>
                <h1> ${this.format}</h1>  `
        
    }
    }
  ];
const ausgabe=document.querySelector(".ausgabe");
myMusic.forEach(album => {
let a= album.genratorHTML();
ausgabe.innerHTML+=a
});
const ausgabeFiltr=document.querySelector(".ausgabe-filter");

function filter() {
var musicFilter=myMusic.filter(item => item.release_jahr>1975);
musicFilter.forEach(item=>{
ausgabe.innerHTML=""
ausgabeFiltr.innerHTML=`<div>
<h1> ${item.artist}</h1> 
<h2> ${item.title} </h2>
<h3> ${item.format}</h3> 
</div>`   
})}



  