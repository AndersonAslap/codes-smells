import FareCalculatorHandler from './FareCalculatorHandler'
import { Segment } from './Segment'

export default class OvernightFareCalculatorHandler
  implements FareCalculatorHandler {
  FARE = 3.9

  constructor(readonly next?: FareCalculatorHandler) {}

  calculate(segment: Segment): number {
    if (segment.isOvernight() && !segment.isSunday()) {
      return segment.distance * this.FARE
    }
    if (!this.next) throw new Error('end of chain')
    return this.next.calculate(segment)
  }
}
