import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Formulario from './Formulario';

describe("Revision funciones", () => {
    it("Probar montaNombre con 3 palabras", () => {
        const component = renderer.create(<Formulario />)
        const obj = component.getInstance();
        expect(obj.__montarNombre("Esto es un nombre largo")).toBe("Esto,es,un,nombre,largo,");
    })
})
describe("Presentaciones", () => {
    it("se visualiza bien", () => {
        const imagen = renderer.create(<Formulario />)
            .toJSON();
        expect(imagen).toMatchSnapshot();
    })
})