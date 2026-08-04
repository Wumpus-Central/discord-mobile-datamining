// discord_app/utils/SecondsSliderUtils.tsx
const result = require("set").fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(rateLimitPerUser, arg1, intl) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let stringResult = intl;
  if (intl === undefined) {
    intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t.Yl1D84);
  }
  const durationResult = importDefault(3775).duration(rateLimitPerUser, "seconds");
  if (durationResult.days() > 0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    let t = require(1236) /* getSystemLocale */.t;
    t = { days: null };
    t[0] = durationResult.days();
    intl6.formatToPlainString(flag ? t.GBLpQ8 : t["k2UNz+"], t);
    const tmp16 = flag ? t.GBLpQ8 : t["k2UNz+"];
  } else if (durationResult.hours() > 0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    let t1 = require(1236) /* getSystemLocale */.t;
    t1 = { hours: null };
    t1[0] = durationResult.hours();
    intl5.formatToPlainString(flag ? t1.rhY1Rs : t1.xCjYxK, t1);
    const tmp13 = flag ? t1.rhY1Rs : t1.xCjYxK;
  } else if (durationResult.minutes() > 0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    let t2 = require(1236) /* getSystemLocale */.t;
    t2 = { minutes: null };
    t2[0] = durationResult.minutes();
    intl4.formatToPlainString(flag ? t2["XIGt+W"] : t2.iXLF9W, t2);
    const tmp10 = flag ? t2["XIGt+W"] : t2.iXLF9W;
  } else if (rateLimitPerUser > 0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    let t3 = require(1236) /* getSystemLocale */.t;
    t3 = { seconds: null };
    t3[0] = durationResult.seconds();
    intl3.formatToPlainString(flag ? t3.pyvjRp : t3.geSp4K, t3);
    const tmp7 = flag ? t3.pyvjRp : t3.geSp4K;
  } else {
    if (flag) {
      const intl2 = require(1236) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1236) /* getSystemLocale */.t.Yl1D84);
    }
    return stringResult;
  }
};