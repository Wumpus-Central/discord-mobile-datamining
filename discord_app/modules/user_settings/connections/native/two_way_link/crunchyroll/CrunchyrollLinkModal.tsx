// === Module 9361: CrunchyrollLinkModal ===

// Module 9361 (CrunchyrollLinkModal)
import util from "util" /* 1114 */;
import _modDef7065 from "module_7065" /* 7065 */;
import HeaderActionButton from "HeaderActionButton" /* 7450 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 9360 */;
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess" /* 9368 */;
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError" /* 9370 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7065,
    onPress() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7065,
    onPress() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const constants = fn(9362).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(9316);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(9360).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return closure_1_6(closure_1_1(9363), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_6(onClose(9317).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return closure_1_6(closure_1_1(9365), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_6(onClose(9317).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return closure_1_6(closure_1_1(9367), { callbackCode, callbackState });
      }
    };
    return {
      [closure_2_4.LANDING]: obj,
      [closure_2_4.PRE_CONNECT]: obj,
      [closure_2_4.DISCORD_CONSENT]: obj,
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(CrunchyrollLinkSuccessDefault, { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(CrunchyrollLinkErrorDefault, { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(9359).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1114).intl;
  obj.headerBackTitle = intl.string(twoWayLinkStyles(1114).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7073).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};