// === Module 16725: App ===

// Module 16725 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6267 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6756 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6781 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8133 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8564 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8791 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8794 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8822 */;
import GPlayManagerDefault from "GPlayManager" /* 9619 */;
import StartupProfilerDefault from "StartupProfiler" /* 12358 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16525 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16768 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16774 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16778 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16779 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16788 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16790 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16793 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16887 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16895 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16898 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16901 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16903 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16907 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16909 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16910 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16911 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16913 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16914 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16916 */;
import AppContainerDefault from "AppContainer" /* 16918 */;
import MainNavigatorDefault from "MainNavigator" /* 18518 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16726 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(10517);
const ConnectivityIndicatorStateStore = fn(16074);
const RequestReviewStore = fn(16084);
const HexagonCampaignPersistedStore = fn(16727);
const LocalPushNotificationStore = fn(16103);
const PromotionsStore = fn(9557);
const BitRateStore = fn(16386);
const ShareStore = fn(16728);
const PermissionVADStore = fn(16729);
const InteractionModalStore = fn(16730);
const MobileAppDatabaseManager = fn(8684);
const SubscriptionStore = fn(2176);
const AccessibilityStore = fn(5244);
const AnalyticsLogStore = fn(16731);
const PhoneStore = fn(7702);
const ICYMISessionStore = fn(16732);
const MemoryExperiment = fn(16734);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2118)(16735, dependencyMap.paths);
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
    obj25 = stateFromStores(1377);
    const result = stateFromStores(13024).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16778).terminate();
      const obj = closure_1_1(16778);
      closure_1_1(6267).terminate();
      const obj2 = closure_1_1(6267);
      closure_1_1(9619).terminate();
      const obj3 = closure_1_1(9619);
      closure_1_1(16887).terminate();
      const obj4 = closure_1_1(16887);
      stateFromStores(13024).cleanupRouteManager();
      const obj5 = stateFromStores(13024);
      closure_1_1(16914).terminate();
      const obj6 = closure_1_1(16914);
      closure_1_1(16901).terminate();
      const obj7 = closure_1_1(16901);
      closure_1_1(8564).terminate();
      const obj8 = closure_1_1(8564);
      closure_1_1(16793).terminate();
      const obj9 = closure_1_1(16793);
      closure_1_1(16907).terminate();
      const obj10 = closure_1_1(16907);
      closure_1_1(16909).terminate();
      const obj11 = closure_1_1(16909);
      closure_1_1(16910).terminate();
      const obj12 = closure_1_1(16910);
      closure_1_1(16913).terminate();
      const obj13 = closure_1_1(16913);
      closure_1_1(6756).terminate();
      const obj14 = closure_1_1(6756);
      closure_1_1(16788).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(16038).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(16038);
  obj3.profile = stateFromStores(12358).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};