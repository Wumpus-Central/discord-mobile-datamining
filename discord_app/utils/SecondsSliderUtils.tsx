// discord_app/utils/SecondsSliderUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import getSystemLocale from "../intl/index.native.tsx";
import tDefault from "../../_runtime/03975_t.js";

const result = obj132.fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(closure_1_36, arg1, intl) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let stringResult = intl;
  if (intl === undefined) {
    intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.Yl1D84);
  }
  const time = tDefault.duration(closure_1_36, "seconds");
  if (time.days() > 0) {
    const intl6 = getSystemLocale.intl;
    const t = { days: null };
    t[0] = time.days();
    intl6.formatToPlainString(flag ? t.GBLpQ8 : t["k2UNz+"], t);
  } else if (time.hours() > 0) {
    const intl5 = getSystemLocale.intl;
    const t1 = { hours: null };
    t1[0] = time.hours();
    intl5.formatToPlainString(flag ? t1.rhY1Rs : t1.xCjYxK, t1);
  } else if (time.minutes() > 0) {
    const intl4 = getSystemLocale.intl;
    const t2 = { minutes: null };
    t2[0] = time.minutes();
    intl4.formatToPlainString(flag ? t2["XIGt+W"] : t2.iXLF9W, t2);
  } else if (closure_1_36 > 0) {
    const intl3 = getSystemLocale.intl;
    const t3 = { seconds: null };
    t3[0] = time.seconds();
    intl3.formatToPlainString(flag ? t3.pyvjRp : t3.geSp4K, t3);
  } else {
    if (flag) {
      const intl2 = getSystemLocale.intl;
      stringResult = intl2.string(getSystemLocale.t.Yl1D84);
    }
    return stringResult;
  }
};