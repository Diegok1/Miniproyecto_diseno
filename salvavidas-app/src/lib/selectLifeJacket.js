// src/lib/selectLifeJacket.js

export function calculateCartridges(weight) {
    let result = { cartridges: [] };
  
    if (weight <= 28) {
      // Si el peso es menor o igual a 28 kg, usar un cartucho de 12 gramos
      result.cartridges.push({ type: '12g', quantity: 1 });
    } else if (weight <= 37) {
      // Si el peso está entre 29 kg y 56 kg, usar dos cartuchos de 12 gramos
      result.cartridges.push({ type: '16g', quantity: 1 });
    } else if (weight <= 46) {
      // Si el peso está entre 57 kg y 70 kg, usar un cartucho de 30 gramos
      result.cartridges.push({ type: '20g', quantity: 1 });
    } else if (weight <= 57) {
      // Si el peso está entre 71 kg y 96 kg, usar un cartucho de 30 gramos y uno de 12 gramos
      result.cartridges.push({ type: '25g', quantity: 1 });
    } else if (weight <= 68) {
        // Si el peso está entre 96kg y 122 kg, usar un cartucho de 30 gramos y dos de 12 gramos
        result.cartridges.push({ type: '30g', quantity: 1 });
    } else if (weight <= 74) {
        // Si el peso está entre 96kg y 122 kg, usar un cartucho de 30 gramos y dos de 12 gramos
        result.cartridges.push({ type: '33g', quantity: 1 });
    } else {
      // Si el peso es mayor de 98 kg, usar dos cartuchos de 30 gramos
      result.cartridges.push({ type: '38g', quantity: 1 });
    }
  
    return result;
  }
  