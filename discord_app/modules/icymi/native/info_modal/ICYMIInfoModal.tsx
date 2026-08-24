// discord_app/modules/icymi/native/info_modal/ICYMIInfoModal.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  let obj = extendedOnboarding(6312);
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, render: null, impressionName: null, impressionProperties: null };
    let obj2 = extendedOnboarding(closure_1_2[4]);
    obj[0] = obj2.getHeaderCloseButton();
    obj[1] = function render() {
      return closure_1_4(closure_1_1(closure_1_2[5]), { extendedOnboarding: closure_0 });
    };
    obj[2] = extendedOnboarding(closure_1_2[6]).ImpressionNames.ICYMI_ONBOARDING_OVERVIEW;
    obj = { extended_onboarding: extendedOnboarding };
    obj[3] = obj;
    obj[extendedOnboarding(closure_1_2[3]).ICYMIInfoScreens.DEFAULT] = obj;
    const obj5 = extendedOnboarding(closure_1_2[4]);
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => callback2(5260).popWithKey(callback(15723).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[extendedOnboarding(closure_1_2[3]).ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!closure_1) {
          const obj = { text: null, onPress: null };
          const intl = closure_1_0(closure_1_2[9]).intl;
          obj[0] = intl.string(closure_1_0(closure_1_2[9]).t["5Wxrcd"]);
          obj[1] = function onPress() {
            const ICYMIAnalytics = callback(9065).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = callback2(5260);
            arr = arr.pop();
          };
          tmp = closure_1_4(closure_1_0(closure_1_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      },
      render() {
        return callback3(callback2(15732), {});
      },
      impressionName: extendedOnboarding(closure_1_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj2 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    obj1 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!closure_1) {
          const obj = { text: null, onPress: null };
          const intl = closure_1_0(closure_1_2[9]).intl;
          obj[0] = intl.string(closure_1_0(closure_1_2[9]).t["5Wxrcd"]);
          obj[1] = function onPress() {
            const ICYMIAnalytics = callback(9065).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = callback2(5260);
            arr = arr.pop();
          };
          tmp = closure_1_4(closure_1_0(closure_1_2[8]).HeaderActionButton, obj);
        }
        return tmp;
      },
      render() {
        return callback3(callback2(15732), {});
      },
      impressionName: extendedOnboarding(closure_1_2[6]).ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj2[0] = extendedOnboarding(closure_1_2[4]).getHeaderBackButton();
    obj2[1] = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = callback(1236).intl;
      obj[0] = intl.string(callback(1236).t["5Wxrcd"]);
      obj[1] = function onPress() {
        const ICYMIAnalytics = callback(9065).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        let arr = callback2(5260);
        arr = arr.pop();
      };
      return callback3(callback(5432).HeaderActionButton, obj);
    };
    obj2[2] = function render() {
      return callback3(callback2(15740), {});
    };
    obj2[3] = extendedOnboarding(closure_1_2[6]).ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[extendedOnboarding(closure_1_2[3]).ICYMIInfoScreens.JOIN_GUILDS] = obj2;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    obj = { screens: null, steps: null, initialRouteName: null };
    obj[0] = navigatorScreens;
    obj[1] = tmp4;
    let ICYMIInfoScreens = tmp(15723).ICYMIInfoScreens;
    obj[2] = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp5(tmp(13538).StepModal, obj);
  } else {
    obj = { screens: null, initialRouteName: null };
    obj[0] = navigatorScreens;
    obj[1] = tmp(15723).ICYMIInfoScreens.DEFAULT;
    return tmp5(tmp(11115).Modal, obj);
  }
};