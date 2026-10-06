// === Module 4925: TimeUtils ===

// Module 4925 (TimeUtils)
import navigationStart from "navigationStart" /* 581 */;
import createFindDefault from "createFind" /* 4927 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_4926 from "module_4926" /* 4926 */;
import size from "module_2" /* 2 */;

let c2, c3, importDefault, max;

function sleep(asMilliseconds) {
  let asMillisecondsResult = asMilliseconds;
  if (typeof asMilliseconds !== "number") {
    asMillisecondsResult = asMilliseconds.asMilliseconds();
  }
  require = asMillisecondsResult;
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    const timerId = setTimeout(() => closure_0(), require);
  });
  return promise;
}
let c4 = 3600000;
function now() {
  const timeOrigin = navigationStart.timeOrigin;
  const _performance = navigationStart.performance;
  return floor(timeOrigin + _performance.now());
}
class tmp3 {
  now() {
    if (typeof now === "function") {
      const _Math = Math;
      const timeOrigin = navigationStart.timeOrigin;
      const _performance = navigationStart.performance;
      return floor(timeOrigin + _performance.now());
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype = tmp3.prototype;
let obj2 = Object.create(tmp3.prototype);
class TimeSpan {
  constructor(arg0, arg1, arg2, arg3) {
    let num = arg3;
    const obj = Object.create(new.target.prototype);
    obj.milliseconds = 0;
    obj.asMilliseconds = function asMilliseconds() {
      return obj.milliseconds;
    };
    obj.asSeconds = function asSeconds() {
      return obj.milliseconds / 1000;
    };
    obj.asMinutes = function asMinutes() {
      return obj.milliseconds / 1000 / 60;
    };
    obj.asHours = function asHours() {
      return obj.milliseconds / 1000 / 60 / 60;
    };
    obj.add = function add(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
    };
    obj.subtract = function subtract(milliseconds) {
      return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
    };
    obj.subtractOrZero = function subtractOrZero(milliseconds) {
      return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
    };
    const milliseconds = obj.milliseconds;
    if (!arg3) {
      num = 0;
    }
    let num2 = arg2;
    obj.milliseconds = milliseconds + num;
    const milliseconds2 = obj.milliseconds;
    if (!arg2) {
      num2 = 0;
    }
    let num3 = arg1;
    obj.milliseconds = milliseconds2 + 1000 * num2;
    const milliseconds3 = obj.milliseconds;
    if (!arg1) {
      num3 = 0;
    }
    let num4 = arg0;
    obj.milliseconds = milliseconds3 + 60000 * num3;
    const milliseconds4 = obj.milliseconds;
    if (!arg0) {
      num4 = 0;
    }
    obj.milliseconds = milliseconds4 + num4 * c4;
    return obj;
  }
  isGreaterThan(milliseconds) {
    return this.milliseconds > milliseconds.milliseconds;
  }
  isGreaterOrEqualTo(timeout) {
    return this.milliseconds >= timeout.milliseconds;
  }
  static fromMilliseconds(timePassed) {
    if (typeof TimeSpan === "function") {
      let num = timePassed;
      const obj = Object.create(tmp.prototype);
      obj.milliseconds = 0;
      obj.asMilliseconds = function asMilliseconds() {
        return obj.milliseconds;
      };
      obj.asSeconds = function asSeconds() {
        return obj.milliseconds / 1000;
      };
      obj.asMinutes = function asMinutes() {
        return obj.milliseconds / 1000 / 60;
      };
      obj.asHours = function asHours() {
        return obj.milliseconds / 1000 / 60 / 60;
      };
      obj.add = function add(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
      };
      obj.subtract = function subtract(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
      };
      obj.subtractOrZero = function subtractOrZero(milliseconds) {
        return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
      };
      const milliseconds = obj.milliseconds;
      if (!timePassed) {
        num = 0;
      }
      obj.milliseconds = milliseconds + num;
      ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds } = obj);
      obj.milliseconds = obj.milliseconds;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromSeconds(arg0) {
    let milliseconds;
    if (typeof TimeSpan === "function") {
      let num = arg0;
      const obj = Object.create(tmp.prototype);
      obj.milliseconds = 0;
      obj.asMilliseconds = function asMilliseconds() {
        return obj.milliseconds;
      };
      obj.asSeconds = function asSeconds() {
        return obj.milliseconds / 1000;
      };
      obj.asMinutes = function asMinutes() {
        return obj.milliseconds / 1000 / 60;
      };
      obj.asHours = function asHours() {
        return obj.milliseconds / 1000 / 60 / 60;
      };
      obj.add = function add(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
      };
      obj.subtract = function subtract(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
      };
      obj.subtractOrZero = function subtractOrZero(milliseconds) {
        return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
      };
      ({ milliseconds: tmp2.milliseconds, milliseconds } = obj);
      if (!arg0) {
        num = 0;
      }
      obj.milliseconds = milliseconds + 1000 * num;
      obj.milliseconds = obj.milliseconds;
      obj.milliseconds = obj.milliseconds;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromMinutes(arg0) {
    let milliseconds;
    if (typeof TimeSpan === "function") {
      let num = arg0;
      const obj = Object.create(tmp.prototype);
      obj.milliseconds = 0;
      obj.asMilliseconds = function asMilliseconds() {
        return obj.milliseconds;
      };
      obj.asSeconds = function asSeconds() {
        return obj.milliseconds / 1000;
      };
      obj.asMinutes = function asMinutes() {
        return obj.milliseconds / 1000 / 60;
      };
      obj.asHours = function asHours() {
        return obj.milliseconds / 1000 / 60 / 60;
      };
      obj.add = function add(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
      };
      obj.subtract = function subtract(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
      };
      obj.subtractOrZero = function subtractOrZero(milliseconds) {
        return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
      };
      ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds } = obj);
      if (!arg0) {
        num = 0;
      }
      obj.milliseconds = milliseconds + 60000 * num;
      obj.milliseconds = obj.milliseconds;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromHours(arg0) {
    let milliseconds;
    if (typeof TimeSpan === "function") {
      let num = arg0;
      const obj = Object.create(tmp.prototype);
      obj.milliseconds = 0;
      obj.asMilliseconds = function asMilliseconds() {
        return obj.milliseconds;
      };
      obj.asSeconds = function asSeconds() {
        return obj.milliseconds / 1000;
      };
      obj.asMinutes = function asMinutes() {
        return obj.milliseconds / 1000 / 60;
      };
      obj.asHours = function asHours() {
        return obj.milliseconds / 1000 / 60 / 60;
      };
      obj.add = function add(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds + milliseconds.milliseconds);
      };
      obj.subtract = function subtract(milliseconds) {
        return TimeSpan.fromMilliseconds(obj.milliseconds - milliseconds.milliseconds);
      };
      obj.subtractOrZero = function subtractOrZero(milliseconds) {
        return TimeSpan.fromMilliseconds(Math.max(obj.milliseconds - milliseconds.milliseconds, 0));
      };
      ({ milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds: tmp2.milliseconds, milliseconds } = obj);
      if (!arg0) {
        num = 0;
      }
      obj.milliseconds = milliseconds + num * c4;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype2 = TimeSpan.prototype;
class StopWatch {
  constructor() {
    let tmp = timestampProducer;
    if (timestampProducer === undefined) {
      tmp = obj2;
    }
    const merged = Object.assign({ startTime: "duration", timePassed: false });
    merged.timestampProducer = tmp;
    return merged;
  }
  start() {
    const self = this;
    if (null == this.startTime) {
      const timestampProducer = self.timestampProducer;
      self.startTime = timestampProducer.now();
    }
  }
  restart() {
    const timestampProducer = this.timestampProducer;
    this.startTime = timestampProducer.now();
  }
  reset() {
    this.startTime = undefined;
    this.timePassed = 0;
  }
  stop() {
    let timePassed;
    let timestampProducer;
    const self = this;
    if (null != this.startTime) {
      ({ timestampProducer, timePassed } = self);
      self.timePassed = timePassed + (timestampProducer.now() - self.startTime);
      self.startTime = undefined;
    }
  }
  toggle(arg0) {
    const self = this;
    if (arg0 !== this.isRunning()) {
      if (arg0) {
        self.start();
      } else {
        self.stop();
      }
    }
  }
  elapsed() {
    const self = this;
    if (null == this.startTime) {
      return TimeSpan.fromMilliseconds(self.timePassed);
    } else {
      const timestampProducer = self.timestampProducer;
      return TimeSpan.fromMilliseconds(self.timePassed + (timestampProducer.now() - self.startTime));
    }
  }
  isRunning() {
    return null != this.startTime;
  }
  static startNew() {
    if (typeof StopWatch === "function") {
      const merged = Object.assign({ startTime: "duration", timePassed: false });
      merged.timestampProducer = obj2;
      merged.start();
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const prototype3 = StopWatch.prototype;
Object.defineProperty(prototype3, "lastElapsed", {
  get: function lastElapsed() {
    return this.timePassed;
  },
  set: undefined
});
Object.defineProperty(prototype3, "lastStartTime", {
  get: function lastStartTime() {
    return this.startTime;
  },
  set: undefined
});
class TimeOut {
  constructor(timeout) {
    if (typeof StopWatch === "function") {
      const merged = Object.assign({ watch: null });
      const merged1 = Object.assign({ startTime: "duration", timePassed: false });
      merged1.timestampProducer = obj2;
      merged[0] = merged1;
      merged.timeout = timeout;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  hasTimedOut() {
    const self = this;
    const watch = this.watch;
    if (watch.isRunning()) {
      const watch2 = self.watch;
      const elapsedResult = watch2.elapsed();
      return elapsedResult.isGreaterOrEqualTo(self.timeout);
    } else {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("`start` must be called before `hasTimedOut`");
      throw error;
    }
  }
  start() {
    const watch = this.watch;
    watch.start();
  }
  static startNew(timeout) {
    if (typeof TimeOut === "function") {
      const self = this;
      if (typeof StopWatch === "function") {
        const merged = Object.assign({ watch: null });
        const merged1 = Object.assign({ startTime: "duration", timePassed: false });
        merged1.timestampProducer = obj2;
        merged[0] = merged1;
        merged.timeout = timeout;
        merged.start();
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static waitFor(arg0, arg1) {
    sleep = arg0;
    let closure_1 = arg1;
    return (async () => {
      let closure_0;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              sleep = TimeSpan.fromMilliseconds(100);
              let tmp12 = sleep;
              if (!(sleep instanceof TimeSpan)) {
                const timeout = tmp21.timeout;
                tmp12 = timeout;
                if (null != sleep.sleep) {
                  sleep = tmp21.sleep;
                  tmp12 = timeout;
                }
              }
              tmp = TimeOut.startNew(tmp12);
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (true === value) {
              c3 = 3;
              return { value: true, done: true };
            } else {
              c2 = 2;
              c3 = 1;
              const obj5 = { value: closure_1_9(sleep), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (tmp.hasTimedOut()) {
            c3 = 3;
            return { value: false, done: true };
          }
          c2 = 1;
          c3 = 1;
          const obj6 = { value: closure_129_1(), done: false };
          return obj6;
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    })();
  }
}
const prototype4 = TimeOut.prototype;
const TimeUnits = { NONE: "NONE", SECONDS: "SECONDS", MINUTES: "MINUTES", HOURS: "HOURS", DAYS: "DAYS", WEEKS: "WEEKS", MONTHS: "MONTHS", YEARS: "YEARS" };
let obj3 = { unit: TimeUnits.NONE, max: 0 };
const items = [obj3, { unit: TimeUnits.SECONDS, max: 1 }, { unit: TimeUnits.MINUTES, max: 60 }, { unit: TimeUnits.HOURS, max: 1440 }, { unit: TimeUnits.DAYS, max: 44640 }, { unit: TimeUnits.WEEKS, max: 40320 }, { unit: TimeUnits.MONTHS, max: 525600 }, { unit: TimeUnits.YEARS, max: Infinity }];
const result = size.fileFinishedImporting("../discord_common/js/packages/time-utils/TimeUtils.tsx");
class ControllableTimeStampProducer {
  constructor() {
    return Object.assign({ time: 0 });
  }
  now() {
    return this.time;
  }
  set(time) {
    this.time = time;
  }
  increase(arg0) {
    this.time = this.time + arg0;
  }
  reset() {
    this.time = 0;
  }
}
const prototype5 = ControllableTimeStampProducer.prototype;
class DurationEnabled {
  constructor(noiseCancellation) {
    let tmp = TimeStampProducer;
    if (TimeStampProducer === undefined) {
      tmp = obj2;
    }
    if (typeof StopWatch === "function") {
      if (tmp === undefined) {
        tmp = obj2;
      }
      const obj = Object.create(tmp2);
      const merged = Object.assign({ startTime: "duration", timePassed: false });
      merged.timestampProducer = tmp;
      obj.stopwatch = merged;
      obj.state = noiseCancellation;
      const stopwatch = obj.stopwatch;
      stopwatch.toggle(noiseCancellation);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  reset() {
    const stopwatch = this.stopwatch;
    stopwatch.reset();
    const stopwatch2 = this.stopwatch;
    stopwatch2.toggle(this.state);
  }
  totalDuration() {
    const stopwatch = this.stopwatch;
    const elapsedResult = stopwatch.elapsed();
    return elapsedResult.asMilliseconds();
  }
  totalDurationSeconds() {
    const stopwatch = this.stopwatch;
    const elapsedResult = stopwatch.elapsed();
    return elapsedResult.asSeconds();
  }
}
const prototype6 = DurationEnabled.prototype;
Object.defineProperty(prototype6, "value", {
  get: undefined,
  set: function value(state) {
    const stopwatch = this.stopwatch;
    stopwatch.toggle(state);
    this.state = state;
  }
});
Object.defineProperty(prototype6, "value", {
  get: function value() {
    return this.state;
  },
  set: undefined
});

export const MS_PER_SECOND = 1000;
export const MS_PER_MINUTE = 60000;
export const MS_PER_HOUR = 3600000;
export const MS_PER_DAY = 86400000;
export const MS_PER_WEEK = 604800000;
export { now };
export { ControllableTimeStampProducer };
export const TimeStampProducer = obj2;
export { TimeSpan };
export { StopWatch };
export { DurationEnabled };
export { TimeOut };
export { sleep };
export { TimeUnits };
export const convertMinutesToGivenTimeUnit = function convertMinutesToGivenTimeUnit(arg0, unit) {
  if (obj.NONE === unit) {
    return 0;
  } else if (obj.SECONDS === unit) {
    return 60 * arg0;
  } else if (obj.MINUTES === unit) {
    return arg0;
  } else if (obj.HOURS === unit) {
    return arg0 / 60;
  } else if (obj.DAYS === unit) {
    return arg0 / 60 / 24;
  } else if (obj.WEEKS === unit) {
    return arg0 / 60 / 24 / 7;
  } else if (obj.MONTHS === unit) {
    return arg0 / 60 / 24 / 31;
  } else if (obj.YEARS === unit) {
    return arg0 / 60 / 24 / 365;
  }
};
export const TimeUnitMax = items;
export const getTimeUnit = function getTimeUnit(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  importDefault = arg1;
  const findIndexResult = items.findIndex((max) => {
    max = max.max;
    return max.unit === obj.NONE && rounded === max || rounded < max;
  });
  const tmp2 = createFindDefault(items, (unit) => f89810(unit.unit), findIndexResult);
  if (null != tmp2) {
    return tmp2.unit;
  } else {
    const found = items.find((unit) => f89810(unit.unit));
    let unit = null;
    if (null != found) {
      unit = found.unit;
    }
    return unit;
  }
};
export const getTimeAndUnit = function getTimeAndUnit(rounded, items) {
  let obj;
  let closure_0 = items;
  if (null == rounded) {
    return { unit: obj.NONE, time: 0 };
  } else {
    let unit;
    closure_0 = rounded;
    const f89810 = (dependencyMap) => closure_0.includes(dependencyMap);
    const findIndexResult = items.findIndex((max) => {
      max = max.max;
      return max.unit === obj.NONE && rounded === max || rounded < max;
    });
    const tmp11 = f89810(4927)(items, (unit) => f89810(unit.unit), findIndexResult);
    if (null != tmp11) {
      unit = tmp11.unit;
    } else {
      const found = items.find((unit) => f89810(unit.unit));
      unit = null;
      if (null != found) {
        unit = found.unit;
      }
    }
    let tmp3 = null;
    if (null != unit) {
      let num = 0;
      if (obj.NONE !== unit) {
        if (obj.SECONDS === unit) {
          num = 60 * rounded;
        } else {
          num = rounded;
          if (obj.MINUTES !== unit) {
            if (obj.HOURS === unit) {
              num = rounded / 60;
            } else if (obj.DAYS === unit) {
              num = rounded / 60 / 24;
            } else if (obj.WEEKS === unit) {
              num = rounded / 60 / 24 / 7;
            } else if (obj.MONTHS === unit) {
              num = rounded / 60 / 24 / 31;
            } else if (obj.YEARS === unit) {
              num = rounded / 60 / 24 / 365;
            }
          }
        }
      }
      tmp3 = num;
    }
    obj = { unit, time: rounded };
    rounded = null;
    if (null != tmp3) {
      const _Math = Math;
      rounded = Math.floor(tmp3);
    }
    return obj;
  }
};