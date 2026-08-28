// === Module 13981: App ===

// Module 13981 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11066 */;
import GestureWrapperDefault from "GestureWrapper" /* 14141 */;
import getAuthComponentDefault from "getAuthComponent" /* 15463 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 13982 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9717 */;
import updateState from "updateState" /* 13271 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13280 */;
import set from "set" /* 13300 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 10412 */;
import bitrate from "bitrate" /* 4518 */;
import handleTokenUpdated from "handleTokenUpdated" /* 13983 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 13984 */;
import getModalState from "getModalState" /* 13985 */;
import appDatabaseManager from "appDatabaseManager" /* 7336 */;
import reset from "reset" /* 4114 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import initialize from "initialize" /* 13986 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 7663 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 13988 */;
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
    callback(14022).init();
    let obj = callback(14022);
    const tmp = callback;
    callback(4879).initialize();
    let obj2 = callback(4879);
    callback(14028).initialize();
    let obj3 = callback(14028);
    callback(14029).initialize();
    let obj4 = callback(14029);
    callback(14030).initialize();
    let obj5 = callback(14030);
    callback(14031).initialize();
    let obj6 = callback(14031);
    callback(7448).initialize();
    let obj7 = callback(7448);
    callback(14040).initialize();
    let obj8 = callback(14040);
    callback(7451).init();
    let obj9 = callback(7451);
    callback(14041).init();
    let obj10 = callback(14041);
    callback(14044).init();
    let obj11 = callback(14044);
    callback(10423).initialize();
    let obj12 = callback(10423);
    callback(14115).initialize();
    let obj13 = callback(14115);
    callback(9392).initialize();
    let obj14 = callback(9392);
    callback(9436).initialize();
    let obj15 = callback(9436);
    callback(8521).initialize();
    const obj16 = callback(8521);
    callback(14123).initialize();
    const obj17 = callback(14123);
    callback(14125).initialize();
    const obj18 = callback(14125);
    callback(14129).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14129);
    callback(14131).initialize();
    const obj20 = callback(14131);
    callback(14132).initialize();
    const obj21 = callback(14132);
    callback(14133).initialize();
    const obj22 = callback(14133);
    callback(14134).initialize();
    const obj23 = callback(14134);
    callback(4627).initialize();
    const obj24 = callback(4627);
    callback(14135).initialize();
    const obj25 = callback(14135);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5069).initialize();
      const tmpResult = tmp(5069);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(12253).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14030).terminate();
      const obj = callback2(14030);
      callback2(4879).terminate();
      const obj2 = callback2(4879);
      callback2(10423).terminate();
      const obj3 = callback2(10423);
      callback2(14115).terminate();
      const obj4 = callback2(14115);
      callback(12253).cleanupRouteManager();
      const obj5 = callback(12253);
      callback2(14135).terminate();
      const obj6 = callback2(14135);
      callback2(14123).terminate();
      const obj7 = callback2(14123);
      callback2(8521).terminate();
      const obj8 = callback2(8521);
      callback2(14044).terminate();
      const obj9 = callback2(14044);
      callback2(14028).terminate();
      const obj10 = callback2(14028);
      callback2(14129).terminate();
      const obj11 = callback2(14129);
      callback2(14131).terminate();
      const obj12 = callback2(14131);
      callback2(14132).terminate();
      const obj13 = callback2(14132);
      callback2(14134).terminate();
      const obj14 = callback2(14134);
      callback2(4627).terminate();
      const obj15 = callback2(4627);
      callback2(14040).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13257).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13257);
  shouldUseAltGateway = shouldUseAltGateway(14139).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(14139);
  obj[0] = shouldUseAltGateway(11066).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};