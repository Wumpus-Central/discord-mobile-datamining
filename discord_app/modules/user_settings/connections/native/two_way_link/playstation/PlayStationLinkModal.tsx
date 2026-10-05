// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import intl2 from "../../../../../../intl/index.native.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/04809_AssetRegistry.js";
import Navigator2 from "../../../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton2 from "../../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import useAccountLinkStepTracking from "../useAccountLinkStepTracking.tsx";
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators.tsx";
import PlayStationLinkConstants from "PlayStationLinkConstants.tsx";
import PlayStationLinkLanding from "PlayStationLinkLanding.tsx";
import PlayStationLinkPreConnect from "PlayStationLinkPreConnect.tsx";
import PlayStationLinkDiscordConsent from "PlayStationLinkDiscordConsent.tsx";
import PlayStationLinkSuccess from "PlayStationLinkSuccess.tsx";
import PlayStationLinkError from "PlayStationLinkError.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

function getScreens(platformType, headerStyle) {
  function onClose() {
    const obj = onClose(dependencyMap[5]);
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
      return jsx(PlayStationLinkLanding.PlayStationLinkLanding, { platformType });
    },
  };
  return {
    [closure_4.LANDING]: obj,
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(platformType(dependencyMap[10]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(PlayStationLinkPreConnect.PlayStationLinkPreConnect, { platformType });
      },
    },
    [closure_4.DISCORD_CONSENT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(platformType(dependencyMap[10]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return jsx(PlayStationLinkDiscordConsent.PlayStationLinkDiscordConsent, {
          platformType,
          callbackCode,
          callbackState,
        });
      },
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(PlayStationLinkSuccess.PlayStationLinkSuccess, { onClose });
      },
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render(errorCode) {
        return jsx(PlayStationLinkError.PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
      },
    },
  };
}
const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
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
          const obj = PlayStationLinkModalActionCreatorsDefault;
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
            const obj = PlayStationLinkModalActionCreatorsDefault;
            return obj.hideModal();
          }}
          accessibilityLabel={intl.string(intl2.t.cpT0Cq)}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let locationStack;
      let platformType;
      const obj = react2;
      const cResult = obj.c(7);
      ({ platformType, locationStack } = arg0);
      const obj2 = TwoWayLinkStyles;
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      if (cResult[0] === platformType) {
        let tmp5;
        let tmp9;
        if (cResult[1] === twoWayLinkStyles) {
          tmp5 = cResult[2];
        }
        const tmpResult = useAccountLinkStepTracking;
        const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(platformType, locationStack);
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t["13/7kX"]);
          cResult[3] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === accountLinkStepTracking) {
          let tmp11;
          if (cResult[5] === tmp5) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
        const tmp14 = jsx(Navigator2.Navigator, {
          onStateChange: accountLinkStepTracking,
          screens: tmp5,
          initialRouteName: constants.LANDING,
          headerBackTitle: tmp9,
        });
        cResult[4] = accountLinkStepTracking;
        cResult[5] = tmp5;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
      const tmp6 = getScreens(platformType, twoWayLinkStyles);
      cResult[0] = platformType;
      cResult[1] = twoWayLinkStyles;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (platformType) => {
      platformType = platformType.platformType;
      const locationStack = platformType.locationStack;
      const obj = platformType(8742);
      const twoWayLinkStyles = obj.useTwoWayLinkStyles();
      const items = [platformType, twoWayLinkStyles];
      const memo = react.useMemo(() => getScreens(platformType, twoWayLinkStyles), items);
      const obj2 = platformType(8763);
      const accountLinkStepTracking = obj2.useAccountLinkStepTracking(platformType, locationStack);
      const Navigator = platformType(6496).Navigator;
      const intl = platformType(1126).intl;
      return (
        <Navigator
          onStateChange={accountLinkStepTracking}
          screens={memo}
          initialRouteName={constants.LANDING}
          headerBackTitle={intl.string(platformType(1126).t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx",
);

export default tmp2;
