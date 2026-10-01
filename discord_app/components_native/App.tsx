// === Module 14088: App ===

// Module 14088 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4986 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5449 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5658 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6196 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7348 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7352 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7893 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8943 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8957 */;
import GPlayManagerDefault from "GPlayManager" /* 10365 */;
import StartupProfilerDefault from "StartupProfiler" /* 11236 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13386 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14130 */;
import BackPressManagerDefault from "BackPressManager" /* 14210 */;
import CallKitManagerDefault from "CallKitManager" /* 14211 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14212 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14213 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14223 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14224 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14227 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14298 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14306 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14308 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14312 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14314 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14315 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14316 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14317 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14318 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14320 */;
import AppContainerDefault from "AppContainer" /* 14324 */;
import MainNavigatorDefault from "MainNavigator" /* 15780 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14089 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9294);
const ConnectivityIndicatorStateStore = fn(13435);
const RequestReviewStore = fn(13445);
const HexagonCampaignPersistedStore = fn(14090);
const LocalPushNotificationStore = fn(13466);
const PromotionsStore = fn(10321);
const BitRateStore = fn(13745);
const ShareStore = fn(14091);
const PermissionVADStore = fn(14092);
const InteractionModalStore = fn(14093);
const MobileAppDatabaseManager = fn(7230);
const SubscriptionStore = fn(4523);
const AccessibilityStore = fn(4834);
const AnalyticsLogStore = fn(14094);
const PhoneStore = fn(6548);
const ICYMISessionStore = fn(14095);
const MemoryExperiment = fn(14096);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1981)(14097, dependencyMap.paths);
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
    const result = stateFromStores(12510).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14212).terminate();
      const obj = closure_1_1(14212);
      closure_1_1(5449).terminate();
      const obj2 = closure_1_1(5449);
      closure_1_1(10365).terminate();
      const obj3 = closure_1_1(10365);
      closure_1_1(14298).terminate();
      const obj4 = closure_1_1(14298);
      stateFromStores(12510).cleanupRouteManager();
      const obj5 = stateFromStores(12510);
      closure_1_1(14318).terminate();
      const obj6 = closure_1_1(14318);
      closure_1_1(14306).terminate();
      const obj7 = closure_1_1(14306);
      closure_1_1(7893).terminate();
      const obj8 = closure_1_1(7893);
      closure_1_1(14227).terminate();
      const obj9 = closure_1_1(14227);
      closure_1_1(14210).terminate();
      const obj10 = closure_1_1(14210);
      closure_1_1(14312).terminate();
      const obj11 = closure_1_1(14312);
      closure_1_1(14314).terminate();
      const obj12 = closure_1_1(14314);
      closure_1_1(14315).terminate();
      const obj13 = closure_1_1(14315);
      closure_1_1(14317).terminate();
      const obj14 = closure_1_1(14317);
      closure_1_1(4986).terminate();
      const obj15 = closure_1_1(4986);
      closure_1_1(14223).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13417).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13417);
  const shouldUseAltGateway = stateFromStores(14322).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14322);
  obj4.profile = stateFromStores(11236).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};