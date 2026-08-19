// discord_app/modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import useActivityApplications from "../hooks/useActivityApplications.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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