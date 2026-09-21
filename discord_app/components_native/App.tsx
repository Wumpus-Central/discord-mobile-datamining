// === Module 14673: App ===

// Module 14673 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4897 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5170 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5376 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6834 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7998 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8002 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8534 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9562 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9576 */;
import GPlayManagerDefault from "GPlayManager" /* 10968 */;
import StartupProfilerDefault from "StartupProfiler" /* 11784 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13902 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14714 */;
import BackPressManagerDefault from "BackPressManager" /* 14720 */;
import CallKitManagerDefault from "CallKitManager" /* 14721 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14722 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14723 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14733 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14734 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14737 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14808 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14816 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14818 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14822 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14824 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14825 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14826 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14827 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14828 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14830 */;
import AppContainerDefault from "AppContainer" /* 14834 */;
import MainNavigatorDefault from "MainNavigator" /* 16271 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14674 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9908);
const ConnectivityIndicatorStateStore = fn(13951);
const RequestReviewStore = fn(13960);
const LocalPushNotificationStore = fn(13985);
const PromotionsStore = fn(10925);
const BitRateStore = fn(14265);
const ShareStore = fn(14675);
const PermissionVADStore = fn(14676);
const InteractionModalStore = fn(14677);
const MobileAppDatabaseManager = fn(7880);
const SubscriptionStore = fn(4420);
const AccessibilityStore = fn(4748);
const AnalyticsLogStore = fn(14678);
const PhoneStore = fn(7186);
const ICYMISessionStore = fn(14679);
const MemoryExperiment = fn(14680);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14681, dependencyMap.paths);
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
    const result = stateFromStores(13035).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14722).terminate();
      const obj = closure_1_1(14722);
      closure_1_1(5170).terminate();
      const obj2 = closure_1_1(5170);
      closure_1_1(10968).terminate();
      const obj3 = closure_1_1(10968);
      closure_1_1(14808).terminate();
      const obj4 = closure_1_1(14808);
      stateFromStores(13035).cleanupRouteManager();
      const obj5 = stateFromStores(13035);
      closure_1_1(14828).terminate();
      const obj6 = closure_1_1(14828);
      closure_1_1(14816).terminate();
      const obj7 = closure_1_1(14816);
      closure_1_1(8534).terminate();
      const obj8 = closure_1_1(8534);
      closure_1_1(14737).terminate();
      const obj9 = closure_1_1(14737);
      closure_1_1(14720).terminate();
      const obj10 = closure_1_1(14720);
      closure_1_1(14822).terminate();
      const obj11 = closure_1_1(14822);
      closure_1_1(14824).terminate();
      const obj12 = closure_1_1(14824);
      closure_1_1(14825).terminate();
      const obj13 = closure_1_1(14825);
      closure_1_1(14827).terminate();
      const obj14 = closure_1_1(14827);
      closure_1_1(4897).terminate();
      const obj15 = closure_1_1(4897);
      closure_1_1(14733).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13933).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13933);
  const shouldUseAltGateway = stateFromStores(14832).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14832);
  obj4.profile = stateFromStores(11784).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};