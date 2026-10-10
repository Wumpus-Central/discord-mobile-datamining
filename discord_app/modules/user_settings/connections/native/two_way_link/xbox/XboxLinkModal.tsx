// === Module 9206: XboxLinkModal ===

// Module 9206 (XboxLinkModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Navigator from "Navigator" /* 6687 */;
import HeaderActionButton from "HeaderActionButton" /* 7088 */;
import _modDef7728 from "module_7728" /* 7728 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9205 */;
import XboxLinkLandingDefault from "XboxLinkLanding" /* 9208 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9214 */;
import XboxLinkPreConnectDefault from "XboxLinkPreConnect" /* 9216 */;
import XboxLinkDiscordConsentDefault from "XboxLinkDiscordConsent" /* 9220 */;
import XboxLinkSuccessDefault from "XboxLinkSuccess" /* 12906 */;
import XboxLinkEducationDefault from "XboxLinkEducation" /* 12909 */;
import XboxLinkErrorDefault from "XboxLinkError" /* 12911 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 12915 */;
import noop from "module_19" /* 19 */;

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
      }
    },
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(9215).TwoWayLinkStepHeader, { idx: 1, total: 2 });
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
        return jsx(onClose(9215).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
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
const XboxLinkModalScenes = fn(9207).XboxLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    }
    cResult[0] = onClose;
    let first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef7728, onPress: first, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
    const tmp8 = jsx(HeaderActionButton.HeaderActionButton, { source: _modDef7728, onPress: first, accessibilityLabel: null });
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function CloseButton() {
  const obj = {
    source: _modDef7728,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7728,
    onPress: function onClose() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkModal(locationStack) {
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
  const accountLinkStepTracking = useAccountLinkStepTracking.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
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
  const tmp12 = jsx(Navigator.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: tmp9 });
  cResult[3] = accountLinkStepTracking;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const obj3 = { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: tmp9 };
  const tmpResult = useAccountLinkStepTracking;
}) : (function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(9214).useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj = twoWayLinkStyles(9214);
  const accountLinkStepTracking = twoWayLinkStyles(12915).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1126).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1126).t["13/7kX"]);
  return jsx(twoWayLinkStyles(6687).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
});