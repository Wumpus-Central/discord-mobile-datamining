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
    callback(14434).init();
    let obj = callback(14434);
    const tmp = callback;
    callback(4961).initialize();
    let obj2 = callback(4961);
    callback(14440).initialize();
    let obj3 = callback(14440);
    callback(14441).initialize();
    let obj4 = callback(14441);
    callback(14442).initialize();
    let obj5 = callback(14442);
    callback(14443).initialize();
    let obj6 = callback(14443);
    callback(7756).initialize();
    let obj7 = callback(7756);
    callback(14453).initialize();
    let obj8 = callback(14453);
    callback(7760).init();
    let obj9 = callback(7760);
    callback(14454).init();
    let obj10 = callback(14454);
    callback(14457).init();
    let obj11 = callback(14457);
    callback(10708).initialize();
    let obj12 = callback(10708);
    callback(14528).initialize();
    let obj13 = callback(14528);
    callback(9515).initialize();
    let obj14 = callback(9515);
    callback(9568).initialize();
    let obj15 = callback(9568);
    callback(8271).initialize();
    const obj16 = callback(8271);
    callback(14536).initialize();
    const obj17 = callback(14536);
    callback(14538).initialize();
    const obj18 = callback(14538);
    callback(14542).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14542);
    callback(14544).initialize();
    const obj20 = callback(14544);
    callback(14545).initialize();
    const obj21 = callback(14545);
    callback(14546).initialize();
    const obj22 = callback(14546);
    callback(14547).initialize();
    const obj23 = callback(14547);
    callback(4701).initialize();
    const obj24 = callback(4701);
    callback(14548).initialize();
    const obj25 = callback(14548);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5160).initialize();
      const tmpResult = tmp(5160);
    }
    obj26 = shouldUseAltGateway(1115);
    const result = tmp29(12782).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14442).terminate();
      const obj = callback2(14442);
      callback2(4961).terminate();
      const obj2 = callback2(4961);
      callback2(10708).terminate();
      const obj3 = callback2(10708);
      callback2(14528).terminate();
      const obj4 = callback2(14528);
      callback(12782).cleanupRouteManager();
      const obj5 = callback(12782);
      callback2(14548).terminate();
      const obj6 = callback2(14548);
      callback2(14536).terminate();
      const obj7 = callback2(14536);
      callback2(8271).terminate();
      const obj8 = callback2(8271);
      callback2(14457).terminate();
      const obj9 = callback2(14457);
      callback2(14440).terminate();
      const obj10 = callback2(14440);
      callback2(14542).terminate();
      const obj11 = callback2(14542);
      callback2(14544).terminate();
      const obj12 = callback2(14544);
      callback2(14545).terminate();
      const obj13 = callback2(14545);
      callback2(14547).terminate();
      const obj14 = callback2(14547);
      callback2(4701).terminate();
      const obj15 = callback2(4701);
      callback2(14453).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(504);
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13668).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    const result = closure_1_1(closure_1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(13668);
  shouldUseAltGateway = shouldUseAltGateway(14552).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    closure_1_1(closure_1_2[56]).setUseAltGateway(shouldUseAltGateway);
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(14552);
  obj[0] = shouldUseAltGateway(11533).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
}
