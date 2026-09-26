// discord_app/modules/hub/native/components/HubEmailConnectionModal.tsx
import util from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const HubEmailConnectionSteps = fn(12233).HubEmailConnectionSteps;
let jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { safeArea: { marginTop: fn(5994).NAV_BAR_HEIGHT, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  ({
    isNestedNavigator: require,
    onCloseExtra: importDefault,
    invite: dependencyMap,
    displayStudentPrompt: HubEmailConnectionSteps,
  } = arg0);
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
    const obj4 = NavigatorHeader;
    if (closure_1_0) {
      let headerBackButton = obj4.getHeaderBackButton(handleClose);
      let tmp9 = require;
    } else {
      headerBackButton = obj4.getHeaderCloseButton(handleClose);
      tmp9 = require;
    }
    const obj5 = { screens: null, initialRouteStack: null };
    const obj6 = { [closure_2_3.STUDENT_PROMPT]: obj7 };
    obj6[HubEmailConnectionSteps.VERIFY_EMAIL] = {
      impressionName: tmp9(1249).ImpressionNames.HUB_EMAIL_SIGNUP,
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
        return navigation(closure_1_1(12245), {});
      },
    };
    obj6[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12250), {});
      },
    };
    obj6[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12252), {});
      },
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12253), {});
      },
    };
    obj6[HubEmailConnectionSteps.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12254), {});
      },
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12257), {});
      },
    };
    obj5.screens = obj6;
    obj5.initialRouteStack = items;
    return obj5;
  }));
  let obj2 = { screens, initialRouteStack, headerBackTitle: null };
  const intl = util.intl;
  obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens, initialRouteStack, headerBackTitle: null });
}
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, {
    top: true,
    style: closure_5().safeArea,
    children: children.children,
  });
};
