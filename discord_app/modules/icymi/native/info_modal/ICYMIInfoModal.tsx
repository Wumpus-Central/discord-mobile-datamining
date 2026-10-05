// === Module 16410: ICYMIInfoModal ===

// Module 16410 (ICYMIInfoModal)
import c from "c" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Modal from "Modal" /* 10976 */;
import StepModal from "StepModal" /* 14272 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16411 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((extendedOnboarding) => {
  const cResult = extendedOnboarding(576).c(4);
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  if (cResult[0] === extendedOnboarding) {
    if (cResult[1] === skipIntro) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    return tmp(6496).useNavigatorScreens(tmp4, tmp5);
  }
  const fn = function t() {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16412), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(5093).popWithKey(extendedOnboarding(16411).ICYMI_INFO_MODAL_KEY));
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
          const intl = extendedOnboarding(1126).intl;
          obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5093).pop();
          };
          tmp = jsx(extendedOnboarding(6880).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16420), {});
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
          const intl = extendedOnboarding(1126).intl;
          obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5093).pop();
          };
          tmp = jsx(extendedOnboarding(6880).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16420), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1126).intl;
      obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(5093).pop();
      };
      return closure_1_4(extendedOnboarding(6880).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16428), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  };
  const items = [extendedOnboarding, skipIntro];
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  let obj = extendedOnboarding(576);
  tmp = extendedOnboarding;
}) : ((extendedOnboarding) => {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const items = [extendedOnboarding, skipIntro];
  return extendedOnboarding(6496).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16412), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(5093).popWithKey(extendedOnboarding(16411).ICYMI_INFO_MODAL_KEY));
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
          const intl = extendedOnboarding(1126).intl;
          obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5093).pop();
          };
          tmp = jsx(extendedOnboarding(6880).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16420), {});
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
          const intl = extendedOnboarding(1126).intl;
          obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(5093).pop();
          };
          tmp = jsx(extendedOnboarding(6880).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16420), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1126).intl;
      obj.text = intl.string(extendedOnboarding(1126).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(14165).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(5093).pop();
      };
      return closure_1_4(extendedOnboarding(6880).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16428), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ extendedOnboarding, skipIntro } = arg0);
  if (cResult[0] === extendedOnboarding) {
    if (cResult[1] === skipIntro) {
      let tmp4 = cResult[2];
    }
    const tmp6 = closure_5(tmp4);
    if (cResult[3] === extendedOnboarding) {
      if (cResult[4] === skipIntro) {
        if (extendedOnboarding) {
          const ICYMIInfoScreens = ICYMIInfoModalTypes.ICYMIInfoScreens;
          const tmp13 = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === tmp13) {
                let tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj2 = { screens: tmp6, steps: tmp7, initialRouteName: tmp13 };
          const tmp16 = jsx(StepModal.StepModal, { screens: tmp6, steps: tmp7, initialRouteName: tmp13 });
          cResult[8] = tmp6;
          cResult[9] = tmp7;
          cResult[10] = tmp13;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        } else {
          if (cResult[6] !== tmp6) {
            const obj3 = { screens: tmp6, initialRouteName: ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT };
            const tmp12 = jsx(Modal.Modal, { screens: tmp6, initialRouteName: ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT });
            cResult[6] = tmp6;
            cResult[7] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
    }
    let ICYMIInfoScreens1 = ICYMIInfoModalTypes.ICYMIInfoScreens;
    if (!extendedOnboarding) {
      const items = [ICYMIInfoScreens1.DEFAULT];
      cResult[3] = extendedOnboarding;
      cResult[4] = skipIntro;
      cResult[5] = items;
    }
    if (skipIntro) {
      ICYMIInfoScreens1 = [, ];
      ICYMIInfoScreens1[0] = ICYMIInfoScreens1.TOPICS_CLOUD;
      ICYMIInfoScreens1[1] = ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS;
      let items1 = ICYMIInfoScreens1;
    } else {
      items1 = [ICYMIInfoScreens1.DEFAULT, ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD, ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS];
    }
  }
  const obj4 = { extendedOnboarding, skipIntro };
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((extendedOnboarding) => {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const tmp = closure_5({ extendedOnboarding, skipIntro });
  let items = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    const obj2 = { screens: tmp, steps: tmp2, initialRouteName: null };
    let ICYMIInfoScreens = tmp4(16411).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    jsx(tmp4(14272).StepModal, { screens: tmp, steps: tmp2, initialRouteName: null });
  } else {
    const obj = { screens: tmp, initialRouteName: tmp4(16411).ICYMIInfoScreens.DEFAULT };
    return jsx(tmp4(10976).Modal, { screens: tmp, initialRouteName: tmp4(16411).ICYMIInfoScreens.DEFAULT });
  }
});