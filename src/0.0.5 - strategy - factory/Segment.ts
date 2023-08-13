export class Segment {
  OVERNIGHT_START = 22
  OVERNIGHT_END = 6

  constructor(readonly distance: number, readonly date: Date) {
    if (!this.isValidDistance(distance)) throw new Error('Invalid Distance')
    if (!this.isValidDate(date)) throw new Error('Invalid Date')
  }

  isValidDistance(distance: number) {
    return distance > 0
  }

  isValidDate(date: Date) {
    return date.toString() !== 'Invalid Date'
  }

  isOvernight() {
    return (
      this.date.getHours() >= this.OVERNIGHT_START ||
      this.date.getHours() <= this.OVERNIGHT_END
    )
  }

  isSunday() {
    return this.date.getDay() === 0
  }
}
