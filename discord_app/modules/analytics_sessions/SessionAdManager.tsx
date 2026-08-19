// discord_app/modules/analytics_sessions/SessionAdManager.tsx
import obj132Default from "../../utils/Durations.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import _modDef1208 from "../../utils/SentryUtils.native.tsx";
import start from "../../../discord_common/js/packages/timers/Timers.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import isForegrounded from "SessionForegroundUtils.native.tsx";
import importDefaultResult from "../../stores/AuthenticationStore.tsx";
import ME from "../../Constants.tsx";

require = fn;
let c3 = importDefaultResult;
({ AnalyticEvents: c4, AppStates: c5 } = ME);
const ad = "ad";
let token = importDefaultResult.getToken();
let closure_8 = { DEFAULT: "DEFAULT", USER_LOGOUT: "USER_LOGOUT", WINDOW_FOCUS: "WINDOW_FOCUS", APP_STATE_UPDATE: "APP_STATE_UPDATE" };
initializeDefault;
class SessionAdManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = require("isForegrounded");
    applyArgumentsResult.focusedOrForegrounded = obj.isForegrounded();
    interval = new require("start").Interval();
    applyArgumentsResult.heartbeatInterval = interval;
    applyArgumentsResult.schedulerStarted = false;
    applyArgumentsResult.lastHeartbeatTimestamp = 0;
    applyArgumentsResult.maybeStartHeartbeat = function maybeStartHeartbeat() {
      const heartbeatInterval = applyArgumentsResult.heartbeatInterval;
      if (!heartbeatInterval.isStarted()) {
        applyArgumentsResult.trackHeartbeat();
        const heartbeatInterval2 = applyArgumentsResult.heartbeatInterval;
        heartbeatInterval2.start(5 * obj132Default.Millis.MINUTE, applyArgumentsResult.trackHeartbeat);
      }
    };
    applyArgumentsResult.startAnalyticHeartbeat = function startAnalyticHeartbeat() {
      let obj = applyArgumentsResult;
      if (!applyArgumentsResult.schedulerStarted) {
        obj.schedulerStarted = true;
        obj = { category: null, message: "Starting ad session heartbeat" };
        obj[0] = ad;
        _modDef1208.addBreadcrumb(obj);
        obj.maybeStartHeartbeat();
      }
    };
    applyArgumentsResult.trackHeartbeat = function trackHeartbeat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!applyArgumentsResult.schedulerStarted) {
        if (!flag) {
          let obj = { category: null, message: "Ad heartbeat called but scheduler not started" };
          obj[0] = ad;
          obj.addBreadcrumb(obj);
          const heartbeatInterval = applyArgumentsResult.heartbeatInterval;
          heartbeatInterval.stop();
        }
      }
      const nowResult = performance.now();
      const diff = nowResult - applyArgumentsResult.lastHeartbeatTimestamp;
      const orRefreshAdSession = applyArgumentsResult(dependencyMap[8]).getOrRefreshAdSession();
      const obj3 = applyArgumentsResult(dependencyMap[8]);
      obj = { client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp, client_heartbeat_version: 3 };
      expandEventPropertiesDefault.track(closure_1_4.CLIENT_AD_HEARTBEAT, obj);
      applyArgumentsResult.lastHeartbeatTimestamp = nowResult;
    };
    applyArgumentsResult.stopAnalyticHeartbeat = function stopAnalyticHeartbeat(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = closure_1_8.DEFAULT;
      }
      if (applyArgumentsResult.schedulerStarted) {
        applyArgumentsResult.schedulerStarted = false;
        applyArgumentsResult.lastHeartbeatTimestamp = 0;
        const obj = { category: null, message: null };
        obj[0] = ad;
        const _HermesInternal = HermesInternal;
        obj[1] = "Stopping ad session heartbeat: " + DEFAULT;
        obj.addBreadcrumb(obj);
        const heartbeatInterval = applyArgumentsResult.heartbeatInterval;
        heartbeatInterval.stop();
      }
    };
    applyArgumentsResult.scheduleHeartbeatTracking = function scheduleHeartbeatTracking(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = closure_1_8.DEFAULT;
      }
      if (applyArgumentsResult.focusedOrForegrounded) {
        if (null != token) {
          try {
            const result = applyArgumentsResult.startAnalyticHeartbeat();
          } catch (tmp7) {
            _modDef1208.captureException(tmp7);
          }
        }
      }
      const result1 = applyArgumentsResult.stopAnalyticHeartbeat(DEFAULT);
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      const result = applyArgumentsResult.scheduleHeartbeatTracking();
      applyArgumentsResult.trackHeartbeat(true);
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = applyArgumentsResult.stopAnalyticHeartbeat(closure_1_8.USER_LOGOUT);
      applyArgumentsResult(dependencyMap[8]).clearAdSession();
    };
    applyArgumentsResult.handleEnrollmentSuccess = function handleEnrollmentSuccess() {
      const orRefreshAdSession = applyArgumentsResult(table[8]).getOrRefreshAdSession(true);
    };
    applyArgumentsResult.handleWindowFocus = function handleWindowFocus(focused) {
      applyArgumentsResult.focusedOrForegrounded = focused.focused;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(closure_1_8.WINDOW_FOCUS);
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate(state) {
      applyArgumentsResult.focusedOrForegrounded = state.state === closure_1_5.ACTIVE;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(closure_1_8.APP_STATE_UPDATE);
    };
    applyArgumentsResult.handleAuthenticationChange = function handleAuthenticationChange() {
      token = closure_1_3.getToken();
      if (token !== token) {
        applyArgumentsResult(dependencyMap[8]).clearAdSession();
        const result = applyArgumentsResult.stopAnalyticHeartbeat();
        const obj = applyArgumentsResult(dependencyMap[8]);
      }
      const result1 = applyArgumentsResult.scheduleHeartbeatTracking();
    };
    return applyArgumentsResult;
  }
}
const prototype = SessionAdManager.prototype;
prototype["_initialize"] = function _initialize() {
  this.focusedOrForegrounded = isForegrounded.isForegrounded();
  importDefaultResult.addChangeListener(this.handleAuthenticationChange);
  const subscription = dispatcherDefault.subscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const subscription1 = dispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const subscription2 = dispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const subscription3 = dispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const subscription4 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const result = this.scheduleHeartbeatTracking();
};
prototype["_terminate"] = function _terminate() {
  const result = this.stopAnalyticHeartbeat();
  importDefaultResult.removeChangeListener(this.handleAuthenticationChange);
  dispatcherDefault.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
  dispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  dispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  dispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const sessionAdManager = new SessionAdManager();
let result = require("obj132").fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default sessionAdManager;