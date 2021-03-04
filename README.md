# unitizemilliseconds

- [unitizemilliseconds](#unitizemilliseconds)
  - [Purpose](#purpose)
  - [Caveats](#caveats)
  - [Usage](#usage)
    - [details](#details)

## Purpose

Provide easy access to common duration/time distance information based on a number of milliseconds.

## Caveats

This might seem obvious, but this function is not relative to any actual date and therefor does not take into account anything like timezones and leapyears etc.

## Usage

```typescript

import  {unitizeMilliseconds} from '@theredhead/unitizemilliseconds';

const result = unitizeMilliseconds(2983764189);
```

`result` will now hold this structure:
```typescript
{
  "days": 34,
  "hours": 12,
  "minutes": 49,
  "seconds": 24,
  "milliseconds": 189,
  "individual": {
    "days": 34.53430774305556,
    "hours": 828.8233858333333,
    "minutes": 49729.40315,
    "seconds": 2983764.189,
    "milliseconds": 2983764189
  }
}
```

### details

In the top level of the returned structure you will find the input's cumulative span of number of days, hours, minutes, seconds, and milliseconds. In the `individual` sub-structure, you find individual values representing the same span. With `result.individual.milliseconds` being the (positive version of the) value passed into the function.
