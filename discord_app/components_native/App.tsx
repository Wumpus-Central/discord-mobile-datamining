// === Module 14053: App ===

// Module 14053 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4977 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5431 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5639 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6176 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7340 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7344 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7876 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8916 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8930 */;
import GPlayManagerDefault from "GPlayManager" /* 10339 */;
import StartupProfilerDefault from "StartupProfiler" /* 11196 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13351 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14095 */;
import BackPressManagerDefault from "BackPressManager" /* 14173 */;
import CallKitManagerDefault from "CallKitManager" /* 14174 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14175 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14176 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14186 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14187 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14190 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14261 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14269 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14271 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14275 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14277 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14278 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14279 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14280 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14281 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14283 */;
import AppContainerDefault from "AppContainer" /* 14287 */;
import MainNavigatorDefault from "MainNavigator" /* 15739 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14054 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9266);
const ConnectivityIndicatorStateStore = fn(13400);
const RequestReviewStore = fn(13409);
const HexagonCampaignPersistedStore = fn(14055);
const LocalPushNotificationStore = fn(13430);
const PromotionsStore = fn(10295);
const BitRateStore = fn(13710);
const ShareStore = fn(14056);
const PermissionVADStore = fn(14057);
const InteractionModalStore = fn(14058);
const MobileAppDatabaseManager = fn(7222);
const SubscriptionStore = fn(4494);
const AccessibilityStore = fn(4825);
const AnalyticsLogStore = fn(14059);
const PhoneStore = fn(6528);
const ICYMISessionStore = fn(14060);
const MemoryExperiment = fn(14061);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1981)(14062, dependencyMap.paths);
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
    obj26 = stateFromStores(1364);
    const result = stateFromStores(12469).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14175).terminate();
      const obj = closure_1_1(14175);
      closure_1_1(5431).terminate();
      const obj2 = closure_1_1(5431);
      closure_1_1(10339).terminate();
      const obj3 = closure_1_1(10339);
      closure_1_1(14261).terminate();
      const obj4 = closure_1_1(14261);
      stateFromStores(12469).cleanupRouteManager();
      const obj5 = stateFromStores(12469);
      closure_1_1(14281).terminate();
      const obj6 = closure_1_1(14281);
      closure_1_1(14269).terminate();
      const obj7 = closure_1_1(14269);
      closure_1_1(7876).terminate();
      const obj8 = closure_1_1(7876);
      closure_1_1(14190).terminate();
      const obj9 = closure_1_1(14190);
      closure_1_1(14173).terminate();
      const obj10 = closure_1_1(14173);
      closure_1_1(14275).terminate();
      const obj11 = closure_1_1(14275);
      closure_1_1(14277).terminate();
      const obj12 = closure_1_1(14277);
      closure_1_1(14278).terminate();
      const obj13 = closure_1_1(14278);
      closure_1_1(14280).terminate();
      const obj14 = closure_1_1(14280);
      closure_1_1(4977).terminate();
      const obj15 = closure_1_1(4977);
      closure_1_1(14186).terminate();
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
          closure_1_1(dependencyMap[54]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13382).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13382);
  const shouldUseAltGateway = stateFromStores(14285).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14285);
  obj4.profile = stateFromStores(11196).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};