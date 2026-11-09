// === Module 14872: PlayStationLinkModal ===

// Module 14872 (PlayStationLinkModal)
import util from "util" /* 1113 */;
import HeaderActionButton from "HeaderActionButton" /* 7630 */;
import _modDef8429 from "module_8429" /* 8429 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14871 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef8429,
    onPress: function onClose() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef8429,
    onPress: function onClose() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const constants = fn(14873).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let flag = platformType.startAtSignIn;
  if (flag === undefined) {
    flag = false;
  }
  let twoWayLinkStyles;
  twoWayLinkStyles = platformType(twoWayLinkStyles[13]).useTwoWayLinkStyles();
  items = [platformType, twoWayLinkStyles, flag];
  const tmp6 = flag ? constants.PRE_CONNECT : constants.LANDING;
  const memo = noop.useMemo(() => {
    const autoStart = flag;
    function onClose() {
      return autoStart(onClose[5]).hideModal();
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
          return jsx(platformType(twoWayLinkStyles[7]).PlayStationLinkLanding, { platformType });
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(onClose[8]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(platformType(twoWayLinkStyles[9]).PlayStationLinkPreConnect, { platformType, autoStart });
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(onClose[8]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return jsx(platformType(twoWayLinkStyles[10]).PlayStationLinkDiscordConsent, { platformType, callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(platformType(twoWayLinkStyles[11]).PlayStationLinkSuccess, { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return jsx(platformType(twoWayLinkStyles[12]).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }, items);
  const obj = platformType(twoWayLinkStyles[13]);
  const accountLinkStepTracking = platformType(twoWayLinkStyles[14]).useAccountLinkStepTracking(platformType, platformType.locationStack, tmp6);
  const obj2 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null };
  const intl = tmp(tmp2[6]).intl;
  obj2.headerBackTitle = intl.string(platformType(twoWayLinkStyles[6]).t["13/7kX"]);
  return jsx(platformType(twoWayLinkStyles[15]).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null });
};