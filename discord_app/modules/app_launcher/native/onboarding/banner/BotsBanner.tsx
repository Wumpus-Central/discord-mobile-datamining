// discord_app/modules/app_launcher/native/onboarding/banner/BotsBanner.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../intl/index.native.tsx";
import ApplicationsImageDefault from "ApplicationsImage.tsx";
import BannerBaseDefault from "BannerBase.tsx";
import useBannerBots from "../hooks/useBannerBots.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let context;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (context) => {
      let firstBotApplication;
      let secondBotApplication;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(11);
      context = context.context;
      if (cResult[0] !== context) {
        const obj2 = { context };
        cResult[0] = context;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useBannerBots;
      const bannerBots = tmpResult.useBannerBots(tmp4);
      ({ firstBotApplication, secondBotApplication } = bannerBots);
      if (cResult[2] === firstBotApplication) {
        let tmp6;
        if (cResult[3] === secondBotApplication) {
          tmp6 = cResult[4];
        }
        let tmp9 = null;
        if (null != firstBotApplication) {
          tmp9 = null;
          if (null != secondBotApplication) {
            if (cResult[5] === firstBotApplication.name) {
              let tmp10;
              if (cResult[6] === secondBotApplication.name) {
                tmp10 = cResult[7];
              }
              if (cResult[8] === tmp6) {
                let tmp12;
                if (cResult[9] === tmp10) {
                  tmp12 = cResult[10];
                }
                tmp9 = tmp12;
              }
              const tmp15 = jsx(BannerBaseDefault, { image: tmp6, text: tmp10 });
              cResult[8] = tmp6;
              cResult[9] = tmp10;
              cResult[10] = tmp15;
              tmp12 = tmp15;
            }
            const intl = intl2.intl;
            const obj4 = {
              firstApplicationName: firstBotApplication.name,
              secondApplicationName: secondBotApplication.name,
            };
            const formatToPlainStringResult = intl.formatToPlainString(intl2.t["9SN0xw"], obj4);
            cResult[5] = firstBotApplication.name;
            cResult[6] = secondBotApplication.name;
            cResult[7] = formatToPlainStringResult;
            tmp10 = formatToPlainStringResult;
          }
        }
        return tmp9;
      }
      const tmp7 = jsx(ApplicationsImageDefault, {
        firstApplication: firstBotApplication,
        secondApplication: secondBotApplication,
      });
      cResult[2] = firstBotApplication;
      cResult[3] = secondBotApplication;
      cResult[4] = tmp7;
      tmp6 = tmp7;
    }
  : (context) => {
      let firstBotApplication;
      let secondBotApplication;
      context = context.context;
      const obj = useBannerBots;
      const bannerBots = obj.useBannerBots({ context });
      ({ firstBotApplication, secondBotApplication } = bannerBots);
      let tmp4Result = null;
      if (null != firstBotApplication) {
        tmp4Result = null;
        if (null != secondBotApplication) {
          BannerBaseDefault;
          const intl = intl2.intl;
          const obj3 = {
            firstApplicationName: firstBotApplication.name,
            secondApplicationName: secondBotApplication.name,
          };
          tmp4Result = <tmp5Result image={tmp6} text={intl.formatToPlainString(intl2.t["9SN0xw"], obj3)} />;
        }
      }
      return tmp4Result;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default tmp3;
