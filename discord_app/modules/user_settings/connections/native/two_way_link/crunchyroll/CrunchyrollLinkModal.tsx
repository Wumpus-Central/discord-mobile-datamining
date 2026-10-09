// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import _modDef5010 from "../../../../../../../_runtime/metro/05010__.js";
import Navigator from "../../../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import useAccountLinkStepTracking from "../useAccountLinkStepTracking.tsx";
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators.tsx";
import CrunchyrollLinkLandingDefault from "CrunchyrollLinkLanding.tsx";
import CrunchyrollLinkPreConnectDefault from "CrunchyrollLinkPreConnect.tsx";
import CrunchyrollLinkDiscordConsentDefault from "CrunchyrollLinkDiscordConsent.tsx";
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess.tsx";
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function getScreens(headerStyle) {
  function onClose() {
    return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
  }
  function blank() {
    return null;
  }
  return {
    [closure_4.LANDING]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(CrunchyrollLinkLandingDefault, {});
      },
    },
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(9188).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(CrunchyrollLinkPreConnectDefault, {});
      },
    },
    [closure_4.DISCORD_CONSENT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(9188).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return jsx(CrunchyrollLinkDiscordConsentDefault, { callbackCode, callbackState });
      },
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(CrunchyrollLinkSuccessDefault, { onClose });
      },
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(CrunchyrollLinkErrorDefault, { onClose });
      },
    },
  };
}
const constants = fn(12882).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled()
  ? function CloseButton() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function onClose() {
          return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
        }
        cResult[0] = onClose;
        let first = onClose;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: _modDef5010, onPress: first, accessibilityLabel: null };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
        const tmp8 = jsx(HeaderActionButton.HeaderActionButton, {
          source: _modDef5010,
          onPress: first,
          accessibilityLabel: null,
        });
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function CloseButton() {
      const obj = {
        source: _modDef5010,
        onPress: function onClose() {
          return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
        },
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
      return jsx(HeaderActionButton.HeaderActionButton, {
        source: _modDef5010,
        onPress: function onClose() {
          return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
        },
        accessibilityLabel: null,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CrunchyrollLinkModal(locationStack) {
      const cResult = c.c(6);
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      if (cResult[0] !== twoWayLinkStyles) {
        const tmp7 = getScreens(twoWayLinkStyles);
        cResult[0] = twoWayLinkStyles;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      const accountLinkStepTracking = useAccountLinkStepTracking.useAccountLinkStepTracking(
        PlatformTypes.CRUNCHYROLL,
        locationStack.locationStack,
      );
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["13/7kX"]);
        cResult[2] = stringResult;
        let tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === accountLinkStepTracking) {
        if (cResult[4] === tmp5) {
          let tmp11 = cResult[5];
        }
        return tmp11;
      }
      const tmp12 = jsx(Navigator.Navigator, {
        onStateChange: accountLinkStepTracking,
        screens: tmp5,
        initialRouteName: constants.LANDING,
        headerBackTitle: tmp9,
      });
      cResult[3] = accountLinkStepTracking;
      cResult[4] = tmp5;
      cResult[5] = tmp12;
      tmp11 = tmp12;
      const obj3 = {
        onStateChange: accountLinkStepTracking,
        screens: tmp5,
        initialRouteName: constants.LANDING,
        headerBackTitle: tmp9,
      };
      const tmpResult = useAccountLinkStepTracking;
    }
  : function CrunchyrollLinkModal(locationStack) {
      let twoWayLinkStyles;
      twoWayLinkStyles = twoWayLinkStyles(9187).useTwoWayLinkStyles();
      const items = [twoWayLinkStyles];
      const memo = noop.useMemo(() => getScreens(twoWayLinkStyles), items);
      const obj = twoWayLinkStyles(9187);
      const accountLinkStepTracking = twoWayLinkStyles(12868).useAccountLinkStepTracking(
        PlatformTypes.CRUNCHYROLL,
        locationStack.locationStack,
      );
      const obj3 = {
        onStateChange: accountLinkStepTracking,
        screens: memo,
        initialRouteName: constants.LANDING,
        headerBackTitle: null,
      };
      const intl = twoWayLinkStyles(1126).intl;
      obj3.headerBackTitle = intl.string(twoWayLinkStyles(1126).t["13/7kX"]);
      return jsx(twoWayLinkStyles(6686).Navigator, {
        onStateChange: accountLinkStepTracking,
        screens: memo,
        initialRouteName: constants.LANDING,
        headerBackTitle: null,
      });
    };
