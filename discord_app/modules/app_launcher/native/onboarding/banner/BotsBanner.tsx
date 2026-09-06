// === Module 12065: BotsBanner ===

// Module 12065 (BotsBanner)
import BannerBaseDefault from "BannerBase" /* 12061 */;
import useBannerBots from "useBannerBots" /* 12066 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let obj = useBannerBots;
  const bannerBots = obj.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      obj = { image: tmp6, text: null };
      const intl = tmp(1114).intl;
      obj = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj.text = intl.formatToPlainString(tmp(1114).t["9SN0xw"], obj);
      tmp4Result = jsx(BannerBaseDefault, { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};