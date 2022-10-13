import { createReducer, on } from '@ngrx/store';
import { personaDto } from '../Models/personaDto';
import { data } from './data.action';

export const initialState : personaDto = {
    "nombre" :  null,
    "apellido" :null,
    "contrasenia" : null,
    "fechaExpedicion" : null,
    "ciudad":null,
    "cedula":null,
    "telefoo":null,
    "correo":null,
    "identificador":null,
};

export const counterReducer = createReducer(
    initialState,
    on(data, (state, { dato }) => ({
    nombre: dato.nombre,
    apellido :dato.nombre,
    contrasenia:dato.nombre,
    fechaExpedicion:dato.nombre,
    ciudad:dato.nombre,
    cedula:dato.nombre,
    telefoo:dato.nombre,
    correo:dato.nombre,
    identificador: dato.nombre
    }))
);