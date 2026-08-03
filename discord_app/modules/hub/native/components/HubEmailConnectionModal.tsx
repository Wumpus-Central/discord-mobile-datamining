import "getSystemLocale";
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { safeArea: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  let HubEmailConnectionSteps;
  let dependencyMap;
  let importDefault;
  let initialRouteStack;
  let require;
  let screens;
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  let jsx;
  let obj = require(1480) /* useNavigation */;
  jsx = obj.useNavigation();
  ({ screens, initialRouteStack } = importDefault(5569)(() => {
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
        outer1_1(outer1_2[17]).close();
        const obj = outer1_1(outer1_2[17]);
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
    let obj3 = outer1_0(outer1_2[5]);
    if (closure_0) {
      let headerBackButton = obj3.getHeaderBackButton(handleClose);
      let tmp8 = tmp6;
      let tmp9 = tmp5;
    } else {
      headerBackButton = obj3.getHeaderCloseButton(handleClose);
      tmp8 = tmp6;
      tmp9 = tmp5;
    }
    const obj1 = { screens: null, initialRouteStack: null };
    const obj2 = { [outer1_3.STUDENT_PROMPT]: obj3 };
    obj3 = {
      fullscreen: true,
      headerLeft: headerBackButton,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11940), {});
      }
    };
    obj2[outer1_3.VERIFY_EMAIL] = {
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
        return navigation(callback(11943), {});
      }
    };
    obj2[outer1_3.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11946), {});
      }
    };
    obj2[outer1_3.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11948), {});
      }
    };
    obj2[outer1_3.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11949), {});
      }
    };
    obj2[outer1_3.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11950), {});
      }
    };
    obj2[outer1_3.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(callback(11954), {});
      }
    };
    obj1[0] = obj2;
    obj1[1] = items;
    return obj1;
  }));
  obj = { screens, initialRouteStack, headerBackTitle: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5636) /* NavigationStack */.Navigator, { screens, initialRouteStack, headerBackTitle: null });
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = createCacheKey();
  return jsx(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: createCacheKey().safeArea, children: children.children });
};