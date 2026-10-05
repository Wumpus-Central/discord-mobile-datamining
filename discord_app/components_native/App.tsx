// discord_app/components_native/App.tsx
import TTITrackerDefault from "../modules/tti_analytics/TTITracker.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import react2 from "../../_runtime/00576_react.js";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import asyncRequire from "../../_runtime/01987_asyncRequire.js";
import VoiceEngineStreamingManagerDefault from "../modules/go_live/native/VoiceEngineStreamingManager.tsx";
import AccessibilityFocusLockManagerDefault from "../modules/a11y/native/AccessibilityFocusLockManager.tsx";
import AuthenticationActionCreatorsDefault from "../actions/AuthenticationActionCreators.tsx";
import ForegroundServiceManagerDefault from "../modules/foreground_service/mobile/ForegroundServiceManager.android.tsx";
import SentMessageIntentsHandlerDefault from "../modules/messages/SentMessageIntentsHandler.android.tsx";
import react_nativeDefault from "../../discord_common/js/packages/rtn-codegen/js/NativePermissionManagerModule.tsx";
import IosImageTypesManagerDefault from "../modules/media/native/IosImageTypesManager.tsx";
import MediaPlayerMuteManagerDefault from "../modules/media_viewer/native/MediaPlayerMuteManager.tsx";
import FramesNativeManagerDefault from "../modules/frames/native/FramesNativeManager.tsx";
import EmbeddedActivitiesNativeManagerDefault from "../modules/activities/native/EmbeddedActivitiesNativeManager.tsx";
import GPlayManagerDefault from "../modules/gplay/native/GPlayManager.android.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
import RouteManagerUtils from "../modules/routing/native/RouteManagerUtils.tsx";
import react_nativeDefault2 from "../../discord_common/js/packages/rtn-codegen/js/NativeFastConnectModule.tsx";
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
import react from "../../_runtime/00019_react.js";
import MobileNativeUpdateStore from "../modules/mobile_native_updater/MobileNativeUpdateStore.tsx";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import AudioManagerStore from "../modules/voice_calls/native/AudioManagerStore.android.tsx";
import ConnectivityIndicatorStateStore from "../modules/connectivity/native/ConnectivityIndicatorStateStore.tsx";
import RequestReviewStore from "../modules/feedback/native/RequestReviewStore.tsx";
import HexagonCampaignPersistedStore from "../modules/hexagon_campaign/HexagonCampaignPersistedStore.tsx";
import LocalPushNotificationStore from "../modules/local_push_notification/native/LocalPushNotificationStore.tsx";
import PromotionsStore from "../modules/premium/promotions/PromotionsStore.tsx";
import BitRateStore from "../stores/BitRateStore.tsx";
import ShareStore from "../stores/native/ShareStore.tsx";
import PermissionVADStore from "../stores/PermissionVADStore.tsx";
import InteractionModalStore from "../modules/interaction_components/InteractionModalStore.tsx";
import MobileAppDatabaseManager from "../modules/app_database/managers/MobileAppDatabaseManager.tsx";
import SubscriptionStore from "../stores/billing/SubscriptionStore.tsx";
import AccessibilityStore from "../modules/a11y/AccessibilityStore.tsx";
import AnalyticsLogStore from "../modules/devtools/AnalyticsLogStore.tsx";
import PhoneStore from "../modules/phone/PhoneStore.tsx";
import ICYMISessionStore from "../modules/icymi/ICYMISessionStore.tsx";
import MemoryExperiment from "../modules/memory/MemoryExperiment.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const StartupProfilerDefault = StartupProfiler;

const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(14167, dependencyMap.paths);
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          let obj = AccessibilityManagerDefault;
          obj.init();
          let obj2 = AccessibilityFocusLockManagerDefault;
          obj2.initialize();
          let obj3 = BackPressManagerDefault;
          obj3.initialize();
          let obj4 = CallKitManagerDefault;
          obj4.initialize();
          let obj5 = AccessibilityCallManagerDefault;
          obj5.initialize();
          let obj6 = NotificationTokenManagerDefault;
          obj6.initialize();
          let obj7 = ForegroundServiceManagerDefault;
          obj7.initialize();
          let obj8 = VoiceNotificationManagerDefault;
          obj8.initialize();
          let obj9 = SentMessageIntentsHandlerDefault;
          obj9.init();
          let obj10 = UserSettingsProtoManagerDefault;
          obj10.init();
          let obj11 = NativeRPCServerManagerDefault;
          obj11.init();
          let obj12 = GPlayManagerDefault;
          obj12.initialize();
          let obj13 = MobileVoiceOverlayLifecycleManagerDefault;
          obj13.initialize();
          let obj14 = EmbeddedActivitiesNativeManagerDefault;
          obj14.initialize();
          let obj15 = FramesNativeManagerDefault;
          obj15.initialize();
          let obj16 = MediaPlayerMuteManagerDefault;
          obj16.initialize();
          const obj17 = MediaPlayerManagerDefault;
          obj17.initialize();
          const obj18 = SoundboardManagerDefault;
          obj18.initialize();
          const obj19 = VoiceMessagesPlaybackManagerDefault;
          obj19.initialize();
          MobileNativeUpdateStore.ensureInitialized();
          const obj20 = ICYMIManagerDefault;
          obj20.initialize();
          const obj21 = GameRelationshipManagerDefault;
          obj21.initialize();
          const obj22 = CollectiblesMarketingManagerDefault;
          obj22.initialize();
          const obj23 = SessionAdManagerDefault;
          obj23.initialize();
          const obj24 = VoiceEngineStreamingManagerDefault;
          obj24.initialize();
          const obj25 = TouchEventAnalyticsManagerDefault;
          obj25.initialize();
          const obj26 = PlatformUtils;
          if (obj26.isIOS()) {
            const tmpResult = IosImageTypesManagerDefault;
            tmpResult.initialize();
          }
          const tmp29Result = RouteManagerUtils;
          const result = tmp29Result.initializeRouteManagerIfNeeded();
          return () => {
            const obj = closure_1_1(closure_1_2[29]);
            obj.terminate();
            const obj2 = closure_1_1(closure_1_2[26]);
            obj2.terminate();
            const obj3 = closure_1_1(closure_1_2[36]);
            obj3.terminate();
            const obj4 = closure_1_1(closure_1_2[37]);
            obj4.terminate();
            const obj5 = closure_1_0(closure_1_2[52]);
            obj5.cleanupRouteManager();
            const obj6 = closure_1_1(closure_1_2[49]);
            obj6.terminate();
            const obj7 = closure_1_1(closure_1_2[41]);
            obj7.terminate();
            const obj8 = closure_1_1(closure_1_2[40]);
            obj8.terminate();
            const obj9 = closure_1_1(closure_1_2[35]);
            obj9.terminate();
            const obj10 = closure_1_1(closure_1_2[27]);
            obj10.terminate();
            const obj11 = closure_1_1(closure_1_2[43]);
            obj11.terminate();
            const obj12 = closure_1_1(closure_1_2[44]);
            obj12.terminate();
            const obj13 = closure_1_1(closure_1_2[45]);
            obj13.terminate();
            const obj14 = closure_1_1(closure_1_2[47]);
            obj14.terminate();
            const obj15 = closure_1_1(closure_1_2[48]);
            obj15.terminate();
            const obj16 = closure_1_1(closure_1_2[32]);
            obj16.terminate();
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
      const effect = react.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = react.useEffect(() => {
        let obj = AccessibilityManagerDefault;
        obj.init();
        let obj2 = AccessibilityFocusLockManagerDefault;
        obj2.initialize();
        let obj3 = BackPressManagerDefault;
        obj3.initialize();
        let obj4 = CallKitManagerDefault;
        obj4.initialize();
        let obj5 = AccessibilityCallManagerDefault;
        obj5.initialize();
        let obj6 = NotificationTokenManagerDefault;
        obj6.initialize();
        let obj7 = ForegroundServiceManagerDefault;
        obj7.initialize();
        let obj8 = VoiceNotificationManagerDefault;
        obj8.initialize();
        let obj9 = SentMessageIntentsHandlerDefault;
        obj9.init();
        let obj10 = UserSettingsProtoManagerDefault;
        obj10.init();
        let obj11 = NativeRPCServerManagerDefault;
        obj11.init();
        let obj12 = GPlayManagerDefault;
        obj12.initialize();
        let obj13 = MobileVoiceOverlayLifecycleManagerDefault;
        obj13.initialize();
        let obj14 = EmbeddedActivitiesNativeManagerDefault;
        obj14.initialize();
        let obj15 = FramesNativeManagerDefault;
        obj15.initialize();
        let obj16 = MediaPlayerMuteManagerDefault;
        obj16.initialize();
        const obj17 = MediaPlayerManagerDefault;
        obj17.initialize();
        const obj18 = SoundboardManagerDefault;
        obj18.initialize();
        const obj19 = VoiceMessagesPlaybackManagerDefault;
        obj19.initialize();
        MobileNativeUpdateStore.ensureInitialized();
        const obj20 = ICYMIManagerDefault;
        obj20.initialize();
        const obj21 = GameRelationshipManagerDefault;
        obj21.initialize();
        const obj22 = CollectiblesMarketingManagerDefault;
        obj22.initialize();
        const obj23 = SessionAdManagerDefault;
        obj23.initialize();
        const obj24 = VoiceEngineStreamingManagerDefault;
        obj24.initialize();
        const obj25 = TouchEventAnalyticsManagerDefault;
        obj25.initialize();
        const obj26 = PlatformUtils;
        if (obj26.isIOS()) {
          const tmpResult = IosImageTypesManagerDefault;
          tmpResult.initialize();
        }
        const tmp29Result = RouteManagerUtils;
        const result = tmp29Result.initializeRouteManagerIfNeeded();
        return () => {
          const obj = closure_1_1(closure_1_2[29]);
          obj.terminate();
          const obj2 = closure_1_1(closure_1_2[26]);
          obj2.terminate();
          const obj3 = closure_1_1(closure_1_2[36]);
          obj3.terminate();
          const obj4 = closure_1_1(closure_1_2[37]);
          obj4.terminate();
          const obj5 = closure_1_0(closure_1_2[52]);
          obj5.cleanupRouteManager();
          const obj6 = closure_1_1(closure_1_2[49]);
          obj6.terminate();
          const obj7 = closure_1_1(closure_1_2[41]);
          obj7.terminate();
          const obj8 = closure_1_1(closure_1_2[40]);
          obj8.terminate();
          const obj9 = closure_1_1(closure_1_2[35]);
          obj9.terminate();
          const obj10 = closure_1_1(closure_1_2[27]);
          obj10.terminate();
          const obj11 = closure_1_1(closure_1_2[43]);
          obj11.terminate();
          const obj12 = closure_1_1(closure_1_2[44]);
          obj12.terminate();
          const obj13 = closure_1_1(closure_1_2[45]);
          obj13.terminate();
          const obj14 = closure_1_1(closure_1_2[47]);
          obj14.terminate();
          const obj15 = closure_1_1(closure_1_2[48]);
          obj15.terminate();
          const obj16 = closure_1_1(closure_1_2[32]);
          obj16.terminate();
        };
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let stateFromStores;
      let tmp11;
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let tmp = stateFromStores;
      let obj = stateFromStores(576);
      const cResult = obj.c(7);
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
      const tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function s() {
          if (stateFromStores) {
            const token = AuthenticationStore.getToken();
            if (null == token) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error = new Error("Authenticated without a token");
              throw error;
            } else {
              let obj = AuthenticationActionCreatorsDefault;
              obj.startSession(token);
              const obj2 = LocalMessageCacheManagerDefault;
              obj2.initialize();
              const obj3 = PlatformUtils;
              if (obj3.isAndroid()) {
                const tmp5Result = react_nativeDefault;
                const notificationAuthorization = tmp5Result.requestNotificationAuthorization();
              }
              return () => {
                const obj = closure_1_1(closure_1_2[55]);
                obj.terminate();
              };
            }
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp9 = items1;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function f() {
          const tmp = TTITrackerDefault;
          tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        tmp12 = items2;
        tmp11 = fn3;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const effect1 = react.useEffect(tmp11, tmp12);
    }
  : () => {
      let stateFromStores;
      let obj = stateFromStores(504);
      const items = [AuthenticationStore];
      stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
      const items1 = [stateFromStores];
      const effect = react.useEffect(function () {
        if (stateFromStores) {
          const token = AuthenticationStore.getToken();
          if (null == token) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Authenticated without a token");
            throw error;
          } else {
            let obj = AuthenticationActionCreatorsDefault;
            obj.startSession(token);
            const obj2 = LocalMessageCacheManagerDefault;
            obj2.initialize();
            const obj3 = PlatformUtils;
            if (obj3.isAndroid()) {
              const tmp5Result = react_nativeDefault;
              const notificationAuthorization = tmp5Result.requestNotificationAuthorization();
            }
            return () => {
              const obj = closure_1_1(closure_1_2[55]);
              obj.terminate();
            };
          }
        }
      }, items1);
      const effect1 = react.useEffect(() => {
        const tmp = TTITrackerDefault;
        tmp.wasAuthenticated = AuthenticationStore.isAuthenticated();
      }, []);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let isChannelMetadataObfuscationEnabled;
      let tmp3;
      let tmp4;
      let obj = isChannelMetadataObfuscationEnabled(576);
      const cResult = obj.c(3);
      const obj2 = isChannelMetadataObfuscationEnabled(13479);
      isChannelMetadataObfuscationEnabled = obj2.useIsChannelMetadataObfuscationEnabled("App");
      if (cResult[0] !== isChannelMetadataObfuscationEnabled) {
        const fn = function n() {
          const obj = react_nativeDefault2;
          const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
        };
        const items = [isChannelMetadataObfuscationEnabled];
        cResult[0] = isChannelMetadataObfuscationEnabled;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = react.useEffect(tmp3, tmp4);
    }
  : () => {
      let isChannelMetadataObfuscationEnabled;
      let obj = isChannelMetadataObfuscationEnabled(13479);
      isChannelMetadataObfuscationEnabled = obj.useIsChannelMetadataObfuscationEnabled("App");
      const items = [isChannelMetadataObfuscationEnabled];
      const effect = react.useEffect(() => {
        const obj = react_nativeDefault2;
        const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let shouldUseAltGateway;
      let tmp3;
      let tmp4;
      let obj = shouldUseAltGateway(576);
      const cResult = obj.c(3);
      const obj2 = shouldUseAltGateway(14394);
      shouldUseAltGateway = obj2.useShouldUseAltGateway("App");
      if (cResult[0] !== shouldUseAltGateway) {
        const fn = function n() {
          const obj = react_nativeDefault2;
          obj.setUseAltGateway(shouldUseAltGateway);
        };
        const items = [shouldUseAltGateway];
        cResult[0] = shouldUseAltGateway;
        cResult[1] = fn;
        cResult[2] = items;
        tmp4 = items;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      const effect = react.useEffect(tmp3, tmp4);
    }
  : () => {
      let shouldUseAltGateway;
      let obj = shouldUseAltGateway(14394);
      shouldUseAltGateway = obj.useShouldUseAltGateway("App");
      const items = [shouldUseAltGateway];
      const effect = react.useEffect(() => {
        const obj = react_nativeDefault2;
        obj.setUseAltGateway(shouldUseAltGateway);
      }, items);
    };
const main = "main";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp10;
      let tmp11;
      let tmp13;
      const obj = react2;
      const cResult = obj.c(3);
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
      const effect = react.useEffect(tmp10, tmp11);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        StartupProfilerDefault;
        AppContainerDefault;
        const tmp18 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
        cResult[2] = tmp18;
        tmp13 = tmp18;
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
      const effect = react.useEffect(() => {
        const renderAppEffect = TTITrackerDefault.renderAppEffect;
        return renderAppEffect.record();
      }, []);
      StartupProfilerDefault;
      AppContainerDefault;
      return <tmp7 profile={StartupProfiler.Profiles.App}>{null}</tmp7>;
    };
let result = size.fileFinishedImporting("components_native/App.tsx");

export default tmp20;
