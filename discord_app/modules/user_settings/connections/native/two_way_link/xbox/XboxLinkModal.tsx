// === Module 8734: XboxLinkModal ===

// Module 8734 (XboxLinkModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AssetRegistryDefault from "AssetRegistry" /* 4809 */;
import Navigator2 from "Navigator" /* 6496 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6880 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 8733 */;
import XboxLinkConstants from "XboxLinkConstants" /* 8735 */;
import XboxLinkLandingDefault from "XboxLinkLanding" /* 8736 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8742 */;
import XboxLinkPreConnectDefault from "XboxLinkPreConnect" /* 8744 */;
import XboxLinkDiscordConsentDefault from "XboxLinkDiscordConsent" /* 8748 */;
import XboxLinkSuccessDefault from "XboxLinkSuccess" /* 8752 */;
import XboxLinkEducationDefault from "XboxLinkEducation" /* 8757 */;
import XboxLinkErrorDefault from "XboxLinkError" /* 8759 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 8763 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let locationStack;

function getScreens(headerStyle) {
  function onClose() {
    const obj = XboxLinkModalActionCreatorsDefault;
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
      return jsx(XboxLinkLandingDefault, {});
    }
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
        return jsx(XboxLinkPreConnectDefault, {});
      }
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
        return jsx(XboxLinkDiscordConsentDefault, { callbackCode, callbackState });
      }
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkSuccessDefault, {});
      }
    },
    [closure_4.EDUCATION]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkEducationDefault, { onClose });
      }
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkErrorDefault, { onClose });
      }
    }
  };
}
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = XboxLinkModalActionCreatorsDefault;
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
    const tmp8 = <HeaderActionButton source={AssetRegistryDefault} onPress={first} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onPress() {
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((locationStack) => {
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
  const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack);
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
  const tmp12 = jsx(Navigator2.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: tmp9 });
  cResult[3] = accountLinkStepTracking;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((locationStack) => {
  let twoWayLinkStyles;
  locationStack = locationStack.locationStack;
  const obj = twoWayLinkStyles(8742);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = react.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj2 = twoWayLinkStyles(8763);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack);
  const Navigator = twoWayLinkStyles(6496).Navigator;
  const intl = twoWayLinkStyles(1126).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={XboxLinkModalScenes.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1126).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default tmp2;