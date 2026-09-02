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
    callback(14312).init();
    let obj = callback(14312);
    const tmp = callback;
    callback(4914).initialize();
    let obj2 = callback(4914);
    callback(14318).initialize();
    let obj3 = callback(14318);
    callback(14319).initialize();
    let obj4 = callback(14319);
    callback(14320).initialize();
    let obj5 = callback(14320);
    callback(14321).initialize();
    let obj6 = callback(14321);
    callback(7511).initialize();
    let obj7 = callback(7511);
    callback(14330).initialize();
    let obj8 = callback(14330);
    callback(7514).init();
    let obj9 = callback(7514);
    callback(14331).init();
    let obj10 = callback(14331);
    callback(14334).init();
    let obj11 = callback(14334);
    callback(10706).initialize();
    let obj12 = callback(10706);
    callback(14405).initialize();
    let obj13 = callback(14405);
    callback(9466).initialize();
    let obj14 = callback(9466);
    callback(9510).initialize();
    let obj15 = callback(9510);
    callback(8590).initialize();
    const obj16 = callback(8590);
    callback(14413).initialize();
    const obj17 = callback(14413);
    callback(14415).initialize();
    const obj18 = callback(14415);
    callback(14419).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14419);
    callback(14421).initialize();
    const obj20 = callback(14421);
    callback(14422).initialize();
    const obj21 = callback(14422);
    callback(14423).initialize();
    const obj22 = callback(14423);
    callback(14424).initialize();
    const obj23 = callback(14424);
    callback(4661).initialize();
    const obj24 = callback(4661);
    callback(14425).initialize();
    const obj25 = callback(14425);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5112).initialize();
      const tmpResult = tmp(5112);
    }
    obj26 = shouldUseAltGateway(1234);
    const result = tmp29(12544).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14320).terminate();
      const obj = callback2(14320);
      callback2(4914).terminate();
      const obj2 = callback2(4914);
      callback2(10706).terminate();
      const obj3 = callback2(10706);
      callback2(14405).terminate();
      const obj4 = callback2(14405);
      callback(12544).cleanupRouteManager();
      const obj5 = callback(12544);
      callback2(14425).terminate();
      const obj6 = callback2(14425);
      callback2(14413).terminate();
      const obj7 = callback2(14413);
      callback2(8590).terminate();
      const obj8 = callback2(8590);
      callback2(14334).terminate();
      const obj9 = callback2(14334);
      callback2(14318).terminate();
      const obj10 = callback2(14318);
      callback2(14419).terminate();
      const obj11 = callback2(14419);
      callback2(14421).terminate();
      const obj12 = callback2(14421);
      callback2(14422).terminate();
      const obj13 = callback2(14422);
      callback2(14424).terminate();
      const obj14 = callback2(14424);
      callback2(4661).terminate();
      const obj15 = callback2(4661);
      callback2(14330).terminate();
    };
  }, []);
  let shouldUseAltGateway;
  let obj = shouldUseAltGateway(586);
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13547).useIsChannelMetadataObfuscationEnabled("App");
  shouldUseAltGateway = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = React.useEffect(() => {
    const result = closure_1_1(closure_1_2[56]).setUseChannelObfuscation(shouldUseAltGateway);
  }, items2);
  shouldUseAltGateway = undefined;
  let obj2 = shouldUseAltGateway(13547);
  shouldUseAltGateway = shouldUseAltGateway(14429).useShouldUseAltGateway("App");
  const items3 = [shouldUseAltGateway];
  const effect4 = React.useEffect(() => {
    closure_1_1(closure_1_2[56]).setUseAltGateway(shouldUseAltGateway);
  }, items3);
  const effect5 = React.useEffect(() => {
    const renderAppEffect = callback(9).renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = shouldUseAltGateway(14429);
  obj[0] = shouldUseAltGateway(11353).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
}
