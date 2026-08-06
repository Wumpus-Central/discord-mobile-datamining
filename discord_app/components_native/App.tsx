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
    callback(13623).init();
    let obj = callback(13623);
    const tmp = callback;
    callback(4680).initialize();
    let obj2 = callback(4680);
    callback(13629).initialize();
    let obj3 = callback(13629);
    callback(13630).initialize();
    let obj4 = callback(13630);
    callback(13631).initialize();
    let obj5 = callback(13631);
    callback(13632).initialize();
    let obj6 = callback(13632);
    callback(7137).initialize();
    let obj7 = callback(7137);
    callback(13641).initialize();
    let obj8 = callback(13641);
    callback(7140).init();
    let obj9 = callback(7140);
    callback(13642).init();
    let obj10 = callback(13642);
    callback(13645).init();
    let obj11 = callback(13645);
    callback(7298).initialize();
    let obj12 = callback(7298);
    callback(13706).initialize();
    let obj13 = callback(13706);
    callback(10518).initialize();
    let obj14 = callback(10518);
    callback(10529).initialize();
    let obj15 = callback(10529);
    callback(8775).initialize();
    const obj16 = callback(8775);
    callback(13714).initialize();
    const obj17 = callback(13714);
    callback(13716).initialize();
    const obj18 = callback(13716);
    callback(13720).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13720);
    callback(13722).initialize();
    const obj20 = callback(13722);
    callback(13723).initialize();
    const obj21 = callback(13723);
    callback(13724).initialize();
    const obj22 = callback(13724);
    callback(13725).initialize();
    const obj23 = callback(13725);
    callback(4462).initialize();
    const obj24 = callback(4462);
    callback(13726).initialize();
    const obj25 = callback(13726);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4863).initialize();
      const tmpResult = tmp(4863);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10882).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13631).terminate();
      const obj = callback2(13631);
      callback2(4680).terminate();
      const obj2 = callback2(4680);
      callback2(7298).terminate();
      const obj3 = callback2(7298);
      callback2(13706).terminate();
      const obj4 = callback2(13706);
      callback(10882).cleanupRouteManager();
      const obj5 = callback(10882);
      callback2(13726).terminate();
      const obj6 = callback2(13726);
      callback2(13714).terminate();
      const obj7 = callback2(13714);
      callback2(8775).terminate();
      const obj8 = callback2(8775);
      callback2(13645).terminate();
      const obj9 = callback2(13645);
      callback2(13629).terminate();
      const obj10 = callback2(13629);
      callback2(13720).terminate();
      const obj11 = callback2(13720);
      callback2(13722).terminate();
      const obj12 = callback2(13722);
      callback2(13723).terminate();
      const obj13 = callback2(13723);
      callback2(13725).terminate();
      const obj14 = callback2(13725);
      callback2(4462).terminate();
      const obj15 = callback2(4462);
      callback2(13641).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12853).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12853);
  shouldUseAltGateway = shouldUseAltGateway(13730).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13730);
  obj[0] = shouldUseAltGateway(10921).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevels;
  obj[1] = jsx(getAuthComponent, {});
  obj[1] = jsx(GestureWrapper, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};