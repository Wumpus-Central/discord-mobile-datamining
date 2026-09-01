// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import registerAssetDefault from "../../../../../../../_runtime/07764_registerAsset.js";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { XboxLinkModalScenes } from "XboxLinkConstants.tsx";
import { PlatformTypes } from "../../../../../../Constants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[6]).hideModal();
    },
    accessibilityLabel: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: registerAssetDefault,
    onPress() {
      return callback(table[6]).hideModal();
    },
    accessibilityLabel: null
  });
}
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(9306);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(9300).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: closure_1_7,
      headerTitle: blank,
      headerStyle: onClose.navHeader,
      render() {
        return callback2(callback(9303), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(9307).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(9308), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(9307).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(9312), { callbackCode, callbackState });
      }
    };
    return {
      [closure_1_4.LANDING]: obj,
      [closure_1_4.PRE_CONNECT]: obj,
      [closure_1_4.DISCORD_CONSENT]: obj,
      [closure_1_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: closure_1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return callback2(callback(9316), {});
        }
      },
      [closure_1_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: closure_1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return closure_1_6(closure_1_1(closure_1_2[13]), { onClose });
        }
      },
      [closure_1_4.ERROR]: {
        headerLeft: blank,
        headerRight: closure_1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return closure_1_6(closure_1_1(closure_1_2[14]), { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(9327).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1236).intl;
  obj[3] = intl.string(twoWayLinkStyles(1236).t["13/7kX"]);
  return jsx(twoWayLinkStyles(6008).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
};