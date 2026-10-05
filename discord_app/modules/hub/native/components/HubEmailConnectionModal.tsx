// === Module 12394: HubEmailConnectionModal ===

// Module 12394 (HubEmailConnectionModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import Navigator2 from "Navigator" /* 6496 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import HubConstants from "HubConstants" /* 12385 */;
import HubEmailConnectionStudentPromptDefault from "HubEmailConnectionStudentPrompt" /* 12395 */;
import HubEmailConnectionContentDefault from "HubEmailConnectionContent" /* 12398 */;
import HubEmailConnectionWaitlistDefault from "HubEmailConnectionWaitlist" /* 12403 */;
import HubEmailConnectionSubmitSchoolDefault from "HubEmailConnectionSubmitSchool" /* 12405 */;
import HubEmailConnectionGuildSelectDefault from "HubEmailConnectionGuildSelect" /* 12406 */;
import HubEmailConnectionPinVerifyDefault from "HubEmailConnectionPinVerify" /* 12407 */;
import HubEmailConnectionGuildSelectSearchDefault from "HubEmailConnectionGuildSelectSearch" /* 12410 */;
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12412 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, isNestedNavigator, navigation;

let obj2;
function getScreens(pop, arg1) {
  let headerBackButton;
  let obj3;
  let tmp6;
  function impressionProperties(invite) {
    return { has_invite: null != invite.invite };
  }
  function headerTitle() {
    return null;
  }
  function render(arg0) {
    HubEmailConnectionContentDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  }
  const obj = NavigatorHeader;
  const tmp3 = arg1;
  if (tmp3) {
    headerBackButton = obj.getHeaderBackButton(pop);
    tmp6 = require;
  } else {
    headerBackButton = obj.getHeaderCloseButton(pop);
    tmp6 = require;
  }
  const obj2 = { [closure_1_3.STUDENT_PROMPT]: obj3 };
  obj3 = {
    fullscreen: true,
    headerLeft: headerBackButton,
    headerTitle() {
      return null;
    },
    render(arg0) {
      HubEmailConnectionStudentPromptDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj2[HubEmailConnectionSteps.VERIFY_EMAIL] = { impressionName: tmp6(1260).ImpressionNames.HUB_EMAIL_SIGNUP, impressionProperties, fullscreen: true, headerLeft: headerBackButton, headerTitle, render };
  obj2[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      HubEmailConnectionWaitlistDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj2[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      HubEmailConnectionSubmitSchoolDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj2[HubEmailConnectionSteps.SELECT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      HubEmailConnectionGuildSelectDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj2[HubEmailConnectionSteps.VERIFY_PIN] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      HubEmailConnectionPinVerifyDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj2[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
    fullscreen: true,
    headerShown: false,
    render(arg0) {
      HubEmailConnectionGuildSelectSearchDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  ({ impressionName: tmp6(1260).ImpressionNames.HUB_EMAIL_SIGNUP, impressionProperties, fullscreen: true, headerLeft: headerBackButton, headerTitle, render });
  return obj2;
}
const HubEmailConnectionSteps = HubConstants.HubEmailConnectionSteps;
let jsx = Fragment.jsx;
let obj = { safeArea: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp4 = closure_5();
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.safeArea) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: tmp4.safeArea, children });
  cResult[0] = children;
  cResult[1] = tmp4.safeArea;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((children) => {
  children = children.children;
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isNestedNavigator) => {
  let initialRouteStack;
  let invite;
  let screens;
  let tmp = isNestedNavigator;
  const tmp2 = invite;
  let obj = isNestedNavigator(invite[15]);
  const cResult = obj.c(10);
  isNestedNavigator = isNestedNavigator.isNestedNavigator;
  const onCloseExtra = isNestedNavigator.onCloseExtra;
  invite = isNestedNavigator.invite;
  const displayStudentPrompt = isNestedNavigator.displayStudentPrompt;
  let obj2 = isNestedNavigator(invite[17]);
  navigation = obj2.useNavigation();
  if (cResult[0] === displayStudentPrompt) {
    if (cResult[1] === invite) {
      if (cResult[2] === isNestedNavigator) {
        if (cResult[3] === onCloseExtra) {
          let tmp5;
          let tmp9;
          if (cResult[4] === navigation) {
            tmp5 = cResult[5];
          }
          ({ screens, initialRouteStack } = onCloseExtra(tmp2[19])(tmp5));
          const _Symbol = Symbol;
          onCloseExtra(tmp2[19])(tmp5);
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[20]).intl;
            const stringResult = intl.string(tmp(tmp2[20]).t["13/7kX"]);
            cResult[6] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[6];
          }
          if (cResult[7] === initialRouteStack) {
            let tmp11;
            if (cResult[8] === screens) {
              tmp11 = cResult[9];
            }
            return tmp11;
          }
          let obj3 = { screens, initialRouteStack, headerBackTitle: tmp9 };
          const tmp13 = navigation(tmp(tmp2[21]).Navigator, obj3);
          cResult[7] = initialRouteStack;
          cResult[8] = screens;
          cResult[9] = tmp13;
          tmp11 = tmp13;
        }
      }
    }
  }
  const fn = function s() {
    function handleClose(arg0) {
      const tmp = undefined !== arg0 && arg0;
      if (closure_1_1 != null) {
        tmp2(true === tmp);
      }
      if (isNestedNavigator) {
        navigation.goBack();
      } else {
        const obj = onCloseExtra(invite[18]);
        obj.close();
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    if (displayStudentPrompt) {
      obj.name = HubEmailConnectionSteps.STUDENT_PROMPT;
      const obj2 = { onClose: handleClose };
      obj.params = obj2;
      push(obj);
    } else {
      obj.name = HubEmailConnectionSteps.VERIFY_EMAIL;
      const obj3 = { invite, onClose: handleClose };
      obj.params = obj3;
      push(obj);
    }
    const obj4 = { screens: getScreens(handleClose, isNestedNavigator), initialRouteStack: items };
    return obj4;
  };
  cResult[0] = displayStudentPrompt;
  cResult[1] = invite;
  cResult[2] = isNestedNavigator;
  cResult[3] = onCloseExtra;
  cResult[4] = navigation;
  cResult[5] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let closure_4;
  let initialRouteStack;
  let invite;
  let screens;
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  let obj = useNavigation;
  jsx = obj.useNavigation();
  const tmp = useInitialValueDefault(() => {
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (closure_1_1 != null) {
        tmp(true === flag);
      }
      if (closure_1_0) {
        navigation.goBack();
      } else {
        const obj = HubEmailConnectionModalActionCreatorsDefault;
        obj.close();
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    if (HubEmailConnectionSteps) {
      obj.name = HubEmailConnectionSteps.STUDENT_PROMPT;
      const obj2 = { onClose: handleClose };
      obj.params = obj2;
      push(obj);
    } else {
      obj.name = HubEmailConnectionSteps.VERIFY_EMAIL;
      const obj3 = { invite: dependencyMap, onClose: handleClose };
      obj.params = obj3;
      push(obj);
    }
    const obj4 = { screens: getScreens(handleClose, require), initialRouteStack: items };
    return obj4;
  });
  ({ screens, initialRouteStack } = tmp);
  const Navigator = Navigator2.Navigator;
  const intl = intl2.intl;
  return <Navigator screens={screens} initialRouteStack={initialRouteStack} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default tmp4;
export const HubEmailConnectionScreen = tmp3;