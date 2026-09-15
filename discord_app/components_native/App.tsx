// === Module 14491: App ===

// Module 14491 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4780 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5045 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5244 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6698 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7861 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7865 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8384 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9647 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9700 */;
import GPlayManagerDefault from "GPlayManager" /* 10841 */;
import StartupProfilerDefault from "StartupProfiler" /* 11667 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13732 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14532 */;
import BackPressManagerDefault from "BackPressManager" /* 14538 */;
import CallKitManagerDefault from "CallKitManager" /* 14539 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14540 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14541 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14551 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14552 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14555 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14627 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14635 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14637 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14641 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14643 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14644 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14645 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14646 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14647 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14649 */;
import AppContainerDefault from "AppContainer" /* 14653 */;
import MainNavigatorDefault from "MainNavigator" /* 16050 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14492 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9218);
const ConnectivityIndicatorStateStore = fn(13781);
const RequestReviewStore = fn(13790);
const LocalPushNotificationStore = fn(13810);
const PromotionsStore = fn(10798);
const BitRateStore = fn(14088);
const ShareStore = fn(14493);
const PermissionVADStore = fn(14494);
const InteractionModalStore = fn(14495);
const MobileAppDatabaseManager = fn(7749);
const SubscriptionStore = fn(4303);
const AccessibilityStore = fn(4631);
const AnalyticsLogStore = fn(14496);
const PhoneStore = fn(7048);
const ICYMISessionStore = fn(14497);
const MemoryExperiment = fn(14498);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1897)(14499, dependencyMap.paths);
}
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default function App() {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
    BackPressManagerDefault.initialize();
    CallKitManagerDefault.initialize();
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
    if (obj26.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj26 = stateFromStores(1364);
    const result = stateFromStores(12917).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14540).terminate();
      const obj = closure_1_1(14540);
      closure_1_1(5045).terminate();
      const obj2 = closure_1_1(5045);
      closure_1_1(10841).terminate();
      const obj3 = closure_1_1(10841);
      closure_1_1(14627).terminate();
      const obj4 = closure_1_1(14627);
      stateFromStores(12917).cleanupRouteManager();
      const obj5 = stateFromStores(12917);
      closure_1_1(14647).terminate();
      const obj6 = closure_1_1(14647);
      closure_1_1(14635).terminate();
      const obj7 = closure_1_1(14635);
      closure_1_1(8384).terminate();
      const obj8 = closure_1_1(8384);
      closure_1_1(14555).terminate();
      const obj9 = closure_1_1(14555);
      closure_1_1(14538).terminate();
      const obj10 = closure_1_1(14538);
      closure_1_1(14641).terminate();
      const obj11 = closure_1_1(14641);
      closure_1_1(14643).terminate();
      const obj12 = closure_1_1(14643);
      closure_1_1(14644).terminate();
      const obj13 = closure_1_1(14644);
      closure_1_1(14646).terminate();
      const obj14 = closure_1_1(14646);
      closure_1_1(4780).terminate();
      const obj15 = closure_1_1(4780);
      closure_1_1(14551).terminate();
    };
  }, []);
  let stateFromStores;
  const items = [AuthenticationStore];
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
          const NativePermissionManager = NativeModules.NativePermissionManager;
          const notificationAuthorization = NativePermissionManager.requestNotificationAuthorization();
        }
        return () => {
          closure_1_1(dependencyMap[53]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13763).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13763);
  const shouldUseAltGateway = stateFromStores(14651).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj4 = { profile: null, children: null };
  let obj3 = stateFromStores(14651);
  obj4.profile = stateFromStores(11667).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};