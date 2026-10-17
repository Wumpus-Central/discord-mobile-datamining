// === Module 15416: App ===

// Module 15416 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5461 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6186 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7708 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7772 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8045 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8664 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10002 */;
import GPlayManagerDefault from "GPlayManager" /* 10369 */;
import RouteManagerUtils from "RouteManagerUtils" /* 11563 */;
import StartupProfiler from "StartupProfiler" /* 12805 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14401 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15216 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15459 */;
import CallKitManagerDefault from "CallKitManager" /* 15465 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15466 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15467 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15476 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15477 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15480 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15555 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15563 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15566 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15569 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15571 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15575 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15577 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15578 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15579 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15581 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15582 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15584 */;
import _modDef15586 from "module_15586" /* 15586 */;
import MainNavigatorDefault from "MainNavigator" /* 17055 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15417 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(9059);
const ConnectivityIndicatorStateStore = fn(14761);
const RequestReviewStore = fn(14771);
const HexagonCampaignPersistedStore = fn(15418);
const LocalPushNotificationStore = fn(14791);
const PromotionsStore = fn(9421);
const BitRateStore = fn(15076);
const ShareStore = fn(15419);
const PermissionVADStore = fn(15420);
const InteractionModalStore = fn(15421);
const MobileAppDatabaseManager = fn(7598);
const SubscriptionStore = fn(4870);
const AccessibilityStore = fn(5181);
const AnalyticsLogStore = fn(15422);
const PhoneStore = fn(6901);
const ICYMISessionStore = fn(15423);
const MemoryExperiment = fn(15425);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2002)(15426, dependencyMap.paths);
}
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useManagers() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      AccessibilityManagerDefault.init();
      AccessibilityFocusLockManagerDefault.initialize();
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
      if (obj25.isIOS()) {
        IosImageTypesManagerDefault.initialize();
        const tmpResult = IosImageTypesManagerDefault;
      }
      obj25 = PlatformUtils;
      const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
      return () => {
        closure_1_1(15466).terminate();
        const obj = closure_1_1(15466);
        closure_1_1(5461).terminate();
        const obj2 = closure_1_1(5461);
        closure_1_1(10369).terminate();
        const obj3 = closure_1_1(10369);
        closure_1_1(15555).terminate();
        const obj4 = closure_1_1(15555);
        closure_1_0(11563).cleanupRouteManager();
        const obj5 = closure_1_0(11563);
        closure_1_1(15582).terminate();
        const obj6 = closure_1_1(15582);
        closure_1_1(15569).terminate();
        const obj7 = closure_1_1(15569);
        closure_1_1(8664).terminate();
        const obj8 = closure_1_1(8664);
        closure_1_1(15480).terminate();
        const obj9 = closure_1_1(15480);
        closure_1_1(15575).terminate();
        const obj10 = closure_1_1(15575);
        closure_1_1(15577).terminate();
        const obj11 = closure_1_1(15577);
        closure_1_1(15578).terminate();
        const obj12 = closure_1_1(15578);
        closure_1_1(15581).terminate();
        const obj13 = closure_1_1(15581);
        closure_1_1(7708).terminate();
        const obj14 = closure_1_1(7708);
        closure_1_1(15476).terminate();
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
}) : (function useManagers() {
  const effect = noop.useEffect(() => {
    AccessibilityManagerDefault.init();
    AccessibilityFocusLockManagerDefault.initialize();
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
    if (obj25.isIOS()) {
      IosImageTypesManagerDefault.initialize();
      const tmpResult = IosImageTypesManagerDefault;
    }
    obj25 = PlatformUtils;
    const result = RouteManagerUtils.initializeRouteManagerIfNeeded();
    return () => {
      closure_1_1(15466).terminate();
      const obj = closure_1_1(15466);
      closure_1_1(5461).terminate();
      const obj2 = closure_1_1(5461);
      closure_1_1(10369).terminate();
      const obj3 = closure_1_1(10369);
      closure_1_1(15555).terminate();
      const obj4 = closure_1_1(15555);
      closure_1_0(11563).cleanupRouteManager();
      const obj5 = closure_1_0(11563);
      closure_1_1(15582).terminate();
      const obj6 = closure_1_1(15582);
      closure_1_1(15569).terminate();
      const obj7 = closure_1_1(15569);
      closure_1_1(8664).terminate();
      const obj8 = closure_1_1(8664);
      closure_1_1(15480).terminate();
      const obj9 = closure_1_1(15480);
      closure_1_1(15575).terminate();
      const obj10 = closure_1_1(15575);
      closure_1_1(15577).terminate();
      const obj11 = closure_1_1(15577);
      closure_1_1(15578).terminate();
      const obj12 = closure_1_1(15578);
      closure_1_1(15581).terminate();
      const obj13 = closure_1_1(15581);
      closure_1_1(7708).terminate();
      const obj14 = closure_1_1(7708);
      closure_1_1(15476).terminate();
    };
  }, []);
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAuthenticated() {
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
            const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
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
}) : (function useAuthenticated() {
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
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelObfuscationPersistence() {
  const cResult = isChannelMetadataObfuscationEnabled(576).c(3);
  const obj = isChannelMetadataObfuscationEnabled(576);
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14746).useIsChannelMetadataObfuscationEnabled("App");
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
}) : (function useChannelObfuscationPersistence() {
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14746).useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
const main = "main";
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function App() {
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
    obj2.children = jsx(_modDef15586, { appEntryKey: main, children: null });
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    let tmp12 = tmp17;
    const tmp4Result2 = _modDef15586;
  } else {
    tmp12 = cResult[2];
  }
  return tmp12;
}) : (function App() {
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
  obj.children = jsx(_modDef15586, { appEntryKey: main, children: null });
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});