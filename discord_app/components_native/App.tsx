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
    callback(13586).init();
    let obj = callback(13586);
    const tmp = callback;
    callback(4650).initialize();
    let obj2 = callback(4650);
    callback(13592).initialize();
    let obj3 = callback(13592);
    callback(13593).initialize();
    let obj4 = callback(13593);
    callback(13594).initialize();
    let obj5 = callback(13594);
    callback(13595).initialize();
    let obj6 = callback(13595);
    callback(7110).initialize();
    let obj7 = callback(7110);
    callback(13604).initialize();
    let obj8 = callback(13604);
    callback(7113).init();
    let obj9 = callback(7113);
    callback(13605).init();
    let obj10 = callback(13605);
    callback(13608).init();
    let obj11 = callback(13608);
    callback(7270).initialize();
    let obj12 = callback(7270);
    callback(13669).initialize();
    let obj13 = callback(13669);
    callback(10510).initialize();
    let obj14 = callback(10510);
    callback(10488).initialize();
    let obj15 = callback(10488);
    callback(8746).initialize();
    const obj16 = callback(8746);
    callback(13677).initialize();
    const obj17 = callback(13677);
    callback(13679).initialize();
    const obj18 = callback(13679);
    callback(13683).initialize();
    checkForNewerBuild.ensureInitialized();
    const obj19 = callback(13683);
    callback(13685).initialize();
    const obj20 = callback(13685);
    callback(13686).initialize();
    const obj21 = callback(13686);
    callback(13687).initialize();
    const obj22 = callback(13687);
    callback(13688).initialize();
    const obj23 = callback(13688);
    callback(4432).initialize();
    const obj24 = callback(4432);
    callback(13689).initialize();
    const obj25 = callback(13689);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(4833).initialize();
      const tmpResult = tmp(4833);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(10831).initializeRouteManagerIfNeeded();
    return () => {
      callback2(13594).terminate();
      const obj = callback2(13594);
      callback2(4650).terminate();
      const obj2 = callback2(4650);
      callback2(7270).terminate();
      const obj3 = callback2(7270);
      callback2(13669).terminate();
      const obj4 = callback2(13669);
      callback(10831).cleanupRouteManager();
      const obj5 = callback(10831);
      callback2(13689).terminate();
      const obj6 = callback2(13689);
      callback2(13677).terminate();
      const obj7 = callback2(13677);
      callback2(8746).terminate();
      const obj8 = callback2(8746);
      callback2(13608).terminate();
      const obj9 = callback2(13608);
      callback2(13592).terminate();
      const obj10 = callback2(13592);
      callback2(13683).terminate();
      const obj11 = callback2(13683);
      callback2(13685).terminate();
      const obj12 = callback2(13685);
      callback2(13686).terminate();
      const obj13 = callback2(13686);
      callback2(13688).terminate();
      const obj14 = callback2(13688);
      callback2(4432).terminate();
      const obj15 = callback2(4432);
      callback2(13604).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(12816).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(12816);
  shouldUseAltGateway = shouldUseAltGateway(13693).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(13693);
  obj[0] = shouldUseAltGateway(10889).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevels;
  obj[1] = jsx(getAuthComponent, {});
  obj[1] = jsx(GestureWrapper, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};