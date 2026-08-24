// === Module 13827: App ===

// Module 13827 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 10764 */;
import GestureWrapperDefault from "GestureWrapper" /* 13987 */;
import getAuthComponentDefault from "getAuthComponent" /* 15271 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 13828 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9690 */;
import updateState from "updateState" /* 13291 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13300 */;
import set from "set" /* 13320 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7666 */;
import bitrate from "bitrate" /* 4542 */;
import handleTokenUpdated from "handleTokenUpdated" /* 13829 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 13830 */;
import getModalState from "getModalState" /* 13831 */;
import appDatabaseManager from "appDatabaseManager" /* 5395 */;
import reset from "reset" /* 4048 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import initialize from "initialize" /* 13832 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 8620 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 13834 */;
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
    callback(13868).init();
    let obj = callback(13868);
    const tmp = callback;
    callback(4725).initialize();
    let obj2 = callback(4725);
    callback(13874).initialize();
    let obj3 = callback(13874);
    callback(13875).initialize();
    let obj4 = callback(13875);
    callback(13876).initialize();
    let obj5 = callback(13876);
    callback(13877).initialize();
    let obj6 = callback(13877);
    callback(7542).initialize();
    let obj7 = callback(7542);
    callback(13886).initialize();
    let obj8 = callback(13886);
    callback(7545).init();
    let obj9 = callback(7545);
    callback(13887).init();
    let obj10 = callback(13887);
    callback(13890).init();
    let obj11 = callback(13890);
    callback(7699).initialize();
    let obj12 = callback(7699);
    callback(13961).initialize();
    let obj13 = callback(13961);
    callback(8750).initialize();
    let obj14 = callback(8750);
    callback(8803).initialize();
    let obj15 = callback(8803);
    callback(9038).initialize();
    const obj16 = callback(9038);
    callback(13969).initialize();
    const obj17 = callback(13969);
    callback(13971).initialize();
    const obj18 = callback(13971);
    callback(13975).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(13975);
    callback(13977).initialize();
    const obj20 = callback(13977);
    callback(13978).initialize();
    const obj21 = callback(13978);
    callback(13979).initialize();
    const obj22 = callback(13979);
    callback(13980).initialize();
    const obj23 = callback(13980);
    callback(4657).initialize();
    const obj24 = callback(4657);
    callback(13981).initialize();
    const obj25 = callback(13981);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4866).initialize();
      const tmpResult = tmp(4866);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(12687).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13876).terminate();
      const obj = callback2(13876);
      callback2(4725).terminate();
      const obj2 = callback2(4725);
      callback2(7699).terminate();
      const obj3 = callback2(7699);
      callback2(13961).terminate();
      const obj4 = callback2(13961);
      callback(12687).cleanupRouteManager();
      const obj5 = callback(12687);
      callback2(13981).terminate();
      const obj6 = callback2(13981);
      callback2(13969).terminate();
      const obj7 = callback2(13969);
      callback2(9038).terminate();
      const obj8 = callback2(9038);
      callback2(13890).terminate();
      const obj9 = callback2(13890);
      callback2(13874).terminate();
      const obj10 = callback2(13874);
      callback2(13975).terminate();
      const obj11 = callback2(13975);
      callback2(13977).terminate();
      const obj12 = callback2(13977);
      callback2(13978).terminate();
      const obj13 = callback2(13978);
      callback2(13980).terminate();
      const obj14 = callback2(13980);
      callback2(4657).terminate();
      const obj15 = callback2(4657);
      callback2(13886).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13280).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13280);
  shouldUseAltGateway = shouldUseAltGateway(13985).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13985);
  obj[0] = shouldUseAltGateway(10764).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};