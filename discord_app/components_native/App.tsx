// === Module 13540: App ===

// Module 13540 (App)
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
    callback(13581).init();
    let obj = callback(13581);
    const tmp = callback;
    callback(4651).initialize();
    let obj2 = callback(4651);
    callback(13587).initialize();
    let obj3 = callback(13587);
    callback(13588).initialize();
    let obj4 = callback(13588);
    callback(13589).initialize();
    let obj5 = callback(13589);
    callback(13590).initialize();
    let obj6 = callback(13590);
    callback(7124).initialize();
    let obj7 = callback(7124);
    callback(13599).initialize();
    let obj8 = callback(13599);
    callback(7127).init();
    let obj9 = callback(7127);
    callback(13600).init();
    let obj10 = callback(13600);
    callback(13603).init();
    let obj11 = callback(13603);
    callback(7286).initialize();
    let obj12 = callback(7286);
    callback(13664).initialize();
    let obj13 = callback(13664);
    callback(10688).initialize();
    let obj14 = callback(10688);
    callback(10667).initialize();
    let obj15 = callback(10667);
    callback(8459).initialize();
    const obj16 = callback(8459);
    callback(13672).initialize();
    const obj17 = callback(13672);
    callback(13674).initialize();
    const obj18 = callback(13674);
    callback(13678).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13678);
    callback(13680).initialize();
    const obj20 = callback(13680);
    callback(13681).initialize();
    const obj21 = callback(13681);
    callback(13682).initialize();
    const obj22 = callback(13682);
    callback(13683).initialize();
    const obj23 = callback(13683);
    callback(4433).initialize();
    const obj24 = callback(4433);
    callback(13684).initialize();
    const obj25 = callback(13684);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4819).initialize();
      const tmpResult = tmp(4819);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10982).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13589).terminate();
      const obj = callback2(13589);
      callback2(4651).terminate();
      const obj2 = callback2(4651);
      callback2(7286).terminate();
      const obj3 = callback2(7286);
      callback2(13664).terminate();
      const obj4 = callback2(13664);
      callback(10982).cleanupRouteManager();
      const obj5 = callback(10982);
      callback2(13684).terminate();
      const obj6 = callback2(13684);
      callback2(13672).terminate();
      const obj7 = callback2(13672);
      callback2(8459).terminate();
      const obj8 = callback2(8459);
      callback2(13603).terminate();
      const obj9 = callback2(13603);
      callback2(13587).terminate();
      const obj10 = callback2(13587);
      callback2(13678).terminate();
      const obj11 = callback2(13678);
      callback2(13680).terminate();
      const obj12 = callback2(13680);
      callback2(13681).terminate();
      const obj13 = callback2(13681);
      callback2(13683).terminate();
      const obj14 = callback2(13683);
      callback2(4433).terminate();
      const obj15 = callback2(4433);
      callback2(13599).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12811).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12811);
  shouldUseAltGateway = shouldUseAltGateway(13688).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13688);
  obj[0] = shouldUseAltGateway(11032).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = importDefault(11032);
  obj[1] = jsx(importDefault(14939), {});
  obj[1] = jsx(importDefault(13690), { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};