// === Module 14393: App ===

// Module 14393 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4701 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 4961 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7756 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7760 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8271 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9515 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import GPlayManagerDefault from "GPlayManager" /* 10708 */;
import StartupProfilerDefault from "StartupProfiler" /* 11533 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13637 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14434 */;
import BackPressManagerDefault from "BackPressManager" /* 14440 */;
import CallKitManagerDefault from "CallKitManager" /* 14441 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14442 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14443 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14453 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14454 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14457 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14528 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14536 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14538 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14542 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14544 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14545 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14546 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14547 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14548 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14550 */;
import AppContainerDefault from "AppContainer" /* 14554 */;
import MainNavigatorDefault from "MainNavigator" /* 15940 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14394 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const IosImageTypesManagerDefault = tmp(5160);
const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9086);
const ConnectivityIndicatorStateStore = fn(13686);
const RequestReviewStore = fn(13695);
const LocalPushNotificationStore = fn(13715);
const PromotionsStore = fn(10665);
const BitRateStore = fn(13995);
const ShareStore = fn(14395);
const PermissionVADStore = fn(14396);
const InteractionModalStore = fn(14397);
const MobileAppDatabaseManager = fn(7644);
const SubscriptionStore = fn(4224);
const AccessibilityStore = fn(4552);
const AnalyticsLogStore = fn(14398);
const PhoneStore = fn(6943);
const ICYMISessionStore = fn(14399);
const MemoryExperiment = fn(14400);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14401, dependencyMap.paths);
}
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
    BackPressManagerDefault.initialize();
    CallKitManagerDefault.initialize();
    AccessibilityCallManagerDefault.initialize();
    NotificationTokenManagerDefault.initialize();
    ForegroundServiceManagerDefault.initialize();
    VoiceNotificationManagerDefault.initialize();
    SentMessageIntentsHandlerDefault.init();
    UserSettingsProtoManagerDefault.init();
    NativeRPCServerManagerDefault.init();
    GPlayManagerDefault.initialize();
    MobileVoiceOverlayLifecycleManagerDefault.initialize();
    EmbeddedActivitiesNativeManagerDefault.initialize();
    FramesNativeManagerDefault.initialize();
    MediaPlayerMuteManagerDefault.initialize();
    MediaPlayerManagerDefault.initialize();
    SoundboardManagerDefault.initialize();
    VoiceMessagesPlaybackManagerDefault.initialize();
    MobileNativeUpdateStore.ensureInitialized();
    ICYMIManagerDefault.initialize();
    GameRelationshipManagerDefault.initialize();
    CollectiblesMarketingManagerDefault.initialize();
    SessionAdManagerDefault.initialize();
    VoiceEngineStreamingManagerDefault.initialize();
    TouchEventAnalyticsManagerDefault.initialize();
    const tmp29 = stateFromStores;
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = stateFromStores(1115);
    const result = tmp29(12782).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14442).terminate();
      const obj = closure_1_1(14442);
      closure_1_1(4961).terminate();
      const obj2 = closure_1_1(4961);
      closure_1_1(10708).terminate();
      const obj3 = closure_1_1(10708);
      closure_1_1(14528).terminate();
      const obj4 = closure_1_1(14528);
      stateFromStores(12782).cleanupRouteManager();
      const obj5 = stateFromStores(12782);
      closure_1_1(14548).terminate();
      const obj6 = closure_1_1(14548);
      closure_1_1(14536).terminate();
      const obj7 = closure_1_1(14536);
      closure_1_1(8271).terminate();
      const obj8 = closure_1_1(8271);
      closure_1_1(14457).terminate();
      const obj9 = closure_1_1(14457);
      closure_1_1(14440).terminate();
      const obj10 = closure_1_1(14440);
      closure_1_1(14542).terminate();
      const obj11 = closure_1_1(14542);
      closure_1_1(14544).terminate();
      const obj12 = closure_1_1(14544);
      closure_1_1(14545).terminate();
      const obj13 = closure_1_1(14545);
      closure_1_1(14547).terminate();
      const obj14 = closure_1_1(14547);
      closure_1_1(4701).terminate();
      const obj15 = closure_1_1(4701);
      closure_1_1(14453).terminate();
    };
  }, []);
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores) {
      const token = AuthenticationStore.getToken();
      if (null == token) {
        const _Error = Error;
        const error = new Error("Authenticated without a token");
        throw error;
      } else {
        AuthenticationActionCreatorsDefault.startSession(token);
        LocalMessageCacheManagerDefault.initialize();
        if (obj3.isAndroid()) {
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          closure_1_1(dependencyMap[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13668).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13668);
  const shouldUseAltGateway = stateFromStores(14552).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = stateFromStores(14552);
  obj.profile = stateFromStores(11533).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  obj.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};