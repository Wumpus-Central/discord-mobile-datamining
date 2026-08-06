// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import noop from "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../../../_runtime/07950_registerAsset.js";
import { HeaderActionButton } from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";

const require = arg1;
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = registerAsset;
  obj[1] = function onPress() {
    return callback(table[6]).hideModal();
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(10416);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(10410).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerTitle: blank,
      headerStyle: onClose.navHeader,
      render() {
        return callback2(callback(10413), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10417).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(10418), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10417).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(10422), { callbackCode, callbackState });
      }
    };
    return {
      [outer1_4.LANDING]: obj,
      [outer1_4.PRE_CONNECT]: obj,
      [outer1_4.DISCORD_CONSENT]: obj,
      [outer1_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return callback2(callback(10463), {});
        }
      },
      [outer1_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_6(outer1_1(outer1_2[13]), { onClose });
        }
      },
      [outer1_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_6(outer1_1(outer1_2[14]), { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(10474).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1236).intl;
  obj[3] = intl.string(twoWayLinkStyles(1236).t["13/7kX"]);
  return jsx(twoWayLinkStyles(5704).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
};