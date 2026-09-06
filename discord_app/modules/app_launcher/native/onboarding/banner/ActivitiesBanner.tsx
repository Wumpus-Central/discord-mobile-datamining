// === Module 12049: ActivitiesBanner ===

// Module 12049 (ActivitiesBanner)
import noopAll from "noop" /* 19 */;
import useActivityApplications from "useActivityApplications" /* 12038 */;
import BannerBaseDefault from "BannerBase" /* 12061 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let obj = useActivityApplications;
  obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = callback(obj.useActivityApplications(obj), 2);
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      obj = { image: null, text: null };
      obj[0] = tmp8;
      const intl = tmp(1114).intl;
      obj1 = { activityName: null };
      obj1[0] = tmp4.name;
      obj[1] = intl.formatToPlainString(tmp(1114).t.zHMWuV, obj1);
      tmp6Result = jsx(BannerBaseDefault, { image: null, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
};