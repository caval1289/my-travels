import React from "react";
import Traval1 from "./Traval1";

const traval =[
  {
    destination:"Italie",
    country:"Cinque Terre",
    distance:"1127 KM" ,
    image:"https://www.mytoursapi.com/api/v1/images/19/slide06.jpg?1521123284&size=tour-hero",
  },

  {
    destination:"Greece",
    country:"Santorin",
    distance:"3132 KM",
    image: "https://images.croisieurope.com/media/b6acb2ff-b60c-4c8a-8a5f-43e09236008e/5/grece-mer-mediterranee-santorin-photocreo_michal_bednarek",
  },

  {
    destination:"Espagne",
    country:"Majorque",
    distance:"1613",
    image:"https://cdn.civitatis.com/espana/mallorca/mallorca.jpg",
  },

  {
    destination:"Republique Tcheque",
    country:"prague",
    distance:"930 KM",
    image:"https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/evasion/les-25-plus-belles-villes-du-monde-qui-nous-font-rever/prague-republique-tcheque/61750879-1-fre-FR/Prague-Republique-tcheque.jpg",
  },

  {
    destination:"Italie",
    country:"Florance",
    distance:"1209 KM",
    image:"https://dreamofitaly.com/wp-content/uploads/2015/05/Florence-use-church-dome-in-square.jpg",
  },
];

const Traval = () =>(
  <div>
    {traval.map(element =>(
      <Traval1 image = {element.image} destination = {element.destination} country = {element.country} distance ={element.distance}/>
    ))}
  </div>
)

export default Traval;