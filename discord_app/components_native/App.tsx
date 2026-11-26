// === Module 15828: App ===

// Module 15828 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6108 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6839 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8145 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8417 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8808 */;
import GPlayManagerDefault from "GPlayManager" /* 9230 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10355 */;
import StartupProfilerDefault from "StartupProfiler" /* 12003 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13383 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14359 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15837 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15843 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15847 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15848 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15857 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15859 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15862 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15969 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15977 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15980 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15983 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15985 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15989 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15991 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15992 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15993 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15995 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15996 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15998 */;
import AppContainerDefault from "AppContainer" /* 16000 */;
import MainNavigatorDefault from "MainNavigator" /* 17650 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15829 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(8637);
const ConnectivityIndicatorStateStore = fn(15176);
const RequestReviewStore = fn(15188);
const HexagonCampaignPersistedStore = fn(15830);
const LocalPushNotificationStore = fn(15207);
const PromotionsStore = fn(9162);
const BitRateStore = fn(15490);
const ShareStore = fn(15831);
const PermissionVADStore = fn(15832);
const InteractionModalStore = fn(12421);
const MobileAppDatabaseManager = fn(8307);
const SubscriptionStore = fn(2179);
const AccessibilityStore = fn(5044);
const AnalyticsLogStore = fn(15833);
const PhoneStore = fn(7306);
const ICYMISessionStore = fn(15834);
const MemoryExperiment = fn(15836);
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
    const result = stateFromStores(13821).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15847).terminate();
      const obj = closure_1_1(15847);
      closure_1_1(6108).terminate();
      const obj2 = closure_1_1(6108);
      closure_1_1(9230).terminate();
      const obj3 = closure_1_1(9230);
      closure_1_1(15969).terminate();
      const obj4 = closure_1_1(15969);
      stateFromStores(13821).cleanupRouteManager();
      const obj5 = stateFromStores(13821);
      closure_1_1(15996).terminate();
      const obj6 = closure_1_1(15996);
      closure_1_1(15983).terminate();
      const obj7 = closure_1_1(15983);
      closure_1_1(8808).terminate();
      const obj8 = closure_1_1(8808);
      closure_1_1(15862).terminate();
      const obj9 = closure_1_1(15862);
      closure_1_1(15989).terminate();
      const obj10 = closure_1_1(15989);
      closure_1_1(15991).terminate();
      const obj11 = closure_1_1(15991);
      closure_1_1(15992).terminate();
      const obj12 = closure_1_1(15992);
      closure_1_1(15995).terminate();
      const obj13 = closure_1_1(15995);
      closure_1_1(8417).terminate();
      const obj14 = closure_1_1(8417);
      closure_1_1(15857).terminate();
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
  obj2.profile = stateFromStores(12003).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};