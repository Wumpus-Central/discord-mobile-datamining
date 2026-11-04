// === Module 14848: PlayStationLinkModal ===

// Module 14848 (PlayStationLinkModal)
import util from "util" /* 1113 */;
import HeaderActionButton from "HeaderActionButton" /* 7698 */;
import _modDef8499 from "module_8499" /* 8499 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14847 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef8499,
    onPress: function onClose() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef8499,
    onPress: function onClose() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const constants = fn(14849).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  const twoWayLinkStyles = platformType(9880).useTwoWayLinkStyles();
  items = [platformType, twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return onClose(14847).hideModal();
    }
    function blank() {
      return null;
    }
    return {
      [closure_2_4.LANDING]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(platformType(14850).PlayStationLinkLanding, { platformType });
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(9881).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(platformType(14852).PlayStationLinkPreConnect, { platformType });
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(9881).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return jsx(platformType(14854).PlayStationLinkDiscordConsent, { platformType, callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(platformType(14856).PlayStationLinkSuccess, { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return jsx(platformType(14857).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }, items);
  const obj = platformType(9880);
  const accountLinkStepTracking = platformType(14846).useAccountLinkStepTracking(platformType, platformType.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = platformType(1113).intl;
  obj3.headerBackTitle = intl.string(platformType(1113).t["13/7kX"]);
  return jsx(platformType(7306).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};