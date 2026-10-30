// === Module 16179: App ===

// Module 16179 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6015 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7891 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7955 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8221 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8829 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10191 */;
import GPlayManagerDefault from "GPlayManager" /* 10558 */;
import StartupProfilerDefault from "StartupProfiler" /* 11528 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15174 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15979 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16222 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16228 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16229 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16230 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16239 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16241 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16244 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16329 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16337 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16340 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16343 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16345 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16349 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16351 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16352 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16353 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16355 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16356 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16358 */;
import AppContainerDefault from "AppContainer" /* 16360 */;
import MainNavigatorDefault from "MainNavigator" /* 17927 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16180 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(9203);
const ConnectivityIndicatorStateStore = fn(15534);
const RequestReviewStore = fn(15544);
const HexagonCampaignPersistedStore = fn(16181);
const LocalPushNotificationStore = fn(15563);
const PromotionsStore = fn(9606);
const BitRateStore = fn(15839);
const ShareStore = fn(16182);
const PermissionVADStore = fn(16183);
const InteractionModalStore = fn(16184);
const MobileAppDatabaseManager = fn(7779);
const SubscriptionStore = fn(2053);
const AccessibilityStore = fn(5010);
const AnalyticsLogStore = fn(16185);
const PhoneStore = fn(7103);
const ICYMISessionStore = fn(16186);
const MemoryExperiment = fn(16188);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1995)(16189, dependencyMap.paths);
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
    obj25 = stateFromStores(1376);
    const result = stateFromStores(12020).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16229).terminate();
      const obj = closure_1_1(16229);
      closure_1_1(6015).terminate();
      const obj2 = closure_1_1(6015);
      closure_1_1(10558).terminate();
      const obj3 = closure_1_1(10558);
      closure_1_1(16329).terminate();
      const obj4 = closure_1_1(16329);
      stateFromStores(12020).cleanupRouteManager();
      const obj5 = stateFromStores(12020);
      closure_1_1(16356).terminate();
      const obj6 = closure_1_1(16356);
      closure_1_1(16343).terminate();
      const obj7 = closure_1_1(16343);
      closure_1_1(8829).terminate();
      const obj8 = closure_1_1(8829);
      closure_1_1(16244).terminate();
      const obj9 = closure_1_1(16244);
      closure_1_1(16349).terminate();
      const obj10 = closure_1_1(16349);
      closure_1_1(16351).terminate();
      const obj11 = closure_1_1(16351);
      closure_1_1(16352).terminate();
      const obj12 = closure_1_1(16352);
      closure_1_1(16355).terminate();
      const obj13 = closure_1_1(16355);
      closure_1_1(7891).terminate();
      const obj14 = closure_1_1(7891);
      closure_1_1(16239).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(15519).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(15519);
  obj3.profile = stateFromStores(11528).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};