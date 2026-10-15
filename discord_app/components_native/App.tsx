// === Module 15302: App ===

// Module 15302 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5421 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6146 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7659 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7722 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 7995 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8609 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 9921 */;
import GPlayManagerDefault from "GPlayManager" /* 10288 */;
import RouteManagerUtils from "RouteManagerUtils" /* 11487 */;
import StartupProfiler from "StartupProfiler" /* 12707 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14291 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15102 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15345 */;
import CallKitManagerDefault from "CallKitManager" /* 15351 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15352 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15353 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15362 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15363 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15366 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15446 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15454 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15457 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15460 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15462 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15466 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15468 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15469 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15470 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15472 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15473 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15475 */;
import _modDef15477 from "module_15477" /* 15477 */;
import MainNavigatorDefault from "MainNavigator" /* 16948 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15303 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(9004);
const ConnectivityIndicatorStateStore = fn(14651);
const RequestReviewStore = fn(14661);
const HexagonCampaignPersistedStore = fn(15304);
const LocalPushNotificationStore = fn(14681);
const PromotionsStore = fn(9343);
const BitRateStore = fn(14964);
const ShareStore = fn(15305);
const PermissionVADStore = fn(15306);
const InteractionModalStore = fn(15307);
const MobileAppDatabaseManager = fn(7549);
const SubscriptionStore = fn(4831);
const AccessibilityStore = fn(5140);
const AnalyticsLogStore = fn(15308);
const PhoneStore = fn(6844);
const ICYMISessionStore = fn(15309);
const MemoryExperiment = fn(15311);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2000)(15312, dependencyMap.paths);
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
        closure_1_1(15352).terminate();
        const obj = closure_1_1(15352);
        closure_1_1(5421).terminate();
        const obj2 = closure_1_1(5421);
        closure_1_1(10288).terminate();
        const obj3 = closure_1_1(10288);
        closure_1_1(15446).terminate();
        const obj4 = closure_1_1(15446);
        closure_1_0(11487).cleanupRouteManager();
        const obj5 = closure_1_0(11487);
        closure_1_1(15473).terminate();
        const obj6 = closure_1_1(15473);
        closure_1_1(15460).terminate();
        const obj7 = closure_1_1(15460);
        closure_1_1(8609).terminate();
        const obj8 = closure_1_1(8609);
        closure_1_1(15366).terminate();
        const obj9 = closure_1_1(15366);
        closure_1_1(15466).terminate();
        const obj10 = closure_1_1(15466);
        closure_1_1(15468).terminate();
        const obj11 = closure_1_1(15468);
        closure_1_1(15469).terminate();
        const obj12 = closure_1_1(15469);
        closure_1_1(15472).terminate();
        const obj13 = closure_1_1(15472);
        closure_1_1(7659).terminate();
        const obj14 = closure_1_1(7659);
        closure_1_1(15362).terminate();
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
      closure_1_1(15352).terminate();
      const obj = closure_1_1(15352);
      closure_1_1(5421).terminate();
      const obj2 = closure_1_1(5421);
      closure_1_1(10288).terminate();
      const obj3 = closure_1_1(10288);
      closure_1_1(15446).terminate();
      const obj4 = closure_1_1(15446);
      closure_1_0(11487).cleanupRouteManager();
      const obj5 = closure_1_0(11487);
      closure_1_1(15473).terminate();
      const obj6 = closure_1_1(15473);
      closure_1_1(15460).terminate();
      const obj7 = closure_1_1(15460);
      closure_1_1(8609).terminate();
      const obj8 = closure_1_1(8609);
      closure_1_1(15366).terminate();
      const obj9 = closure_1_1(15366);
      closure_1_1(15466).terminate();
      const obj10 = closure_1_1(15466);
      closure_1_1(15468).terminate();
      const obj11 = closure_1_1(15468);
      closure_1_1(15469).terminate();
      const obj12 = closure_1_1(15469);
      closure_1_1(15472).terminate();
      const obj13 = closure_1_1(15472);
      closure_1_1(7659).terminate();
      const obj14 = closure_1_1(7659);
      closure_1_1(15362).terminate();
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14636).useIsChannelMetadataObfuscationEnabled("App");
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14636).useIsChannelMetadataObfuscationEnabled("App");
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
    obj2.children = jsx(_modDef15477, { appEntryKey: main, children: null });
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    let tmp12 = tmp17;
    const tmp4Result2 = _modDef15477;
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
  obj.children = jsx(_modDef15477, { appEntryKey: main, children: null });
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});