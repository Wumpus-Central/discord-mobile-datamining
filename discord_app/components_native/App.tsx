// === Module 16224: App ===

// Module 16224 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6020 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7899 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7963 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8229 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8837 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10211 */;
import GPlayManagerDefault from "GPlayManager" /* 10578 */;
import StartupProfilerDefault from "StartupProfiler" /* 11563 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15217 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16024 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16267 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16273 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16274 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16275 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16284 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16286 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16289 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16383 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16391 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16394 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16397 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16399 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16403 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16405 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16406 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16407 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16409 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16410 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16412 */;
import AppContainerDefault from "AppContainer" /* 16414 */;
import MainNavigatorDefault from "MainNavigator" /* 17983 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16225 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(9222);
const ConnectivityIndicatorStateStore = fn(15577);
const RequestReviewStore = fn(15587);
const HexagonCampaignPersistedStore = fn(16226);
const LocalPushNotificationStore = fn(15606);
const PromotionsStore = fn(9626);
const BitRateStore = fn(15884);
const ShareStore = fn(16227);
const PermissionVADStore = fn(16228);
const InteractionModalStore = fn(16229);
const MobileAppDatabaseManager = fn(7786);
const SubscriptionStore = fn(2052);
const AccessibilityStore = fn(5015);
const AnalyticsLogStore = fn(16230);
const PhoneStore = fn(7109);
const ICYMISessionStore = fn(16231);
const MemoryExperiment = fn(16233);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1994)(16234, dependencyMap.paths);
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
    obj25 = stateFromStores(1375);
    const result = stateFromStores(12059).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16274).terminate();
      const obj = closure_1_1(16274);
      closure_1_1(6020).terminate();
      const obj2 = closure_1_1(6020);
      closure_1_1(10578).terminate();
      const obj3 = closure_1_1(10578);
      closure_1_1(16383).terminate();
      const obj4 = closure_1_1(16383);
      stateFromStores(12059).cleanupRouteManager();
      const obj5 = stateFromStores(12059);
      closure_1_1(16410).terminate();
      const obj6 = closure_1_1(16410);
      closure_1_1(16397).terminate();
      const obj7 = closure_1_1(16397);
      closure_1_1(8837).terminate();
      const obj8 = closure_1_1(8837);
      closure_1_1(16289).terminate();
      const obj9 = closure_1_1(16289);
      closure_1_1(16403).terminate();
      const obj10 = closure_1_1(16403);
      closure_1_1(16405).terminate();
      const obj11 = closure_1_1(16405);
      closure_1_1(16406).terminate();
      const obj12 = closure_1_1(16406);
      closure_1_1(16409).terminate();
      const obj13 = closure_1_1(16409);
      closure_1_1(7899).terminate();
      const obj14 = closure_1_1(7899);
      closure_1_1(16284).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(15562).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(15562);
  obj3.profile = stateFromStores(11563).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};