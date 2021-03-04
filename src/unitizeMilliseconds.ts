/** @format */

// I don't like magic numbers

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

export interface UnitizedMiliseconds {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}
export interface UnitizedMilisecondsResult extends UnitizedMiliseconds {
  individual: UnitizedMiliseconds;
}

export const unitizeMiliseconds = (
  numberOfMilliseconds: number
): UnitizedMilisecondsResult => {
  const ms =
    numberOfMilliseconds < 0 ? -1 * numberOfMilliseconds : numberOfMilliseconds;
  const round = Math.floor;
  return {
    days: round(ms / MS_IN_DAY),
    hours: round(ms / MS_IN_HOUR) % HOURS_IN_DAY,
    minutes: round(ms / MS_IN_MINUTE) % MINUTES_IN_HOUR,
    seconds: round(ms / MS_IN_SECOND) % SECONDS_IN_MINUTE,
    milliseconds: round(ms) % MS_IN_SECOND,
    individual: {
      days: round(ms / MS_IN_DAY),
      hours: round(ms / MS_IN_HOUR),
      minutes: round(ms / MS_IN_MINUTE),
      seconds: round(ms / MS_IN_SECOND),
      milliseconds: round(ms),
    },
  };
};