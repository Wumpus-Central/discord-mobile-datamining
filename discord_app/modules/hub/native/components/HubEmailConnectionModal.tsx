// === Module 12409: HubEmailConnectionModal ===

// Module 12409 (HubEmailConnectionModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import useInitialValueDefault from "useInitialValue" /* 5991 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import Navigator from "Navigator" /* 6503 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import HubEmailConnectionStudentPromptDefault from "HubEmailConnectionStudentPrompt" /* 12410 */;
import HubEmailConnectionContentDefault from "HubEmailConnectionContent" /* 12413 */;
import HubEmailConnectionWaitlistDefault from "HubEmailConnectionWaitlist" /* 12418 */;
import HubEmailConnectionSubmitSchoolDefault from "HubEmailConnectionSubmitSchool" /* 12420 */;
import HubEmailConnectionGuildSelectDefault from "HubEmailConnectionGuildSelect" /* 12421 */;
import HubEmailConnectionPinVerifyDefault from "HubEmailConnectionPinVerify" /* 12422 */;
import HubEmailConnectionGuildSelectSearchDefault from "HubEmailConnectionGuildSelectSearch" /* 12425 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getScreens(pop, arg1) {
  const obj = NavigatorHeader;
  if (arg1) {
    let headerBackButton = obj.getHeaderBackButton(pop);
    let tmp5 = require;
  } else {
    headerBackButton = obj.getHeaderCloseButton(pop);
    tmp5 = require;
  }
  const obj2 = { [closure_1_3.STUDENT_PROMPT]: obj3 };
  obj2[HubEmailConnectionSteps.VERIFY_EMAIL] = {
    impressionName: tmp5(1260).ImpressionNames.HUB_EMAIL_SIGNUP,
    impressionProperties(invite) {
      return { has_invite: null != invite.invite };
    },
    fullscreen: true,
    headerLeft: headerBackButton,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionContentDefault, {});
    }
  };
  obj2[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionWaitlistDefault, {});
    }
  };
  obj2[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionSubmitSchoolDefault, {});
    }
  };
  obj2[HubEmailConnectionSteps.SELECT_SCHOOL] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionGuildSelectDefault, {});
    }
  };
  obj2[HubEmailConnectionSteps.VERIFY_PIN] = {
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionPinVerifyDefault, {});
    }
  };
  obj2[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
    fullscreen: true,
    headerShown: false,
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(HubEmailConnectionGuildSelectSearchDefault, {});
    }
  };
  return obj2;
}
const HubEmailConnectionSteps = fn(12400).HubEmailConnectionSteps;
let jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { safeArea: { marginTop: fn(6075).NAV_BAR_HEIGHT, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { marginTop: fn(6075).NAV_BAR_HEIGHT, flex: 1 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(3);
  children = children.children;
  const tmp4 = closure_5();
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.safeArea) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: tmp4.safeArea, children });
  cResult[0] = children;
  cResult[1] = tmp4.safeArea;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj2 = { top: true, style: tmp4.safeArea, children };
}) : ((children) => {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children: children.children });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isNestedNavigator) => {
  const cResult = isNestedNavigator(invite[15]).c(10);
  isNestedNavigator = isNestedNavigator.isNestedNavigator;
  const onCloseExtra = isNestedNavigator.onCloseExtra;
  invite = isNestedNavigator.invite;
  const displayStudentPrompt = isNestedNavigator.displayStudentPrompt;
  let obj = isNestedNavigator(invite[15]);
  const navigation = isNestedNavigator(invite[17]).useNavigation();
  if (cResult[0] === displayStudentPrompt) {
    if (cResult[1] === invite) {
      if (cResult[2] === isNestedNavigator) {
        if (cResult[3] === onCloseExtra) {
          if (cResult[4] === navigation) {
            let tmp5 = cResult[5];
          }
          ({ screens, initialRouteStack } = onCloseExtra(tmp2[19])(tmp5));
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[20]).intl;
            const stringResult = intl.string(tmp(tmp2[20]).t["13/7kX"]);
            cResult[6] = stringResult;
            let tmp9 = stringResult;
          } else {
            tmp9 = cResult[6];
          }
          if (cResult[7] === initialRouteStack) {
            if (cResult[8] === screens) {
              let tmp11 = cResult[9];
            }
            return tmp11;
          }
          let obj3 = { screens, initialRouteStack, headerBackTitle: tmp9 };
          const tmp13 = navigation(tmp(tmp2[21]).Navigator, obj3);
          cResult[7] = initialRouteStack;
          cResult[8] = screens;
          cResult[9] = tmp13;
          tmp11 = tmp13;
          const tmp7 = onCloseExtra(tmp2[19])(tmp5);
        }
      }
    }
  }
  const fn = function s() {
    function handleClose(arg0) {
      if (closure_1_1 != null) {
        tmp2(true === tmp);
      }
      if (isNestedNavigator) {
        navigation.goBack();
      } else {
        onCloseExtra(invite[18]).close();
        const obj = onCloseExtra(invite[18]);
      }
      tmp = undefined !== arg0 && arg0;
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
    return { screens: getScreens(handleClose, isNestedNavigator), initialRouteStack: items };
  };
  cResult[0] = displayStudentPrompt;
  cResult[1] = invite;
  cResult[2] = isNestedNavigator;
  cResult[3] = onCloseExtra;
  cResult[4] = navigation;
  cResult[5] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  jsx = useNavigation.useNavigation();
  ({ screens, initialRouteStack } = useInitialValueDefault(() => {
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
        require("HubEmailConnectionModalActionCreators").close();
        const obj = require("HubEmailConnectionModalActionCreators");
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    if (closure_1_3) {
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
    return { screens: getScreens(handleClose, require), initialRouteStack: items };
  }));
  let obj2 = { screens, initialRouteStack, headerBackTitle: null };
  const intl = util.intl;
  obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens, initialRouteStack, headerBackTitle: null });
});
export const HubEmailConnectionScreen = tmp3;