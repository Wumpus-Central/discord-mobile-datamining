// === Module 14667: App ===

// Module 14667 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4897 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5170 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5371 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7996 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8000 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8533 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9561 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9575 */;
import GPlayManagerDefault from "GPlayManager" /* 10967 */;
import StartupProfilerDefault from "StartupProfiler" /* 11782 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13896 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14708 */;
import BackPressManagerDefault from "BackPressManager" /* 14714 */;
import CallKitManagerDefault from "CallKitManager" /* 14715 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14716 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14717 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14727 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14728 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14731 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14802 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14810 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14812 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14816 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14818 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14819 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14820 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14821 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14822 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14824 */;
import AppContainerDefault from "AppContainer" /* 14828 */;
import MainNavigatorDefault from "MainNavigator" /* 16265 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14668 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9907);
const ConnectivityIndicatorStateStore = fn(13945);
const RequestReviewStore = fn(13954);
const LocalPushNotificationStore = fn(13979);
const PromotionsStore = fn(10924);
const BitRateStore = fn(14259);
const ShareStore = fn(14669);
const PermissionVADStore = fn(14670);
const InteractionModalStore = fn(14671);
const MobileAppDatabaseManager = fn(7878);
const SubscriptionStore = fn(4420);
const AccessibilityStore = fn(4748);
const AnalyticsLogStore = fn(14672);
const PhoneStore = fn(7181);
const ICYMISessionStore = fn(14673);
const MemoryExperiment = fn(14674);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14675, dependencyMap.paths);
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
    const result = stateFromStores(13033).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14716).terminate();
      const obj = closure_1_1(14716);
      closure_1_1(5170).terminate();
      const obj2 = closure_1_1(5170);
      closure_1_1(10967).terminate();
      const obj3 = closure_1_1(10967);
      closure_1_1(14802).terminate();
      const obj4 = closure_1_1(14802);
      stateFromStores(13033).cleanupRouteManager();
      const obj5 = stateFromStores(13033);
      closure_1_1(14822).terminate();
      const obj6 = closure_1_1(14822);
      closure_1_1(14810).terminate();
      const obj7 = closure_1_1(14810);
      closure_1_1(8533).terminate();
      const obj8 = closure_1_1(8533);
      closure_1_1(14731).terminate();
      const obj9 = closure_1_1(14731);
      closure_1_1(14714).terminate();
      const obj10 = closure_1_1(14714);
      closure_1_1(14816).terminate();
      const obj11 = closure_1_1(14816);
      closure_1_1(14818).terminate();
      const obj12 = closure_1_1(14818);
      closure_1_1(14819).terminate();
      const obj13 = closure_1_1(14819);
      closure_1_1(14821).terminate();
      const obj14 = closure_1_1(14821);
      closure_1_1(4897).terminate();
      const obj15 = closure_1_1(4897);
      closure_1_1(14727).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13927).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13927);
  const shouldUseAltGateway = stateFromStores(14826).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14826);
  obj4.profile = stateFromStores(11782).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};