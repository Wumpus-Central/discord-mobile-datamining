// === Module 15006: App ===

// Module 15006 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5366 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5935 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7449 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7512 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 7785 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8398 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 9713 */;
import GPlayManagerDefault from "GPlayManager" /* 10075 */;
import RouteManagerUtils from "RouteManagerUtils" /* 11263 */;
import StartupProfiler from "StartupProfiler" /* 12414 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 13994 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 14806 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15049 */;
import CallKitManagerDefault from "CallKitManager" /* 15055 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15056 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15057 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15066 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15067 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15070 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15150 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15158 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15161 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15164 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15166 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15170 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15172 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15173 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15174 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15176 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15177 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15179 */;
import _modDef15181 from "module_15181" /* 15181 */;
import MainNavigatorDefault from "MainNavigator" /* 16709 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15007 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(8791);
const ConnectivityIndicatorStateStore = fn(14354);
const RequestReviewStore = fn(14364);
const HexagonCampaignPersistedStore = fn(15008);
const LocalPushNotificationStore = fn(14384);
const PromotionsStore = fn(9131);
const BitRateStore = fn(14668);
const ShareStore = fn(15009);
const PermissionVADStore = fn(15010);
const InteractionModalStore = fn(15011);
const MobileAppDatabaseManager = fn(7339);
const SubscriptionStore = fn(4777);
const AccessibilityStore = fn(5085);
const AnalyticsLogStore = fn(15012);
const PhoneStore = fn(6628);
const ICYMISessionStore = fn(15013);
const MemoryExperiment = fn(15015);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2000)(15016, dependencyMap.paths);
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
        closure_1_1(15056).terminate();
        const obj = closure_1_1(15056);
        closure_1_1(5366).terminate();
        const obj2 = closure_1_1(5366);
        closure_1_1(10075).terminate();
        const obj3 = closure_1_1(10075);
        closure_1_1(15150).terminate();
        const obj4 = closure_1_1(15150);
        closure_1_0(11263).cleanupRouteManager();
        const obj5 = closure_1_0(11263);
        closure_1_1(15177).terminate();
        const obj6 = closure_1_1(15177);
        closure_1_1(15164).terminate();
        const obj7 = closure_1_1(15164);
        closure_1_1(8398).terminate();
        const obj8 = closure_1_1(8398);
        closure_1_1(15070).terminate();
        const obj9 = closure_1_1(15070);
        closure_1_1(15170).terminate();
        const obj10 = closure_1_1(15170);
        closure_1_1(15172).terminate();
        const obj11 = closure_1_1(15172);
        closure_1_1(15173).terminate();
        const obj12 = closure_1_1(15173);
        closure_1_1(15176).terminate();
        const obj13 = closure_1_1(15176);
        closure_1_1(7449).terminate();
        const obj14 = closure_1_1(7449);
        closure_1_1(15066).terminate();
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
      closure_1_1(15056).terminate();
      const obj = closure_1_1(15056);
      closure_1_1(5366).terminate();
      const obj2 = closure_1_1(5366);
      closure_1_1(10075).terminate();
      const obj3 = closure_1_1(10075);
      closure_1_1(15150).terminate();
      const obj4 = closure_1_1(15150);
      closure_1_0(11263).cleanupRouteManager();
      const obj5 = closure_1_0(11263);
      closure_1_1(15177).terminate();
      const obj6 = closure_1_1(15177);
      closure_1_1(15164).terminate();
      const obj7 = closure_1_1(15164);
      closure_1_1(8398).terminate();
      const obj8 = closure_1_1(8398);
      closure_1_1(15070).terminate();
      const obj9 = closure_1_1(15070);
      closure_1_1(15170).terminate();
      const obj10 = closure_1_1(15170);
      closure_1_1(15172).terminate();
      const obj11 = closure_1_1(15172);
      closure_1_1(15173).terminate();
      const obj12 = closure_1_1(15173);
      closure_1_1(15176).terminate();
      const obj13 = closure_1_1(15176);
      closure_1_1(7449).terminate();
      const obj14 = closure_1_1(7449);
      closure_1_1(15066).terminate();
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14339).useIsChannelMetadataObfuscationEnabled("App");
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14339).useIsChannelMetadataObfuscationEnabled("App");
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
    obj2.children = jsx(_modDef15181, { appEntryKey: main, children: null });
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    let tmp12 = tmp17;
    const tmp4Result2 = _modDef15181;
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
  obj.children = jsx(_modDef15181, { appEntryKey: main, children: null });
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});