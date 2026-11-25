// === Module 7761: CrunchyrollLinkModal ===

// Module 7761 (CrunchyrollLinkModal)
import util from "util" /* 1112 */;
import HeaderActionButton from "HeaderActionButton" /* 7717 */;
import _modDef7718 from "module_7718" /* 7718 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 7760 */;
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess" /* 7771 */;
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError" /* 7773 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7718,
    onPress: function onClose() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7718,
    onPress: function onClose() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const constants = fn(7762).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1071).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(7726).useTwoWayLinkStyles();
  items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(7760).hideModal();
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
          return closure_1_6(closure_1_1(7763), {});
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(7727).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return closure_1_6(closure_1_1(7767), {});
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(7727).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(closure_1_1(7770), { callbackCode, callbackState });
        }
      },
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
  const obj = twoWayLinkStyles(7726);
  const accountLinkStepTracking = twoWayLinkStyles(7748).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1112).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1112).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7324).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};