// === Module 14517: App ===

// Module 14517 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4781 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5046 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5247 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6703 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7876 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7880 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8412 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9669 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9722 */;
import GPlayManagerDefault from "GPlayManager" /* 10857 */;
import StartupProfilerDefault from "StartupProfiler" /* 11683 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13749 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14558 */;
import BackPressManagerDefault from "BackPressManager" /* 14564 */;
import CallKitManagerDefault from "CallKitManager" /* 14565 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14566 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14567 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14577 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14578 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14581 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14653 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14661 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14663 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14667 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14669 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14670 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14671 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14672 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14673 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14675 */;
import AppContainerDefault from "AppContainer" /* 14679 */;
import MainNavigatorDefault from "MainNavigator" /* 16092 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14518 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9240);
const ConnectivityIndicatorStateStore = fn(13798);
const RequestReviewStore = fn(13807);
const LocalPushNotificationStore = fn(13831);
const PromotionsStore = fn(10814);
const BitRateStore = fn(14109);
const ShareStore = fn(14519);
const PermissionVADStore = fn(14520);
const InteractionModalStore = fn(14521);
const MobileAppDatabaseManager = fn(7758);
const SubscriptionStore = fn(4303);
const AccessibilityStore = fn(4632);
const AnalyticsLogStore = fn(14522);
const PhoneStore = fn(7055);
const ICYMISessionStore = fn(14523);
const MemoryExperiment = fn(14524);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1897)(14525, dependencyMap.paths);
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
    const result = stateFromStores(12933).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14566).terminate();
      const obj = closure_1_1(14566);
      closure_1_1(5046).terminate();
      const obj2 = closure_1_1(5046);
      closure_1_1(10857).terminate();
      const obj3 = closure_1_1(10857);
      closure_1_1(14653).terminate();
      const obj4 = closure_1_1(14653);
      stateFromStores(12933).cleanupRouteManager();
      const obj5 = stateFromStores(12933);
      closure_1_1(14673).terminate();
      const obj6 = closure_1_1(14673);
      closure_1_1(14661).terminate();
      const obj7 = closure_1_1(14661);
      closure_1_1(8412).terminate();
      const obj8 = closure_1_1(8412);
      closure_1_1(14581).terminate();
      const obj9 = closure_1_1(14581);
      closure_1_1(14564).terminate();
      const obj10 = closure_1_1(14564);
      closure_1_1(14667).terminate();
      const obj11 = closure_1_1(14667);
      closure_1_1(14669).terminate();
      const obj12 = closure_1_1(14669);
      closure_1_1(14670).terminate();
      const obj13 = closure_1_1(14670);
      closure_1_1(14672).terminate();
      const obj14 = closure_1_1(14672);
      closure_1_1(4781).terminate();
      const obj15 = closure_1_1(4781);
      closure_1_1(14577).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13780).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13780);
  const shouldUseAltGateway = stateFromStores(14677).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14677);
  obj4.profile = stateFromStores(11683).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};