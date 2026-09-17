// === Module 12216: BotsBanner ===

// Module 12216 (BotsBanner)
import util from "util" /* 1115 */;
import BannerBaseDefault from "BannerBase" /* 12212 */;
import useBannerBots from "useBannerBots" /* 12217 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  const bannerBots = useBannerBots.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      const obj2 = { image: tmp6, text: null };
      const intl = util.intl;
      const obj3 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj2.text = intl.formatToPlainString(util.t["9SN0xw"], obj3);
      tmp4Result = jsx(BannerBaseDefault, { image: tmp6, text: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};