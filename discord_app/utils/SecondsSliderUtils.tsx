// discord_app/utils/SecondsSliderUtils.tsx
import util from "../intl/index.native.tsx";
import _modDef4153 from "../../_runtime/metro/04153__.js";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("utils/SecondsSliderUtils.tsx");

export const getSecondsSliderLabel = function getSecondsSliderLabel(rateLimitPerUser, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let stringResult = intl;
  if (intl === undefined) {
    intl = util.intl;
    stringResult = intl.string(util.t.Yl1D84);
  }
  const time = _modDef4153.duration(rateLimitPerUser, "seconds");
  if (time.days() > 0) {
    const intl6 = util.intl;
    const t = { days: time.days() };
    intl6.formatToPlainString(flag ? t.GBLpQ8 : t["k2UNz+"], t);
    const tmp16 = flag ? t.GBLpQ8 : t["k2UNz+"];
  } else if (time.hours() > 0) {
    const intl5 = util.intl;
    const t1 = { hours: time.hours() };
    intl5.formatToPlainString(flag ? t1.rhY1Rs : t1.xCjYxK, t1);
    const tmp13 = flag ? t1.rhY1Rs : t1.xCjYxK;
  } else if (time.minutes() > 0) {
    const intl4 = util.intl;
    const t2 = { minutes: time.minutes() };
    intl4.formatToPlainString(flag ? t2["XIGt+W"] : t2.iXLF9W, t2);
    const tmp10 = flag ? t2["XIGt+W"] : t2.iXLF9W;
  } else if (rateLimitPerUser > 0) {
    const intl3 = util.intl;
    const t3 = { seconds: time.seconds() };
    intl3.formatToPlainString(flag ? t3.pyvjRp : t3.geSp4K, t3);
    const tmp7 = flag ? t3.pyvjRp : t3.geSp4K;
  } else {
    if (flag) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.Yl1D84);
    }
    return stringResult;
  }
};
