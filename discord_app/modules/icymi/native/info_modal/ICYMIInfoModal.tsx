// === Module 16081: ICYMIInfoModal ===

// Module 16081 (ICYMIInfoModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import NavigatorHeader from "NavigatorHeader" /* 5931 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16082 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  closure_129_0 = extendedOnboarding;
  closure_129_1 = skipIntro;
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = extendedOnboarding(6416).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16083), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(5032).popWithKey(extendedOnboarding(16082).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    const obj4 = { extended_onboarding: extendedOnboarding };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1115).intl;
          obj.text = intl.string(extendedOnboarding(1115).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(7799).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5032).pop();
          };
          tmp = jsx(extendedOnboarding(6790).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16091), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    const obj7 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj6 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1115).intl;
          obj.text = intl.string(extendedOnboarding(1115).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(7799).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5032).pop();
          };
          tmp = jsx(extendedOnboarding(6790).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16091), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1115).intl;
      obj.text = intl.string(extendedOnboarding(1115).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(7799).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(5032).pop();
      };
      return closure_1_4(extendedOnboarding(6790).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16099), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj2 = { screens: navigatorScreens, steps: tmp4, initialRouteName: null };
    let ICYMIInfoScreens = tmp(16082).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    jsx(tmp(13710).StepModal, { screens: navigatorScreens, steps: tmp4, initialRouteName: null });
  } else {
    let obj3 = { screens: navigatorScreens, initialRouteName: tmp(16082).ICYMIInfoScreens.DEFAULT };
    return jsx(tmp(10756).Modal, { screens: navigatorScreens, initialRouteName: tmp(16082).ICYMIInfoScreens.DEFAULT });
  }
  let obj = extendedOnboarding(6416);
};