// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import registerAssetDefault from "../../../../../../../_runtime/07764_registerAsset.js";
import closure_3 from "../../../../../../../_runtime/00019_noop.js";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function CloseButton() {
  const obj = {
    source: registerAssetDefault,
    onPress() {
      return callback(table[5]).hideModal();
    },
    accessibilityLabel: null
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: registerAssetDefault,
    onPress() {
      return callback(table[5]).hideModal();
    },
    accessibilityLabel: null
  });
}
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let twoWayLinkStyles;
  let obj = platformType(9306);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return onClose(9328).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: closure_1_6,
      headerTitle: blank,
      headerStyle: onClose.navHeader,
      render() {
        return closure_1_5(callback(closure_1_2[7]).PlayStationLinkLanding, { platformType: callback });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_6,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(callback(9307).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return closure_1_5(callback(closure_1_2[9]).PlayStationLinkPreConnect, { platformType: callback });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_6,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(callback(9307).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return closure_1_5(callback(closure_1_2[10]).PlayStationLinkDiscordConsent, { platformType: callback, callbackCode, callbackState });
      }
    };
    return {
      [closure_1_4.LANDING]: obj,
      [closure_1_4.PRE_CONNECT]: obj,
      [closure_1_4.DISCORD_CONSENT]: obj,
      [closure_1_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: closure_1_6,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return closure_1_5(callback(closure_1_2[11]).PlayStationLinkSuccess, { onClose });
        }
      },
      [closure_1_4.ERROR]: {
        headerLeft: blank,
        headerRight: closure_1_6,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render(errorCode) {
          return closure_1_5(callback(closure_1_2[12]).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = platformType(9327).useAccountLinkStepTracking(platformType, platformType.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = platformType(1236).intl;
  obj[3] = intl.string(platformType(1236).t["13/7kX"]);
  return jsx(platformType(6008).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};