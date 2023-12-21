import * as moment from "moment"

const DifferenceTime = (time: number): string => {
  return moment.unix(time).fromNow()
}

export {
  DifferenceTime
}
