// === Module 16527: App ===

// Module 16527 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6152 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6795 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7976 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8032 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8299 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8911 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10330 */;
import GPlayManagerDefault from "GPlayManager" /* 10697 */;
import StartupProfilerDefault from "StartupProfiler" /* 11721 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15488 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16327 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16570 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16576 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16580 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16581 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16590 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16592 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16595 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16688 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16696 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16699 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16702 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16704 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16708 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16710 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16711 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16712 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16714 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16715 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16717 */;
import AppContainerDefault from "AppContainer" /* 16719 */;
import MainNavigatorDefault from "MainNavigator" /* 18304 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16528 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(9302);
const ConnectivityIndicatorStateStore = fn(15877);
const RequestReviewStore = fn(15887);
const HexagonCampaignPersistedStore = fn(16529);
const LocalPushNotificationStore = fn(15906);
const PromotionsStore = fn(9714);
const BitRateStore = fn(16187);
const ShareStore = fn(16530);
const PermissionVADStore = fn(16531);
const InteractionModalStore = fn(16532);
const MobileAppDatabaseManager = fn(7862);
const SubscriptionStore = fn(2176);
const AccessibilityStore = fn(5141);
const AnalyticsLogStore = fn(16533);
const PhoneStore = fn(7180);
const ICYMISessionStore = fn(16534);
const MemoryExperiment = fn(16536);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2118)(16537, dependencyMap.paths);
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
    const result = stateFromStores(12223).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16580).terminate();
      const obj = closure_1_1(16580);
      closure_1_1(6152).terminate();
      const obj2 = closure_1_1(6152);
      closure_1_1(10697).terminate();
      const obj3 = closure_1_1(10697);
      closure_1_1(16688).terminate();
      const obj4 = closure_1_1(16688);
      stateFromStores(12223).cleanupRouteManager();
      const obj5 = stateFromStores(12223);
      closure_1_1(16715).terminate();
      const obj6 = closure_1_1(16715);
      closure_1_1(16702).terminate();
      const obj7 = closure_1_1(16702);
      closure_1_1(8911).terminate();
      const obj8 = closure_1_1(8911);
      closure_1_1(16595).terminate();
      const obj9 = closure_1_1(16595);
      closure_1_1(16708).terminate();
      const obj10 = closure_1_1(16708);
      closure_1_1(16710).terminate();
      const obj11 = closure_1_1(16710);
      closure_1_1(16711).terminate();
      const obj12 = closure_1_1(16711);
      closure_1_1(16714).terminate();
      const obj13 = closure_1_1(16714);
      closure_1_1(7976).terminate();
      const obj14 = closure_1_1(7976);
      closure_1_1(16590).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(15841).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(15841);
  obj3.profile = stateFromStores(11721).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};