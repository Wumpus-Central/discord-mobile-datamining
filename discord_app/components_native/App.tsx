// === Module 14470: App ===

// Module 14470 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4746 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5011 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5210 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6643 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7807 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7811 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8328 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9585 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9638 */;
import GPlayManagerDefault from "GPlayManager" /* 10778 */;
import StartupProfilerDefault from "StartupProfiler" /* 11604 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13713 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14511 */;
import BackPressManagerDefault from "BackPressManager" /* 14517 */;
import CallKitManagerDefault from "CallKitManager" /* 14518 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14519 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14520 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14530 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14531 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14534 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14605 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14613 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14615 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14619 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14621 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14622 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14623 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14624 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14625 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14627 */;
import AppContainerDefault from "AppContainer" /* 14631 */;
import MainNavigatorDefault from "MainNavigator" /* 16022 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14471 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9155);
const ConnectivityIndicatorStateStore = fn(13762);
const RequestReviewStore = fn(13771);
const LocalPushNotificationStore = fn(13791);
const PromotionsStore = fn(10735);
const BitRateStore = fn(14070);
const ShareStore = fn(14472);
const PermissionVADStore = fn(14473);
const InteractionModalStore = fn(14474);
const MobileAppDatabaseManager = fn(7695);
const SubscriptionStore = fn(4268);
const AccessibilityStore = fn(4597);
const AnalyticsLogStore = fn(14475);
const PhoneStore = fn(6993);
const ICYMISessionStore = fn(14476);
const MemoryExperiment = fn(14477);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14478, dependencyMap.paths);
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
    obj26 = stateFromStores(1115);
    const result = stateFromStores(12852).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14519).terminate();
      const obj = closure_1_1(14519);
      closure_1_1(5011).terminate();
      const obj2 = closure_1_1(5011);
      closure_1_1(10778).terminate();
      const obj3 = closure_1_1(10778);
      closure_1_1(14605).terminate();
      const obj4 = closure_1_1(14605);
      stateFromStores(12852).cleanupRouteManager();
      const obj5 = stateFromStores(12852);
      closure_1_1(14625).terminate();
      const obj6 = closure_1_1(14625);
      closure_1_1(14613).terminate();
      const obj7 = closure_1_1(14613);
      closure_1_1(8328).terminate();
      const obj8 = closure_1_1(8328);
      closure_1_1(14534).terminate();
      const obj9 = closure_1_1(14534);
      closure_1_1(14517).terminate();
      const obj10 = closure_1_1(14517);
      closure_1_1(14619).terminate();
      const obj11 = closure_1_1(14619);
      closure_1_1(14621).terminate();
      const obj12 = closure_1_1(14621);
      closure_1_1(14622).terminate();
      const obj13 = closure_1_1(14622);
      closure_1_1(14624).terminate();
      const obj14 = closure_1_1(14624);
      closure_1_1(4746).terminate();
      const obj15 = closure_1_1(4746);
      closure_1_1(14530).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13744).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13744);
  const shouldUseAltGateway = stateFromStores(14629).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14629);
  obj.profile = stateFromStores(11604).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  obj.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};