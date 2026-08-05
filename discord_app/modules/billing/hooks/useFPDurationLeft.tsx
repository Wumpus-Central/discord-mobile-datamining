// discord_app/modules/billing/hooks/useFPDurationLeft.tsx
import { useCountdown } from "../../../hooks/useCountdown.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
function roundFPCountdownUnits(arg0) {
  let obj = {};
  const merged = Object.assign(arg0);
  if (obj.seconds > 0) {
    obj.minutes = obj.minutes + 1;
    obj.seconds = 0;
  }
  if (60 === obj.minutes) {
    obj.hours = obj.hours + 1;
    obj.minutes = 0;
  }
  if (24 === obj.hours) {
    obj.days = obj.days + 1;
    obj.hours = 0;
  }
  if (obj.days > 0) {
    if (obj.hours > 0) {
      let days = obj.days + 1;
    } else {
      days = obj.days;
    }
    obj = { days: null, hours: 0, minutes: 0, seconds: 0 };
    obj[0] = days;
    return obj;
  } else if (obj.hours > 0) {
    if (obj.minutes > 45) {
      let hours = obj.hours + 1;
    } else {
      hours = obj.hours;
    }
    if (hours > 11) {
      obj = { days: 1, hours: 0, minutes: 0, seconds: 0 };
    } else {
      obj = { days: 0, hours: null, minutes: 0, seconds: 0 };
      obj[1] = hours;
    }
    return obj;
  } else if (obj.minutes > 0) {
    let num5 = 0;
    if (obj.minutes > 45) {
      num5 = 1;
    }
    const obj1 = { days: 0, hours: null, minutes: null, seconds: 0 };
    obj1[1] = num5;
    let num7 = 0;
    if (1 !== num5) {
      num7 = obj.minutes;
    }
    obj1[2] = num7;
    return obj1;
  } else {
    let obj2 = obj;
    if (obj.seconds > 0) {
      obj2 = { days: 0, hours: 0, minutes: 1, seconds: 0 };
    }
    return obj2;
  }
}
let obj = { SHORT_TIME_LEFT: 0, [0]: "SHORT_TIME_LEFT", LONG_TIME_LEFT: 1, [1]: "LONG_TIME_LEFT", ENDS_IN: 2, [2]: "ENDS_IN", SHORT_TIME: 3, [3]: "SHORT_TIME", CREDITS_ENDS_IN: 4, [4]: "CREDITS_ENDS_IN" };
const result = require("resetCache").fileFinishedImporting("modules/billing/hooks/useFPDurationLeft.tsx");

export default function useFPDurationLeft(toDate) {
  if (obj.SHORT_TIME_LEFT === arg1) {
    obj = { days: null, hours: null, minutes: null };
    obj[0] = getSystemLocale.t["/wnvqA"];
    obj[1] = getSystemLocale.t.Jsq0XN;
    obj[2] = getSystemLocale.t["SBd+Bs"];
  } else if (tmp.LONG_TIME_LEFT === arg1) {
    obj = { days: null, hours: null, minutes: null };
    obj[0] = getSystemLocale.t.UD5nn5;
    obj[1] = getSystemLocale.t.Hg8Fee;
    obj[2] = getSystemLocale.t.XSbQZZ;
  } else {
    if (tmp.ENDS_IN === arg1) {
      const obj1 = { days: null, hours: null, minutes: null };
      obj1[0] = getSystemLocale.t.rLqNad;
      obj1[1] = getSystemLocale.t.d1LvCA;
      obj1[2] = getSystemLocale.t.Z2LX7K;
    } else if (tmp.CREDITS_ENDS_IN !== arg1) {
      if (tmp.SHORT_TIME === arg1) {
        obj = { days: null, hours: null, minutes: null };
        obj[0] = getSystemLocale.t.fYmirx;
        obj[1] = getSystemLocale.t["C3RO+g"];
        obj[2] = getSystemLocale.t.r77oHc;
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Unknown messageType (" + arg1 + ") when rendering time left");
        throw error;
      }
    }
    const obj2 = { days: null, hours: null, minutes: null };
    obj2[0] = getSystemLocale.t.xQ3zuN;
    obj2[1] = getSystemLocale.t.SFU7QN;
    obj2[2] = getSystemLocale.t.Y4FNdL;
  }
  roundFPCountdownUnits(useCountdown(toDate.toDate(), 60000));
};
export const CountDownMessageTypes = obj;
export { roundFPCountdownUnits };