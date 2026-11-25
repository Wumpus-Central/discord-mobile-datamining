// === Module 7715: XboxLinkModal ===

// Module 7715 (XboxLinkModal)
import util from "util" /* 1112 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 7714 */;
import HeaderActionButton from "HeaderActionButton" /* 7717 */;
import _modDef7718 from "module_7718" /* 7718 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7718,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7718,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const XboxLinkModalScenes = fn(7716).XboxLinkModalScenes;
const PlatformTypes = fn(1071).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(startAtSignIn) {
  let flag = startAtSignIn.startAtSignIn;
  if (flag === undefined) {
    flag = false;
  }
  const twoWayLinkStyles = flag(7726).useTwoWayLinkStyles();
  items = [twoWayLinkStyles, flag];
  const tmp6 = flag ? XboxLinkModalScenes.PRE_CONNECT : XboxLinkModalScenes.LANDING;
  const memo = noop.useMemo(() => {
    const autoStart = flag;
    function onClose() {
      return onClose(7714).hideModal();
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
          return closure_1_6(onClose(7719), {});
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(7727).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(twoWayLinkStyles(7728), { autoStart });
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(7727).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(onClose(7732), { callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(onClose(7737), {});
        }
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(7742), { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(7744), { onClose });
        }
      }
    };
  }, items);
  const obj = flag(7726);
  const accountLinkStepTracking = flag(7748).useAccountLinkStepTracking(PlatformTypes.XBOX, startAtSignIn.locationStack, tmp6);
  const obj2 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null };
  const intl = tmp(1112).intl;
  obj2.headerBackTitle = intl.string(flag(1112).t["13/7kX"]);
  return jsx(flag(7324).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null });
};