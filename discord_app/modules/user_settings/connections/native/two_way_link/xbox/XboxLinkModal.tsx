// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef8433 from "../../../../../../../_runtime/metro/08433__.js";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef8433,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef8433,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const XboxLinkModalScenes = fn(9819).XboxLinkModalScenes;
const PlatformTypes = fn(1072).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx",
);

export default function XboxLinkModal(startAtSignIn) {
  let flag = startAtSignIn.startAtSignIn;
  if (flag === undefined) {
    flag = false;
  }
  const twoWayLinkStyles = flag(9826).useTwoWayLinkStyles();
  items = [twoWayLinkStyles, flag];
  const tmp6 = flag ? XboxLinkModalScenes.PRE_CONNECT : XboxLinkModalScenes.LANDING;
  const memo = noop.useMemo(() => {
    const autoStart = flag;
    function onClose() {
      return onClose(9817).hideModal();
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
          return closure_1_6(onClose(9820), {});
        },
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(9827).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(twoWayLinkStyles(9828), { autoStart });
        },
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(9827).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(onClose(9832), { callbackCode, callbackState });
        },
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(onClose(14887), {});
        },
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(14890), { onClose });
        },
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(14892), { onClose });
        },
      },
    };
  }, items);
  const obj = flag(9826);
  const accountLinkStepTracking = flag(14896).useAccountLinkStepTracking(
    PlatformTypes.XBOX,
    startAtSignIn.locationStack,
    tmp6,
  );
  const obj2 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null };
  const intl = tmp(1113).intl;
  obj2.headerBackTitle = intl.string(flag(1113).t["13/7kX"]);
  return jsx(flag(7234).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: tmp6,
    headerBackTitle: null,
  });
}
