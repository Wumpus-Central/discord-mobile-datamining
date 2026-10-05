// === Module 14389: SessionAdManager ===

// Module 14389 (SessionAdManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Timers from "Timers" /* 2046 */;
import react_native from "react-native" /* 6971 */;
import SessionAdGenerator from "SessionAdGenerator" /* 7205 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, AppStates: hasOwnProperty } = Constants);
const ad = "ad";
let token = AuthenticationStore.getToken();
let closure_8 = { DEFAULT: "DEFAULT", USER_LOGOUT: "USER_LOGOUT", WINDOW_FOCUS: "WINDOW_FOCUS", APP_STATE_UPDATE: "APP_STATE_UPDATE" };
class SessionAdManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let obj = react_native;
    applyArgumentsResult.focusedOrForegrounded = obj.isForegrounded();
    const interval = new Timers.Interval();
    applyArgumentsResult.heartbeatInterval = interval;
    applyArgumentsResult.schedulerStarted = false;
    applyArgumentsResult.lastHeartbeatTimestamp = 0;
    applyArgumentsResult.maybeStartHeartbeat = function maybeStartHeartbeat() {
      const heartbeatInterval = require.heartbeatInterval;
      if (!heartbeatInterval.isStarted()) {
        require.trackHeartbeat();
        const heartbeatInterval2 = require.heartbeatInterval;
        heartbeatInterval2.start(5 * DurationsDefault.Millis.MINUTE, require.trackHeartbeat);
      }
    };
    applyArgumentsResult.startAnalyticHeartbeat = function startAnalyticHeartbeat() {
      if (!require.schedulerStarted) {
        require.schedulerStarted = true;
        const obj3 = { category: ad, message: "Starting ad session heartbeat" };
        const obj2 = SentryUtilsDefault;
        obj2.addBreadcrumb(obj3);
        require.maybeStartHeartbeat();
      }
    };
    applyArgumentsResult.trackHeartbeat = function trackHeartbeat() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (!require.schedulerStarted) {
        if (!flag) {
          const obj2 = { category: ad, message: "Ad heartbeat called but scheduler not started" };
          const obj = SentryUtilsDefault;
          obj.addBreadcrumb(obj2);
          const heartbeatInterval = require.heartbeatInterval;
          heartbeatInterval.stop();
        }
      }
      const nowResult = performance.now();
      const diff = nowResult - require.lastHeartbeatTimestamp;
      const obj3 = SessionAdGenerator;
      const orRefreshAdSession = obj3.getOrRefreshAdSession();
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { client_ad_session_id: orRefreshAdSession.uuid, client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp, client_heartbeat_version: 3 };
      obj4.track(constants.CLIENT_AD_HEARTBEAT, obj5);
      require.lastHeartbeatTimestamp = nowResult;
    };
    applyArgumentsResult.stopAnalyticHeartbeat = function stopAnalyticHeartbeat() {
      let DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      if (require.schedulerStarted) {
        require.schedulerStarted = false;
        require.lastHeartbeatTimestamp = 0;
        const _HermesInternal = HermesInternal;
        const obj = { category: ad, message: "Stopping ad session heartbeat: " + DEFAULT };
        const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
        SentryUtilsDefault;
        addBreadcrumb(obj);
        const heartbeatInterval = require.heartbeatInterval;
        heartbeatInterval.stop();
      }
    };
    applyArgumentsResult.scheduleHeartbeatTracking = function scheduleHeartbeatTracking() {
      let DEFAULT;
      if (DEFAULT === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      if (require.focusedOrForegrounded) {
        if (null != token) {
          try {
            const result = require.startAnalyticHeartbeat();
          } catch (tmp6) {
            const obj2 = SentryUtilsDefault;
            obj2.captureException(tmp6);
          }
        }
      }
      const result1 = require.stopAnalyticHeartbeat(DEFAULT);
    };
    applyArgumentsResult.handleLogin = function handleLogin() {
      const result = require.scheduleHeartbeatTracking();
      require.trackHeartbeat(true);
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      const result = require.stopAnalyticHeartbeat(constants.USER_LOGOUT);
      const obj = SessionAdGenerator;
      obj.clearAdSession();
    };
    applyArgumentsResult.handleEnrollmentSuccess = function handleEnrollmentSuccess() {
      const obj = SessionAdGenerator;
      const orRefreshAdSession = obj.getOrRefreshAdSession(true);
    };
    applyArgumentsResult.handleWindowFocus = function handleWindowFocus(focused) {
      require.focusedOrForegrounded = focused.focused;
      const result = require.scheduleHeartbeatTracking(constants.WINDOW_FOCUS);
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate(state) {
      require.focusedOrForegrounded = state.state === hasOwnProperty.ACTIVE;
      const result = require.scheduleHeartbeatTracking(constants.APP_STATE_UPDATE);
    };
    applyArgumentsResult.handleAuthenticationChange = function handleAuthenticationChange() {
      token = AuthenticationStore.getToken();
      if (token !== token) {
        const obj = SessionAdGenerator;
        obj.clearAdSession();
        const result = require.stopAnalyticHeartbeat();
      }
      const result1 = require.scheduleHeartbeatTracking();
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = react_native;
    this.focusedOrForegrounded = obj.isForegrounded();
    AuthenticationStore.addChangeListener(this.handleAuthenticationChange);
    const obj2 = DispatcherDefault;
    const subscription = obj2.subscribe("WINDOW_FOCUS", this.handleWindowFocus);
    const obj3 = DispatcherDefault;
    const subscription1 = obj3.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
    const obj4 = DispatcherDefault;
    const subscription2 = obj4.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
    const obj5 = DispatcherDefault;
    const subscription3 = obj5.subscribe("LOGIN_SUCCESS", this.handleLogin);
    const obj6 = DispatcherDefault;
    const subscription4 = obj6.subscribe("LOGOUT", this.handleLogout);
    const result = this.scheduleHeartbeatTracking();
  }
  _terminate() {
    const result = this.stopAnalyticHeartbeat();
    AuthenticationStore.removeChangeListener(this.handleAuthenticationChange);
    const obj = DispatcherDefault;
    obj.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
    const obj5 = DispatcherDefault;
    obj5.unsubscribe("LOGOUT", this.handleLogout);
  }
}
const prototype = SessionAdManager.prototype;
const sessionAdManager = new SessionAdManager();
let result = size.fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default sessionAdManager;