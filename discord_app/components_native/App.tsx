// === Module 15547: App ===

// Module 15547 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5801 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6304 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6333 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8102 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8333 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8336 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8364 */;
import GPlayManagerDefault from "GPlayManager" /* 9089 */;
import StartupProfilerDefault from "StartupProfiler" /* 11916 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13191 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15347 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15557 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15563 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15567 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15568 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15577 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15579 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15582 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15682 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15690 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15693 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15696 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15698 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15702 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15704 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15705 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15706 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15708 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15709 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15711 */;
import AppContainerDefault from "AppContainer" /* 15713 */;
import MainNavigatorDefault from "MainNavigator" /* 17491 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15548 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(9544);
const ConnectivityIndicatorStateStore = fn(14880);
const RequestReviewStore = fn(14890);
const HexagonCampaignPersistedStore = fn(15549);
const LocalPushNotificationStore = fn(14909);
const PromotionsStore = fn(9023);
const BitRateStore = fn(15209);
const ShareStore = fn(15550);
const PermissionVADStore = fn(15551);
const InteractionModalStore = fn(15552);
const MobileAppDatabaseManager = fn(8227);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(4793);
const AnalyticsLogStore = fn(15553);
const PhoneStore = fn(7251);
const ICYMISessionStore = fn(15554);
const MemoryExperiment = fn(15556);
const jsx = fn(21).jsx;
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
    const result = stateFromStores(13646).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15567).terminate();
      const obj = closure_1_1(15567);
      closure_1_1(5801).terminate();
      const obj2 = closure_1_1(5801);
      closure_1_1(9089).terminate();
      const obj3 = closure_1_1(9089);
      closure_1_1(15682).terminate();
      const obj4 = closure_1_1(15682);
      stateFromStores(13646).cleanupRouteManager();
      const obj5 = stateFromStores(13646);
      closure_1_1(15709).terminate();
      const obj6 = closure_1_1(15709);
      closure_1_1(15696).terminate();
      const obj7 = closure_1_1(15696);
      closure_1_1(8102).terminate();
      const obj8 = closure_1_1(8102);
      closure_1_1(15582).terminate();
      const obj9 = closure_1_1(15582);
      closure_1_1(15702).terminate();
      const obj10 = closure_1_1(15702);
      closure_1_1(15704).terminate();
      const obj11 = closure_1_1(15704);
      closure_1_1(15705).terminate();
      const obj12 = closure_1_1(15705);
      closure_1_1(15708).terminate();
      const obj13 = closure_1_1(15708);
      closure_1_1(6333).terminate();
      const obj14 = closure_1_1(6333);
      closure_1_1(15577).terminate();
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
          const androidNotificationPermission = NotificationPermissionUtil.requestAndroidNotificationPermission();
          const tmp8Result = NotificationPermissionUtil;
        }
        return () => {
          closure_1_1(dependencyMap[50]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(14844).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(14844);
  obj3.profile = stateFromStores(11916).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};