// === Module 14446: App ===

// Module 14446 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4747 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5012 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5211 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6664 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7828 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7832 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8349 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9606 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9659 */;
import GPlayManagerDefault from "GPlayManager" /* 10797 */;
import StartupProfilerDefault from "StartupProfiler" /* 11626 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13692 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14487 */;
import BackPressManagerDefault from "BackPressManager" /* 14493 */;
import CallKitManagerDefault from "CallKitManager" /* 14494 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14495 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14496 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14506 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14507 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14510 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14581 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14589 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14591 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14595 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14597 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14598 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14599 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14600 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14601 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14603 */;
import AppContainerDefault from "AppContainer" /* 14607 */;
import MainNavigatorDefault from "MainNavigator" /* 16011 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14447 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9176);
const ConnectivityIndicatorStateStore = fn(13741);
const RequestReviewStore = fn(13750);
const LocalPushNotificationStore = fn(13770);
const PromotionsStore = fn(10754);
const BitRateStore = fn(14048);
const ShareStore = fn(14448);
const PermissionVADStore = fn(14449);
const InteractionModalStore = fn(14450);
const MobileAppDatabaseManager = fn(7716);
const SubscriptionStore = fn(4270);
const AccessibilityStore = fn(4598);
const AnalyticsLogStore = fn(14451);
const PhoneStore = fn(7014);
const ICYMISessionStore = fn(14452);
const MemoryExperiment = fn(14453);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14454, dependencyMap.paths);
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
    const result = stateFromStores(12875).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14495).terminate();
      const obj = closure_1_1(14495);
      closure_1_1(5012).terminate();
      const obj2 = closure_1_1(5012);
      closure_1_1(10797).terminate();
      const obj3 = closure_1_1(10797);
      closure_1_1(14581).terminate();
      const obj4 = closure_1_1(14581);
      stateFromStores(12875).cleanupRouteManager();
      const obj5 = stateFromStores(12875);
      closure_1_1(14601).terminate();
      const obj6 = closure_1_1(14601);
      closure_1_1(14589).terminate();
      const obj7 = closure_1_1(14589);
      closure_1_1(8349).terminate();
      const obj8 = closure_1_1(8349);
      closure_1_1(14510).terminate();
      const obj9 = closure_1_1(14510);
      closure_1_1(14493).terminate();
      const obj10 = closure_1_1(14493);
      closure_1_1(14595).terminate();
      const obj11 = closure_1_1(14595);
      closure_1_1(14597).terminate();
      const obj12 = closure_1_1(14597);
      closure_1_1(14598).terminate();
      const obj13 = closure_1_1(14598);
      closure_1_1(14600).terminate();
      const obj14 = closure_1_1(14600);
      closure_1_1(4747).terminate();
      const obj15 = closure_1_1(4747);
      closure_1_1(14506).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13723).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13723);
  const shouldUseAltGateway = stateFromStores(14605).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14605);
  obj.profile = stateFromStores(11626).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  obj.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
};