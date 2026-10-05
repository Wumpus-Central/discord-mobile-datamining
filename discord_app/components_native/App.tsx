// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import c from "../../_runtime/00576_c.js";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import NativePermissionManagerModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import FramesNativeManagerDefault from "../modules/frames/native/FramesNativeManager.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../modules/activities/native/EmbeddedActivitiesNativeManager.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
import RouteManagerUtils from "../modules/routing/native/RouteManagerUtils.tsx";
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
import _modDef14396 from "../../_runtime/metro/14396__.js";
import MainNavigatorDefault from "../modules/main_tabs_v2/native/MainNavigator.tsx";
import noop from "../../_runtime/metro/00019__.js";
import MobileNativeUpdateStore from "../modules/mobile_native_updater/MobileNativeUpdateStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(9303);
const ConnectivityIndicatorStateStore = fn(13497);
const RequestReviewStore = fn(13507);
const HexagonCampaignPersistedStore = fn(14159);
const LocalPushNotificationStore = fn(13528);
const PromotionsStore = fn(10396);
const BitRateStore = fn(13813);
const ShareStore = fn(14160);
const PermissionVADStore = fn(14161);
const InteractionModalStore = fn(14162);
const MobileAppDatabaseManager = fn(7128);
const SubscriptionStore = fn(4534);
const AccessibilityStore = fn(4879);
const AnalyticsLogStore = fn(14163);
const PhoneStore = fn(6430);
const ICYMISessionStore = fn(14164);
const MemoryExperiment = fn(14166);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(1987)(14167, dependencyMap.paths);
}
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
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
          obj26 = PlatformUtils;
          const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
          return () => {
            closure_1_1(14282).terminate();
            const obj = closure_1_1(14282);
            closure_1_1(5769).terminate();
            const obj2 = closure_1_1(5769);
            closure_1_1(10440).terminate();
            const obj3 = closure_1_1(10440);
            closure_1_1(14370).terminate();
            const obj4 = closure_1_1(14370);
            closure_1_0(12550).cleanupRouteManager();
            const obj5 = closure_1_0(12550);
            closure_1_1(14390).terminate();
            const obj6 = closure_1_1(14390);
            closure_1_1(14378).terminate();
            const obj7 = closure_1_1(14378);
            closure_1_1(7937).terminate();
            const obj8 = closure_1_1(7937);
            closure_1_1(14297).terminate();
            const obj9 = closure_1_1(14297);
            closure_1_1(14280).terminate();
            const obj10 = closure_1_1(14280);
            closure_1_1(14384).terminate();
            const obj11 = closure_1_1(14384);
            closure_1_1(14386).terminate();
            const obj12 = closure_1_1(14386);
            closure_1_1(14387).terminate();
            const obj13 = closure_1_1(14387);
            closure_1_1(14389).terminate();
            const obj14 = closure_1_1(14389);
            closure_1_1(5031).terminate();
            const obj15 = closure_1_1(5031);
            closure_1_1(14293).terminate();
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
  : () => {
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
        obj26 = PlatformUtils;
        const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
        return () => {
          closure_1_1(14282).terminate();
          const obj = closure_1_1(14282);
          closure_1_1(5769).terminate();
          const obj2 = closure_1_1(5769);
          closure_1_1(10440).terminate();
          const obj3 = closure_1_1(10440);
          closure_1_1(14370).terminate();
          const obj4 = closure_1_1(14370);
          closure_1_0(12550).cleanupRouteManager();
          const obj5 = closure_1_0(12550);
          closure_1_1(14390).terminate();
          const obj6 = closure_1_1(14390);
          closure_1_1(14378).terminate();
          const obj7 = closure_1_1(14378);
          closure_1_1(7937).terminate();
          const obj8 = closure_1_1(7937);
          closure_1_1(14297).terminate();
          const obj9 = closure_1_1(14297);
          closure_1_1(14280).terminate();
          const obj10 = closure_1_1(14280);
          closure_1_1(14384).terminate();
          const obj11 = closure_1_1(14384);
          closure_1_1(14386).terminate();
          const obj12 = closure_1_1(14386);
          closure_1_1(14387).terminate();
          const obj13 = closure_1_1(14387);
          closure_1_1(14389).terminate();
          const obj14 = closure_1_1(14389);
          closure_1_1(5031).terminate();
          const obj15 = closure_1_1(5031);
          closure_1_1(14293).terminate();
        };
      }, []);
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function o() {
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
        const fn2 = function s() {
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
                closure_1_1(closure_1_2[55]).terminate();
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
  : () => {
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
              closure_1_1(closure_1_2[55]).terminate();
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
  ? () => {
      const cResult = isChannelMetadataObfuscationEnabled(576).c(3);
      const obj = isChannelMetadataObfuscationEnabled(576);
      isChannelMetadataObfuscationEnabled =
        isChannelMetadataObfuscationEnabled(13479).useIsChannelMetadataObfuscationEnabled("App");
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
  : () => {
      isChannelMetadataObfuscationEnabled =
        isChannelMetadataObfuscationEnabled(13479).useIsChannelMetadataObfuscationEnabled("App");
      const items = [isChannelMetadataObfuscationEnabled];
      const effect = noop.useEffect(() => {
        const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = shouldUseAltGateway(576).c(3);
      const obj = shouldUseAltGateway(576);
      shouldUseAltGateway = shouldUseAltGateway(14394).useShouldUseAltGateway("App");
      if (cResult[0] !== shouldUseAltGateway) {
        const fn = function n() {
          NativeFastConnectModuleDefault.setUseAltGateway(shouldUseAltGateway);
        };
        const items = [shouldUseAltGateway];
        cResult[0] = shouldUseAltGateway;
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
  : () => {
      shouldUseAltGateway = shouldUseAltGateway(14394).useShouldUseAltGateway("App");
      const items = [shouldUseAltGateway];
      const effect = noop.useEffect(() => {
        NativeFastConnectModuleDefault.setUseAltGateway(shouldUseAltGateway);
      }, items);
    };
const main = "main";
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const renderApp = TTITrackerDefault.renderApp;
      renderApp.record();
      closure_7();
      closure_8();
      closure_9();
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const renderAppEffect = TTITrackerDefault.renderAppEffect;
          return renderAppEffect.record();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp10 = fn;
        tmp11 = items;
      } else {
        [tmp10, tmp11] = cResult;
      }
      const effect = noop.useEffect(tmp10, tmp11);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { profile: StartupProfiler.Profiles.App, children: null };
        const obj3 = { appEntryKey: main, children: null };
        const tmp4Result = StartupProfilerDefault;
        obj3.children = jsx(MainNavigatorDefault, {});
        obj2.children = jsx(_modDef14396, { appEntryKey: main, children: null });
        const tmp18 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
        cResult[2] = tmp18;
        let tmp13 = tmp18;
        const tmp4Result2 = _modDef14396;
      } else {
        tmp13 = cResult[2];
      }
      return tmp13;
    }
  : () => {
      const renderApp = TTITrackerDefault.renderApp;
      renderApp.record();
      closure_7();
      closure_8();
      closure_9();
      closure_10();
      const effect = noop.useEffect(() => {
        const renderAppEffect = TTITrackerDefault.renderAppEffect;
        return renderAppEffect.record();
      }, []);
      const obj = { profile: StartupProfiler.Profiles.App, children: null };
      const obj2 = { appEntryKey: main, children: null };
      obj2.children = jsx(MainNavigatorDefault, {});
      obj.children = jsx(_modDef14396, { appEntryKey: main, children: null });
      return <tmp7 profile={StartupProfiler.Profiles.App}>{null}</tmp7>;
    };
