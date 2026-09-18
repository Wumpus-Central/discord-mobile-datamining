// === Module 14612: App ===

// Module 14612 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4863 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5128 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5329 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6785 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7958 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7962 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8495 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9753 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9816 */;
import GPlayManagerDefault from "GPlayManager" /* 10951 */;
import StartupProfilerDefault from "StartupProfiler" /* 11773 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13841 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14653 */;
import BackPressManagerDefault from "BackPressManager" /* 14659 */;
import CallKitManagerDefault from "CallKitManager" /* 14660 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14661 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14662 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14672 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14673 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14676 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14748 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14756 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14758 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14762 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14764 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14765 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14766 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14767 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14768 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14770 */;
import AppContainerDefault from "AppContainer" /* 14774 */;
import MainNavigatorDefault from "MainNavigator" /* 16189 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14613 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9324);
const ConnectivityIndicatorStateStore = fn(13890);
const RequestReviewStore = fn(13899);
const LocalPushNotificationStore = fn(13924);
const PromotionsStore = fn(10908);
const BitRateStore = fn(14204);
const ShareStore = fn(14614);
const PermissionVADStore = fn(14615);
const InteractionModalStore = fn(14616);
const MobileAppDatabaseManager = fn(7840);
const SubscriptionStore = fn(4386);
const AccessibilityStore = fn(4714);
const AnalyticsLogStore = fn(14617);
const PhoneStore = fn(7137);
const ICYMISessionStore = fn(14618);
const MemoryExperiment = fn(14619);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1897)(14620, dependencyMap.paths);
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
    const result = stateFromStores(13024).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14661).terminate();
      const obj = closure_1_1(14661);
      closure_1_1(5128).terminate();
      const obj2 = closure_1_1(5128);
      closure_1_1(10951).terminate();
      const obj3 = closure_1_1(10951);
      closure_1_1(14748).terminate();
      const obj4 = closure_1_1(14748);
      stateFromStores(13024).cleanupRouteManager();
      const obj5 = stateFromStores(13024);
      closure_1_1(14768).terminate();
      const obj6 = closure_1_1(14768);
      closure_1_1(14756).terminate();
      const obj7 = closure_1_1(14756);
      closure_1_1(8495).terminate();
      const obj8 = closure_1_1(8495);
      closure_1_1(14676).terminate();
      const obj9 = closure_1_1(14676);
      closure_1_1(14659).terminate();
      const obj10 = closure_1_1(14659);
      closure_1_1(14762).terminate();
      const obj11 = closure_1_1(14762);
      closure_1_1(14764).terminate();
      const obj12 = closure_1_1(14764);
      closure_1_1(14765).terminate();
      const obj13 = closure_1_1(14765);
      closure_1_1(14767).terminate();
      const obj14 = closure_1_1(14767);
      closure_1_1(4863).terminate();
      const obj15 = closure_1_1(4863);
      closure_1_1(14672).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13872).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13872);
  const shouldUseAltGateway = stateFromStores(14772).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14772);
  obj4.profile = stateFromStores(11773).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};