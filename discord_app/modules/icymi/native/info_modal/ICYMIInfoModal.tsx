// === Module 16410: ICYMIInfoModal ===

// Module 16410 (ICYMIInfoModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import Modal2 from "Modal" /* 10976 */;
import StepModal2 from "StepModal" /* 14272 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16411 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((extendedOnboarding) => {
  let tmp = extendedOnboarding;
  let obj = extendedOnboarding(576);
  const cResult = obj.c(4);
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  if (cResult[0] === extendedOnboarding) {
    let tmp4;
    let tmp5;
    if (cResult[1] === skipIntro) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
    }
    let tmpResult = tmp(6496);
    return tmpResult.useNavigatorScreens(tmp4, tmp5);
  }
  const fn = function t() {
    let headerCloseButton;
    let obj3;
    let obj4;
    let tmpResult;
    function headerRight() {
      let tmp = null;
      if (!skipIntro) {
        const HeaderActionButton = extendedOnboarding(dependencyMap[9]).HeaderActionButton;
        const intl = extendedOnboarding(dependencyMap[10]).intl;
        tmp = <HeaderActionButton text={intl.string(extendedOnboarding(dependencyMap[10]).t["5Wxrcd"])} onPress={function onPress() {
          const ICYMIAnalytics = extendedOnboarding(closure_1_2[11]).ICYMIAnalytics;
          const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
          const arr = closure_1_1(closure_1_2[8]);
          arr.pop();
        }} />;
      }
      return tmp;
    }
    function render() {
      return closure_1_4(skipIntro(closure_1_2[12]), {});
    }
    let obj = {};
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(dependencyMap[6]), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: obj4
    };
    const DEFAULT = ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT;
    obj4 = { extended_onboarding: extendedOnboarding };
    obj[DEFAULT] = obj2;
    obj3 = NavigatorHeader;
    const TOPICS_CLOUD = ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      headerCloseButton = obj5.getHeaderCloseButton(() => {
        const obj = skipIntro(closure_1_2[8]);
        return obj.popWithKey(extendedOnboarding(closure_1_2[4]).ICYMI_INFO_MODAL_KEY);
      });
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[TOPICS_CLOUD] = { headerLeft: headerCloseButton, headerRight, render, impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS };
    const obj7 = {
      headerLeft: tmpResult.getHeaderBackButton(),
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(extendedOnboarding(closure_1_2[10]).t["5Wxrcd"]),
          onPress() {
            const ICYMIAnalytics = extendedOnboarding(closure_1_2[11]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
            const arr = closure_1_1(closure_1_2[8]);
            arr.pop();
          }
        };
        const HeaderActionButton = extendedOnboarding(closure_1_2[9]).HeaderActionButton;
        intl = extendedOnboarding(closure_1_2[10]).intl;
        return closure_1_4(HeaderActionButton, obj);
      },
      render() {
        return closure_1_4(skipIntro(closure_1_2[13]), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS
    };
    ({ headerLeft: headerCloseButton, headerRight, render, impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS });
    const JOIN_GUILDS = ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS;
    obj[JOIN_GUILDS] = obj7;
    tmpResult = NavigatorHeader;
    return obj;
  };
  const items = [extendedOnboarding, skipIntro];
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((extendedOnboarding) => {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  let obj = extendedOnboarding(6496);
  const items = [extendedOnboarding, skipIntro];
  return obj.useNavigatorScreens(() => {
    let headerCloseButton;
    let obj3;
    let obj4;
    let tmpResult;
    function headerRight() {
      let tmp = null;
      if (!skipIntro) {
        const HeaderActionButton = extendedOnboarding(dependencyMap[9]).HeaderActionButton;
        const intl = extendedOnboarding(dependencyMap[10]).intl;
        tmp = <HeaderActionButton text={intl.string(extendedOnboarding(dependencyMap[10]).t["5Wxrcd"])} onPress={function onPress() {
          const ICYMIAnalytics = extendedOnboarding(closure_1_2[11]).ICYMIAnalytics;
          const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
          const arr = closure_1_1(closure_1_2[8]);
          arr.pop();
        }} />;
      }
      return tmp;
    }
    function render() {
      return closure_1_4(skipIntro(closure_1_2[12]), {});
    }
    let obj = {};
    const obj2 = {
      headerLeft: obj3.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(dependencyMap[6]), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: obj4
    };
    const DEFAULT = ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT;
    obj4 = { extended_onboarding: extendedOnboarding };
    obj[DEFAULT] = obj2;
    obj3 = NavigatorHeader;
    const TOPICS_CLOUD = ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      headerCloseButton = obj5.getHeaderCloseButton(() => {
        const obj = skipIntro(closure_1_2[8]);
        return obj.popWithKey(extendedOnboarding(closure_1_2[4]).ICYMI_INFO_MODAL_KEY);
      });
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    obj[TOPICS_CLOUD] = { headerLeft: headerCloseButton, headerRight, render, impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS };
    const obj7 = {
      headerLeft: tmpResult.getHeaderBackButton(),
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(extendedOnboarding(closure_1_2[10]).t["5Wxrcd"]),
          onPress() {
            const ICYMIAnalytics = extendedOnboarding(closure_1_2[11]).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
            const arr = closure_1_1(closure_1_2[8]);
            arr.pop();
          }
        };
        const HeaderActionButton = extendedOnboarding(closure_1_2[9]).HeaderActionButton;
        intl = extendedOnboarding(closure_1_2[10]).intl;
        return closure_1_4(HeaderActionButton, obj);
      },
      render() {
        return closure_1_4(skipIntro(closure_1_2[13]), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS
    };
    ({ headerLeft: headerCloseButton, headerRight, render, impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS });
    const JOIN_GUILDS = ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS;
    obj[JOIN_GUILDS] = obj7;
    tmpResult = NavigatorHeader;
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let extendedOnboarding;
  let skipIntro;
  const obj = react2;
  const cResult = obj.c(12);
  ({ extendedOnboarding, skipIntro } = arg0);
  if (cResult[0] === extendedOnboarding) {
    let tmp4;
    let items2;
    if (cResult[1] === skipIntro) {
      tmp4 = cResult[2];
    }
    const tmp6 = closure_5(tmp4);
    if (cResult[3] === extendedOnboarding) {
      let tmp7;
      if (cResult[4] === skipIntro) {
        tmp7 = cResult[5];
      }
      if (extendedOnboarding) {
        const ICYMIInfoScreens2 = ICYMIInfoModalTypes.ICYMIInfoScreens;
        const tmp11 = skipIntro ? ICYMIInfoScreens2.TOPICS_CLOUD : ICYMIInfoScreens2.DEFAULT;
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp7) {
            let tmp12;
            if (cResult[10] === tmp11) {
              tmp12 = cResult[11];
            }
            return tmp12;
          }
        }
        const tmp14 = jsx(StepModal2.StepModal, { screens: tmp6, steps: tmp7, initialRouteName: tmp11 });
        cResult[8] = tmp6;
        cResult[9] = tmp7;
        cResult[10] = tmp11;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      } else {
        let tmp8;
        if (cResult[6] !== tmp6) {
          const Modal = Modal2.Modal;
          const tmp10 = <Modal screens={tmp6} initialRouteName={ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT} />;
          cResult[6] = tmp6;
          cResult[7] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[7];
        }
        return tmp8;
      }
    }
    const ICYMIInfoScreens = ICYMIInfoModalTypes.ICYMIInfoScreens;
    if (extendedOnboarding) {
      let items1;
      if (skipIntro) {
        const items = [ICYMIInfoScreens.TOPICS_CLOUD, ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS];
        items1 = items;
      } else {
        items1 = [ICYMIInfoScreens.DEFAULT, ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD, ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS];
      }
      items2 = items1;
    } else {
      items2 = [ICYMIInfoScreens.DEFAULT];
    }
    cResult[3] = extendedOnboarding;
    cResult[4] = skipIntro;
    cResult[5] = items2;
    tmp7 = items2;
  }
  const obj4 = { extendedOnboarding, skipIntro };
  cResult[0] = extendedOnboarding;
  cResult[1] = skipIntro;
  cResult[2] = obj4;
  tmp4 = obj4;
}) : ((extendedOnboarding) => {
  let tmp3Result;
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  const tmp = closure_5({ extendedOnboarding, skipIntro });
  let items = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    const StepModal = tmp4(14272).StepModal;
    let ICYMIInfoScreens = tmp4(16411).ICYMIInfoScreens;
    tmp3Result = <StepModal screens={tmp} steps={tmp2} initialRouteName={skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT} />;
  } else {
    const Modal = tmp4(10976).Modal;
    tmp3Result = <Modal screens={tmp} initialRouteName={extendedOnboarding(16411).ICYMIInfoScreens.DEFAULT} />;
  }
  return tmp3Result;
});
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default tmp2;