// discord_app/modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx
import getSystemLocale from "../../../../../intl/index.native.tsx";
import NavigationStack from "../../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderBackImage from "../../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import useNavigatorBackPressHandler from "../../../../../design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx";
import _modDef16975 from "../../EnableCommunityModalActionCreators.tsx";
import EnableCommunityModalSteps from "EnableCommunitySharedNavigation.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function onModalClose() {
  _modDef16975.close();
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
      const obj = { source: callback2(8182), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(5437).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16978), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16990), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16991), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};