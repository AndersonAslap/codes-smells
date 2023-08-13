import { calculateRide } from '../../src/0.0.2/calculate'

test('Deve calcular a tarifa de uma corrida em um dia normal', function () {
  const input = [
    {
      distance: 10,
      date: new Date('2023-06-09T10:00:00'),
    },
  ]
  const fare = calculateRide(input)
  expect(fare).toBe(21)
})

test('Deve calcular a tarifa de uma corrida de noite', function () {
  const input = [
    {
      distance: 10,
      date: new Date('2023-06-09T23:00:00'),
    },
  ]
  const fare = calculateRide(input)
  expect(fare).toBe(39)
})

test('Deve calcular a tarifa de uma corrida no domingo', function () {
  const input = [
    {
      distance: 10,
      date: new Date('2023-06-11T10:00:00'),
    },
  ]
  const fare = calculateRide(input)
  expect(fare).toBe(29)
})

test('Deve calcular a tarifa de uma corrida no domingo de noite', function () {
  const input = [
    {
      distance: 10,
      date: new Date('2023-06-11T23:00:00'),
    },
  ]
  const fare = calculateRide(input)
  expect(fare).toBe(50)
})

test('Deve retornar -1 se a distanceancia for inválida', function () {
  const input = [
    {
      distance: -10,
      date: new Date('2023-06-11T23:00:00'),
    },
  ]
  expect(() => calculateRide(input)).toThrow(new Error('Invalid Distance'))
})

test('Deve retornar -2 se a data for inválida', function () {
  const input = [
    {
      distance: 10,
      date: new Date('abc'),
    },
  ]
  expect(() => calculateRide(input)).toThrow(new Error('Invalid Date'))
})

test('Deve calcular a tarifa de uma corrida mínima ', function () {
  const input = [
    {
      distance: 2,
      date: new Date('2023-06-11T10:00:00'),
    },
  ]
  const fare = calculateRide(input)
  expect(fare).toBe(10)
})
