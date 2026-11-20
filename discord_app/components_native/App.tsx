// === Module 15511: App ===

// Module 15511 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5803 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6306 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 6335 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8101 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8332 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8335 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8363 */;
import GPlayManagerDefault from "GPlayManager" /* 9089 */;
import StartupProfilerDefault from "StartupProfiler" /* 11858 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13161 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15521 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15527 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15531 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15532 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15541 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15543 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15546 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15646 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15654 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15657 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15660 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15662 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15666 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15668 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15669 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15670 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15672 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15673 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15675 */;
import AppContainerDefault from "AppContainer" /* 15677 */;
import MainNavigatorDefault from "MainNavigator" /* 17318 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15512 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const AudioManagerStore = fn(9544);
const ConnectivityIndicatorStateStore = fn(14842);
const RequestReviewStore = fn(14854);
const HexagonCampaignPersistedStore = fn(15513);
const LocalPushNotificationStore = fn(14873);
const PromotionsStore = fn(9023);
const BitRateStore = fn(15173);
const ShareStore = fn(15514);
const PermissionVADStore = fn(15515);
const InteractionModalStore = fn(15516);
const MobileAppDatabaseManager = fn(8226);
const SubscriptionStore = fn(2177);
const AccessibilityStore = fn(4795);
const AnalyticsLogStore = fn(15517);
const PhoneStore = fn(7250);
const ICYMISessionStore = fn(15518);
const MemoryExperiment = fn(15520);
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
    const result = stateFromStores(13616).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15531).terminate();
      const obj = closure_1_1(15531);
      closure_1_1(5803).terminate();
      const obj2 = closure_1_1(5803);
      closure_1_1(9089).terminate();
      const obj3 = closure_1_1(9089);
      closure_1_1(15646).terminate();
      const obj4 = closure_1_1(15646);
      stateFromStores(13616).cleanupRouteManager();
      const obj5 = stateFromStores(13616);
      closure_1_1(15673).terminate();
      const obj6 = closure_1_1(15673);
      closure_1_1(15660).terminate();
      const obj7 = closure_1_1(15660);
      closure_1_1(8101).terminate();
      const obj8 = closure_1_1(8101);
      closure_1_1(15546).terminate();
      const obj9 = closure_1_1(15546);
      closure_1_1(15666).terminate();
      const obj10 = closure_1_1(15666);
      closure_1_1(15668).terminate();
      const obj11 = closure_1_1(15668);
      closure_1_1(15669).terminate();
      const obj12 = closure_1_1(15669);
      closure_1_1(15672).terminate();
      const obj13 = closure_1_1(15672);
      closure_1_1(6335).terminate();
      const obj14 = closure_1_1(6335);
      closure_1_1(15541).terminate();
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
  obj2.profile = stateFromStores(11858).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
};