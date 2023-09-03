import React from 'react'
import { API_RM } from '../constans/Api.constans';
// usara servicios es correcto y en la industria se utiliza.Capa especializada para comunicarse con el API , (estructura de capas)



export async function getAllCharacters(){
   const response = await fetch(API_RM.CHARACTERS());
   //Interceptor todo tipo de solicitudes
   return response.json();
}
export async function getAllCharacterById(id){
   const response = await fetch(API_RM.CHARACTER_BY_ID(id));
   //Interceptor todo tipo de solicitudes
   return response.json();
}



