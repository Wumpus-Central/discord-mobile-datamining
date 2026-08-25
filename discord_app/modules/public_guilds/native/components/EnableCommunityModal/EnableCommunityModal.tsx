// === Module 17008: onModalClose ===

// Module 17008 (onModalClose)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import HeaderBackImage from "HeaderBackImage" /* 5376 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5382 */;
import NavigationStack from "NavigationStack" /* 5889 */;
import _modDef17007 from "module_17007" /* 17007 */;
import EnableCommunityModalSteps from "EnableCommunityModalSteps" /* 17009 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onModalClose() {
  _modDef17007.close();
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
      const obj = { source: callback2(8178), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(6117).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17010), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17022), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17023), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};