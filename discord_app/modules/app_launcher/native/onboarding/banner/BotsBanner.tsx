// discord_app/modules/app_launcher/native/onboarding/banner/BotsBanner.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useBannerBots").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let obj = require(11254) /* useBannerBots */;
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
      tmp4Result = jsx(importDefault(11249), { firstApplicationName: null, secondApplicationName: null });
      const tmp5Result = importDefault(11249);
    }
  }
  return tmp4Result;
};