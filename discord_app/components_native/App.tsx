// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import c from "../../_runtime/00576_c.js";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import NativePermissionManagerModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import RouteManagerUtils from "../modules/routing/native/RouteManagerUtils.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
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
import _modDef16083 from "../../_runtime/metro/16083__.js";
import MainNavigatorDefault from "../modules/main_tabs_v2/native/MainNavigator.tsx";
import noop from "../../_runtime/metro/00019__.js";
import MobileNativeUpdateStore from "../modules/mobile_native_updater/MobileNativeUpdateStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(9187);
const ConnectivityIndicatorStateStore = fn(15259);
const RequestReviewStore = fn(15269);
const HexagonCampaignPersistedStore = fn(15905);
const LocalPushNotificationStore = fn(15288);
const PromotionsStore = fn(9551);
const BitRateStore = fn(15564);
const ShareStore = fn(15906);
const PermissionVADStore = fn(15907);
const InteractionModalStore = fn(15908);
const MobileAppDatabaseManager = fn(7752);
const SubscriptionStore = fn(2055);
const AccessibilityStore = fn(5005);
const AnalyticsLogStore = fn(15909);
const PhoneStore = fn(7071);
const ICYMISessionStore = fn(15910);
const MemoryExperiment = fn(15912);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1999)(15913, dependencyMap.paths);
}
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useManagers() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
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
          obj25 = PlatformUtils;
          const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
          return () => {
            closure_1_1(15953).terminate();
            const obj = closure_1_1(15953);
            closure_1_1(6006).terminate();
            const obj2 = closure_1_1(6006);
            closure_1_1(10500).terminate();
            const obj3 = closure_1_1(10500);
            closure_1_1(16052).terminate();
            const obj4 = closure_1_1(16052);
            closure_1_0(11773).cleanupRouteManager();
            const obj5 = closure_1_0(11773);
            closure_1_1(16079).terminate();
            const obj6 = closure_1_1(16079);
            closure_1_1(16066).terminate();
            const obj7 = closure_1_1(16066);
            closure_1_1(8792).terminate();
            const obj8 = closure_1_1(8792);
            closure_1_1(15968).terminate();
            const obj9 = closure_1_1(15968);
            closure_1_1(16072).terminate();
            const obj10 = closure_1_1(16072);
            closure_1_1(16074).terminate();
            const obj11 = closure_1_1(16074);
            closure_1_1(16075).terminate();
            const obj12 = closure_1_1(16075);
            closure_1_1(16078).terminate();
            const obj13 = closure_1_1(16078);
            closure_1_1(7862).terminate();
            const obj14 = closure_1_1(7862);
            closure_1_1(15963).terminate();
          };
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useManagers() {
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
        obj25 = PlatformUtils;
        const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
        return () => {
          closure_1_1(15953).terminate();
          const obj = closure_1_1(15953);
          closure_1_1(6006).terminate();
          const obj2 = closure_1_1(6006);
          closure_1_1(10500).terminate();
          const obj3 = closure_1_1(10500);
          closure_1_1(16052).terminate();
          const obj4 = closure_1_1(16052);
          closure_1_0(11773).cleanupRouteManager();
          const obj5 = closure_1_0(11773);
          closure_1_1(16079).terminate();
          const obj6 = closure_1_1(16079);
          closure_1_1(16066).terminate();
          const obj7 = closure_1_1(16066);
          closure_1_1(8792).terminate();
          const obj8 = closure_1_1(8792);
          closure_1_1(15968).terminate();
          const obj9 = closure_1_1(15968);
          closure_1_1(16072).terminate();
          const obj10 = closure_1_1(16072);
          closure_1_1(16074).terminate();
          const obj11 = closure_1_1(16074);
          closure_1_1(16075).terminate();
          const obj12 = closure_1_1(16075);
          closure_1_1(16078).terminate();
          const obj13 = closure_1_1(16078);
          closure_1_1(7862).terminate();
          const obj14 = closure_1_1(7862);
          closure_1_1(15963).terminate();
        };
      }, []);
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAuthenticated() {
      const cResult = stateFromStores(576).c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function s() {
          return AuthenticationStore.isAuthenticated();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function o() {
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
                const notificationAuthorization =
                  NativePermissionManagerModuleDefault.requestNotificationAuthorization();
                const tmp4Result = NativePermissionManagerModuleDefault;
              }
              return () => {
                closure_1_1(closure_1_2[54]).terminate();
              };
            }
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp9 = items1;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function f() {
          TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp12 = items2;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect1 = noop.useEffect(tmp11, tmp12);
      const tmpResult = stateFromStores(504);
    }
  : function useAuthenticated() {
      const items = [AuthenticationStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
      const items1 = [stateFromStores];
      const effect = noop.useEffect(() => {
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
              closure_1_1(closure_1_2[54]).terminate();
            };
          }
        }
      }, items1);
      const effect1 = noop.useEffect(() => {
        TTITrackerDefault.wasAuthenticated = AuthenticationStore.isAuthenticated();
      }, []);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelObfuscationPersistence() {
      const cResult = isChannelMetadataObfuscationEnabled(576).c(3);
      const obj = isChannelMetadataObfuscationEnabled(576);
      isChannelMetadataObfuscationEnabled =
        isChannelMetadataObfuscationEnabled(15244).useIsChannelMetadataObfuscationEnabled("App");
      if (cResult[0] !== isChannelMetadataObfuscationEnabled) {
        const fn = function n() {
          const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
        };
        const items = [isChannelMetadataObfuscationEnabled];
        cResult[0] = isChannelMetadataObfuscationEnabled;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp4 = items;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = noop.useEffect(tmp3, tmp4);
    }
  : function useChannelObfuscationPersistence() {
      isChannelMetadataObfuscationEnabled =
        isChannelMetadataObfuscationEnabled(15244).useIsChannelMetadataObfuscationEnabled("App");
      const items = [isChannelMetadataObfuscationEnabled];
      const effect = noop.useEffect(() => {
        const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
      }, items);
    };
const main = "main";
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function App() {
      const cResult = c.c(3);
      const renderApp = TTITrackerDefault.renderApp;
      renderApp.record();
      closure_7();
      closure_8();
      closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const renderAppEffect = TTITrackerDefault.renderAppEffect;
          return renderAppEffect.record();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp10 = items;
        tmp9 = fn;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const effect = noop.useEffect(tmp9, tmp10);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { profile: StartupProfiler.Profiles.App, children: null };
        const obj3 = { appEntryKey: main, children: null };
        const tmp4Result = StartupProfilerDefault;
        obj3.children = jsx(MainNavigatorDefault, {});
        obj2.children = jsx(_modDef16083, { appEntryKey: main, children: null });
        const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
        cResult[2] = tmp17;
        let tmp12 = tmp17;
        const tmp4Result2 = _modDef16083;
      } else {
        tmp12 = cResult[2];
      }
      return tmp12;
    }
  : function App() {
      const renderApp = TTITrackerDefault.renderApp;
      renderApp.record();
      closure_7();
      closure_8();
      closure_9();
      const effect = noop.useEffect(() => {
        const renderAppEffect = TTITrackerDefault.renderAppEffect;
        return renderAppEffect.record();
      }, []);
      const obj = { profile: StartupProfiler.Profiles.App, children: null };
      const obj2 = { appEntryKey: main, children: null };
      obj2.children = jsx(MainNavigatorDefault, {});
      obj.children = jsx(_modDef16083, { appEntryKey: main, children: null });
      return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
    };
