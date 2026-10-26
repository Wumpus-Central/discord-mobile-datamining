// === Module 15640: App ===

// Module 15640 (App)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import AccessibilityFocusLockManagerDefault from "AccessibilityFocusLockManager" /* 5970 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6668 */;
import VoiceEngineStreamingManagerDefault from "VoiceEngineStreamingManager" /* 7827 */;
import NativePermissionManagerModuleDefault from "NativePermissionManagerModule" /* 7891 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 8164 */;
import MediaPlayerMuteManagerDefault from "MediaPlayerMuteManager" /* 8755 */;
import ForegroundServiceManagerDefault from "ForegroundServiceManager" /* 10099 */;
import GPlayManagerDefault from "GPlayManager" /* 10465 */;
import RouteManagerUtils from "RouteManagerUtils" /* 11732 */;
import StartupProfiler from "StartupProfiler" /* 13056 */;
import SentMessageIntentsHandlerDefault from "SentMessageIntentsHandler" /* 14639 */;
import NativeFastConnectModuleDefault from "NativeFastConnectModule" /* 15440 */;
import AccessibilityManagerDefault from "AccessibilityManager" /* 15683 */;
import SystemTelecomManagerDefault from "SystemTelecomManager" /* 15689 */;
import AccessibilityCallManagerDefault from "AccessibilityCallManager" /* 15690 */;
import NotificationTokenManagerDefault from "NotificationTokenManager" /* 15691 */;
import VoiceNotificationManagerDefault from "VoiceNotificationManager" /* 15700 */;
import UserSettingsProtoManagerDefault from "UserSettingsProtoManager" /* 15702 */;
import NativeRPCServerManagerDefault from "NativeRPCServerManager" /* 15705 */;
import MobileVoiceOverlayLifecycleManagerDefault from "MobileVoiceOverlayLifecycleManager" /* 15787 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 15795 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 15798 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 15801 */;
import SoundboardManagerDefault from "SoundboardManager" /* 15803 */;
import VoiceMessagesPlaybackManagerDefault from "VoiceMessagesPlaybackManager" /* 15807 */;
import ICYMIManagerDefault from "ICYMIManager" /* 15809 */;
import GameRelationshipManagerDefault from "GameRelationshipManager" /* 15810 */;
import CollectiblesMarketingManagerDefault from "CollectiblesMarketingManager" /* 15811 */;
import SessionAdManagerDefault from "SessionAdManager" /* 15813 */;
import TouchEventAnalyticsManagerDefault from "TouchEventAnalyticsManager" /* 15814 */;
import LocalMessageCacheManagerDefault from "LocalMessageCacheManager" /* 15816 */;
import _modDef15818 from "module_15818" /* 15818 */;
import MainNavigatorDefault from "MainNavigator" /* 17355 */;
import noop from "module_19" /* 19 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 15641 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
const AudioManagerStore = fn(9154);
const ConnectivityIndicatorStateStore = fn(14999);
const RequestReviewStore = fn(15009);
const HexagonCampaignPersistedStore = fn(15642);
const LocalPushNotificationStore = fn(15028);
const PromotionsStore = fn(9520);
const BitRateStore = fn(15301);
const ShareStore = fn(15643);
const PermissionVADStore = fn(15644);
const InteractionModalStore = fn(15645);
const MobileAppDatabaseManager = fn(7717);
const SubscriptionStore = fn(2058);
const AccessibilityStore = fn(4972);
const AnalyticsLogStore = fn(15646);
const PhoneStore = fn(7035);
const ICYMISessionStore = fn(15647);
const MemoryExperiment = fn(15649);
const jsx = fn(21).jsx;
if (global.__DEV__) {
  fn(2002)(15650, dependencyMap.paths);
}
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useManagers() {
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
        closure_1_1(15690).terminate();
        const obj = closure_1_1(15690);
        closure_1_1(5970).terminate();
        const obj2 = closure_1_1(5970);
        closure_1_1(10465).terminate();
        const obj3 = closure_1_1(10465);
        closure_1_1(15787).terminate();
        const obj4 = closure_1_1(15787);
        closure_1_0(11732).cleanupRouteManager();
        const obj5 = closure_1_0(11732);
        closure_1_1(15814).terminate();
        const obj6 = closure_1_1(15814);
        closure_1_1(15801).terminate();
        const obj7 = closure_1_1(15801);
        closure_1_1(8755).terminate();
        const obj8 = closure_1_1(8755);
        closure_1_1(15705).terminate();
        const obj9 = closure_1_1(15705);
        closure_1_1(15807).terminate();
        const obj10 = closure_1_1(15807);
        closure_1_1(15809).terminate();
        const obj11 = closure_1_1(15809);
        closure_1_1(15810).terminate();
        const obj12 = closure_1_1(15810);
        closure_1_1(15813).terminate();
        const obj13 = closure_1_1(15813);
        closure_1_1(7827).terminate();
        const obj14 = closure_1_1(7827);
        closure_1_1(15700).terminate();
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
      closure_1_1(15690).terminate();
      const obj = closure_1_1(15690);
      closure_1_1(5970).terminate();
      const obj2 = closure_1_1(5970);
      closure_1_1(10465).terminate();
      const obj3 = closure_1_1(10465);
      closure_1_1(15787).terminate();
      const obj4 = closure_1_1(15787);
      closure_1_0(11732).cleanupRouteManager();
      const obj5 = closure_1_0(11732);
      closure_1_1(15814).terminate();
      const obj6 = closure_1_1(15814);
      closure_1_1(15801).terminate();
      const obj7 = closure_1_1(15801);
      closure_1_1(8755).terminate();
      const obj8 = closure_1_1(8755);
      closure_1_1(15705).terminate();
      const obj9 = closure_1_1(15705);
      closure_1_1(15807).terminate();
      const obj10 = closure_1_1(15807);
      closure_1_1(15809).terminate();
      const obj11 = closure_1_1(15809);
      closure_1_1(15810).terminate();
      const obj12 = closure_1_1(15810);
      closure_1_1(15813).terminate();
      const obj13 = closure_1_1(15813);
      closure_1_1(7827).terminate();
      const obj14 = closure_1_1(7827);
      closure_1_1(15700).terminate();
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14984).useIsChannelMetadataObfuscationEnabled("App");
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
  isChannelMetadataObfuscationEnabled = isChannelMetadataObfuscationEnabled(14984).useIsChannelMetadataObfuscationEnabled("App");
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
    obj2.children = jsx(_modDef15818, { appEntryKey: main, children: null });
    const tmp17 = <tmp4Result profile={StartupProfiler.Profiles.App}>{null}</tmp4Result>;
    cResult[2] = tmp17;
    let tmp12 = tmp17;
    const tmp4Result2 = _modDef15818;
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
  obj.children = jsx(_modDef15818, { appEntryKey: main, children: null });
  return <tmp6 profile={StartupProfiler.Profiles.App}>{null}</tmp6>;
});