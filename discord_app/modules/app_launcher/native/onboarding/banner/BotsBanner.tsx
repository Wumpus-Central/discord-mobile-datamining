// === Module 11241: BotsBanner ===

// Module 11241 (BotsBanner)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BannerBaseDefault from "BannerBase" /* 11237 */;
import useBannerBots from "useBannerBots" /* 11242 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

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
      const intl = getSystemLocale.intl;
      obj = { firstApplicationName: null, secondApplicationName: null };
      obj[0] = firstBotApplication.name;
      obj[1] = secondBotApplication.name;
      obj[1] = intl.formatToPlainString(getSystemLocale.t["9SN0xw"], obj);
      tmp4Result = jsx(BannerBaseDefault, { firstApplicationName: null, secondApplicationName: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};