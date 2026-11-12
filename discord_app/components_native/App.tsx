// === Module 16720: App ===

// Module 16720 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6267 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6756 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6781 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8133 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8564 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8790 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8793 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8821 */;
import GPlayManagerDefault from "GPlayManager" /* 9618 */;
import StartupProfilerDefault from "StartupProfiler" /* 12352 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16520 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16763 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16769 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16773 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16774 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16783 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16785 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16788 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16882 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16890 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16893 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16896 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16898 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16902 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16904 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16905 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16906 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16908 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16909 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16911 */;
import AppContainerDefault from "AppContainer" /* 16913 */;
import MainNavigatorDefault from "MainNavigator" /* 18513 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16721 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(10515);
const ConnectivityIndicatorStateStore = fn(16069);
const RequestReviewStore = fn(16079);
const HexagonCampaignPersistedStore = fn(16722);
const LocalPushNotificationStore = fn(16098);
const PromotionsStore = fn(9556);
const BitRateStore = fn(16381);
const ShareStore = fn(16723);
const PermissionVADStore = fn(16724);
const InteractionModalStore = fn(16725);
const MobileAppDatabaseManager = fn(8684);
const SubscriptionStore = fn(2176);
const AccessibilityStore = fn(5244);
const AnalyticsLogStore = fn(16726);
const PhoneStore = fn(7702);
const ICYMISessionStore = fn(16727);
const MemoryExperiment = fn(16729);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2118)(16730, dependencyMap.paths);
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
    const result = stateFromStores(13018).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16773).terminate();
      const obj = closure_1_1(16773);
      closure_1_1(6267).terminate();
      const obj2 = closure_1_1(6267);
      closure_1_1(9618).terminate();
      const obj3 = closure_1_1(9618);
      closure_1_1(16882).terminate();
      const obj4 = closure_1_1(16882);
      stateFromStores(13018).cleanupRouteManager();
      const obj5 = stateFromStores(13018);
      closure_1_1(16909).terminate();
      const obj6 = closure_1_1(16909);
      closure_1_1(16896).terminate();
      const obj7 = closure_1_1(16896);
      closure_1_1(8564).terminate();
      const obj8 = closure_1_1(8564);
      closure_1_1(16788).terminate();
      const obj9 = closure_1_1(16788);
      closure_1_1(16902).terminate();
      const obj10 = closure_1_1(16902);
      closure_1_1(16904).terminate();
      const obj11 = closure_1_1(16904);
      closure_1_1(16905).terminate();
      const obj12 = closure_1_1(16905);
      closure_1_1(16908).terminate();
      const obj13 = closure_1_1(16908);
      closure_1_1(6756).terminate();
      const obj14 = closure_1_1(6756);
      closure_1_1(16783).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(16033).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(16033);
  obj3.profile = stateFromStores(12352).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};