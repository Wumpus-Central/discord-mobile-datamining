// === Module 14679: App ===

// Module 14679 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4898 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5171 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5378 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6836 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8001 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8005 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8538 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9568 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9582 */;
import GPlayManagerDefault from "GPlayManager" /* 10974 */;
import StartupProfilerDefault from "StartupProfiler" /* 11788 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13910 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14720 */;
import BackPressManagerDefault from "BackPressManager" /* 14726 */;
import CallKitManagerDefault from "CallKitManager" /* 14727 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14728 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14729 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14739 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14740 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14743 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14814 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14822 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14824 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14828 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14830 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14831 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14832 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14833 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14834 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14836 */;
import AppContainerDefault from "AppContainer" /* 14840 */;
import MainNavigatorDefault from "MainNavigator" /* 16282 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14680 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9914);
const ConnectivityIndicatorStateStore = fn(13959);
const RequestReviewStore = fn(13968);
const LocalPushNotificationStore = fn(13993);
const PromotionsStore = fn(10931);
const BitRateStore = fn(14271);
const ShareStore = fn(14681);
const PermissionVADStore = fn(14682);
const InteractionModalStore = fn(14683);
const MobileAppDatabaseManager = fn(7883);
const SubscriptionStore = fn(4421);
const AccessibilityStore = fn(4749);
const AnalyticsLogStore = fn(14684);
const PhoneStore = fn(7188);
const ICYMISessionStore = fn(14685);
const MemoryExperiment = fn(14686);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14687, dependencyMap.paths);
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
    const result = stateFromStores(13039).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14728).terminate();
      const obj = closure_1_1(14728);
      closure_1_1(5171).terminate();
      const obj2 = closure_1_1(5171);
      closure_1_1(10974).terminate();
      const obj3 = closure_1_1(10974);
      closure_1_1(14814).terminate();
      const obj4 = closure_1_1(14814);
      stateFromStores(13039).cleanupRouteManager();
      const obj5 = stateFromStores(13039);
      closure_1_1(14834).terminate();
      const obj6 = closure_1_1(14834);
      closure_1_1(14822).terminate();
      const obj7 = closure_1_1(14822);
      closure_1_1(8538).terminate();
      const obj8 = closure_1_1(8538);
      closure_1_1(14743).terminate();
      const obj9 = closure_1_1(14743);
      closure_1_1(14726).terminate();
      const obj10 = closure_1_1(14726);
      closure_1_1(14828).terminate();
      const obj11 = closure_1_1(14828);
      closure_1_1(14830).terminate();
      const obj12 = closure_1_1(14830);
      closure_1_1(14831).terminate();
      const obj13 = closure_1_1(14831);
      closure_1_1(14833).terminate();
      const obj14 = closure_1_1(14833);
      closure_1_1(4898).terminate();
      const obj15 = closure_1_1(4898);
      closure_1_1(14739).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13941).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13941);
  const shouldUseAltGateway = stateFromStores(14838).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14838);
  obj4.profile = stateFromStores(11788).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};