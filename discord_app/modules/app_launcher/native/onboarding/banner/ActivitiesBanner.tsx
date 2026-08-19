// === Module 11222: ActivitiesBanner ===

// Module 11222 (ActivitiesBanner)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useActivityApplications from "useActivityApplications" /* 11211 */;
import BannerBaseDefault from "BannerBase" /* 11237 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = callback(obj.useActivityApplications(obj), 2);
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      obj = { image: null, text: null };
      obj[0] = tmp8;
      const intl = getSystemLocale.intl;
      obj1 = { activityName: null };
      obj1[0] = tmp4.name;
      obj[1] = intl.formatToPlainString(getSystemLocale.t.zHMWuV, obj1);
      tmp6Result = jsx(BannerBaseDefault, { image: null, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
};