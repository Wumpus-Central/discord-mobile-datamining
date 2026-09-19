// === Module 9373: PlayStationLinkModal ===

// Module 9373 (PlayStationLinkModal)
import util from "util" /* 1115 */;
import _modDef7232 from "module_7232" /* 7232 */;
import HeaderActionButton from "HeaderActionButton" /* 7617 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9372 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7232,
    onPress() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7232,
    onPress() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const constants = fn(9374).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  const twoWayLinkStyles = platformType(9350).useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return onClose(9372).hideModal();
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
          return jsx(platformType(9375).PlayStationLinkLanding, { platformType });
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(9351).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(platformType(9377).PlayStationLinkPreConnect, { platformType });
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(9351).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return jsx(platformType(9379).PlayStationLinkDiscordConsent, { platformType, callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(platformType(9381).PlayStationLinkSuccess, { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return jsx(platformType(9382).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }, items);
  const obj = platformType(9350);
  const accountLinkStepTracking = platformType(9371).useAccountLinkStepTracking(platformType, platformType.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = platformType(1115).intl;
  obj3.headerBackTitle = intl.string(platformType(1115).t["13/7kX"]);
  return jsx(platformType(7240).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};