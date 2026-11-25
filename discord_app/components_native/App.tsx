// === Module 15777: App ===

// Module 15777 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6077 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6808 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8103 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8375 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8766 */;
import GPlayManagerDefault from "GPlayManager" /* 9188 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10313 */;
import StartupProfilerDefault from "StartupProfiler" /* 11955 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13331 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14307 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15786 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15792 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15796 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15797 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15806 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15808 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15811 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15918 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15926 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15929 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15932 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15934 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15938 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15940 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15941 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15942 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15944 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15945 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15947 */;
import AppContainerDefault from "AppContainer" /* 15949 */;
import MainNavigatorDefault from "MainNavigator" /* 17593 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15778 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(8595);
const ConnectivityIndicatorStateStore = fn(15126);
const RequestReviewStore = fn(15138);
const HexagonCampaignPersistedStore = fn(15779);
const LocalPushNotificationStore = fn(15157);
const PromotionsStore = fn(9120);
const BitRateStore = fn(15439);
const ShareStore = fn(15780);
const PermissionVADStore = fn(15781);
const InteractionModalStore = fn(12371);
const MobileAppDatabaseManager = fn(8265);
const SubscriptionStore = fn(2178);
const AccessibilityStore = fn(5013);
const AnalyticsLogStore = fn(15782);
const PhoneStore = fn(7275);
const ICYMISessionStore = fn(15783);
const MemoryExperiment = fn(15785);
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
    const result = stateFromStores(13769).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15796).terminate();
      const obj = closure_1_1(15796);
      closure_1_1(6077).terminate();
      const obj2 = closure_1_1(6077);
      closure_1_1(9188).terminate();
      const obj3 = closure_1_1(9188);
      closure_1_1(15918).terminate();
      const obj4 = closure_1_1(15918);
      stateFromStores(13769).cleanupRouteManager();
      const obj5 = stateFromStores(13769);
      closure_1_1(15945).terminate();
      const obj6 = closure_1_1(15945);
      closure_1_1(15932).terminate();
      const obj7 = closure_1_1(15932);
      closure_1_1(8766).terminate();
      const obj8 = closure_1_1(8766);
      closure_1_1(15811).terminate();
      const obj9 = closure_1_1(15811);
      closure_1_1(15938).terminate();
      const obj10 = closure_1_1(15938);
      closure_1_1(15940).terminate();
      const obj11 = closure_1_1(15940);
      closure_1_1(15941).terminate();
      const obj12 = closure_1_1(15941);
      closure_1_1(15944).terminate();
      const obj13 = closure_1_1(15944);
      closure_1_1(8375).terminate();
      const obj14 = closure_1_1(8375);
      closure_1_1(15806).terminate();
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
  obj2.profile = stateFromStores(11955).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};