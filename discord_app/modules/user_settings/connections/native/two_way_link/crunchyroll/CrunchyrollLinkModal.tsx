// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import _modDef6992 from "../../../../../../../_runtime/metro/06992__.js";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators.tsx";
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess.tsx";
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef6992,
    onPress() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef6992,
    onPress() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const constants = fn(9272).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx",
);

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(9226);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(9270).hideModal();
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
        return closure_1_6(closure_1_1(9273), {});
      },
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_6(onClose(9227).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return closure_1_6(closure_1_1(9275), {});
      },
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_6(onClose(9227).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return closure_1_6(closure_1_1(9277), { callbackCode, callbackState });
      },
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
  const accountLinkStepTracking = twoWayLinkStyles(9269).useAccountLinkStepTracking(
    PlatformTypes.CRUNCHYROLL,
    locationStack.locationStack,
  );
  obj = {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  };
  const intl = twoWayLinkStyles(1114).intl;
  obj.headerBackTitle = intl.string(twoWayLinkStyles(1114).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7000).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  });
}
