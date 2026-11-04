// === Module 16456: App ===

// Module 16456 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 6155 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6875 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 8039 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 8103 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8369 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8978 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10389 */;
import GPlayManagerDefault from "GPlayManager" /* 10756 */;
import StartupProfilerDefault from "StartupProfiler" /* 11755 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 15445 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 16256 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 16499 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 16505 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 16509 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 16510 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 16520 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 16522 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 16525 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 16618 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 16626 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 16629 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16632 */;
import SoundboardManagerDefault from "SoundboardManager" /* 16634 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 16638 */;
import ICYMIManagerDefault from "ICYMIManager" /* 16640 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 16641 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 16642 */;
import SessionAdManagerDefault from "SessionAdManager" /* 16644 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 16645 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 16647 */;
import AppContainerDefault from "AppContainer" /* 16649 */;
import MainNavigatorDefault from "MainNavigator" /* 18223 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 16457 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const AudioManagerStore = fn(9367);
const ConnectivityIndicatorStateStore = fn(15807);
const RequestReviewStore = fn(15817);
const HexagonCampaignPersistedStore = fn(16458);
const LocalPushNotificationStore = fn(15836);
const PromotionsStore = fn(9776);
const BitRateStore = fn(16117);
const ShareStore = fn(16459);
const PermissionVADStore = fn(16460);
const InteractionModalStore = fn(16461);
const MobileAppDatabaseManager = fn(7926);
const SubscriptionStore = fn(2181);
const AccessibilityStore = fn(5142);
const AnalyticsLogStore = fn(16462);
const PhoneStore = fn(7255);
const ICYMISessionStore = fn(16463);
const MemoryExperiment = fn(16465);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2123)(16466, dependencyMap.paths);
}
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
    obj25 = stateFromStores(1377);
    const result = stateFromStores(12255).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16509).terminate();
      const obj = closure_1_1(16509);
      closure_1_1(6155).terminate();
      const obj2 = closure_1_1(6155);
      closure_1_1(10756).terminate();
      const obj3 = closure_1_1(10756);
      closure_1_1(16618).terminate();
      const obj4 = closure_1_1(16618);
      stateFromStores(12255).cleanupRouteManager();
      const obj5 = stateFromStores(12255);
      closure_1_1(16645).terminate();
      const obj6 = closure_1_1(16645);
      closure_1_1(16632).terminate();
      const obj7 = closure_1_1(16632);
      closure_1_1(8978).terminate();
      const obj8 = closure_1_1(8978);
      closure_1_1(16525).terminate();
      const obj9 = closure_1_1(16525);
      closure_1_1(16638).terminate();
      const obj10 = closure_1_1(16638);
      closure_1_1(16640).terminate();
      const obj11 = closure_1_1(16640);
      closure_1_1(16641).terminate();
      const obj12 = closure_1_1(16641);
      closure_1_1(16644).terminate();
      const obj13 = closure_1_1(16644);
      closure_1_1(8039).terminate();
      const obj14 = closure_1_1(8039);
      closure_1_1(16520).terminate();
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
          const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
          const tmp4Result = NativePermissionManagerModuleDefault;
        }
        return () => {
          closure_1_1(dependencyMap[52]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(15791).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  const effect4 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj3 = { profile: null, children: null };
  let obj2 = stateFromStores(15791);
  obj3.profile = stateFromStores(11755).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
};