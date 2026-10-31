// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import NativePermissionManagerModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import StartupProfilerDefault from "../modules/app_startup/StartupProfiler.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import NativeFastConnectModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import AccessibilityManagerDefault from "../modules/a11y/native/AccessibilityManager.tsx";
import SystemTelecomManagerDefault from "../modules/calls/mobile/SystemTelecomManager.android.tsx";
import AccessibilityCallManagerDefault from "../modules/a11y/native/AccessibilityCallManager.tsx";
import NotificationTokenManagerDefault from "../modules/notifications/native/NotificationTokenManager.tsx";
import VoiceNotificationManagerDefault from "../modules/voice_calls/native/VoiceNotificationManager.android.tsx";
import UserSettingsProtoManagerDefault from "../modules/user_settings/UserSettingsProtoManager.tsx";
import NativeRPCServerManagerDefault from "../modules/rpc/native/server/NativeRPCServerManager.tsx";
import MobileVoiceOverlayLifecycleManagerDefault from "../modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../modules/activities/native/EmbeddedActivitiesNativeManager.tsx";
import FramesNativeManagerDefault from "../modules/frames/native/FramesNativeManager.tsx";
import MediaPlayerManagerDefault from "../modules/media/native/MediaPlayerManager.tsx";
import SoundboardManagerDefault from "../modules/soundboard/native/SoundboardManager.tsx";
import VoiceMessagesPlaybackManagerDefault from "../modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx";
import ICYMIManagerDefault from "../modules/icymi/ICYMIManager.tsx";
import GameRelationshipManagerDefault from "../modules/game_relationships/GameRelationshipManager.tsx";
import CollectiblesMarketingManagerDefault from "../modules/collectibles/CollectiblesMarketingManager.native.tsx";
import SessionAdManagerDefault from "../modules/analytics_sessions/SessionAdManager.tsx";
import TouchEventAnalyticsManagerDefault from "../modules/touch_analytics/TouchEventAnalyticsManager.android.tsx";
import LocalMessageCacheManagerDefault from "../modules/local_message_caching/LocalMessageCacheManager.native.tsx";
import AppContainerDefault from "AppContainer.tsx";
import MainNavigatorDefault from "../modules/main_tabs_v2/native/MainNavigator.tsx";
import noop from "../../_runtime/metro/00019__.js";
import MobileNativeUpdateStore from "../modules/mobile_native_updater/MobileNativeUpdateStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";

const require = fn;
const AudioManagerStore = fn(9222);
const ConnectivityIndicatorStateStore = fn(15573);
const RequestReviewStore = fn(15583);
const HexagonCampaignPersistedStore = fn(16222);
const LocalPushNotificationStore = fn(15602);
const PromotionsStore = fn(9626);
const BitRateStore = fn(15880);
const ShareStore = fn(16223);
const PermissionVADStore = fn(16224);
const InteractionModalStore = fn(16225);
const MobileAppDatabaseManager = fn(7786);
const SubscriptionStore = fn(2052);
const AccessibilityStore = fn(5015);
const AnalyticsLogStore = fn(16226);
const PhoneStore = fn(7109);
const ICYMISessionStore = fn(16227);
const MemoryExperiment = fn(16229);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1994)(16230, dependencyMap.paths);
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
    obj25 = stateFromStores(1375);
    const result = stateFromStores(12058).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(16270).terminate();
      const obj = closure_1_1(16270);
      closure_1_1(6020).terminate();
      const obj2 = closure_1_1(6020);
      closure_1_1(10578).terminate();
      const obj3 = closure_1_1(10578);
      closure_1_1(16371).terminate();
      const obj4 = closure_1_1(16371);
      stateFromStores(12058).cleanupRouteManager();
      const obj5 = stateFromStores(12058);
      closure_1_1(16398).terminate();
      const obj6 = closure_1_1(16398);
      closure_1_1(16385).terminate();
      const obj7 = closure_1_1(16385);
      closure_1_1(8837).terminate();
      const obj8 = closure_1_1(8837);
      closure_1_1(16285).terminate();
      const obj9 = closure_1_1(16285);
      closure_1_1(16391).terminate();
      const obj10 = closure_1_1(16391);
      closure_1_1(16393).terminate();
      const obj11 = closure_1_1(16393);
      closure_1_1(16394).terminate();
      const obj12 = closure_1_1(16394);
      closure_1_1(16397).terminate();
      const obj13 = closure_1_1(16397);
      closure_1_1(7899).terminate();
      const obj14 = closure_1_1(7899);
      closure_1_1(16280).terminate();
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(15558).useIsChannelMetadataObfuscationEnabled("App");
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
  let obj2 = stateFromStores(15558);
  obj3.profile = stateFromStores(11562).Profiles.App;
  let obj4 = { appEntryKey: "main", children: null };
  obj4.children = jsx(MainNavigatorDefault, {});
  obj3.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp9 profile={null}>{null}</tmp9>;
}
