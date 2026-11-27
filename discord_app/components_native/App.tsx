// === Module 15835: App ===

// Module 15835 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6108 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6839 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8146 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8418 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8809 */;
import GPlayManagerDefault from "GPlayManager" /* 9231 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10356 */;
import StartupProfilerDefault from "StartupProfiler" /* 12011 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13391 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14366 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15844 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15850 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15854 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15855 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15864 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15866 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15869 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15976 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15984 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15987 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15990 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15992 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15996 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15998 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15999 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16000 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16002 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16003 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16005 */;
import AppContainerDefault from "AppContainer" /* 16007 */;
import MainNavigatorDefault from "MainNavigator" /* 17657 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15836 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(8638);
const ConnectivityIndicatorStateStore = fn(15183);
const RequestReviewStore = fn(15195);
const HexagonCampaignPersistedStore = fn(15837);
const LocalPushNotificationStore = fn(15214);
const PromotionsStore = fn(9163);
const BitRateStore = fn(15497);
const ShareStore = fn(15838);
const PermissionVADStore = fn(15839);
const InteractionModalStore = fn(12429);
const MobileAppDatabaseManager = fn(8308);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(5044);
const AnalyticsLogStore = fn(15840);
const PhoneStore = fn(7306);
const ICYMISessionStore = fn(15841);
const MemoryExperiment = fn(15843);
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
    obj25 = stateFromStores(1379);
    const result = stateFromStores(13828).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15854).terminate();
      const obj = closure_1_1(15854);
      closure_1_1(6108).terminate();
      const obj2 = closure_1_1(6108);
      closure_1_1(9231).terminate();
      const obj3 = closure_1_1(9231);
      closure_1_1(15976).terminate();
      const obj4 = closure_1_1(15976);
      stateFromStores(13828).cleanupRouteManager();
      const obj5 = stateFromStores(13828);
      closure_1_1(16003).terminate();
      const obj6 = closure_1_1(16003);
      closure_1_1(15990).terminate();
      const obj7 = closure_1_1(15990);
      closure_1_1(8809).terminate();
      const obj8 = closure_1_1(8809);
      closure_1_1(15869).terminate();
      const obj9 = closure_1_1(15869);
      closure_1_1(15996).terminate();
      const obj10 = closure_1_1(15996);
      closure_1_1(15998).terminate();
      const obj11 = closure_1_1(15998);
      closure_1_1(15999).terminate();
      const obj12 = closure_1_1(15999);
      closure_1_1(16002).terminate();
      const obj13 = closure_1_1(16002);
      closure_1_1(8418).terminate();
      const obj14 = closure_1_1(8418);
      closure_1_1(15864).terminate();
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
  obj2.profile = stateFromStores(12011).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};