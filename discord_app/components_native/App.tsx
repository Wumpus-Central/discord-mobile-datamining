// === Module 13929: App ===

// Module 13929 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 4970 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5258 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5465 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6005 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7170 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7174 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7703 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8743 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8757 */;
import GPlayManagerDefault from "GPlayManager" /* 10160 */;
import StartupProfilerDefault from "StartupProfiler" /* 11013 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13165 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 13971 */;
import BackPressManagerDefault from "BackPressManager" /* 13977 */;
import CallKitManagerDefault from "CallKitManager" /* 13978 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 13979 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 13980 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 13990 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 13991 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 13994 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14065 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14073 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14075 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14079 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14081 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14082 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14083 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14084 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14085 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14087 */;
import AppContainerDefault from "AppContainer" /* 14091 */;
import MainNavigatorDefault from "MainNavigator" /* 15537 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 13930 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9090);
const ConnectivityIndicatorStateStore = fn(13214);
const RequestReviewStore = fn(13223);
const HexagonCampaignPersistedStore = fn(13931);
const LocalPushNotificationStore = fn(13244);
const PromotionsStore = fn(10117);
const BitRateStore = fn(13524);
const ShareStore = fn(13932);
const PermissionVADStore = fn(13933);
const InteractionModalStore = fn(13934);
const MobileAppDatabaseManager = fn(7052);
const SubscriptionStore = fn(4491);
const AccessibilityStore = fn(4821);
const AnalyticsLogStore = fn(13935);
const PhoneStore = fn(6357);
const ICYMISessionStore = fn(13936);
const MemoryExperiment = fn(13937);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1980)(13938, dependencyMap.paths);
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
    const result = stateFromStores(12280).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(13979).terminate();
      const obj = closure_1_1(13979);
      closure_1_1(5258).terminate();
      const obj2 = closure_1_1(5258);
      closure_1_1(10160).terminate();
      const obj3 = closure_1_1(10160);
      closure_1_1(14065).terminate();
      const obj4 = closure_1_1(14065);
      stateFromStores(12280).cleanupRouteManager();
      const obj5 = stateFromStores(12280);
      closure_1_1(14085).terminate();
      const obj6 = closure_1_1(14085);
      closure_1_1(14073).terminate();
      const obj7 = closure_1_1(14073);
      closure_1_1(7703).terminate();
      const obj8 = closure_1_1(7703);
      closure_1_1(13994).terminate();
      const obj9 = closure_1_1(13994);
      closure_1_1(13977).terminate();
      const obj10 = closure_1_1(13977);
      closure_1_1(14079).terminate();
      const obj11 = closure_1_1(14079);
      closure_1_1(14081).terminate();
      const obj12 = closure_1_1(14081);
      closure_1_1(14082).terminate();
      const obj13 = closure_1_1(14082);
      closure_1_1(14084).terminate();
      const obj14 = closure_1_1(14084);
      closure_1_1(4970).terminate();
      const obj15 = closure_1_1(4970);
      closure_1_1(13990).terminate();
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
          closure_1_1(dependencyMap[54]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  let obj = stateFromStores(504);
  const isChannelMetadataObfuscationEnabled = stateFromStores(13196).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13196);
  const shouldUseAltGateway = stateFromStores(14089).useShouldUseAltGateway("App");
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
  let obj3 = stateFromStores(14089);
  obj4.profile = stateFromStores(11013).Profiles.App;
  let obj5 = { appEntryKey: "main", children: null };
  obj5.children = jsx(MainNavigatorDefault, {});
  obj4.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 profile={null}>{null}</tmp11>;
};