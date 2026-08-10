// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx
import noop from "noop";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../../../_runtime/08027_registerAsset.js";
import { HeaderActionButton } from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import { getSystemLocale } from "../../../../../../intl/index.native.tsx";

const require = arg1;
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = registerAsset;
  obj[1] = function onPress() {
    return callback(table[5]).hideModal();
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let twoWayLinkStyles;
  let obj = platformType(10499);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return onClose(10558).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: outer1_6,
      headerTitle: blank,
      headerStyle: onClose.navHeader,
      render() {
        return outer1_5(callback(outer1_2[7]).PlayStationLinkLanding, { platformType: callback });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_6,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(callback(10500).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return outer1_5(callback(outer1_2[9]).PlayStationLinkPreConnect, { platformType: callback });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_6,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(callback(10500).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return outer1_5(callback(outer1_2[10]).PlayStationLinkDiscordConsent, { platformType: callback, callbackCode, callbackState });
      }
    };
    return {
      [outer1_4.LANDING]: obj,
      [outer1_4.PRE_CONNECT]: obj,
      [outer1_4.DISCORD_CONSENT]: obj,
      [outer1_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: outer1_6,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_5(callback(outer1_2[11]).PlayStationLinkSuccess, { onClose });
        }
      },
      [outer1_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer1_6,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render(errorCode) {
          return outer1_5(callback(outer1_2[12]).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = platformType(10557).useAccountLinkStepTracking(platformType, platformType.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = platformType(1236).intl;
  obj[3] = intl.string(platformType(1236).t["13/7kX"]);
  return jsx(platformType(5783).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};