// discord_app/modules/app_launcher/native/onboarding/banner/BotsBanner.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import BannerBaseDefault from "BannerBase.tsx";
import useBannerBots from "../hooks/useBannerBots.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let obj = useBannerBots;
  const bannerBots = obj.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      obj = { image: null, text: null };
      obj[0] = tmp6;
      const intl = tmp(1236).intl;
      obj = { firstApplicationName: null, secondApplicationName: null };
      obj[0] = firstBotApplication.name;
      obj[1] = secondBotApplication.name;
      obj[1] = intl.formatToPlainString(tmp(1236).t["9SN0xw"], obj);
      tmp4Result = jsx(BannerBaseDefault, { firstApplicationName: null, secondApplicationName: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};