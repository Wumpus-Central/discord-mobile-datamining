// === Module 14157: App ===

// Module 14157 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 5031 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5769 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6082 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 7252 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 7256 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7282 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 7293 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 7937 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8978 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8991 */;
import GPlayManagerDefault from "GPlayManager" /* 10440 */;
import StartupProfiler from "StartupProfiler" /* 11571 */;
import RouteManagerUtils from "RouteManagerUtils" /* 12550 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 13448 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 14200 */;
import BackPressManagerDefault from "BackPressManager" /* 14280 */;
import CallKitManagerDefault from "CallKitManager" /* 14281 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 14282 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 14283 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 14293 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 14294 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 14297 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 14370 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14378 */;
import SoundboardManagerDefault from "SoundboardManager" /* 14380 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 14384 */;
import ICYMIManagerDefault from "ICYMIManager" /* 14386 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 14387 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 14388 */;
import SessionAdManagerDefault from "SessionAdManager" /* 14389 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 14390 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 14392 */;
import _modDef14396 from "module_14396" /* 14396 */;
import MainNavigatorDefault from "MainNavigator" /* 15861 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14158 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

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
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
            const notificationAuthorization = NativePermissionManagerModuleDefault.requestNotificationAuthorization();
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
}) : (() => {
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
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = isChannelMetadataObfuscationEnabled(576).c(3);
  const obj = isChannelMetadataObfuscationEnabled(576);
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13479).useIsChannelMetadataObfuscationEnabled("App");
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
}) : (() => {
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(13479).useIsChannelMetadataObfuscationEnabled("App");
  const items = [isChannelMetadataObfuscationEnabled];
  const effect = noop.useEffect(() => {
    const result = NativeFastConnectModuleDefault.setUseChannelObfuscation(isChannelMetadataObfuscationEnabled);
  }, items);
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  shouldUseAltGateway = shouldUseAltGateway(14394).useShouldUseAltGateway("App");
  const items = [shouldUseAltGateway];
  const effect = noop.useEffect(() => {
    NativeFastConnectModuleDefault.setUseAltGateway(shouldUseAltGateway);
  }, items);
});
const main = "main";
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/App.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});