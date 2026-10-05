// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../../Constants.tsx";
import intl2 from "../../../../../../intl/index.native.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/04809_AssetRegistry.js";
import Navigator2 from "../../../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton2 from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import useAccountLinkStepTracking from "../useAccountLinkStepTracking.tsx";
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators.tsx";
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants.tsx";
import CrunchyrollLinkLandingDefault from "CrunchyrollLinkLanding.tsx";
import CrunchyrollLinkPreConnectDefault from "CrunchyrollLinkPreConnect.tsx";
import CrunchyrollLinkDiscordConsentDefault from "CrunchyrollLinkDiscordConsent.tsx";
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess.tsx";
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let locationStack;

function getScreens(headerStyle) {
  function onClose() {
    const obj = CrunchyrollLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }
  function blank() {
    return null;
  }
  let obj = {
    headerLeft: blank,
    headerRight,
    headerTitle: blank,
    headerStyle: headerStyle.navHeader,
    render() {
      return jsx(CrunchyrollLinkLandingDefault, {});
    },
  };
  return {
    [closure_4.LANDING]: obj,
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(dependencyMap[11]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
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
        return jsx(onClose(dependencyMap[11]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
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
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const headerRight = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = CrunchyrollLinkModalActionCreatorsDefault;
          return obj.hideModal();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
        const intl = intl2.intl;
        const tmp8 = (
          <HeaderActionButton
            source={AssetRegistryDefault}
            onPress={first}
            accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
          />
        );
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      const intl = intl2.intl;
      return (
        <HeaderActionButton
          source={AssetRegistryDefault}
          onPress={function onPress() {
            const obj = CrunchyrollLinkModalActionCreatorsDefault;
            return obj.hideModal();
          }}
          accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (locationStack) => {
      let tmp5;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(6);
      locationStack = locationStack.locationStack;
      const obj2 = TwoWayLinkStyles;
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      if (cResult[0] !== twoWayLinkStyles) {
        const tmp7 = getScreens(twoWayLinkStyles);
        cResult[0] = twoWayLinkStyles;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = useAccountLinkStepTracking;
      const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["13/7kX"]);
        cResult[2] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === accountLinkStepTracking) {
        let tmp11;
        if (cResult[4] === tmp5) {
          tmp11 = cResult[5];
        }
        return tmp11;
      }
      const tmp12 = jsx(Navigator2.Navigator, {
        onStateChange: accountLinkStepTracking,
        screens: tmp5,
        initialRouteName: constants.LANDING,
        headerBackTitle: tmp9,
      });
      cResult[3] = accountLinkStepTracking;
      cResult[4] = tmp5;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : (locationStack) => {
      let twoWayLinkStyles;
      locationStack = locationStack.locationStack;
      const obj = twoWayLinkStyles(8742);
      twoWayLinkStyles = obj.useTwoWayLinkStyles();
      const items = [twoWayLinkStyles];
      const memo = react.useMemo(() => getScreens(twoWayLinkStyles), items);
      const obj2 = twoWayLinkStyles(8763);
      const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
      const Navigator = twoWayLinkStyles(6496).Navigator;
      const intl = twoWayLinkStyles(1126).intl;
      return (
        <Navigator
          onStateChange={accountLinkStepTracking}
          screens={memo}
          initialRouteName={constants.LANDING}
          headerBackTitle={intl.string(twoWayLinkStyles(1126).t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx",
);

export default tmp2;
