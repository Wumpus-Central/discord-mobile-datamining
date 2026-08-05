import { dispatcher } from "../../Dispatcher.tsx";
import { isForegrounded } from "SessionForegroundUtils.native.tsx";
// discord_app/modules/analytics_sessions/SessionAdManager.tsx
import importDefaultResult from "fetchFingerprint";
import ME from "ME";
import "initialize";

let c4;
let c5;
let require = arg1;
let c3 = importDefaultResult;
({ AnalyticEvents: c4, AppStates: c5 } = ME);
const ad = "ad";
let token = importDefaultResult.getToken();
let closure_8 = { DEFAULT: "DEFAULT", USER_LOGOUT: "USER_LOGOUT", WINDOW_FOCUS: "WINDOW_FOCUS", APP_STATE_UPDATE: "APP_STATE_UPDATE" };
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
        heartbeatInterval2.start(5 * outer1_1(outer1_2[6]).Millis.MINUTE, obj.trackHeartbeat);
      }
    };
    applyArgumentsResult.startAnalyticHeartbeat = function startAnalyticHeartbeat() {
      let obj = applyArgumentsResult;
      if (!applyArgumentsResult.schedulerStarted) {
        obj.schedulerStarted = true;
        obj = { category: null, message: "Starting ad session heartbeat" };
        obj[0] = outer1_6;
        outer1_1(outer1_2[7]).addBreadcrumb(obj);
        obj.maybeStartHeartbeat();
        const obj2 = outer1_1(outer1_2[7]);
      }
    };
    applyArgumentsResult.trackHeartbeat = function trackHeartbeat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!applyArgumentsResult.schedulerStarted) {
        if (!flag) {
          let obj = outer1_1(outer1_2[7]);
          obj = { category: null, message: "Ad heartbeat called but scheduler not started" };
          obj[0] = outer1_6;
          obj.addBreadcrumb(obj);
          const heartbeatInterval = tmp.heartbeatInterval;
          heartbeatInterval.stop();
        }
      }
      const nowResult = performance.now();
      const diff = nowResult - tmp.lastHeartbeatTimestamp;
      const orRefreshAdSession = applyArgumentsResult(outer1_2[8]).getOrRefreshAdSession();
      const obj3 = applyArgumentsResult(outer1_2[8]);
      obj = { client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp, client_heartbeat_version: 3 };
      outer1_1(outer1_2[9]).track(outer1_4.CLIENT_AD_HEARTBEAT, obj);
      applyArgumentsResult.lastHeartbeatTimestamp = nowResult;
    };
    applyArgumentsResult.stopAnalyticHeartbeat = function stopAnalyticHeartbeat(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_8.DEFAULT;
      }
      if (applyArgumentsResult.schedulerStarted) {
        tmp2.schedulerStarted = false;
        tmp2.lastHeartbeatTimestamp = 0;
        let obj = outer1_1(outer1_2[7]);
        obj = { category: null, message: null };
        obj[0] = outer1_6;
        const _HermesInternal = HermesInternal;
        obj[1] = "Stopping ad session heartbeat: " + DEFAULT;
        obj.addBreadcrumb(obj);
        const heartbeatInterval = tmp2.heartbeatInterval;
        heartbeatInterval.stop();
      }
    };
    applyArgumentsResult.scheduleHeartbeatTracking = function scheduleHeartbeatTracking(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = outer1_8.DEFAULT;
      }
      if (applyArgumentsResult.focusedOrForegrounded) {
        if (null != outer1_7) {
          try {
            const result = obj.startAnalyticHeartbeat();
          } catch (tmp7) {
            outer1_1(outer1_2[7]).captureException(tmp7);
            const obj2 = outer1_1(outer1_2[7]);
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
      const result = applyArgumentsResult.stopAnalyticHeartbeat(outer1_8.USER_LOGOUT);
      applyArgumentsResult(outer1_2[8]).clearAdSession();
    };
    applyArgumentsResult.handleEnrollmentSuccess = function handleEnrollmentSuccess() {
      const orRefreshAdSession = applyArgumentsResult(table[8]).getOrRefreshAdSession(true);
    };
    applyArgumentsResult.handleWindowFocus = function handleWindowFocus(focused) {
      applyArgumentsResult.focusedOrForegrounded = focused.focused;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(outer1_8.WINDOW_FOCUS);
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate(state) {
      applyArgumentsResult.focusedOrForegrounded = state.state === outer1_5.ACTIVE;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(outer1_8.APP_STATE_UPDATE);
    };
    applyArgumentsResult.handleAuthenticationChange = function handleAuthenticationChange() {
      const token = outer1_3.getToken();
      if (outer1_7 !== token) {
        outer1_7 = token;
        applyArgumentsResult(outer1_2[8]).clearAdSession();
        const result = applyArgumentsResult.stopAnalyticHeartbeat();
        const obj = applyArgumentsResult(outer1_2[8]);
      }
      const result1 = applyArgumentsResult.scheduleHeartbeatTracking();
    };
    return applyArgumentsResult;
  }
}
const prototype = SessionAdManager.prototype;
prototype["_initialize"] = function _initialize() {
  this.focusedOrForegrounded = isForegrounded /* isForegrounded */.isForegrounded();
  importDefaultResult.addChangeListener(this.handleAuthenticationChange);
  const obj = isForegrounded /* isForegrounded */;
  const subscription = dispatcher.subscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const obj2 = dispatcher;
  const subscription1 = dispatcher.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const obj3 = dispatcher;
  const subscription2 = dispatcher.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const obj4 = dispatcher;
  const subscription3 = dispatcher.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj5 = dispatcher;
  const subscription4 = dispatcher.subscribe("LOGOUT", this.handleLogout);
  const result = this.scheduleHeartbeatTracking();
};
prototype["_terminate"] = function _terminate() {
  const result = this.stopAnalyticHeartbeat();
  importDefaultResult.removeChangeListener(this.handleAuthenticationChange);
  dispatcher.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const obj = dispatcher;
  dispatcher.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const obj2 = dispatcher;
  dispatcher.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const obj3 = dispatcher;
  dispatcher.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  const obj4 = dispatcher;
  dispatcher.unsubscribe("LOGOUT", this.handleLogout);
};
const sessionAdManager = new SessionAdManager();
let result = require("initialize").fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default sessionAdManager;