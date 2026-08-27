// === Module 13962: App ===

// Module 13962 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11048 */;
import GestureWrapperDefault from "GestureWrapper" /* 14122 */;
import getAuthComponentDefault from "getAuthComponent" /* 15445 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 13963 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9699 */;
import updateState from "updateState" /* 13252 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13261 */;
import set from "set" /* 13281 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 10394 */;
import bitrate from "bitrate" /* 4517 */;
import handleTokenUpdated from "handleTokenUpdated" /* 13964 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 13965 */;
import getModalState from "getModalState" /* 13966 */;
import appDatabaseManager from "appDatabaseManager" /* 7322 */;
import reset from "reset" /* 4113 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import initialize from "initialize" /* 13967 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 7649 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 13969 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = serializeDefault.renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(14003).init();
    let obj = callback(14003);
    const tmp = callback;
    callback(4866).initialize();
    let obj2 = callback(4866);
    callback(14009).initialize();
    let obj3 = callback(14009);
    callback(14010).initialize();
    let obj4 = callback(14010);
    callback(14011).initialize();
    let obj5 = callback(14011);
    callback(14012).initialize();
    let obj6 = callback(14012);
    callback(7434).initialize();
    let obj7 = callback(7434);
    callback(14021).initialize();
    let obj8 = callback(14021);
    callback(7437).init();
    let obj9 = callback(7437);
    callback(14022).init();
    let obj10 = callback(14022);
    callback(14025).init();
    let obj11 = callback(14025);
    callback(10407).initialize();
    let obj12 = callback(10407);
    callback(14096).initialize();
    let obj13 = callback(14096);
    callback(9374).initialize();
    let obj14 = callback(9374);
    callback(9418).initialize();
    let obj15 = callback(9418);
    callback(8507).initialize();
    const obj16 = callback(8507);
    callback(14104).initialize();
    const obj17 = callback(14104);
    callback(14106).initialize();
    const obj18 = callback(14106);
    callback(14110).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14110);
    callback(14112).initialize();
    const obj20 = callback(14112);
    callback(14113).initialize();
    const obj21 = callback(14113);
    callback(14114).initialize();
    const obj22 = callback(14114);
    callback(14115).initialize();
    const obj23 = callback(14115);
    callback(4626).initialize();
    const obj24 = callback(4626);
    callback(14116).initialize();
    const obj25 = callback(14116);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5056).initialize();
      const tmpResult = tmp(5056);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(12234).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14011).terminate();
      const obj = callback2(14011);
      callback2(4866).terminate();
      const obj2 = callback2(4866);
      callback2(10407).terminate();
      const obj3 = callback2(10407);
      callback2(14096).terminate();
      const obj4 = callback2(14096);
      callback(12234).cleanupRouteManager();
      const obj5 = callback(12234);
      callback2(14116).terminate();
      const obj6 = callback2(14116);
      callback2(14104).terminate();
      const obj7 = callback2(14104);
      callback2(8507).terminate();
      const obj8 = callback2(8507);
      callback2(14025).terminate();
      const obj9 = callback2(14025);
      callback2(14009).terminate();
      const obj10 = callback2(14009);
      callback2(14110).terminate();
      const obj11 = callback2(14110);
      callback2(14112).terminate();
      const obj12 = callback2(14112);
      callback2(14113).terminate();
      const obj13 = callback2(14113);
      callback2(14115).terminate();
      const obj14 = callback2(14115);
      callback2(4626).terminate();
      const obj15 = callback2(4626);
      callback2(14021).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.isAuthenticated());
  shouldUseAltGateway = stateFromStores;
  const items1 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (shouldUseAltGateway) {
      const token = closure_1_6.getToken();
      if (null == token) {
        const _Error = Error;
        error = new Error("Authenticated without a token");
        throw error;
      } else {
        closure_1_1(closure_1_2[52]).startSession(token);
        const obj = closure_1_1(closure_1_2[52]);
        closure_1_1(closure_1_2[53]).initialize();
        const obj2 = closure_1_1(closure_1_2[53]);
        if (obj3.isAndroid()) {
          const NativePermissionManager = closure_1_4.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          callback(table[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = React.useEffect(() => {
    callback(9).wasAuthenticated = closure_6.isAuthenticated();
  }, []);
  shouldUseAltGateway = undefined;
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13238).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    if (obj.isAndroid()) {
      const result = closure_1_1(closure_1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
      const obj2 = closure_1_1(closure_1_2[56]);
    } else {
      const DCDFastConnectManager = closure_1_4.DCDFastConnectManager;
      const result1 = DCDFastConnectManager.setUseChannelObfuscation(shouldUseAltGateway);
    }
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(13238);
  shouldUseAltGateway = shouldUseAltGateway(14120).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    if (obj.isAndroid()) {
      closure_1_1(closure_1_2[56]).setUseAltGateway(shouldUseAltGateway);
      const obj2 = closure_1_1(closure_1_2[56]);
    } else {
      const DCDFastConnectManager = closure_1_4.DCDFastConnectManager;
      DCDFastConnectManager.setUseAltGateway(shouldUseAltGateway);
    }
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(14120);
  obj[0] = shouldUseAltGateway(11048).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};