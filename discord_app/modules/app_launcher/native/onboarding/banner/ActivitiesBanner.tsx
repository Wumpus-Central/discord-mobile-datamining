// === Module 12049: ActivitiesBanner ===

// Module 12049 (ActivitiesBanner)
import util from "util" /* 1114 */;
import useActivityApplications from "useActivityApplications" /* 12038 */;
import BannerBaseDefault from "BannerBase" /* 12061 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = _slicedToArray(obj.useActivityApplications(obj), 2);
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      obj = { image: tmp8, text: null };
      const intl = util.intl;
      const obj1 = { activityName: tmp4.name };
      obj.text = intl.formatToPlainString(util.t.zHMWuV, obj1);
      tmp6Result = jsx(BannerBaseDefault, { image: tmp8, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
};