// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import _modDef4815 from "../../../../../../../_runtime/metro/04815__.js";
import Navigator from "../../../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators.tsx";
import XboxLinkLandingDefault from "XboxLinkLanding.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import XboxLinkPreConnectDefault from "XboxLinkPreConnect.tsx";
import XboxLinkDiscordConsentDefault from "XboxLinkDiscordConsent.tsx";
import XboxLinkSuccessDefault from "XboxLinkSuccess.tsx";
import XboxLinkEducationDefault from "XboxLinkEducation.tsx";
import XboxLinkErrorDefault from "XboxLinkError.tsx";
import useAccountLinkStepTracking from "../useAccountLinkStepTracking.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function getScreens(headerStyle) {
  function onClose() {
    return XboxLinkModalActionCreatorsDefault.hideModal();
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
        return jsx(XboxLinkLandingDefault, {});
      },
    },
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(8775).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(XboxLinkPreConnectDefault, {});
      },
    },
    [closure_4.DISCORD_CONSENT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(8775).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return jsx(XboxLinkDiscordConsentDefault, { callbackCode, callbackState });
      },
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkSuccessDefault, {});
      },
    },
    [closure_4.EDUCATION]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkEducationDefault, { onClose });
      },
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkErrorDefault, { onClose });
      },
    },
  };
}
const XboxLinkModalScenes = fn(8767).XboxLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          return XboxLinkModalActionCreatorsDefault.hideModal();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { source: _modDef4815, onPress: first, accessibilityLabel: null };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
        const tmp8 = jsx(HeaderActionButton.HeaderActionButton, {
          source: _modDef4815,
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
  : () => {
      const obj = {
        source: _modDef4815,
        onPress() {
          return XboxLinkModalActionCreatorsDefault.hideModal();
        },
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
      return jsx(HeaderActionButton.HeaderActionButton, {
        source: _modDef4815,
        onPress() {
          return XboxLinkModalActionCreatorsDefault.hideModal();
        },
        accessibilityLabel: null,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (locationStack) => {
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
        PlatformTypes.XBOX,
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
        initialRouteName: XboxLinkModalScenes.LANDING,
        headerBackTitle: tmp9,
      });
      cResult[3] = accountLinkStepTracking;
      cResult[4] = tmp5;
      cResult[5] = tmp12;
      tmp11 = tmp12;
      const obj3 = {
        onStateChange: accountLinkStepTracking,
        screens: tmp5,
        initialRouteName: XboxLinkModalScenes.LANDING,
        headerBackTitle: tmp9,
      };
      const tmpResult = useAccountLinkStepTracking;
    }
  : (locationStack) => {
      let twoWayLinkStyles;
      twoWayLinkStyles = twoWayLinkStyles(8774).useTwoWayLinkStyles();
      const items = [twoWayLinkStyles];
      const memo = noop.useMemo(() => getScreens(twoWayLinkStyles), items);
      const obj = twoWayLinkStyles(8774);
      const accountLinkStepTracking = twoWayLinkStyles(8795).useAccountLinkStepTracking(
        PlatformTypes.XBOX,
        locationStack.locationStack,
      );
      const obj3 = {
        onStateChange: accountLinkStepTracking,
        screens: memo,
        initialRouteName: XboxLinkModalScenes.LANDING,
        headerBackTitle: null,
      };
      const intl = twoWayLinkStyles(1126).intl;
      obj3.headerBackTitle = intl.string(twoWayLinkStyles(1126).t["13/7kX"]);
      return jsx(twoWayLinkStyles(6503).Navigator, {
        onStateChange: accountLinkStepTracking,
        screens: memo,
        initialRouteName: XboxLinkModalScenes.LANDING,
        headerBackTitle: null,
      });
    };
