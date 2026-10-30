// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import util from "../../../../../../intl/index.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import _modDef8351 from "../../../../../../../_runtime/metro/08351__.js";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import XboxLinkEducationDefault from "XboxLinkEducation.tsx";
import XboxLinkErrorDefault from "XboxLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef8351,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef8351,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null,
  });
}
const XboxLinkModalScenes = fn(9703).XboxLinkModalScenes;
const PlatformTypes = fn(1072).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx",
);

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(9710).useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(9701).hideModal();
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
          return closure_1_6(closure_1_1(9704), {});
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
          return closure_1_6(closure_1_1(9712), {});
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
          return closure_1_6(closure_1_1(9716), { callbackCode, callbackState });
        },
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(closure_1_1(14574), {});
        },
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(XboxLinkEducationDefault, { onClose });
        },
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(XboxLinkErrorDefault, { onClose });
        },
      },
    };
  }, items);
  const obj = twoWayLinkStyles(9710);
  const accountLinkStepTracking = twoWayLinkStyles(14583).useAccountLinkStepTracking(
    PlatformTypes.XBOX,
    locationStack.locationStack,
  );
  const obj3 = {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: XboxLinkModalScenes.LANDING,
    headerBackTitle: null,
  };
  const intl = twoWayLinkStyles(1114).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1114).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7163).Navigator, {
    onStateChange: accountLinkStepTracking,
    screens: memo,
    initialRouteName: XboxLinkModalScenes.LANDING,
    headerBackTitle: null,
  });
}
