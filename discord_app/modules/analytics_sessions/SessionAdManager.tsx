// === Module 14547: _initialize ===

// Module 14547 (_initialize)
import dispatcherDefault from "dispatcher" /* 573 */;
import initializeDefault from "initialize" /* 1898 */;
import start from "start" /* 4447 */;
import isForegrounded from "isForegrounded" /* 7462 */;
import importDefaultResult from "fetchFingerprint" /* 502 */;
import ME from "ME" /* 1074 */;

require = arg1;
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
        obj.trackHeartbeat();
        const heartbeatInterval2 = obj.heartbeatInterval;
        heartbeatInterval2.start(5 * closure_1_1(closure_1_2[6]).Millis.MINUTE, obj.trackHeartbeat);
      }
    };
    applyArgumentsResult.startAnalyticHeartbeat = function startAnalyticHeartbeat() {
      let obj = applyArgumentsResult;
      if (!applyArgumentsResult.schedulerStarted) {
        obj.schedulerStarted = true;
        obj = { category: null, message: "Starting ad session heartbeat" };
        obj[0] = closure_1_6;
        closure_1_1(closure_1_2[7]).addBreadcrumb(obj);
        obj.maybeStartHeartbeat();
        const obj2 = closure_1_1(closure_1_2[7]);
      }
    };
    applyArgumentsResult.trackHeartbeat = function trackHeartbeat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!applyArgumentsResult.schedulerStarted) {
        if (!flag) {
          let obj = closure_1_1(closure_1_2[7]);
          obj = { category: null, message: "Ad heartbeat called but scheduler not started" };
          obj[0] = closure_1_6;
          obj.addBreadcrumb(obj);
          const heartbeatInterval = tmp.heartbeatInterval;
          heartbeatInterval.stop();
        }
      }
      const nowResult = performance.now();
      const diff = nowResult - tmp.lastHeartbeatTimestamp;
      const orRefreshAdSession = applyArgumentsResult(closure_1_2[8]).getOrRefreshAdSession();
      const obj3 = applyArgumentsResult(closure_1_2[8]);
      obj = { client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp, client_heartbeat_version: 3 };
      closure_1_1(closure_1_2[9]).track(closure_1_4.CLIENT_AD_HEARTBEAT, obj);
      applyArgumentsResult.lastHeartbeatTimestamp = nowResult;
    };
    applyArgumentsResult.stopAnalyticHeartbeat = function stopAnalyticHeartbeat(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = closure_1_8.DEFAULT;
      }
      if (applyArgumentsResult.schedulerStarted) {
        tmp2.schedulerStarted = false;
        tmp2.lastHeartbeatTimestamp = 0;
        let obj = closure_1_1(closure_1_2[7]);
        obj = { category: null, message: null };
        obj[0] = closure_1_6;
        const _HermesInternal = HermesInternal;
        obj[1] = "Stopping ad session heartbeat: " + DEFAULT;
        obj.addBreadcrumb(obj);
        const heartbeatInterval = tmp2.heartbeatInterval;
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
            const result = obj.startAnalyticHeartbeat();
          } catch (tmp7) {
            closure_1_1(closure_1_2[7]).captureException(tmp7);
            const obj2 = closure_1_1(closure_1_2[7]);
          }
        }
      }
      const result1 = obj.stopAnalyticHeartbeat(DEFAULT);
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      const result = applyArgumentsResult.scheduleHeartbeatTracking();
      applyArgumentsResult.trackHeartbeat(true);
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = applyArgumentsResult.stopAnalyticHeartbeat(closure_1_8.USER_LOGOUT);
      applyArgumentsResult(closure_1_2[8]).clearAdSession();
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
        applyArgumentsResult(closure_1_2[8]).clearAdSession();
        const result = applyArgumentsResult.stopAnalyticHeartbeat();
        const obj = applyArgumentsResult(closure_1_2[8]);
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
  const obj = isForegrounded;
  const subscription = dispatcherDefault.subscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const obj2 = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const obj3 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const obj4 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj5 = dispatcherDefault;
  const subscription4 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const result = this.scheduleHeartbeatTracking();
};
prototype["_terminate"] = function _terminate() {
  const result = this.stopAnalyticHeartbeat();
  importDefaultResult.removeChangeListener(this.handleAuthenticationChange);
  dispatcherDefault.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj4 = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const sessionAdManager = new SessionAdManager();
let result = require("set").fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default sessionAdManager;