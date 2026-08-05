// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  require("../../EnableCommunityModalActionCreators.tsx").close();
}
function HeaderBackButton(arg0) {
  require("../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx") /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = require("../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx") /* useNavigatorBackPressHandler */;
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  return require("../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx") /* HeaderBackImage */.getHeaderTextButton(intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16621").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: null, onPress: null, accessibilityLabel: null };
      obj[0] = callback2(7837);
      obj[1] = closure_5;
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(5917).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16624), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16636), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16637), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: null, headerBackTitle: null };
  obj[1] = require("EnableCommunitySharedNavigation.tsx") /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1;
  let intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t["13/7kX"]);
  return jsx(require("../../../../../design/components/Navigator/native/Navigator.native.tsx") /* NavigationStack */.Navigator, { screens: memo, initialRouteName: null, headerBackTitle: null });
};