import { Ride } from '../../src/0.0.3/Ride'

test('Deve calcular a tarifa de uma corrida em um dia normal', function () {
  const ride = new Ride()
  ride.addSegment(10, new Date('2023-06-09T10:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(21)
})

test('Deve calcular a tarifa de uma corrida de noiter', function () {
  const ride = new Ride()
  ride.addSegment(10, new Date('2023-06-09T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(39)
})

test('Deve calcular a tarifa de uma corrida domingo', function () {
  const ride = new Ride()
  ride.addSegment(10, new Date('2023-06-11T10:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(29)
})

test('Deve calcular a tarifa de uma corrida domingo de noite', function () {
  const ride = new Ride()
  ride.addSegment(10, new Date('2023-06-11T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(50)
})

test('Deve retornar -1 se a distanceancia for inválida', function () {
  const ride = new Ride()
  expect(() => ride.addSegment(-10, new Date('2023-06-11T10:00:00'))).toThrow(
    new Error('Invalid Distance'),
  )
})

test('Deve retornar -2 se a data for inválida', function () {
  const ride = new Ride()
  expect(() => ride.addSegment(10, new Date('abc'))).toThrow(
    new Error('Invalid Date'),
  )
})

test('Deve calcular a tarifa de uma corrida mínima ', function () {
  const ride = new Ride()
  ride.addSegment(2, new Date('2023-06-11T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(10)
})
