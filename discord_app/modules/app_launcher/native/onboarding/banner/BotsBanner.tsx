// === Module 11758: BotsBanner ===

// Module 11758 (BotsBanner)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ApplicationsImageDefault from "ApplicationsImage" /* 11743 */;
import BannerBaseDefault from "BannerBase" /* 11754 */;
import useBannerBots from "useBannerBots" /* 11759 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BotsBanner(context) {
  let tmp2 = dependencyMap;
  const cResult = c.c(11);
  context = context.context;
  if (cResult[0] !== context) {
    const obj2 = { context };
    cResult[0] = context;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const bannerBots = useBannerBots.useBannerBots(tmp4);
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  if (cResult[2] === firstBotApplication) {
    if (cResult[3] === secondBotApplication) {
      let tmp6 = cResult[4];
    }
    let tmp9 = null;
    if (null != firstBotApplication) {
      tmp9 = null;
      if (null != secondBotApplication) {
        if (cResult[5] === firstBotApplication.name) {
          if (cResult[6] === secondBotApplication.name) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp6) {
          }
          const obj3 = { image: tmp6, text: tmp10 };
          tmp2 = jsx(BannerBaseDefault, { image: tmp6, text: tmp10 });
          cResult[8] = tmp6;
          cResult[9] = tmp10;
          cResult[10] = tmp2;
        }
        const intl = util.intl;
        const obj4 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
        const formatToPlainStringResult = intl.formatToPlainString(util.t["9SN0xw"], obj4);
        cResult[5] = firstBotApplication.name;
        cResult[6] = secondBotApplication.name;
        cResult[7] = formatToPlainStringResult;
        tmp10 = formatToPlainStringResult;
      }
    }
    return tmp9;
  }
  const tmp7 = jsx(ApplicationsImageDefault, { firstApplication: firstBotApplication, secondApplication: secondBotApplication });
  cResult[2] = firstBotApplication;
  cResult[3] = secondBotApplication;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const tmpResult = useBannerBots;
}) : (function BotsBanner(context) {
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
});