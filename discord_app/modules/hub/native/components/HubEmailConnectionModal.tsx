// === Module 12727: HubEmailConnectionModal ===

// Module 12727 (HubEmailConnectionModal)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import noop from "module_19" /* 19 */;

require = fn;
const HubEmailConnectionSteps = fn(12719).HubEmailConnectionSteps;
let jsx = fn(21).jsx;
fn(4560);
let createStyles = { safeArea: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1 };
createStyles.safeArea = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  let obj = useNavigation;
  jsx = obj.useNavigation();
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
      obj.name = tmp.STUDENT_PROMPT;
      obj = { onClose: handleClose };
      obj.params = obj;
      push(obj);
    } else {
      obj.name = tmp.VERIFY_EMAIL;
      obj = { invite, onClose: handleClose };
      obj.params = obj;
      push(obj);
    }
    let obj3 = NavigatorHeader;
    if (closure_1_0) {
      let headerBackButton = obj3.getHeaderBackButton(handleClose);
      let tmp9 = tmp5;
    } else {
      headerBackButton = obj3.getHeaderCloseButton(handleClose);
      tmp9 = tmp5;
    }
    const obj1 = { screens: null, initialRouteStack: null };
    const obj2 = { [closure_2_3.STUDENT_PROMPT]: obj3 };
    obj3 = {
      fullscreen: true,
      headerLeft: headerBackButton,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12728), {});
      }
    };
    obj2[HubEmailConnectionSteps.VERIFY_EMAIL] = {
      impressionName: tmp9(1250).ImpressionNames.HUB_EMAIL_SIGNUP,
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
        return navigation(closure_1_1(12731), {});
      }
    };
    obj2[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12734), {});
      }
    };
    obj2[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12736), {});
      }
    };
    obj2[HubEmailConnectionSteps.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12737), {});
      }
    };
    obj2[HubEmailConnectionSteps.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12738), {});
      }
    };
    obj2[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12741), {});
      }
    };
    obj1.screens = obj2;
    obj1.initialRouteStack = items;
    return obj1;
  }));
  obj = { screens, initialRouteStack, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens, initialRouteStack, headerBackTitle: null });
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children: children.children });
};