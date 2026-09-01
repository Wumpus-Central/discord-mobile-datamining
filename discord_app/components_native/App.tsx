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
    callback(14089).init();
    let obj = callback(14089);
    const tmp = callback;
    callback(4914).initialize();
    let obj2 = callback(4914);
    callback(14095).initialize();
    let obj3 = callback(14095);
    callback(14096).initialize();
    let obj4 = callback(14096);
    callback(14097).initialize();
    let obj5 = callback(14097);
    callback(14098).initialize();
    let obj6 = callback(14098);
    callback(7501).initialize();
    let obj7 = callback(7501);
    callback(14107).initialize();
    let obj8 = callback(14107);
    callback(7504).init();
    let obj9 = callback(7504);
    callback(14108).init();
    let obj10 = callback(14108);
    callback(14111).init();
    let obj11 = callback(14111);
    callback(10485).initialize();
    let obj12 = callback(10485);
    callback(14182).initialize();
    let obj13 = callback(14182);
    callback(9453).initialize();
    let obj14 = callback(9453);
    callback(9497).initialize();
    let obj15 = callback(9497);
    callback(8575).initialize();
    const obj16 = callback(8575);
    callback(14190).initialize();
    const obj17 = callback(14190);
    callback(14192).initialize();
    const obj18 = callback(14192);
    callback(14196).initialize();
    closure_5.ensureInitialized();
    const obj19 = callback(14196);
    callback(14198).initialize();
    const obj20 = callback(14198);
    callback(14199).initialize();
    const obj21 = callback(14199);
    callback(14200).initialize();
    const obj22 = callback(14200);
    callback(14201).initialize();
    const obj23 = callback(14201);
    callback(4661).initialize();
    const obj24 = callback(4661);
    callback(14202).initialize();
    const obj25 = callback(14202);
    const tmp29 = shouldUseAltGateway;
    if (obj26.isIOS()) {
      tmp(5104).initialize();
      const tmpResult = tmp(5104);
    }
    obj26 = shouldUseAltGateway(500);
    const result = tmp29(12320).initializeRouteManagerIfNeeded();
    return () => {
      callback2(14097).terminate();
      const obj = callback2(14097);
      callback2(4914).terminate();
      const obj2 = callback2(4914);
      callback2(10485).terminate();
      const obj3 = callback2(10485);
      callback2(14182).terminate();
      const obj4 = callback2(14182);
      callback(12320).cleanupRouteManager();
      const obj5 = callback(12320);
      callback2(14202).terminate();
      const obj6 = callback2(14202);
      callback2(14190).terminate();
      const obj7 = callback2(14190);
      callback2(8575).terminate();
      const obj8 = callback2(8575);
      callback2(14111).terminate();
      const obj9 = callback2(14111);
      callback2(14095).terminate();
      const obj10 = callback2(14095);
      callback2(14196).terminate();
      const obj11 = callback2(14196);
      callback2(14198).terminate();
      const obj12 = callback2(14198);
      callback2(14199).terminate();
      const obj13 = callback2(14199);
      callback2(14201).terminate();
      const obj14 = callback2(14201);
      callback2(4661).terminate();
      const obj15 = callback2(4661);
      callback2(14107).terminate();
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
  const isChannelMetadataObfuscationEnabled = shouldUseAltGateway(13324).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = shouldUseAltGateway(13324);
  shouldUseAltGateway = shouldUseAltGateway(14206).useShouldUseAltGateway("App");
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
  let obj3 = shouldUseAltGateway(14206);
  obj[0] = shouldUseAltGateway(11132).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  const tmp11 = setLevelsDefault;
  obj[1] = jsx(getAuthComponentDefault, {});
  obj[1] = jsx(GestureWrapperDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};