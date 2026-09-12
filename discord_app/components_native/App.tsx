// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../modules/activities/native/EmbeddedActivitiesNativeManager.tsx";
import FramesNativeManagerDefault from "../modules/frames/native/FramesNativeManager.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import StartupProfilerDefault from "../modules/app_startup/StartupProfiler.tsx";
import NativeFastConnectModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
import AccessibilityManagerDefault from "../modules/a11y/native/AccessibilityManager.tsx";
import BackPressManagerDefault from "../modules/routing/native/BackPressManager.tsx";
import CallKitManagerDefault from "../modules/calls/mobile/CallKitManager.android.tsx";
import AccessibilityCallManagerDefault from "../modules/a11y/native/AccessibilityCallManager.tsx";
import NotificationTokenManagerDefault from "../modules/notifications/native/NotificationTokenManager.tsx";
import VoiceNotificationManagerDefault from "../modules/voice_calls/native/VoiceNotificationManager.android.tsx";
import UserSettingsProtoManagerDefault from "../modules/user_settings/UserSettingsProtoManager.tsx";
import NativeRPCServerManagerDefault from "../modules/rpc/native/server/NativeRPCServerManager.tsx";
import MobileVoiceOverlayLifecycleManagerDefault from "../modules/voice_overlay/native/MobileVoiceOverlayLifecycleManager.android.tsx";
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
const NativeModules = fn(17).NativeModules;
const AudioManagerStore = fn(9215);
const ConnectivityIndicatorStateStore = fn(13775);
const RequestReviewStore = fn(13784);
const LocalPushNotificationStore = fn(13804);
const PromotionsStore = fn(10793);
const BitRateStore = fn(14082);
const ShareStore = fn(14483);
const PermissionVADStore = fn(14484);
const InteractionModalStore = fn(14485);
const MobileAppDatabaseManager = fn(7746);
const SubscriptionStore = fn(4300);
const AccessibilityStore = fn(4628);
const AnalyticsLogStore = fn(14486);
const PhoneStore = fn(7044);
const ICYMISessionStore = fn(14487);
const MemoryExperiment = fn(14488);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1896)(14489, dependencyMap.paths);
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
    obj26 = stateFromStores(1150);
    const result = stateFromStores(12911).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(14530).terminate();
      const obj = closure_1_1(14530);
      closure_1_1(5042).terminate();
      const obj2 = closure_1_1(5042);
      closure_1_1(10836).terminate();
      const obj3 = closure_1_1(10836);
      closure_1_1(14616).terminate();
      const obj4 = closure_1_1(14616);
      stateFromStores(12911).cleanupRouteManager();
      const obj5 = stateFromStores(12911);
      closure_1_1(14636).terminate();
      const obj6 = closure_1_1(14636);
      closure_1_1(14624).terminate();
      const obj7 = closure_1_1(14624);
      closure_1_1(8381).terminate();
      const obj8 = closure_1_1(8381);
      closure_1_1(14545).terminate();
      const obj9 = closure_1_1(14545);
      closure_1_1(14528).terminate();
      const obj10 = closure_1_1(14528);
      closure_1_1(14630).terminate();
      const obj11 = closure_1_1(14630);
      closure_1_1(14632).terminate();
      const obj12 = closure_1_1(14632);
      closure_1_1(14633).terminate();
      const obj13 = closure_1_1(14633);
      closure_1_1(14635).terminate();
      const obj14 = closure_1_1(14635);
      closure_1_1(4777).terminate();
      const obj15 = closure_1_1(4777);
      closure_1_1(14541).terminate();
    };
  }, []);
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
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
  const isChannelMetadataObfuscationEnabled = stateFromStores(13757).useIsChannelMetadataObfuscationEnabled("App");
  closure_129_0 = isChannelMetadataObfuscationEnabled;
  const items2 = [isChannelMetadataObfuscationEnabled];
  const effect3 = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(stateFromStores);
  }, items2);
  let obj2 = stateFromStores(13757);
  const shouldUseAltGateway = stateFromStores(14640).useShouldUseAltGateway("App");
  closure_130_0 = shouldUseAltGateway;
  const items3 = [shouldUseAltGateway];
  const effect4 = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(stateFromStores);
  }, items3);
  const effect5 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  obj = { profile: null, children: null };
  let obj3 = stateFromStores(14640);
  obj.profile = stateFromStores(11662).Profiles.App;
  obj = { appEntryKey: "main", children: null };
  obj.children = jsx(MainNavigatorDefault, {});
  obj.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp11 appEntryKey="main">{null}</tmp11>;
}
