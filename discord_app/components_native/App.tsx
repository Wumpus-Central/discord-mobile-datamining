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
}
