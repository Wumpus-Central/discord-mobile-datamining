// === Module 14175: App ===

// Module 14175 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 5037 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5776 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6089 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7265 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7269 */;
import react_nativeDefault from "react-native" /* 7295 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 7306 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7948 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9011 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9024 */;
import GPlayManagerDefault from "GPlayManager" /* 10453 */;
import StartupProfiler from "StartupProfiler" /* 11584 */;
import RouteManagerUtils from "RouteManagerUtils" /* 12565 */;
import react_nativeDefault2 from "react-native" /* 13975 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14218 */;
import BackPressManagerDefault from "BackPressManager" /* 14298 */;
import CallKitManagerDefault from "CallKitManager" /* 14299 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14300 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14301 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14311 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14312 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14315 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14388 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14396 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14398 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14402 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14404 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14405 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14406 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14407 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14408 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14410 */;
import AppContainerDefault from "AppContainer" /* 14412 */;
import react from "react" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14176 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AudioManagerStore from "AudioManagerStore" /* 9338 */;
import ConnectivityIndicatorStateStore from "ConnectivityIndicatorStateStore" /* 13513 */;
import RequestReviewStore from "RequestReviewStore" /* 13523 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 14177 */;
import LocalPushNotificationStore from "LocalPushNotificationStore" /* 13544 */;
import PromotionsStore from "PromotionsStore" /* 10409 */;
import BitRateStore from "BitRateStore" /* 13831 */;
import ShareStore from "ShareStore" /* 14178 */;
import PermissionVADStore from "PermissionVADStore" /* 14179 */;
import InteractionModalStore from "InteractionModalStore" /* 14180 */;
import MobileAppDatabaseManager from "MobileAppDatabaseManager" /* 7141 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import AnalyticsLogStore from "AnalyticsLogStore" /* 14181 */;
import PhoneStore from "PhoneStore" /* 6437 */;
import ICYMISessionStore from "ICYMISessionStore" /* 14182 */;
import MemoryExperiment from "MemoryExperiment" /* 14184 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const StartupProfilerDefault = StartupProfiler;

const jsx = Fragment.jsx;
if (global.__DEV__) {
  asyncRequire(14185, dependencyMap.paths);
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AuthenticationStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthenticationStore.isAuthenticated());
  const items1 = [stateFromStores];
  const effect = react.useEffect(function() {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let isChannelMetadataObfuscationEnabled;
  let tmp3;
  let tmp4;
  let obj = isChannelMetadataObfuscationEnabled(576);
  const cResult = obj.c(3);
  const obj2 = isChannelMetadataObfuscationEnabled(13495);
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
}) : (() => {
  let isChannelMetadataObfuscationEnabled;
  let obj = isChannelMetadataObfuscationEnabled(13495);
  isChannelMetadataObfuscationEnabled = obj.useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = react.useEffect(() => {
    const obj = react_nativeDefault2;
    const result = obj.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
const main = "main";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
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
  const effect = react.useEffect(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    StartupProfilerDefault;
    AppContainerDefault;
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    tmp12 = tmp17;
  } else {
    tmp12 = cResult[2];
  }
  return tmp12;
}) : (() => {
  const renderApp = TTITrackerDefault.renderApp;
  renderApp.record();
  closure_7();
  closure_8();
  closure_9();
  const effect = react.useEffect(() => {
    const renderAppEffect = TTITrackerDefault.renderAppEffect;
    return renderAppEffect.record();
  }, []);
  StartupProfilerDefault;
  AppContainerDefault;
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});
let result = size.fileFinishedImporting("components_native/App.tsx");

export default tmp20;