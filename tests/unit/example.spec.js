

describe('Example Component', () => {
  test('Debe de ser mayor a 10', () => {
    
    //Arreglar
    let value = 9;

    //Estimulo
    value = value + 2

    //Observar el resultado
    expect(value).toBeGreaterThan(10)
  
  })
})