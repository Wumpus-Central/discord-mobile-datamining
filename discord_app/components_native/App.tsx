// === Module 15632: App ===

// Module 15632 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5922 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6425 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6454 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8221 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8452 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8455 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8483 */;
import GPlayManagerDefault from "GPlayManager" /* 9209 */;
import StartupProfilerDefault from "StartupProfiler" /* 11978 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13281 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15642 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15648 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15652 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15653 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15662 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15664 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15667 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15767 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15775 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15778 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15781 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15783 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15787 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15789 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15790 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15791 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15793 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15794 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15796 */;
import AppContainerDefault from "AppContainer" /* 15798 */;
import MainNavigatorDefault from "MainNavigator" /* 17442 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15633 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(9664);
const ConnectivityIndicatorStateStore = fn(14963);
const RequestReviewStore = fn(14975);
const HexagonCampaignPersistedStore = fn(15634);
const LocalPushNotificationStore = fn(14994);
const PromotionsStore = fn(9143);
const BitRateStore = fn(15294);
const ShareStore = fn(15635);
const PermissionVADStore = fn(15636);
const InteractionModalStore = fn(15637);
const MobileAppDatabaseManager = fn(8346);
const SubscriptionStore = fn(2178);
const AccessibilityStore = fn(4914);
const AnalyticsLogStore = fn(15638);
const PhoneStore = fn(7370);
const ICYMISessionStore = fn(15639);
const MemoryExperiment = fn(15641);
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
    const result = stateFromStores(13736).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15652).terminate();
      const obj = closure_1_1(15652);
      closure_1_1(5922).terminate();
      const obj2 = closure_1_1(5922);
      closure_1_1(9209).terminate();
      const obj3 = closure_1_1(9209);
      closure_1_1(15767).terminate();
      const obj4 = closure_1_1(15767);
      stateFromStores(13736).cleanupRouteManager();
      const obj5 = stateFromStores(13736);
      closure_1_1(15794).terminate();
      const obj6 = closure_1_1(15794);
      closure_1_1(15781).terminate();
      const obj7 = closure_1_1(15781);
      closure_1_1(8221).terminate();
      const obj8 = closure_1_1(8221);
      closure_1_1(15667).terminate();
      const obj9 = closure_1_1(15667);
      closure_1_1(15787).terminate();
      const obj10 = closure_1_1(15787);
      closure_1_1(15789).terminate();
      const obj11 = closure_1_1(15789);
      closure_1_1(15790).terminate();
      const obj12 = closure_1_1(15790);
      closure_1_1(15793).terminate();
      const obj13 = closure_1_1(15793);
      closure_1_1(6454).terminate();
      const obj14 = closure_1_1(6454);
      closure_1_1(15662).terminate();
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
  obj2.profile = stateFromStores(11978).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};