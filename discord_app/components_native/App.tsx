// discord_app/components_native/App.tsx
import serializeDefault from "../modules/tti_analytics/TTITracker.tsx";
import setLevelsDefault from "../modules/app_startup/StartupProfiler.tsx";
import GestureWrapperDefault from "AppContainer.tsx";
import getAuthComponentDefault from "../modules/main_tabs_v2/native/MainNavigator.tsx";
import closure_3 from "../../_runtime/00019_noop.js";
import { NativeModules } from "../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../modules/mobile_native_updater/MobileNativeUpdateStore.tsx";
import closure_6 from "../stores/AuthenticationStore.tsx";
import nativeEventEmitter from "../modules/voice_calls/native/AudioManagerStore.android.tsx";
import updateState from "../modules/connectivity/native/ConnectivityIndicatorStateStore.tsx";
import showReviewRequestModal from "../modules/feedback/native/RequestReviewStore.tsx";
import set from "../modules/local_push_notification/native/LocalPushNotificationStore.tsx";
import createEmptyPromotionsByType from "../modules/premium/promotions/PromotionsStore.tsx";
import bitrate from "../stores/BitRateStore.tsx";
import handleTokenUpdated from "../stores/native/ShareStore.tsx";
import handleUpdateVADPermission from "../stores/PermissionVADStore.tsx";
import getModalState from "../modules/interaction_components/InteractionModalStore.tsx";
import appDatabaseManager from "../modules/app_database/managers/MobileAppDatabaseManager.tsx";
import reset from "../stores/billing/SubscriptionStore.tsx";
import maybeApplyNoTextColorForLightCustomTheme from "../modules/a11y/AccessibilityStore.tsx";
import initialize from "../modules/devtools/AnalyticsLogStore.tsx";
import handleSetLocationMetadata from "../modules/phone/PhoneStore.tsx";
import "map";
import ApexExperiment from "../modules/memory/MemoryExperiment.tsx";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";

const require = arg1;
if (global.__DEV__) {
  require("reactNativeCorePlugins");
}
let result = set.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = serializeDefault.renderApp;
  renderApp.record();
  const effect = React.useEffect(() => {
    callback(14056).init();
    let obj = callback(14056);
    const tmp = callback;
    callback(4882).initialize();
    let obj2 = callback(4882);
    callback(14062).initialize();
    let obj3 = callback(14062);
    callback(14063).initialize();
    let obj4 = callback(14063);
    callback(14064).initialize();
    let obj5 = callback(14064);
    callback(14065).initialize();
    let obj6 = callback(14065);
    callback(7469).initialize();
    let obj7 = callback(7469);
    callback(14074).initialize();
    let obj8 = callback(14074);
    callback(7472).init();
    let obj9 = callback(7472);
    callback(14075).init();
    let obj10 = callback(14075);
    callback(14078).init();
    let obj11 = callback(14078);
    callback(10447).initialize();
    let obj12 = callback(10447);
    callback(14149).initialize();
    let obj13 = callback(14149);
    callback(9414).initialize();
    let obj14 = callback(9414);
    callback(9458).initialize();
    let obj15 = callback(9458);
    callback(8543).initialize();
    const obj16 = callback(8543);
    callback(14157).initialize();
    const obj17 = callback(14157);
    callback(14159).initialize();
    const obj18 = callback(14159);
    callback(14163).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14163);
    callback(14165).initialize();
    const obj20 = callback(14165);
    callback(14166).initialize();
    const obj21 = callback(14166);
    callback(14167).initialize();
    const obj22 = callback(14167);
    callback(14168).initialize();
    const obj23 = callback(14168);
    callback(4629).initialize();
    const obj24 = callback(4629);
    callback(14169).initialize();
    const obj25 = callback(14169);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5072).initialize();
      const tmpResult = tmp(5072);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(12287).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14064).terminate();
      const obj = callback2(14064);
      callback2(4882).terminate();
      const obj2 = callback2(4882);
      callback2(10447).terminate();
      const obj3 = callback2(10447);
      callback2(14149).terminate();
      const obj4 = callback2(14149);
      callback(12287).cleanupRouteManager();
      const obj5 = callback(12287);
      callback2(14169).terminate();
      const obj6 = callback2(14169);
      callback2(14157).terminate();
      const obj7 = callback2(14157);
      callback2(8543).terminate();
      const obj8 = callback2(8543);
      callback2(14078).terminate();
      const obj9 = callback2(14078);
      callback2(14062).terminate();
      const obj10 = callback2(14062);
      callback2(14163).terminate();
      const obj11 = callback2(14163);
      callback2(14165).terminate();
      const obj12 = callback2(14165);
      callback2(14166).terminate();
      const obj13 = callback2(14166);
      callback2(14168).terminate();
      const obj14 = callback2(14168);
      callback2(4629).terminate();
      const obj15 = callback2(4629);
      callback2(14074).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13291).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13291);
  shouldUseAltGateway = shouldUseAltGateway(14173).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(14173);
  obj[0] = shouldUseAltGateway(11095).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};