
import { createAction, props } from '@ngrx/store';
import { personaDto } from '../Models/personaDto';

export const data = createAction('guardarData',  props<{dato: personaDto}>());
