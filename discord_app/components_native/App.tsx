import closure_3 from "ApexExperiment";
import { NativeModules } from "handleSetLocationMetadata";
import checkForNewerBuild from "checkForNewerBuild";
import fetchFingerprint from "fetchFingerprint";
import nativeEventEmitter from "nativeEventEmitter";
import updateState from "updateState";
import showReviewRequestModal from "showReviewRequestModal";
import set from "set";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import bitrate from "bitrate";
import handleTokenUpdated from "handleTokenUpdated";
import handleUpdateVADPermission from "handleUpdateVADPermission";
import getModalState from "getModalState";
import appDatabaseManager from "appDatabaseManager";
import reset from "reset";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import initialize from "initialize";
import handleSetLocationMetadata from "handleSetLocationMetadata";
import "map";
import ApexExperiment from "ApexExperiment";
import { jsx } from "reactNativeCorePlugins";
import set from "checkForNewerBuild";

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = importDefault(9).renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(13518).init();
    let obj = callback(13518);
    const tmp = callback;
    callback(4589).initialize();
    let obj2 = callback(4589);
    callback(13524).initialize();
    let obj3 = callback(13524);
    callback(13525).initialize();
    let obj4 = callback(13525);
    callback(13526).initialize();
    let obj5 = callback(13526);
    callback(13527).initialize();
    let obj6 = callback(13527);
    callback(6046).initialize();
    let obj7 = callback(6046);
    callback(13536).initialize();
    let obj8 = callback(13536);
    callback(6049).init();
    let obj9 = callback(6049);
    callback(13537).init();
    let obj10 = callback(13537);
    callback(13540).init();
    let obj11 = callback(13540);
    callback(6301).initialize();
    let obj12 = callback(6301);
    callback(13601).initialize();
    let obj13 = callback(13601);
    callback(10623).initialize();
    let obj14 = callback(10623);
    callback(10633).initialize();
    let obj15 = callback(10633);
    callback(8128).initialize();
    const obj16 = callback(8128);
    callback(13609).initialize();
    const obj17 = callback(13609);
    callback(13611).initialize();
    const obj18 = callback(13611);
    callback(13615).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13615);
    callback(13617).initialize();
    const obj20 = callback(13617);
    callback(13618).initialize();
    const obj21 = callback(13618);
    callback(13619).initialize();
    const obj22 = callback(13619);
    callback(13620).initialize();
    const obj23 = callback(13620);
    callback(4371).initialize();
    const obj24 = callback(4371);
    callback(13621).initialize();
    const obj25 = callback(13621);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4757).initialize();
      const tmpResult = tmp(4757);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10882).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13526).terminate();
      const obj = callback2(13526);
      callback2(4589).terminate();
      const obj2 = callback2(4589);
      callback2(6301).terminate();
      const obj3 = callback2(6301);
      callback2(13601).terminate();
      const obj4 = callback2(13601);
      callback(10882).cleanupRouteManager();
      const obj5 = callback(10882);
      callback2(13621).terminate();
      const obj6 = callback2(13621);
      callback2(13609).terminate();
      const obj7 = callback2(13609);
      callback2(8128).terminate();
      const obj8 = callback2(8128);
      callback2(13540).terminate();
      const obj9 = callback2(13540);
      callback2(13524).terminate();
      const obj10 = callback2(13524);
      callback2(13615).terminate();
      const obj11 = callback2(13615);
      callback2(13617).terminate();
      const obj12 = callback2(13617);
      callback2(13618).terminate();
      const obj13 = callback2(13618);
      callback2(13620).terminate();
      const obj14 = callback2(13620);
      callback2(4371).terminate();
      const obj15 = callback2(4371);
      callback2(13536).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(589);
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => fetchFingerprint.isAuthenticated());
  shouldUseAltGateway = stateFromStores;
  const items1 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    if (shouldUseAltGateway) {
      const token = outer1_6.getToken();
      if (null == token) {
        const _Error = Error;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        outer1_1(outer1_2[52]).startSession(token);
        const obj = outer1_1(outer1_2[52]);
        outer1_1(outer1_2[53]).initialize();
        const obj2 = outer1_1(outer1_2[53]);
        if (obj3.isAndroid()) {
          const NativePermissionManager = outer1_4.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          callback(table[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = React.useEffect(() => {
    callback(9).wasAuthenticated = fetchFingerprint.isAuthenticated();
  }, []);
  shouldUseAltGateway = undefined;
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12748).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    if (obj.isAndroid()) {
      const result = outer1_1(outer1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
      const obj2 = outer1_1(outer1_2[56]);
    } else {
      const DCDFastConnectManager = outer1_4.DCDFastConnectManager;
      const result1 = DCDFastConnectManager.setUseChannelObfuscation(shouldUseAltGateway);
    }
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(12748);
  shouldUseAltGateway = shouldUseAltGateway(13625).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    if (obj.isAndroid()) {
      outer1_1(outer1_2[56]).setUseAltGateway(shouldUseAltGateway);
      const obj2 = outer1_1(outer1_2[56]);
    } else {
      const DCDFastConnectManager = outer1_4.DCDFastConnectManager;
      DCDFastConnectManager.setUseAltGateway(shouldUseAltGateway);
    }
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(13625);
  obj[0] = shouldUseAltGateway(10910).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(10910);
  obj[1] = jsx(importDefault(14872), {});
  obj[1] = jsx(importDefault(13627), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};