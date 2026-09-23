// === Module 14759: App ===

// Module 14759 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4968 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5255 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5462 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6920 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 8083 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 8087 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8609 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9641 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9655 */;
import GPlayManagerDefault from "GPlayManager" /* 11050 */;
import StartupProfilerDefault from "StartupProfiler" /* 11864 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13995 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14800 */;
import BackPressManagerDefault from "BackPressManager" /* 14806 */;
import CallKitManagerDefault from "CallKitManager" /* 14807 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14808 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14809 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14819 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14820 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14823 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14894 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14902 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14904 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14908 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14910 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14911 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14912 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14913 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14914 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14916 */;
import AppContainerDefault from "AppContainer" /* 14920 */;
import MainNavigatorDefault from "MainNavigator" /* 16335 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14760 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9987);
const ConnectivityIndicatorStateStore = fn(14044);
const RequestReviewStore = fn(14053);
const LocalPushNotificationStore = fn(14074);
const PromotionsStore = fn(11007);
const BitRateStore = fn(14354);
const ShareStore = fn(14761);
const PermissionVADStore = fn(14762);
const InteractionModalStore = fn(14763);
const MobileAppDatabaseManager = fn(7965);
const SubscriptionStore = fn(4487);
const AccessibilityStore = fn(4819);
const AnalyticsLogStore = fn(14764);
const PhoneStore = fn(7272);
const ICYMISessionStore = fn(14765);
const MemoryExperiment = fn(14766);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(14767, dependencyMap.paths);
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
    const result = stateFromStores(13121).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14808).terminate();
      const obj = closure_1_1(14808);
      closure_1_1(5255).terminate();
      const obj2 = closure_1_1(5255);
      closure_1_1(11050).terminate();
      const obj3 = closure_1_1(11050);
      closure_1_1(14894).terminate();
      const obj4 = closure_1_1(14894);
      stateFromStores(13121).cleanupRouteManager();
      const obj5 = stateFromStores(13121);
      closure_1_1(14914).terminate();
      const obj6 = closure_1_1(14914);
      closure_1_1(14902).terminate();
      const obj7 = closure_1_1(14902);
      closure_1_1(8609).terminate();
      const obj8 = closure_1_1(8609);
      closure_1_1(14823).terminate();
      const obj9 = closure_1_1(14823);
      closure_1_1(14806).terminate();
      const obj10 = closure_1_1(14806);
      closure_1_1(14908).terminate();
      const obj11 = closure_1_1(14908);
      closure_1_1(14910).terminate();
      const obj12 = closure_1_1(14910);
      closure_1_1(14911).terminate();
      const obj13 = closure_1_1(14911);
      closure_1_1(14913).terminate();
      const obj14 = closure_1_1(14913);
      closure_1_1(4968).terminate();
      const obj15 = closure_1_1(4968);
      closure_1_1(14819).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(14026).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(14026);
  const shouldUseAltGateway = stateFromStores(14918).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14918);
  obj4.profile = stateFromStores(11864).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};