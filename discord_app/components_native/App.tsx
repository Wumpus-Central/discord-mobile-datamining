// === Module 14482: App ===

// Module 14482 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4777 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5042 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5241 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6694 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7858 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7862 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8381 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9645 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9698 */;
import GPlayManagerDefault from "GPlayManager" /* 10837 */;
import StartupProfilerDefault from "StartupProfiler" /* 11663 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13727 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14523 */;
import BackPressManagerDefault from "BackPressManager" /* 14529 */;
import CallKitManagerDefault from "CallKitManager" /* 14530 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14531 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14532 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14542 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14543 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14546 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14617 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14625 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14627 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14631 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14633 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14634 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14635 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14636 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14637 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14639 */;
import AppContainerDefault from "AppContainer" /* 14643 */;
import MainNavigatorDefault from "MainNavigator" /* 16037 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14483 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9215);
const ConnectivityIndicatorStateStore = fn(13776);
const RequestReviewStore = fn(13785);
const LocalPushNotificationStore = fn(13805);
const PromotionsStore = fn(10794);
const BitRateStore = fn(14083);
const ShareStore = fn(14484);
const PermissionVADStore = fn(14485);
const InteractionModalStore = fn(14486);
const MobileAppDatabaseManager = fn(7746);
const SubscriptionStore = fn(4300);
const AccessibilityStore = fn(4628);
const AnalyticsLogStore = fn(14487);
const PhoneStore = fn(7044);
const ICYMISessionStore = fn(14488);
const MemoryExperiment = fn(14489);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14490, dependencyMap.paths);
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
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = stateFromStores(1363);
    const result = stateFromStores(12912).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14531).terminate();
      const obj = closure_1_1(14531);
      closure_1_1(5042).terminate();
      const obj2 = closure_1_1(5042);
      closure_1_1(10837).terminate();
      const obj3 = closure_1_1(10837);
      closure_1_1(14617).terminate();
      const obj4 = closure_1_1(14617);
      stateFromStores(12912).cleanupRouteManager();
      const obj5 = stateFromStores(12912);
      closure_1_1(14637).terminate();
      const obj6 = closure_1_1(14637);
      closure_1_1(14625).terminate();
      const obj7 = closure_1_1(14625);
      closure_1_1(8381).terminate();
      const obj8 = closure_1_1(8381);
      closure_1_1(14546).terminate();
      const obj9 = closure_1_1(14546);
      closure_1_1(14529).terminate();
      const obj10 = closure_1_1(14529);
      closure_1_1(14631).terminate();
      const obj11 = closure_1_1(14631);
      closure_1_1(14633).terminate();
      const obj12 = closure_1_1(14633);
      closure_1_1(14634).terminate();
      const obj13 = closure_1_1(14634);
      closure_1_1(14636).terminate();
      const obj14 = closure_1_1(14636);
      closure_1_1(4777).terminate();
      const obj15 = closure_1_1(4777);
      closure_1_1(14542).terminate();
    };
  }, []);
  let stateFromStores;
  const items = [AuthenticationStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
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
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13758).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13758);
  const shouldUseAltGateway = stateFromStores(14641).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj4 = { profile: null, children: null };
  let obj3 = stateFromStores(14641);
  obj4.profile = stateFromStores(11663).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};