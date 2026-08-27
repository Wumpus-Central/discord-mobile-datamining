// discord_app/modules/hub/native/components/HubEmailConnectionModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigationStack from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import { HubEmailConnectionSteps } from "../../HubConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { safeArea: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  jsx = undefined;
  let obj = useNavigation;
  jsx = obj.useNavigation();
  ({ screens, initialRouteStack } = useInitialValueDefault(() => {
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (closure_1 != null) {
        tmp(true === flag);
      }
      if (closure_0) {
        navigation.goBack();
      } else {
        closure_1_1(closure_1_2[17]).close();
        const obj = closure_1_1(closure_1_2[17]);
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    if (closure_3) {
      obj[0] = tmp.STUDENT_PROMPT;
      obj = { onClose: null };
      obj[0] = handleClose;
      obj[1] = obj;
      push(obj);
    } else {
      obj[0] = tmp.VERIFY_EMAIL;
      obj = { invite: null, onClose: null };
      obj[0] = closure_2;
      obj[1] = handleClose;
      obj[1] = obj;
      push(obj);
    }
    let obj3 = closure_1_0(closure_1_2[5]);
    if (closure_0) {
      let headerBackButton = obj3.getHeaderBackButton(handleClose);
      let tmp8 = tmp6;
      let tmp9 = tmp5;
    } else {
      headerBackButton = obj3.getHeaderCloseButton(handleClose);
      tmp8 = tmp6;
      tmp9 = tmp5;
    }
    obj1 = { screens: null, initialRouteStack: null };
    const obj2 = { [closure_1_3.STUDENT_PROMPT]: obj3 };
    obj3 = {
      fullscreen: true,
      headerLeft: headerBackButton,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12180), {});
      }
    };
    obj2[closure_1_3.VERIFY_EMAIL] = {
      impressionName: tmp9(tmp8[7]).ImpressionNames.HUB_EMAIL_SIGNUP,
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
        return navigation(callback(12183), {});
      }
    };
    obj2[closure_1_3.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12186), {});
      }
    };
    obj2[closure_1_3.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12188), {});
      }
    };
    obj2[closure_1_3.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12189), {});
      }
    };
    obj2[closure_1_3.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12190), {});
      }
    };
    obj2[closure_1_3.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(12193), {});
      }
    };
    obj1[0] = obj2;
    obj1[1] = items;
    return obj1;
  }));
  obj = { screens, initialRouteStack, headerBackTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens, initialRouteStack, headerBackTitle: null });
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = callback();
  return jsx(SafeAreaPaddingView.SafeAreaPaddingView, { top: true, style: callback().safeArea, children: children.children });
};