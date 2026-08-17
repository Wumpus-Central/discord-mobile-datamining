// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
import getSystemLocale from "getSystemLocale" /* 1236 */;
import NavigationStack from "NavigationStack" /* 6312 */;
import HeaderBackImage from "HeaderBackImage" /* 6314 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6318 */;
import _modDef16882 from "module_16882" /* 16882 */;
import EnableCommunityModalSteps from "EnableCommunityModalSteps" /* 16884 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onModalClose() {
  _modDef16882.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = useNavigatorBackPressHandler;
  const intl = getSystemLocale.intl;
  return HeaderBackImage.getHeaderTextButton(intl.string(getSystemLocale.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: callback2(8143), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(5432).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16885), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16897), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16898), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};