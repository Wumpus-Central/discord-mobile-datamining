// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef7752 from "../../../../../../../_runtime/metro/07752__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7752,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7752,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const XboxLinkModalScenes = fn(7750).XboxLinkModalScenes;
const PlatformTypes = fn(1071).PlatformTypes;
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
  const twoWayLinkStyles = flag(7760).useTwoWayLinkStyles();
  items = [twoWayLinkStyles, flag];
  const tmp6 = flag ? XboxLinkModalScenes.PRE_CONNECT : XboxLinkModalScenes.LANDING;
  const memo = noop.useMemo(() => {
    const autoStart = flag;
    function onClose() {
      return onClose(7748).hideModal();
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
          return closure_1_6(onClose(7753), {});
        },
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(7761).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return jsx(twoWayLinkStyles(7762), { autoStart });
        },
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(autoStart(7761).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(onClose(7766), { callbackCode, callbackState });
        },
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(onClose(7771), {});
        },
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(7776), { onClose });
        },
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(twoWayLinkStyles(7778), { onClose });
        },
      },
    };
  }, items);
  const obj = flag(7760);
  const accountLinkStepTracking = flag(7782).useAccountLinkStepTracking(
    PlatformTypes.XBOX,
    startAtSignIn.locationStack,
    tmp6,
  );
  const obj2 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: tmp6, headerBackTitle: null };
  const intl = tmp(1112).intl;
  obj2.headerBackTitle = intl.string(flag(1112).t["13/7kX"]);
  return jsx(flag(7355).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: tmp6,
    headerBackTitle: null,
  });
}
