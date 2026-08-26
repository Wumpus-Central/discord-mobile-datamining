// === Module 13935: App ===

// Module 13935 (App)
import serializeDefault from "serialize" /* 9 */;
import setLevelsDefault from "setLevels" /* 11162 */;
import GestureWrapperDefault from "GestureWrapper" /* 14095 */;
import getAuthComponentDefault from "getAuthComponent" /* 15380 */;
import closure_3 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "checkForNewerBuild" /* 13936 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import nativeEventEmitter from "nativeEventEmitter" /* 9368 */;
import updateState from "updateState" /* 13226 */;
import showReviewRequestModal from "showReviewRequestModal" /* 13235 */;
import set from "set" /* 13255 */;
import createEmptyPromotionsByType from "createEmptyPromotionsByType" /* 7553 */;
import bitrate from "bitrate" /* 4516 */;
import handleTokenUpdated from "handleTokenUpdated" /* 13937 */;
import handleUpdateVADPermission from "handleUpdateVADPermission" /* 13938 */;
import getModalState from "getModalState" /* 13939 */;
import appDatabaseManager from "appDatabaseManager" /* 7316 */;
import reset from "reset" /* 4113 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import initialize from "initialize" /* 13940 */;
import handleSetLocationMetadata from "handleSetLocationMetadata" /* 8696 */;
import "map";
import ApexExperiment from "ApexExperiment" /* 13942 */;
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
    callback(13976).init();
    let obj = callback(13976);
    const tmp = callback;
    callback(4865).initialize();
    let obj2 = callback(4865);
    callback(13982).initialize();
    let obj3 = callback(13982);
    callback(13983).initialize();
    let obj4 = callback(13983);
    callback(13984).initialize();
    let obj5 = callback(13984);
    callback(13985).initialize();
    let obj6 = callback(13985);
    callback(7426).initialize();
    let obj7 = callback(7426);
    callback(13994).initialize();
    let obj8 = callback(13994);
    callback(7429).init();
    let obj9 = callback(7429);
    callback(13995).init();
    let obj10 = callback(13995);
    callback(13998).init();
    let obj11 = callback(13998);
    callback(7586).initialize();
    let obj12 = callback(7586);
    callback(14069).initialize();
    let obj13 = callback(14069);
    callback(10758).initialize();
    let obj14 = callback(10758);
    callback(11137).initialize();
    let obj15 = callback(11137);
    callback(9067).initialize();
    const obj16 = callback(9067);
    callback(14077).initialize();
    const obj17 = callback(14077);
    callback(14079).initialize();
    const obj18 = callback(14079);
    callback(14083).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14083);
    callback(14085).initialize();
    const obj20 = callback(14085);
    callback(14086).initialize();
    const obj21 = callback(14086);
    callback(14087).initialize();
    const obj22 = callback(14087);
    callback(14088).initialize();
    const obj23 = callback(14088);
    callback(4625).initialize();
    const obj24 = callback(4625);
    callback(14089).initialize();
    const obj25 = callback(14089);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5051).initialize();
      const tmpResult = tmp(5051);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(11120).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13984).terminate();
      const obj = callback2(13984);
      callback2(4865).terminate();
      const obj2 = callback2(4865);
      callback2(7586).terminate();
      const obj3 = callback2(7586);
      callback2(14069).terminate();
      const obj4 = callback2(14069);
      callback(11120).cleanupRouteManager();
      const obj5 = callback(11120);
      callback2(14089).terminate();
      const obj6 = callback2(14089);
      callback2(14077).terminate();
      const obj7 = callback2(14077);
      callback2(9067).terminate();
      const obj8 = callback2(9067);
      callback2(13998).terminate();
      const obj9 = callback2(13998);
      callback2(13982).terminate();
      const obj10 = callback2(13982);
      callback2(14083).terminate();
      const obj11 = callback2(14083);
      callback2(14085).terminate();
      const obj12 = callback2(14085);
      callback2(14086).terminate();
      const obj13 = callback2(14086);
      callback2(14088).terminate();
      const obj14 = callback2(14088);
      callback2(4625).terminate();
      const obj15 = callback2(4625);
      callback2(13994).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13215).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13215);
  shouldUseAltGateway = shouldUseAltGateway(14093).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(14093);
  obj[0] = shouldUseAltGateway(11162).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};