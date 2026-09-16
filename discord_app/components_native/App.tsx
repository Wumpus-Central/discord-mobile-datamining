// === Module 14509: App ===

// Module 14509 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4779 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5044 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5245 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6701 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7870 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7874 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8393 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9658 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9711 */;
import GPlayManagerDefault from "GPlayManager" /* 10849 */;
import StartupProfilerDefault from "StartupProfiler" /* 11675 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13741 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14550 */;
import BackPressManagerDefault from "BackPressManager" /* 14556 */;
import CallKitManagerDefault from "CallKitManager" /* 14557 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14558 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14559 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14569 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14570 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14573 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14645 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14653 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14655 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14659 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14661 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14662 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14663 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14664 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14665 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14667 */;
import AppContainerDefault from "AppContainer" /* 14671 */;
import MainNavigatorDefault from "MainNavigator" /* 16070 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14510 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9229);
const ConnectivityIndicatorStateStore = fn(13790);
const RequestReviewStore = fn(13799);
const LocalPushNotificationStore = fn(13823);
const PromotionsStore = fn(10806);
const BitRateStore = fn(14101);
const ShareStore = fn(14511);
const PermissionVADStore = fn(14512);
const InteractionModalStore = fn(14513);
const MobileAppDatabaseManager = fn(7752);
const SubscriptionStore = fn(4301);
const AccessibilityStore = fn(4630);
const AnalyticsLogStore = fn(14514);
const PhoneStore = fn(7051);
const ICYMISessionStore = fn(14515);
const MemoryExperiment = fn(14516);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1897)(14517, dependencyMap.paths);
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
    const result = stateFromStores(12925).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14558).terminate();
      const obj = closure_1_1(14558);
      closure_1_1(5044).terminate();
      const obj2 = closure_1_1(5044);
      closure_1_1(10849).terminate();
      const obj3 = closure_1_1(10849);
      closure_1_1(14645).terminate();
      const obj4 = closure_1_1(14645);
      stateFromStores(12925).cleanupRouteManager();
      const obj5 = stateFromStores(12925);
      closure_1_1(14665).terminate();
      const obj6 = closure_1_1(14665);
      closure_1_1(14653).terminate();
      const obj7 = closure_1_1(14653);
      closure_1_1(8393).terminate();
      const obj8 = closure_1_1(8393);
      closure_1_1(14573).terminate();
      const obj9 = closure_1_1(14573);
      closure_1_1(14556).terminate();
      const obj10 = closure_1_1(14556);
      closure_1_1(14659).terminate();
      const obj11 = closure_1_1(14659);
      closure_1_1(14661).terminate();
      const obj12 = closure_1_1(14661);
      closure_1_1(14662).terminate();
      const obj13 = closure_1_1(14662);
      closure_1_1(14664).terminate();
      const obj14 = closure_1_1(14664);
      closure_1_1(4779).terminate();
      const obj15 = closure_1_1(4779);
      closure_1_1(14569).terminate();
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
          closure_1_1(dependencyMap[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13772).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13772);
  const shouldUseAltGateway = stateFromStores(14669).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14669);
  obj4.profile = stateFromStores(11675).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};