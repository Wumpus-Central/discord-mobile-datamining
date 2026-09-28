// === Module 13884: App ===

// Module 13884 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4977 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5265 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5472 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7175 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7179 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7711 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import GPlayManagerDefault from "GPlayManager" /* 10172 */;
import StartupProfilerDefault from "StartupProfiler" /* 11027 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13181 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 13926 */;
import BackPressManagerDefault from "BackPressManager" /* 14001 */;
import CallKitManagerDefault from "CallKitManager" /* 14002 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14003 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14004 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14014 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14015 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14018 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14089 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14097 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14099 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14103 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14105 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14106 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14107 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14108 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14109 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14111 */;
import AppContainerDefault from "AppContainer" /* 14115 */;
import MainNavigatorDefault from "MainNavigator" /* 15564 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 13885 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9101);
const ConnectivityIndicatorStateStore = fn(13230);
const RequestReviewStore = fn(13239);
const HexagonCampaignPersistedStore = fn(13886);
const LocalPushNotificationStore = fn(13260);
const PromotionsStore = fn(10128);
const BitRateStore = fn(13541);
const ShareStore = fn(13887);
const PermissionVADStore = fn(13888);
const InteractionModalStore = fn(13889);
const MobileAppDatabaseManager = fn(7057);
const SubscriptionStore = fn(4494);
const AccessibilityStore = fn(4825);
const AnalyticsLogStore = fn(13890);
const PhoneStore = fn(6362);
const ICYMISessionStore = fn(13891);
const MemoryExperiment = fn(13892);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1981)(13893, dependencyMap.paths);
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
    const result = stateFromStores(12298).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14003).terminate();
      const obj = closure_1_1(14003);
      closure_1_1(5265).terminate();
      const obj2 = closure_1_1(5265);
      closure_1_1(10172).terminate();
      const obj3 = closure_1_1(10172);
      closure_1_1(14089).terminate();
      const obj4 = closure_1_1(14089);
      stateFromStores(12298).cleanupRouteManager();
      const obj5 = stateFromStores(12298);
      closure_1_1(14109).terminate();
      const obj6 = closure_1_1(14109);
      closure_1_1(14097).terminate();
      const obj7 = closure_1_1(14097);
      closure_1_1(7711).terminate();
      const obj8 = closure_1_1(7711);
      closure_1_1(14018).terminate();
      const obj9 = closure_1_1(14018);
      closure_1_1(14001).terminate();
      const obj10 = closure_1_1(14001);
      closure_1_1(14103).terminate();
      const obj11 = closure_1_1(14103);
      closure_1_1(14105).terminate();
      const obj12 = closure_1_1(14105);
      closure_1_1(14106).terminate();
      const obj13 = closure_1_1(14106);
      closure_1_1(14108).terminate();
      const obj14 = closure_1_1(14108);
      closure_1_1(4977).terminate();
      const obj15 = closure_1_1(4977);
      closure_1_1(14014).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13212).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13212);
  const shouldUseAltGateway = stateFromStores(14113).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14113);
  obj4.profile = stateFromStores(11027).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};