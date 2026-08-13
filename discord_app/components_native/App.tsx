// discord_app/components_native/App.tsx
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
import { setLevels } from "../modules/app_startup/StartupProfiler.tsx";
import { getAuthComponent } from "../modules/main_tabs_v2/native/MainNavigator.tsx";
import { serialize } from "../modules/tti_analytics/TTITracker.tsx";
import { GestureWrapper } from "AppContainer.tsx";

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = serialize.renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(13775).init();
    let obj = callback(13775);
    const tmp = callback;
    callback(4740).initialize();
    let obj2 = callback(4740);
    callback(13781).initialize();
    let obj3 = callback(13781);
    callback(13782).initialize();
    let obj4 = callback(13782);
    callback(13783).initialize();
    let obj5 = callback(13783);
    callback(13784).initialize();
    let obj6 = callback(13784);
    callback(7261).initialize();
    let obj7 = callback(7261);
    callback(13793).initialize();
    let obj8 = callback(13793);
    callback(7264).init();
    let obj9 = callback(7264);
    callback(13794).init();
    let obj10 = callback(13794);
    callback(13797).init();
    let obj11 = callback(13797);
    callback(7422).initialize();
    let obj12 = callback(7422);
    callback(13858).initialize();
    let obj13 = callback(13858);
    callback(10573).initialize();
    let obj14 = callback(10573);
    callback(10950).initialize();
    let obj15 = callback(10950);
    callback(8901).initialize();
    const obj16 = callback(8901);
    callback(13866).initialize();
    const obj17 = callback(13866);
    callback(13868).initialize();
    const obj18 = callback(13868);
    callback(13872).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13872);
    callback(13874).initialize();
    const obj20 = callback(13874);
    callback(13875).initialize();
    const obj21 = callback(13875);
    callback(13876).initialize();
    const obj22 = callback(13876);
    callback(13877).initialize();
    const obj23 = callback(13877);
    callback(4522).initialize();
    const obj24 = callback(4522);
    callback(13878).initialize();
    const obj25 = callback(13878);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4923).initialize();
      const tmpResult = tmp(4923);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10933).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13783).terminate();
      const obj = callback2(13783);
      callback2(4740).terminate();
      const obj2 = callback2(4740);
      callback2(7422).terminate();
      const obj3 = callback2(7422);
      callback2(13858).terminate();
      const obj4 = callback2(13858);
      callback(10933).cleanupRouteManager();
      const obj5 = callback(10933);
      callback2(13878).terminate();
      const obj6 = callback2(13878);
      callback2(13866).terminate();
      const obj7 = callback2(13866);
      callback2(8901).terminate();
      const obj8 = callback2(8901);
      callback2(13797).terminate();
      const obj9 = callback2(13797);
      callback2(13781).terminate();
      const obj10 = callback2(13781);
      callback2(13872).terminate();
      const obj11 = callback2(13872);
      callback2(13874).terminate();
      const obj12 = callback2(13874);
      callback2(13875).terminate();
      const obj13 = callback2(13875);
      callback2(13877).terminate();
      const obj14 = callback2(13877);
      callback2(4522).terminate();
      const obj15 = callback2(4522);
      callback2(13793).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13003).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13003);
  shouldUseAltGateway = shouldUseAltGateway(13882).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13882);
  obj[0] = shouldUseAltGateway(10976).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevels;
  obj[1] = jsx(getAuthComponent, {});
  obj[1] = jsx(GestureWrapper, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};