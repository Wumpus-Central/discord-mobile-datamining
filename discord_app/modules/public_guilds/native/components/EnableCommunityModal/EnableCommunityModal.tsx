// === Module 17482: onModalClose ===

// Module 17482 (onModalClose)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import HeaderBackImage from "HeaderBackImage" /* 5503 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5509 */;
import NavigationStack from "NavigationStack" /* 6016 */;
import _modDef17481 from "module_17481" /* 17481 */;
import EnableCommunityModalSteps from "EnableCommunityModalSteps" /* 17483 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onModalClose() {
  _modDef17481.close();
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
      const obj = { source: callback2(7773), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1233).intl;
      obj[2] = intl.string(callback(1233).t.cpT0Cq);
      return callback3(callback(6246).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17484), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17496), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17497), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};