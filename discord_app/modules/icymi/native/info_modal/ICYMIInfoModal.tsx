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
  let obj = extendedOnboarding(7000);
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = obj.useNavigatorScreens(() => {
    let obj = {};
    obj = { headerLeft: null, render: null, impressionName: null, impressionProperties: null };
    let obj2 = NavigatorHeader;
    obj.headerLeft = obj2.getHeaderCloseButton();
    obj.render = function render() {
      return jsx(skipIntro(16468), { extendedOnboarding });
    };
    obj.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW;
    obj = { extended_onboarding: extendedOnboarding };
    obj.impressionProperties = obj;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() =>
        skipIntro(4763).popWithKey(extendedOnboarding(16467).ICYMI_INFO_MODAL_KEY),
      );
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8359).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = closure_1_1(4763);
            arr = arr.pop();
          };
          tmp = jsx(extendedOnboarding(7377).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16476), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS,
    };
    obj2 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj1 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8359).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            let arr = closure_1_1(4763);
            arr = arr.pop();
          };
          tmp = jsx(extendedOnboarding(7377).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16476), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS,
    };
    obj2.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj2.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1114).intl;
      obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(8359).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        let arr = closure_1_1(4763);
        arr = arr.pop();
      };
      return closure_1_4(extendedOnboarding(7377).HeaderActionButton, obj);
    };
    obj2.render = function render() {
      return closure_1_4(skipIntro(16484), {});
    };
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj2;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    obj = { screens: navigatorScreens, steps: tmp4, initialRouteName: null };
    let ICYMIInfoScreens = tmp(16467).ICYMIInfoScreens;
    obj.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp5(tmp(14174).StepModal, obj);
  } else {
    obj = { screens: navigatorScreens, initialRouteName: tmp(16467).ICYMIInfoScreens.DEFAULT };
    return tmp5(tmp(11928).Modal, obj);
  }
}
