// === Module 16843: App ===

// Module 16843 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6330 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6819 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6844 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8199 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8631 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8857 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8860 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8888 */;
import GPlayManagerDefault from "GPlayManager" /* 9685 */;
import StartupProfilerDefault from "StartupProfiler" /* 12447 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16643 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16886 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16892 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16896 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16897 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16906 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16908 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16911 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 17005 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 17013 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 17016 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 17019 */;
import SoundboardManagerDefault from "SoundboardManager" /* 17021 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 17025 */;
import ICYMIManagerDefault from "ICYMIManager" /* 17027 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 17028 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 17029 */;
import SessionAdManagerDefault from "SessionAdManager" /* 17031 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 17032 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 17034 */;
import AppContainerDefault from "AppContainer" /* 17036 */;
import MainNavigatorDefault from "MainNavigator" /* 18642 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16844 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(10584);
const ConnectivityIndicatorStateStore = fn(16190);
const RequestReviewStore = fn(16200);
const HexagonCampaignPersistedStore = fn(16845);
const LocalPushNotificationStore = fn(16219);
const PromotionsStore = fn(9623);
const BitRateStore = fn(16504);
const ShareStore = fn(16846);
const PermissionVADStore = fn(16847);
const InteractionModalStore = fn(16848);
const MobileAppDatabaseManager = fn(8751);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(5307);
const AnalyticsLogStore = fn(16849);
const PhoneStore = fn(7768);
const ICYMISessionStore = fn(16850);
const MemoryExperiment = fn(16852);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2121)(16853, dependencyMap.paths);
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
    obj25 = stateFromStores(1380);
    const result = stateFromStores(13114).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16896).terminate();
      const obj = closure_1_1(16896);
      closure_1_1(6330).terminate();
      const obj2 = closure_1_1(6330);
      closure_1_1(9685).terminate();
      const obj3 = closure_1_1(9685);
      closure_1_1(17005).terminate();
      const obj4 = closure_1_1(17005);
      stateFromStores(13114).cleanupRouteManager();
      const obj5 = stateFromStores(13114);
      closure_1_1(17032).terminate();
      const obj6 = closure_1_1(17032);
      closure_1_1(17019).terminate();
      const obj7 = closure_1_1(17019);
      closure_1_1(8631).terminate();
      const obj8 = closure_1_1(8631);
      closure_1_1(16911).terminate();
      const obj9 = closure_1_1(16911);
      closure_1_1(17025).terminate();
      const obj10 = closure_1_1(17025);
      closure_1_1(17027).terminate();
      const obj11 = closure_1_1(17027);
      closure_1_1(17028).terminate();
      const obj12 = closure_1_1(17028);
      closure_1_1(17031).terminate();
      const obj13 = closure_1_1(17031);
      closure_1_1(6819).terminate();
      const obj14 = closure_1_1(6819);
      closure_1_1(16906).terminate();
    };
  }, []);
  let stateFromStores;
  items = [AuthenticationStore];
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(16154).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(16154);
  obj3.profile = stateFromStores(12447).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};