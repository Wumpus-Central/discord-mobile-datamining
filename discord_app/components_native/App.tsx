// === Module 14421: App ===

// Module 14421 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4715 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 4975 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5174 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6607 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7770 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7774 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8291 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9547 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9600 */;
import GPlayManagerDefault from "GPlayManager" /* 10740 */;
import StartupProfilerDefault from "StartupProfiler" /* 11564 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13664 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14462 */;
import BackPressManagerDefault from "BackPressManager" /* 14468 */;
import CallKitManagerDefault from "CallKitManager" /* 14469 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14470 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14471 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14481 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14482 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14485 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14556 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14564 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14566 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14570 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14572 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14573 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14574 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14575 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14576 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14578 */;
import AppContainerDefault from "AppContainer" /* 14582 */;
import MainNavigatorDefault from "MainNavigator" /* 15973 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14422 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9118);
const ConnectivityIndicatorStateStore = fn(13713);
const RequestReviewStore = fn(13722);
const LocalPushNotificationStore = fn(13742);
const PromotionsStore = fn(10697);
const BitRateStore = fn(14021);
const ShareStore = fn(14423);
const PermissionVADStore = fn(14424);
const InteractionModalStore = fn(14425);
const MobileAppDatabaseManager = fn(7658);
const SubscriptionStore = fn(4237);
const AccessibilityStore = fn(4566);
const AnalyticsLogStore = fn(14426);
const PhoneStore = fn(6957);
const ICYMISessionStore = fn(14427);
const MemoryExperiment = fn(14428);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14429, dependencyMap.paths);
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
    const result = stateFromStores(12812).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14470).terminate();
      const obj = closure_1_1(14470);
      closure_1_1(4975).terminate();
      const obj2 = closure_1_1(4975);
      closure_1_1(10740).terminate();
      const obj3 = closure_1_1(10740);
      closure_1_1(14556).terminate();
      const obj4 = closure_1_1(14556);
      stateFromStores(12812).cleanupRouteManager();
      const obj5 = stateFromStores(12812);
      closure_1_1(14576).terminate();
      const obj6 = closure_1_1(14576);
      closure_1_1(14564).terminate();
      const obj7 = closure_1_1(14564);
      closure_1_1(8291).terminate();
      const obj8 = closure_1_1(8291);
      closure_1_1(14485).terminate();
      const obj9 = closure_1_1(14485);
      closure_1_1(14468).terminate();
      const obj10 = closure_1_1(14468);
      closure_1_1(14570).terminate();
      const obj11 = closure_1_1(14570);
      closure_1_1(14572).terminate();
      const obj12 = closure_1_1(14572);
      closure_1_1(14573).terminate();
      const obj13 = closure_1_1(14573);
      closure_1_1(14575).terminate();
      const obj14 = closure_1_1(14575);
      closure_1_1(4715).terminate();
      const obj15 = closure_1_1(4715);
      closure_1_1(14481).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13695).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13695);
  const shouldUseAltGateway = stateFromStores(14580).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14580);
  obj.profile = stateFromStores(11564).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  obj.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};