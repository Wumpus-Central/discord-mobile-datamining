// === Module 9353: CloseButton ===

// Module 9353 (CloseButton)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import HeaderActionButton from "HeaderActionButton" /* 6246 */;
import registerAssetDefault from "registerAsset" /* 7773 */;
import closure_3 from "noop" /* 19 */;
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes" /* 9354 */;
import { PlatformTypes } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

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
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(9319);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(9352).hideModal();
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
        return callback2(callback(9355), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(9320).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(9357), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(9320).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(9359), { callbackCode, callbackState });
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
          return closure_1_6(closure_1_1(closure_1_2[12]), { onClose });
        }
      },
      [closure_1_4.ERROR]: {
        headerLeft: blank,
        headerRight: closure_1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return closure_1_6(closure_1_1(closure_1_2[13]), { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(9340).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1233).intl;
  obj[3] = intl.string(twoWayLinkStyles(1233).t["13/7kX"]);
  return jsx(twoWayLinkStyles(6016).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};