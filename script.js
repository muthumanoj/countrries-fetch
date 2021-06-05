let div1 = document.createElement('div');
div1.className='modal fade';
div1.id='staticBackdrop';
div1.setAttribute('data-bs-backdrop','static');
div1.setAttribute('data-bs-keyboard','false');
div1.setAttribute('tabindex','-1');
div1.setAttribute('aria-lableledby','staticBackdropLabel');
div1.setAttribute('aria-hidden','true');
document.querySelector('body').appendChild(div1);

let model1 = document.createElement('div');
model1.className='modal-dialog modal-dialog-centered';
div1.appendChild(model1);

let model2 = document.createElement('div');
model2.className='modal-content';
model1.appendChild(model2);

let modelhead = document.createElement('div');
modelhead.className='modal-header';
model2.appendChild(modelhead);

let modeltitle = document.createElement('h5');
modeltitle.className='modal-title';
modeltitle.id='staticBackdropLabel';
let titletext = document.createTextNode('title');
modeltitle.appendChild(titletext);
modelhead.appendChild(modeltitle);

let modelbutton = document.createElement('button');
modelbutton.className='btn-close';
modelbutton.setAttribute('type','button');
modelbutton.setAttribute('data-bs-dismiss','modal');
modelbutton.setAttribute('aria-label','Close');
modelhead.appendChild(modelbutton);

let modelbody = document.createElement('p');
modelbody.className='modal-body';
model2.appendChild(modelbody);

let modelbody1 = document.createElement('p');
modelbody1.className='body1';
model2.appendChild(modelbody1);

 let modelicon = document.createElement('img');
 modelicon.className='myicon';
 model2.appendChild(modelicon);



let modelfooter = document.createElement('div');
modelfooter.className='modal-footer';
model2.appendChild(modelfooter);

let footerclose = document.createElement('button');
footerclose.className='btn btn-secondary';
footerclose.setAttribute('data-bs-dismiss','modal');
let footertext = document.createTextNode('close');
footerclose.appendChild(footertext);
modelfooter.appendChild(footerclose);



let apiURL = "https://restcountries.eu/rest/v2/all";

fetch(apiURL).then((data)=>{
       return data.json();
}).then((data) =>{
       
  data.forEach((element) => {
    

let cname = element.name;
let cflag = element.flag;
let ccapital = element.capital;
let ccode = element.alpha2Code+","+element.alpha3Code;
let cregion = element.region;
let clatlong = element.latlng;











let card = document.createElement("div");
card.className=' row col-sm-3 card';

document.querySelector('body').appendChild(card);

let head = document.createElement("h5");
head.className='card-title ctitle';
let countryName = document.createTextNode(cname);
head.appendChild(countryName);
card.appendChild(head);

let image = document.createElement("img");
image.className='card-img-top';
image.setAttribute('src',cflag);
card.appendChild(image);

let row1 = document.createElement("div");
card.appendChild(row1);

let p1left = document.createElement("p")
p1left.className='cap1'
let countrycapital = document.createTextNode("Capital :");
p1left.appendChild(countrycapital);
row1.appendChild(p1left);

let p1right = document.createElement("p");
p1right.className='btn btn-success btn-sm cap2';
let ccap = document.createTextNode(" "+ccapital);
p1right.appendChild(ccap);
row1.appendChild(p1right);

let row2 = document.createElement("div");
card.appendChild(row2);

let p2left= document.createElement("p")
p2left.className='cod1';
let countrycode = document.createTextNode("Code :"+" ");
p2left.appendChild(countrycode);
row2.appendChild(p2left);

let p2right= document.createElement("p")  
p2right.className='cod2';
let cocode = document.createTextNode(+" "+ccode);
p2right.appendChild(cocode);
row2.appendChild(p2right);

let row3 = document.createElement("div");
card.appendChild(row3);

let p3left = document.createElement("p")
p3left.className='reg1';
let countryregion = document.createTextNode("Region :"+" ");
p3left.appendChild(countryregion);
row3.appendChild(p3left);

let p3right = document.createElement("p")
p3right.className='reg2';
let coregion = document.createTextNode(" "+cregion);
p3right.appendChild(coregion);
row3.appendChild(p3right);

let row4 = document.createElement("div");
card.appendChild(row4);


let p4left = document.createElement("p")
p4left.className='lat1';
let countrylatlong = document.createTextNode("latlong :"+" ");
p4left.appendChild(countrylatlong);
row4.appendChild(p4left);


let p4right = document.createElement("p")
p4right.className='lat2';
let colatlong = document.createTextNode(" "+clatlong);
p4right.appendChild(colatlong);
row4.appendChild(p4right);

let row5 = document.createElement("button");
card.appendChild(row5);

let button = document.createElement('div');
button.className='btn btn-outline-secondary','modal-dialog modal-dialog-centered';
button.setAttribute('type','button');
button.setAttribute('data-bs-toggle','modal');
button.setAttribute('data-bs-target','#staticBackdrop');
//event
button.addEventListener('click',myfunction);
let buttontext = document.createTextNode("Click for weather");
button.appendChild(buttontext);
row5.appendChild(button);

function myfunction(){
       let lat = element.latlng[0];
       let long = element.latlng[1];
      let weathercountry=element.name;
      let weatherurl = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=001a1f566bcd3a1a77c2893a4016bc9a";
       console.log(weatherurl)
   
       document.querySelector('.modal-body').innerHTML="Country Name : "+weathercountry;

      fetch(weatherurl).then((data)=>{
              return data.json();
       }).then((data)=>{
             let temperature = data.main.temp;
             console.log(temperature)
             document.querySelector('.body1').innerHTML="Country Temp : "+temperature;
             let countryicon = data.weather[0].icon;
             let iconurl = "https://openweathermap.org/img/wn/"+countryicon+"@2x.png";
             
         document.querySelector('.myicon').setAttribute('src',iconurl);

       }).catch((err)=>{
              console.log(err)
       })

       
 
       
}
   




});
}).catch((err)=>{
       console.log(err);
});