// _runtime/10434_EmptyDuration.js

export const addDuration = function addDuration(dateWithAdjustedTimezone, start8) {
  const date = new Date(dateWithAdjustedTimezone);
  if (start8.y) {
    start8.year = start8.y;
    delete tmp[tmp2];
  }
  if (start8.mo) {
    start8.month = start8.mo;
    delete tmp[tmp2];
  }
  if (start8.M) {
    start8.month = start8.M;
    delete tmp[tmp2];
  }
  if (start8.w) {
    start8.week = start8.w;
    delete tmp[tmp2];
  }
  if (start8.d) {
    start8.day = start8.d;
    delete tmp[tmp2];
  }
  if (start8.h) {
    start8.hour = start8.h;
    delete tmp[tmp2];
  }
  if (start8.m) {
    start8.minute = start8.m;
    delete tmp[tmp2];
  }
  if (start8.s) {
    start8.second = start8.s;
    delete tmp[tmp2];
  }
  if (start8.ms) {
    start8.millisecond = start8.ms;
    delete tmp[tmp2];
  }
  if ("year" in start8) {
    const _Math = Math;
    const rounded = Math.floor(start8.year);
    date.setFullYear(date.getFullYear() + rounded);
    const diff = start8.year - rounded;
    if (diff > 0) {
      let month;
      if (null != start8) {
        month = start8.month;
      }
      let num2 = 0;
      if (null !== month) {
        num2 = 0;
        if (undefined !== month) {
          num2 = month;
        }
      }
      start8.month = num2;
      start8.month = start8.month + 12 * diff;
    }
  }
  if ("quarter" in start8) {
    const _Math2 = Math;
    const rounded1 = Math.floor(start8.quarter);
    date.setMonth(date.getMonth() + 3 * rounded1);
  }
  if ("month" in start8) {
    const _Math3 = Math;
    const rounded2 = Math.floor(start8.month);
    date.setMonth(date.getMonth() + rounded2);
    const diff1 = start8.month - rounded2;
    if (diff1 > 0) {
      let week;
      if (null != start8) {
        week = start8.week;
      }
      let num6 = 0;
      if (null !== week) {
        num6 = 0;
        if (undefined !== week) {
          num6 = week;
        }
      }
      start8.week = num6;
      start8.week = start8.week + 4 * diff1;
    }
  }
  if ("week" in start8) {
    const _Math4 = Math;
    const rounded3 = Math.floor(start8.week);
    date.setDate(date.getDate() + 7 * rounded3);
    const diff2 = start8.week - rounded3;
    if (diff2 > 0) {
      let day;
      if (null != start8) {
        day = start8.day;
      }
      let num10 = 0;
      if (null !== day) {
        num10 = 0;
        if (undefined !== day) {
          num10 = day;
        }
      }
      start8.day = num10;
      const _Math5 = Math;
      start8.day = start8.day + Math.round(7 * diff2);
    }
  }
  if ("day" in start8) {
    const _Math6 = Math;
    const rounded4 = Math.floor(start8.day);
    date.setDate(date.getDate() + rounded4);
    const diff3 = start8.day - rounded4;
    if (diff3 > 0) {
      let hour;
      if (null != start8) {
        hour = start8.hour;
      }
      let num12 = 0;
      if (null !== hour) {
        num12 = 0;
        if (undefined !== hour) {
          num12 = hour;
        }
      }
      start8.hour = num12;
      const _Math7 = Math;
      start8.hour = start8.hour + Math.round(24 * diff3);
    }
  }
  if ("hour" in start8) {
    const _Math8 = Math;
    const rounded5 = Math.floor(start8.hour);
    date.setHours(date.getHours() + rounded5);
    const diff4 = start8.hour - rounded5;
    if (diff4 > 0) {
      let minute;
      if (null != start8) {
        minute = start8.minute;
      }
      let num15 = 0;
      if (null !== minute) {
        num15 = 0;
        if (undefined !== minute) {
          num15 = minute;
        }
      }
      start8.minute = num15;
      const _Math9 = Math;
      start8.minute = start8.minute + Math.round(60 * diff4);
    }
  }
  if ("minute" in start8) {
    const _Math10 = Math;
    const rounded6 = Math.floor(start8.minute);
    date.setMinutes(date.getMinutes() + rounded6);
    const diff5 = start8.minute - rounded6;
    if (diff5 > 0) {
      let second;
      if (null != start8) {
        second = start8.second;
      }
      let num18 = 0;
      if (null !== second) {
        num18 = 0;
        if (undefined !== second) {
          num18 = second;
        }
      }
      start8.second = num18;
      const _Math11 = Math;
      start8.second = start8.second + Math.round(60 * diff5);
    }
  }
  if ("second" in start8) {
    const _Math12 = Math;
    const rounded7 = Math.floor(start8.second);
    date.setSeconds(date.getSeconds() + rounded7);
    const diff6 = start8.second - rounded7;
    if (diff6 > 0) {
      let millisecond;
      if (null != start8) {
        millisecond = start8.millisecond;
      }
      let num21 = 0;
      if (null !== millisecond) {
        num21 = 0;
        if (undefined !== millisecond) {
          num21 = millisecond;
        }
      }
      start8.millisecond = num21;
      const _Math13 = Math;
      start8.millisecond = start8.millisecond + Math.round(1000 * diff6);
    }
  }
  if ("millisecond" in start8) {
    const _Math14 = Math;
    const rounded8 = Math.floor(start8.millisecond);
    date.setMilliseconds(date.getMilliseconds() + rounded8);
  }
  return date;
};
export const reverseDuration = function reverseDuration(parseDurationResult) {
  const obj = {};
  for (const key10004 in arg0) {
    obj[key10004] = -arg0[key10004];
    continue;
  }
  return obj;
};
export const EmptyDuration = { day: 0, second: 0, millisecond: 0 };
