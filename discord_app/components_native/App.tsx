// === Module 13862: App ===

// Module 13862 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11090 */;
import GestureWrapperDefault from "GestureWrapper" /* 14022 */;
import getAuthComponentDefault from "getAuthComponent" /* 15301 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 13863 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9300 */;
import updateState from "updateState" /* 13153 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13162 */;
import set from "set" /* 13182 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7487 */;
import bitrate from "bitrate" /* 4452 */;
import handleTokenUpdated from "handleTokenUpdated" /* 13864 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 13865 */;
import getModalState from "getModalState" /* 13866 */;
import appDatabaseManager from "appDatabaseManager" /* 7250 */;
import reset from "reset" /* 4049 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import initialize from "initialize" /* 13867 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 8628 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 13869 */;
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
    callback(13903).init();
    let obj = callback(13903);
    const tmp = callback;
    callback(4801).initialize();
    let obj2 = callback(4801);
    callback(13909).initialize();
    let obj3 = callback(13909);
    callback(13910).initialize();
    let obj4 = callback(13910);
    callback(13911).initialize();
    let obj5 = callback(13911);
    callback(13912).initialize();
    let obj6 = callback(13912);
    callback(7360).initialize();
    let obj7 = callback(7360);
    callback(13921).initialize();
    let obj8 = callback(13921);
    callback(7363).init();
    let obj9 = callback(7363);
    callback(13922).init();
    let obj10 = callback(13922);
    callback(13925).init();
    let obj11 = callback(13925);
    callback(7520).initialize();
    let obj12 = callback(7520);
    callback(13996).initialize();
    let obj13 = callback(13996);
    callback(10686).initialize();
    let obj14 = callback(10686);
    callback(11065).initialize();
    let obj15 = callback(11065);
    callback(8999).initialize();
    const obj16 = callback(8999);
    callback(14004).initialize();
    const obj17 = callback(14004);
    callback(14006).initialize();
    const obj18 = callback(14006);
    callback(14010).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14010);
    callback(14012).initialize();
    const obj20 = callback(14012);
    callback(14013).initialize();
    const obj21 = callback(14013);
    callback(14014).initialize();
    const obj22 = callback(14014);
    callback(14015).initialize();
    const obj23 = callback(14015);
    callback(4561).initialize();
    const obj24 = callback(4561);
    callback(14016).initialize();
    const obj25 = callback(14016);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4985).initialize();
      const tmpResult = tmp(4985);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(11048).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13911).terminate();
      const obj = callback2(13911);
      callback2(4801).terminate();
      const obj2 = callback2(4801);
      callback2(7520).terminate();
      const obj3 = callback2(7520);
      callback2(13996).terminate();
      const obj4 = callback2(13996);
      callback(11048).cleanupRouteManager();
      const obj5 = callback(11048);
      callback2(14016).terminate();
      const obj6 = callback2(14016);
      callback2(14004).terminate();
      const obj7 = callback2(14004);
      callback2(8999).terminate();
      const obj8 = callback2(8999);
      callback2(13925).terminate();
      const obj9 = callback2(13925);
      callback2(13909).terminate();
      const obj10 = callback2(13909);
      callback2(14010).terminate();
      const obj11 = callback2(14010);
      callback2(14012).terminate();
      const obj12 = callback2(14012);
      callback2(14013).terminate();
      const obj13 = callback2(14013);
      callback2(14015).terminate();
      const obj14 = callback2(14015);
      callback2(4561).terminate();
      const obj15 = callback2(4561);
      callback2(13921).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13142).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13142);
  shouldUseAltGateway = shouldUseAltGateway(14020).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(14020);
  obj[0] = shouldUseAltGateway(11090).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};