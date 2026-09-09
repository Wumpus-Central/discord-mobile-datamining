// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import _modDef7006 from "../../../../../../../_runtime/metro/07006__.js";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7006,
    onPress() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7006,
    onPress() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const constants = fn(9287).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx",
);

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let obj = platformType(9258);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return onClose(9285).hideModal();
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
        return jsx(platformType(9288).PlayStationLinkLanding, { platformType });
      },
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_5(platformType(9259).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(platformType(9290).PlayStationLinkPreConnect, { platformType });
      },
    };
    obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return closure_1_5(platformType(9259).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return jsx(platformType(9292).PlayStationLinkDiscordConsent, { platformType, callbackCode, callbackState });
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
          return jsx(platformType(9295).PlayStationLinkSuccess, { onClose });
        },
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return jsx(platformType(9297).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        },
      },
    };
  }, items);
  const accountLinkStepTracking = platformType(9301).useAccountLinkStepTracking(
    platformType,
    platformType.locationStack,
  );
  obj = {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  };
  const intl = platformType(1114).intl;
  obj.headerBackTitle = intl.string(platformType(1114).t["13/7kX"]);
  return jsx(platformType(7014).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: constants.LANDING,
    headerBackTitle: null,
  });
}
