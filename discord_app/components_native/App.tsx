// === Module 16878: App ===

// Module 16878 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6328 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6858 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8210 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8642 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8868 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8871 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8899 */;
import GPlayManagerDefault from "GPlayManager" /* 9698 */;
import StartupProfilerDefault from "StartupProfiler" /* 12653 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16678 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16921 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16927 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16931 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16932 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16941 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16943 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16946 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 17040 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 17048 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 17051 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 17054 */;
import SoundboardManagerDefault from "SoundboardManager" /* 17056 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 17060 */;
import ICYMIManagerDefault from "ICYMIManager" /* 17062 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 17063 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 17064 */;
import SessionAdManagerDefault from "SessionAdManager" /* 17066 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 17067 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 17069 */;
import AppContainerDefault from "AppContainer" /* 17071 */;
import MainNavigatorDefault from "MainNavigator" /* 18685 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16879 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(10284);
const ConnectivityIndicatorStateStore = fn(16227);
const RequestReviewStore = fn(16237);
const HexagonCampaignPersistedStore = fn(16880);
const LocalPushNotificationStore = fn(16256);
const PromotionsStore = fn(9635);
const BitRateStore = fn(16540);
const ShareStore = fn(16881);
const PermissionVADStore = fn(16882);
const InteractionModalStore = fn(16883);
const MobileAppDatabaseManager = fn(8762);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(5311);
const AnalyticsLogStore = fn(16884);
const PhoneStore = fn(7778);
const ICYMISessionStore = fn(16885);
const MemoryExperiment = fn(16887);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2121)(16888, dependencyMap.paths);
}
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
    SystemTelecomManagerDefault.initialize();
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
    if (obj25.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj25 = stateFromStores(1380);
    const result = stateFromStores(14360).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16931).terminate();
      const obj = closure_1_1(16931);
      closure_1_1(6328).terminate();
      const obj2 = closure_1_1(6328);
      closure_1_1(9698).terminate();
      const obj3 = closure_1_1(9698);
      closure_1_1(17040).terminate();
      const obj4 = closure_1_1(17040);
      stateFromStores(14360).cleanupRouteManager();
      const obj5 = stateFromStores(14360);
      closure_1_1(17067).terminate();
      const obj6 = closure_1_1(17067);
      closure_1_1(17054).terminate();
      const obj7 = closure_1_1(17054);
      closure_1_1(8642).terminate();
      const obj8 = closure_1_1(8642);
      closure_1_1(16946).terminate();
      const obj9 = closure_1_1(16946);
      closure_1_1(17060).terminate();
      const obj10 = closure_1_1(17060);
      closure_1_1(17062).terminate();
      const obj11 = closure_1_1(17062);
      closure_1_1(17063).terminate();
      const obj12 = closure_1_1(17063);
      closure_1_1(17066).terminate();
      const obj13 = closure_1_1(17066);
      closure_1_1(6858).terminate();
      const obj14 = closure_1_1(6858);
      closure_1_1(16941).terminate();
    };
  }, []);
  let stateFromStores;
  items = [AuthenticationStore];
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
          const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
          const tmp4Result = NativePermissionManagerModuleDefault;
        }
        return () => {
          closure_1_1(dependencyMap[52]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(16191).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  const effect4 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj3 = { profile: null, children: null };
  let obj2 = stateFromStores(16191);
  obj3.profile = stateFromStores(12653).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};