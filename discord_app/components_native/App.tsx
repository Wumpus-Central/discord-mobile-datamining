// === Module 15561: App ===

// Module 15561 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5830 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6333 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6362 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8133 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8364 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8367 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8395 */;
import GPlayManagerDefault from "GPlayManager" /* 9113 */;
import StartupProfilerDefault from "StartupProfiler" /* 11938 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13209 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15361 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15571 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15577 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15581 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15582 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15591 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15593 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15596 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15694 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15702 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15705 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15708 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15710 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15714 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15716 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15717 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15718 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15720 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15721 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15723 */;
import AppContainerDefault from "AppContainer" /* 15725 */;
import MainNavigatorDefault from "MainNavigator" /* 17498 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15562 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(9565);
const ConnectivityIndicatorStateStore = fn(14894);
const RequestReviewStore = fn(14904);
const HexagonCampaignPersistedStore = fn(15563);
const LocalPushNotificationStore = fn(14923);
const PromotionsStore = fn(9049);
const BitRateStore = fn(15223);
const ShareStore = fn(15564);
const PermissionVADStore = fn(15565);
const InteractionModalStore = fn(15566);
const MobileAppDatabaseManager = fn(8258);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(4824);
const AnalyticsLogStore = fn(15567);
const PhoneStore = fn(7281);
const ICYMISessionStore = fn(15568);
const MemoryExperiment = fn(15570);
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
    const result = stateFromStores(13664).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15581).terminate();
      const obj = closure_1_1(15581);
      closure_1_1(5830).terminate();
      const obj2 = closure_1_1(5830);
      closure_1_1(9113).terminate();
      const obj3 = closure_1_1(9113);
      closure_1_1(15694).terminate();
      const obj4 = closure_1_1(15694);
      stateFromStores(13664).cleanupRouteManager();
      const obj5 = stateFromStores(13664);
      closure_1_1(15721).terminate();
      const obj6 = closure_1_1(15721);
      closure_1_1(15708).terminate();
      const obj7 = closure_1_1(15708);
      closure_1_1(8133).terminate();
      const obj8 = closure_1_1(8133);
      closure_1_1(15596).terminate();
      const obj9 = closure_1_1(15596);
      closure_1_1(15714).terminate();
      const obj10 = closure_1_1(15714);
      closure_1_1(15716).terminate();
      const obj11 = closure_1_1(15716);
      closure_1_1(15717).terminate();
      const obj12 = closure_1_1(15717);
      closure_1_1(15720).terminate();
      const obj13 = closure_1_1(15720);
      closure_1_1(6362).terminate();
      const obj14 = closure_1_1(6362);
      closure_1_1(15591).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(14858).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(14858);
  obj3.profile = stateFromStores(11938).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};