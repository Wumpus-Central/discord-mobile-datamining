// === Module 16563: ICYMIInfoModal ===

// Module 16563 (ICYMIInfoModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1248 */;
import NavigatorHeader from "NavigatorHeader" /* 5705 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16564 */;
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
  const navigatorScreens = extendedOnboarding(7103).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16565), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(4839).popWithKey(extendedOnboarding(16564).ICYMI_INFO_MODAL_KEY));
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
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8477).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4839).pop();
          };
          tmp = jsx(extendedOnboarding(7480).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16573), {});
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
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8477).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4839).pop();
          };
          tmp = jsx(extendedOnboarding(7480).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16573), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1114).intl;
      obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(8477).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(4839).pop();
      };
      return closure_1_4(extendedOnboarding(7480).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16581), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj2 = { screens: navigatorScreens, steps: tmp4, initialRouteName: null };
    let ICYMIInfoScreens = tmp(16564).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    jsx(tmp(14263).StepModal, { screens: navigatorScreens, steps: tmp4, initialRouteName: null });
  } else {
    let obj3 = { screens: navigatorScreens, initialRouteName: tmp(16564).ICYMIInfoScreens.DEFAULT };
    return jsx(tmp(12059).Modal, { screens: navigatorScreens, initialRouteName: tmp(16564).ICYMIInfoScreens.DEFAULT });
  }
  let obj = extendedOnboarding(7103);
};