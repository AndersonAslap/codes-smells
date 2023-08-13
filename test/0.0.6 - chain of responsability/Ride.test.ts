import NormalFareCalculatorHandler from '../../src/0.0.6 - chain of responsability/NormalFareCalculatorHandler'
import OvernightFareCalculatorHandler from '../../src/0.0.6 - chain of responsability/OvernightFareCalculatorHandler'
import OvernightSundayFareCalculatorHandler from '../../src/0.0.6 - chain of responsability/OvernightSundayFareCalculatorHandler'
import SundayFareCalculatorHandler from '../../src/0.0.6 - chain of responsability/SundayFareCalculatorHandler'
import { Ride } from '../../src/0.0.6 - chain of responsability/Ride'

let ride: Ride

beforeEach(function () {
  const overnightSundayFareCalculatorHandler = new OvernightSundayFareCalculatorHandler()
  const sundayFareCalculatorHandler = new SundayFareCalculatorHandler(
    overnightSundayFareCalculatorHandler,
  )
  const overnightFareCalculatorHandler = new OvernightFareCalculatorHandler(
    sundayFareCalculatorHandler,
  )
  const normalFareCalculatorHandler = new NormalFareCalculatorHandler(
    overnightFareCalculatorHandler,
  )
  ride = new Ride(normalFareCalculatorHandler)
})

test('Deve calcular a tarifa de uma corrida em um dia normal', function () {
  ride.addSegment(10, new Date('2023-06-09T10:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(21)
})

test('Deve calcular a tarifa de uma corrida de noiter', function () {
  ride.addSegment(10, new Date('2023-06-09T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(39)
})

test('Deve calcular a tarifa de uma corrida domingo', function () {
  ride.addSegment(10, new Date('2023-06-11T10:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(29)
})

test('Deve calcular a tarifa de uma corrida domingo de noite', function () {
  ride.addSegment(10, new Date('2023-06-11T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(50)
})

test('Deve retornar -1 se a distanceancia for inválida', function () {
  expect(() => ride.addSegment(-10, new Date('2023-06-11T10:00:00'))).toThrow(
    new Error('Invalid Distance'),
  )
})

test('Deve retornar -2 se a data for inválida', function () {
  expect(() => ride.addSegment(10, new Date('abc'))).toThrow(
    new Error('Invalid Date'),
  )
})

test('Deve calcular a tarifa de uma corrida mínima ', function () {
  ride.addSegment(2, new Date('2023-06-11T23:00:00'))
  const fare = ride.calculateFare()
  expect(fare).toBe(10)
})
