// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef8351 from "../../../../../../../_runtime/metro/08351__.js";
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators.tsx";
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess.tsx";
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef8351,
    onPress: function onClose() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef8351,
    onPress: function onClose() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const constants = fn(14597).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1072).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx",
);

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(9710).useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(14595).hideModal();
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
          return closure_1_6(closure_1_1(14598), {});
        },
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(9711).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return closure_1_6(closure_1_1(14600), {});
        },
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(9711).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(closure_1_1(14602), { callbackCode, callbackState });
        },
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(CrunchyrollLinkSuccessDefault, { onClose });
        },
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(CrunchyrollLinkErrorDefault, { onClose });
        },
      },
    };
  }, items);
  const obj = twoWayLinkStyles(9710);
  const accountLinkStepTracking = twoWayLinkStyles(14583).useAccountLinkStepTracking(
    PlatformTypes.CRUNCHYROLL,
    locationStack.locationStack,
  );
  const obj3 = {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  };
  const intl = twoWayLinkStyles(1114).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1114).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7163).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  });
}
