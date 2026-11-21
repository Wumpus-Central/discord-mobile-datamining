// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import StartupProfilerDefault from "../modules/app_startup/StartupProfiler.tsx";
import NotificationPermissionUtil from "../modules/nuf/native/NotificationPermissionUtil.tsx";
import AccessibilityManagerDefault from "../modules/a11y/native/AccessibilityManager.tsx";
import SystemTelecomManagerDefault from "../modules/calls/native/SystemTelecomManager.tsx";
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

require = fn;
const AudioManagerStore = fn(9664);
const ConnectivityIndicatorStateStore = fn(14965);
const RequestReviewStore = fn(14977);
const HexagonCampaignPersistedStore = fn(15636);
const LocalPushNotificationStore = fn(14996);
const PromotionsStore = fn(9143);
const BitRateStore = fn(15296);
const ShareStore = fn(15637);
const PermissionVADStore = fn(15638);
const InteractionModalStore = fn(15639);
const MobileAppDatabaseManager = fn(8346);
const SubscriptionStore = fn(2178);
const AccessibilityStore = fn(4914);
const AnalyticsLogStore = fn(15640);
const PhoneStore = fn(7370);
const ICYMISessionStore = fn(15641);
const MemoryExperiment = fn(15643);
const jsx = fn(21).jsx;
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
    obj25 = stateFromStores(1378);
    const result = stateFromStores(13738).initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15654).terminate();
      const obj = closure_1_1(15654);
      closure_1_1(5922).terminate();
      const obj2 = closure_1_1(5922);
      closure_1_1(9209).terminate();
      const obj3 = closure_1_1(9209);
      closure_1_1(15769).terminate();
      const obj4 = closure_1_1(15769);
      stateFromStores(13738).cleanupRouteManager();
      const obj5 = stateFromStores(13738);
      closure_1_1(15796).terminate();
      const obj6 = closure_1_1(15796);
      closure_1_1(15783).terminate();
      const obj7 = closure_1_1(15783);
      closure_1_1(8221).terminate();
      const obj8 = closure_1_1(8221);
      closure_1_1(15669).terminate();
      const obj9 = closure_1_1(15669);
      closure_1_1(15789).terminate();
      const obj10 = closure_1_1(15789);
      closure_1_1(15791).terminate();
      const obj11 = closure_1_1(15791);
      closure_1_1(15792).terminate();
      const obj12 = closure_1_1(15792);
      closure_1_1(15795).terminate();
      const obj13 = closure_1_1(15795);
      closure_1_1(6454).terminate();
      const obj14 = closure_1_1(6454);
      closure_1_1(15664).terminate();
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
          const androidNotificationPermission = NotificationPermissionUtil.requestAndroidNotificationPermission();
          const tmp8Result = NotificationPermissionUtil;
        }
        return () => {
          closure_1_1(dependencyMap[50]).terminate();
        };
      }
    }
  }, items1);
  const effect2 = noop.useEffect(() => {
    TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
  }, []);
  const effect3 = noop.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  let obj2 = { profile: null, children: null };
  let obj = stateFromStores(504);
  obj2.profile = stateFromStores(11978).Profiles.App;
  let obj3 = { appEntryKey: "main", children: null };
  obj3.children = jsx(MainNavigatorDefault, {});
  obj2.children = jsx(AppContainerDefault, { appEntryKey: "main", children: null });
  return <tmp7 profile={null}>{null}</tmp7>;
}
