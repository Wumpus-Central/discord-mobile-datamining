// === Module 14080: App ===

// Module 14080 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 5007 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5461 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5669 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6206 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7370 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7374 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7906 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8950 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8964 */;
import GPlayManagerDefault from "GPlayManager" /* 10373 */;
import StartupProfilerDefault from "StartupProfiler" /* 11232 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13378 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14122 */;
import BackPressManagerDefault from "BackPressManager" /* 14202 */;
import CallKitManagerDefault from "CallKitManager" /* 14203 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14204 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14205 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14215 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14216 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14219 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14290 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14298 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14300 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14304 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14306 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14307 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14308 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14309 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14310 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14312 */;
import AppContainerDefault from "AppContainer" /* 14316 */;
import MainNavigatorDefault from "MainNavigator" /* 15764 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14081 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9300);
const ConnectivityIndicatorStateStore = fn(13427);
const RequestReviewStore = fn(13436);
const HexagonCampaignPersistedStore = fn(14082);
const LocalPushNotificationStore = fn(13457);
const PromotionsStore = fn(10329);
const BitRateStore = fn(13737);
const ShareStore = fn(14083);
const PermissionVADStore = fn(14084);
const InteractionModalStore = fn(14085);
const MobileAppDatabaseManager = fn(7252);
const SubscriptionStore = fn(4524);
const AccessibilityStore = fn(4855);
const AnalyticsLogStore = fn(14086);
const PhoneStore = fn(6558);
const ICYMISessionStore = fn(14087);
const MemoryExperiment = fn(14088);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1981)(14089, dependencyMap.paths);
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
    const result = stateFromStores(12499).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14204).terminate();
      const obj = closure_1_1(14204);
      closure_1_1(5461).terminate();
      const obj2 = closure_1_1(5461);
      closure_1_1(10373).terminate();
      const obj3 = closure_1_1(10373);
      closure_1_1(14290).terminate();
      const obj4 = closure_1_1(14290);
      stateFromStores(12499).cleanupRouteManager();
      const obj5 = stateFromStores(12499);
      closure_1_1(14310).terminate();
      const obj6 = closure_1_1(14310);
      closure_1_1(14298).terminate();
      const obj7 = closure_1_1(14298);
      closure_1_1(7906).terminate();
      const obj8 = closure_1_1(7906);
      closure_1_1(14219).terminate();
      const obj9 = closure_1_1(14219);
      closure_1_1(14202).terminate();
      const obj10 = closure_1_1(14202);
      closure_1_1(14304).terminate();
      const obj11 = closure_1_1(14304);
      closure_1_1(14306).terminate();
      const obj12 = closure_1_1(14306);
      closure_1_1(14307).terminate();
      const obj13 = closure_1_1(14307);
      closure_1_1(14309).terminate();
      const obj14 = closure_1_1(14309);
      closure_1_1(5007).terminate();
      const obj15 = closure_1_1(5007);
      closure_1_1(14215).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13409).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13409);
  const shouldUseAltGateway = stateFromStores(14314).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14314);
  obj4.profile = stateFromStores(11232).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};