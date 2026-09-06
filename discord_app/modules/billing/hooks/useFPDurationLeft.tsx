// === Module 13461: useFPDurationLeft ===

// Module 13461 (useFPDurationLeft)
import util from "util" /* 1114 */;
import useCountdownDefault from "useCountdown" /* 7439 */;
import size from "module_2" /* 2 */;

function roundFPCountdownUnits(arg0) {
  let time = {};
  const merged = Object.assign(arg0);
  if (time.seconds > 0) {
    time.minutes = time.minutes + 1;
    time.seconds = 0;
  }
  if (60 === time.minutes) {
    time.hours = time.hours + 1;
    time.minutes = 0;
  }
  if (24 === time.hours) {
    time.days = time.days + 1;
    time.hours = 0;
  }
  if (time.days > 0) {
    if (time.hours > 0) {
      let days = time.days + 1;
    } else {
      days = time.days;
    }
    time = { days, hours: 0, minutes: 0, seconds: 0 };
    return time;
  } else if (time.hours > 0) {
    if (time.minutes > 45) {
      let hours = time.hours + 1;
    } else {
      hours = time.hours;
    }
    if (hours > 11) {
      let time1 = { days: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      time1 = { days: 0, hours, minutes: 0, seconds: 0 };
    }
    return time1;
  } else if (time.minutes > 0) {
    let num5 = 0;
    if (time.minutes > 45) {
      num5 = 1;
    }
    const time2 = { days: 0, hours: num5, minutes: null, seconds: 0 };
    let num7 = 0;
    if (1 !== num5) {
      num7 = time.minutes;
    }
    time2.minutes = num7;
    return time2;
  } else {
    let time3 = time;
    if (time.seconds > 0) {
      time3 = { days: 0, hours: 0, minutes: 1, seconds: 0 };
    }
    return time3;
  }
}
const CountDownMessageTypes = { SHORT_TIME_LEFT: 0, [0]: "SHORT_TIME_LEFT", LONG_TIME_LEFT: 1, [1]: "LONG_TIME_LEFT", ENDS_IN: 2, [2]: "ENDS_IN", SHORT_TIME: 3, [3]: "SHORT_TIME", CREDITS_ENDS_IN: 4, [4]: "CREDITS_ENDS_IN" };
const result = size.fileFinishedImporting("modules/billing/hooks/useFPDurationLeft.tsx");

export default function useFPDurationLeft(toDate, arg1) {
  if (obj.SHORT_TIME_LEFT === arg1) {
    const time = { days: util.t["/wnvqA"], hours: util.t.Jsq0XN, minutes: util.t["SBd+Bs"] };
  } else if (tmp.LONG_TIME_LEFT === arg1) {
    const time1 = { days: util.t.UD5nn5, hours: util.t.Hg8Fee, minutes: util.t.XSbQZZ };
  } else {
    if (tmp.ENDS_IN === arg1) {
      const time2 = { days: util.t.rLqNad, hours: util.t.d1LvCA, minutes: util.t.Z2LX7K };
    } else if (tmp.CREDITS_ENDS_IN !== arg1) {
      if (tmp.SHORT_TIME === arg1) {
        const time3 = { days: util.t.fYmirx, hours: util.t["C3RO+g"], minutes: util.t.r77oHc };
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
        throw error;
      }
    }
    const time4 = { days: util.t.xQ3zuN, hours: util.t.SFU7QN, minutes: util.t.Y4FNdL };
  }
  roundFPCountdownUnits(useCountdownDefault(toDate.toDate(), 60000));
};
export { CountDownMessageTypes };
export { roundFPCountdownUnits };