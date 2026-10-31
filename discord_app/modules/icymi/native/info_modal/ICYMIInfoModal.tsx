// discord_app/modules/icymi/native/info_modal/ICYMIInfoModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const navigatorScreens = extendedOnboarding(7169).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(18533), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding },
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() =>
        skipIntro(6744).popWithKey(extendedOnboarding(18532).ICYMI_INFO_MODAL_KEY),
      );
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
          const intl = extendedOnboarding(1113).intl;
          obj.text = intl.string(extendedOnboarding(1113).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(16228).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(6744).pop();
          };
          tmp = jsx(extendedOnboarding(7558).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(18541), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS,
    };
    const obj7 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj6 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1113).intl;
          obj.text = intl.string(extendedOnboarding(1113).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(16228).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(6744).pop();
          };
          tmp = jsx(extendedOnboarding(7558).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(18541), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS,
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1113).intl;
      obj.text = intl.string(extendedOnboarding(1113).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(16228).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(6744).pop();
      };
      return closure_1_4(extendedOnboarding(7558).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(18547), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj2 = { screens: navigatorScreens, steps: tmp4, initialRouteName: null };
    let ICYMIInfoScreens = tmp(18532).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    jsx(tmp(13198).StepModal, { screens: navigatorScreens, steps: tmp4, initialRouteName: null });
  } else {
    let obj3 = { screens: navigatorScreens, initialRouteName: tmp(18532).ICYMIInfoScreens.DEFAULT };
    return jsx(tmp(11481).Modal, { screens: navigatorScreens, initialRouteName: tmp(18532).ICYMIInfoScreens.DEFAULT });
  }
  let obj = extendedOnboarding(7169);
}
