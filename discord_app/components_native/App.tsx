// === Module 16220: App ===

// Module 16220 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6020 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6740 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7899 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7963 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8229 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8837 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10211 */;
import GPlayManagerDefault from "GPlayManager" /* 10578 */;
import StartupProfilerDefault from "StartupProfiler" /* 11562 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15213 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16020 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16263 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16269 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16270 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16271 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16280 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16282 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16285 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16371 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16379 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16382 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16385 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16387 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16391 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16393 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16394 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16395 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16397 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16398 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16400 */;
import AppContainerDefault from "AppContainer" /* 16402 */;
import MainNavigatorDefault from "MainNavigator" /* 17970 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16221 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(9222);
const ConnectivityIndicatorStateStore = fn(15573);
const RequestReviewStore = fn(15583);
const HexagonCampaignPersistedStore = fn(16222);
const LocalPushNotificationStore = fn(15602);
const PromotionsStore = fn(9626);
const BitRateStore = fn(15880);
const ShareStore = fn(16223);
const PermissionVADStore = fn(16224);
const InteractionModalStore = fn(16225);
const MobileAppDatabaseManager = fn(7786);
const SubscriptionStore = fn(2052);
const AccessibilityStore = fn(5015);
const AnalyticsLogStore = fn(16226);
const PhoneStore = fn(7109);
const ICYMISessionStore = fn(16227);
const MemoryExperiment = fn(16229);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1994)(16230, dependencyMap.paths);
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
    const result = stateFromStores(12058).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16270).terminate();
      const obj = closure_1_1(16270);
      closure_1_1(6020).terminate();
      const obj2 = closure_1_1(6020);
      closure_1_1(10578).terminate();
      const obj3 = closure_1_1(10578);
      closure_1_1(16371).terminate();
      const obj4 = closure_1_1(16371);
      stateFromStores(12058).cleanupRouteManager();
      const obj5 = stateFromStores(12058);
      closure_1_1(16398).terminate();
      const obj6 = closure_1_1(16398);
      closure_1_1(16385).terminate();
      const obj7 = closure_1_1(16385);
      closure_1_1(8837).terminate();
      const obj8 = closure_1_1(8837);
      closure_1_1(16285).terminate();
      const obj9 = closure_1_1(16285);
      closure_1_1(16391).terminate();
      const obj10 = closure_1_1(16391);
      closure_1_1(16393).terminate();
      const obj11 = closure_1_1(16393);
      closure_1_1(16394).terminate();
      const obj12 = closure_1_1(16394);
      closure_1_1(16397).terminate();
      const obj13 = closure_1_1(16397);
      closure_1_1(7899).terminate();
      const obj14 = closure_1_1(7899);
      closure_1_1(16280).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(15558).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(15558);
  obj3.profile = stateFromStores(11562).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};