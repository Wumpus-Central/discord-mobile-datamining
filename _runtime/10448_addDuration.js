// === Module 10448: addDuration ===

// Module 10448 (addDuration)
arg5.EmptyDuration = undefined;
arg5.addDuration = function addDuration(dateWithAdjustedTimezone, EmptyDuration) {
  const date = new Date(dateWithAdjustedTimezone);
  if (EmptyDuration.y) {
    EmptyDuration.year = EmptyDuration.y;
    delete tmp[tmp2];
  }
  if (EmptyDuration.mo) {
    EmptyDuration.month = EmptyDuration.mo;
    delete tmp[tmp2];
  }
  if (EmptyDuration.M) {
    EmptyDuration.month = EmptyDuration.M;
    delete tmp[tmp2];
  }
  if (EmptyDuration.w) {
    EmptyDuration.week = EmptyDuration.w;
    delete tmp[tmp2];
  }
  if (EmptyDuration.d) {
    EmptyDuration.day = EmptyDuration.d;
    delete tmp[tmp2];
  }
  if (EmptyDuration.h) {
    EmptyDuration.hour = EmptyDuration.h;
    delete tmp[tmp2];
  }
  if (EmptyDuration.m) {
    EmptyDuration.minute = EmptyDuration.m;
    delete tmp[tmp2];
  }
  if (EmptyDuration.s) {
    EmptyDuration.second = EmptyDuration.s;
    delete tmp[tmp2];
  }
  if (EmptyDuration.ms) {
    EmptyDuration.millisecond = EmptyDuration.ms;
    delete tmp[tmp2];
  }
  if ("year" in EmptyDuration) {
    const _Math = Math;
    const rounded = Math.floor(EmptyDuration.year);
    date.setFullYear(date.getFullYear() + rounded);
    const diff = EmptyDuration.year - rounded;
    if (diff > 0) {
      let month;
      if (null != EmptyDuration) {
        month = EmptyDuration.month;
      }
      let num2 = 0;
      if (null !== month) {
        num2 = 0;
        if (undefined !== month) {
          num2 = month;
        }
      }
      EmptyDuration.month = num2;
      EmptyDuration.month = EmptyDuration.month + 12 * diff;
    }
  }
  if ("quarter" in EmptyDuration) {
    const _Math2 = Math;
    const rounded1 = Math.floor(EmptyDuration.quarter);
    date.setMonth(date.getMonth() + 3 * rounded1);
  }
  if ("month" in EmptyDuration) {
    const _Math3 = Math;
    const rounded2 = Math.floor(EmptyDuration.month);
    date.setMonth(date.getMonth() + rounded2);
    const diff1 = EmptyDuration.month - rounded2;
    if (diff1 > 0) {
      let week;
      if (null != EmptyDuration) {
        week = EmptyDuration.week;
      }
      let num6 = 0;
      if (null !== week) {
        num6 = 0;
        if (undefined !== week) {
          num6 = week;
        }
      }
      EmptyDuration.week = num6;
      EmptyDuration.week = EmptyDuration.week + 4 * diff1;
    }
  }
  if ("week" in EmptyDuration) {
    const _Math4 = Math;
    const rounded3 = Math.floor(EmptyDuration.week);
    date.setDate(date.getDate() + 7 * rounded3);
    const diff2 = EmptyDuration.week - rounded3;
    if (diff2 > 0) {
      let day;
      if (null != EmptyDuration) {
        day = EmptyDuration.day;
      }
      let num10 = 0;
      if (null !== day) {
        num10 = 0;
        if (undefined !== day) {
          num10 = day;
        }
      }
      EmptyDuration.day = num10;
      const _Math5 = Math;
      EmptyDuration.day = EmptyDuration.day + Math.round(7 * diff2);
    }
  }
  if ("day" in EmptyDuration) {
    const _Math6 = Math;
    const rounded4 = Math.floor(EmptyDuration.day);
    date.setDate(date.getDate() + rounded4);
    const diff3 = EmptyDuration.day - rounded4;
    if (diff3 > 0) {
      let hour;
      if (null != EmptyDuration) {
        hour = EmptyDuration.hour;
      }
      let num12 = 0;
      if (null !== hour) {
        num12 = 0;
        if (undefined !== hour) {
          num12 = hour;
        }
      }
      EmptyDuration.hour = num12;
      const _Math7 = Math;
      EmptyDuration.hour = EmptyDuration.hour + Math.round(24 * diff3);
    }
  }
  if ("hour" in EmptyDuration) {
    const _Math8 = Math;
    const rounded5 = Math.floor(EmptyDuration.hour);
    date.setHours(date.getHours() + rounded5);
    const diff4 = EmptyDuration.hour - rounded5;
    if (diff4 > 0) {
      let minute;
      if (null != EmptyDuration) {
        minute = EmptyDuration.minute;
      }
      let num15 = 0;
      if (null !== minute) {
        num15 = 0;
        if (undefined !== minute) {
          num15 = minute;
        }
      }
      EmptyDuration.minute = num15;
      const _Math9 = Math;
      EmptyDuration.minute = EmptyDuration.minute + Math.round(60 * diff4);
    }
  }
  if ("minute" in EmptyDuration) {
    const _Math10 = Math;
    const rounded6 = Math.floor(EmptyDuration.minute);
    date.setMinutes(date.getMinutes() + rounded6);
    const diff5 = EmptyDuration.minute - rounded6;
    if (diff5 > 0) {
      let second;
      if (null != EmptyDuration) {
        second = EmptyDuration.second;
      }
      let num18 = 0;
      if (null !== second) {
        num18 = 0;
        if (undefined !== second) {
          num18 = second;
        }
      }
      EmptyDuration.second = num18;
      const _Math11 = Math;
      EmptyDuration.second = EmptyDuration.second + Math.round(60 * diff5);
    }
  }
  if ("second" in EmptyDuration) {
    const _Math12 = Math;
    const rounded7 = Math.floor(EmptyDuration.second);
    date.setSeconds(date.getSeconds() + rounded7);
    const diff6 = EmptyDuration.second - rounded7;
    if (diff6 > 0) {
      let millisecond;
      if (null != EmptyDuration) {
        millisecond = EmptyDuration.millisecond;
      }
      let num21 = 0;
      if (null !== millisecond) {
        num21 = 0;
        if (undefined !== millisecond) {
          num21 = millisecond;
        }
      }
      EmptyDuration.millisecond = num21;
      const _Math13 = Math;
      EmptyDuration.millisecond = EmptyDuration.millisecond + Math.round(1000 * diff6);
    }
  }
  if ("millisecond" in EmptyDuration) {
    const _Math14 = Math;
    const rounded8 = Math.floor(EmptyDuration.millisecond);
    date.setMilliseconds(date.getMilliseconds() + rounded8);
  }
  return date;
};
arg5.reverseDuration = function reverseDuration(parseDurationResult) {
  const obj = {};
  for (const key10004 in arg0) {
    let tmp = key10004;
    obj[key10004] = -arg0[key10004];
    continue;
  }
  return obj;
};
arg5.EmptyDuration = { day: 0, second: 0, millisecond: 0 };