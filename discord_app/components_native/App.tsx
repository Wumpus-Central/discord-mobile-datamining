// === Module 15655: App ===

// Module 15655 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5982 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6713 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8004 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8276 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8667 */;
import GPlayManagerDefault from "GPlayManager" /* 9089 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10214 */;
import StartupProfilerDefault from "StartupProfiler" /* 11856 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13208 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14184 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15665 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15671 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15675 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15676 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15685 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15687 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15690 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15797 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15805 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15808 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15811 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15813 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15817 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15819 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15820 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15821 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15823 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15824 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15826 */;
import AppContainerDefault from "AppContainer" /* 15828 */;
import MainNavigatorDefault from "MainNavigator" /* 17482 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15656 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(8496);
const ConnectivityIndicatorStateStore = fn(15004);
const RequestReviewStore = fn(15016);
const HexagonCampaignPersistedStore = fn(15657);
const LocalPushNotificationStore = fn(15035);
const PromotionsStore = fn(9021);
const BitRateStore = fn(15317);
const ShareStore = fn(15658);
const PermissionVADStore = fn(15659);
const InteractionModalStore = fn(15660);
const MobileAppDatabaseManager = fn(8166);
const SubscriptionStore = fn(2178);
const AccessibilityStore = fn(4918);
const AnalyticsLogStore = fn(15661);
const PhoneStore = fn(7180);
const ICYMISessionStore = fn(15662);
const MemoryExperiment = fn(15664);
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
    obj25 = stateFromStores(1378);
    const result = stateFromStores(13646).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15675).terminate();
      const obj = closure_1_1(15675);
      closure_1_1(5982).terminate();
      const obj2 = closure_1_1(5982);
      closure_1_1(9089).terminate();
      const obj3 = closure_1_1(9089);
      closure_1_1(15797).terminate();
      const obj4 = closure_1_1(15797);
      stateFromStores(13646).cleanupRouteManager();
      const obj5 = stateFromStores(13646);
      closure_1_1(15824).terminate();
      const obj6 = closure_1_1(15824);
      closure_1_1(15811).terminate();
      const obj7 = closure_1_1(15811);
      closure_1_1(8667).terminate();
      const obj8 = closure_1_1(8667);
      closure_1_1(15690).terminate();
      const obj9 = closure_1_1(15690);
      closure_1_1(15817).terminate();
      const obj10 = closure_1_1(15817);
      closure_1_1(15819).terminate();
      const obj11 = closure_1_1(15819);
      closure_1_1(15820).terminate();
      const obj12 = closure_1_1(15820);
      closure_1_1(15823).terminate();
      const obj13 = closure_1_1(15823);
      closure_1_1(8276).terminate();
      const obj14 = closure_1_1(8276);
      closure_1_1(15685).terminate();
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
  const effect3 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj2 = { profile: null, children: null };
  let obj = stateFromStores(504);
  obj2.profile = stateFromStores(11856).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};