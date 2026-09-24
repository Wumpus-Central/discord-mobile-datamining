// === Module 14768: App ===

// Module 14768 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4970 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5257 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5464 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6922 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8085 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8089 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8613 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9645 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9659 */;
import GPlayManagerDefault from "GPlayManager" /* 11056 */;
import StartupProfilerDefault from "StartupProfiler" /* 11870 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 14004 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14809 */;
import BackPressManagerDefault from "BackPressManager" /* 14815 */;
import CallKitManagerDefault from "CallKitManager" /* 14816 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14817 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14818 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14828 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14829 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14832 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14903 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14911 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14913 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14917 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14919 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14920 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14921 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14922 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14923 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14925 */;
import AppContainerDefault from "AppContainer" /* 14929 */;
import MainNavigatorDefault from "MainNavigator" /* 16357 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14769 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9992);
const ConnectivityIndicatorStateStore = fn(14053);
const RequestReviewStore = fn(14062);
const LocalPushNotificationStore = fn(14083);
const PromotionsStore = fn(11013);
const BitRateStore = fn(14363);
const ShareStore = fn(14770);
const PermissionVADStore = fn(14771);
const InteractionModalStore = fn(14772);
const MobileAppDatabaseManager = fn(7967);
const SubscriptionStore = fn(4489);
const AccessibilityStore = fn(4821);
const AnalyticsLogStore = fn(14773);
const PhoneStore = fn(7274);
const ICYMISessionStore = fn(14774);
const MemoryExperiment = fn(14775);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14776, dependencyMap.paths);
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
    const result = stateFromStores(13130).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14817).terminate();
      const obj = closure_1_1(14817);
      closure_1_1(5257).terminate();
      const obj2 = closure_1_1(5257);
      closure_1_1(11056).terminate();
      const obj3 = closure_1_1(11056);
      closure_1_1(14903).terminate();
      const obj4 = closure_1_1(14903);
      stateFromStores(13130).cleanupRouteManager();
      const obj5 = stateFromStores(13130);
      closure_1_1(14923).terminate();
      const obj6 = closure_1_1(14923);
      closure_1_1(14911).terminate();
      const obj7 = closure_1_1(14911);
      closure_1_1(8613).terminate();
      const obj8 = closure_1_1(8613);
      closure_1_1(14832).terminate();
      const obj9 = closure_1_1(14832);
      closure_1_1(14815).terminate();
      const obj10 = closure_1_1(14815);
      closure_1_1(14917).terminate();
      const obj11 = closure_1_1(14917);
      closure_1_1(14919).terminate();
      const obj12 = closure_1_1(14919);
      closure_1_1(14920).terminate();
      const obj13 = closure_1_1(14920);
      closure_1_1(14922).terminate();
      const obj14 = closure_1_1(14922);
      closure_1_1(4970).terminate();
      const obj15 = closure_1_1(4970);
      closure_1_1(14828).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(14035).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(14035);
  const shouldUseAltGateway = stateFromStores(14927).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14927);
  obj4.profile = stateFromStores(11870).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};