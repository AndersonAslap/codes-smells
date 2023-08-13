const calculate = require('../../src/0.0.1/calculate')

const result = calculate([
  {
    dist: 10,
    ds: new Date('2023-06-09T10:00:00'),
  },
])

console.log(
  'Dece calcular a tarifa de uma corrida em um dia normal : ',
  result === 21 ? 'OK' : 'FAIL',
)
