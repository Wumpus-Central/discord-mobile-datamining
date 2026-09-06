// discord_app/modules/analytics_sessions/SessionAdManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import Timers from "../../../discord_common/js/packages/timers/Timers.tsx";
import SessionForegroundUtils from "SessionForegroundUtils.native.tsx";
import SessionAdGenerator from "SessionAdGenerator.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, AppStates: hasOwnProperty } = Constants);
const ad = "ad";
let token = AuthenticationStore.getToken();
let closure_8 = {
  DEFAULT: "DEFAULT",
  USER_LOGOUT: "USER_LOGOUT",
  WINDOW_FOCUS: "WINDOW_FOCUS",
  APP_STATE_UPDATE: "APP_STATE_UPDATE",
};
class SessionAdManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    obj = closure_0(closure_2[3]);
    applyArgumentsResult.focusedOrForegrounded = obj.isForegrounded();
    interval = new closure_0(closure_2[4]).Interval();
    applyArgumentsResult.heartbeatInterval = interval;
    applyArgumentsResult.schedulerStarted = false;
    applyArgumentsResult.lastHeartbeatTimestamp = 0;
    applyArgumentsResult.maybeStartHeartbeat = function maybeStartHeartbeat() {
      const heartbeatInterval = applyArgumentsResult.heartbeatInterval;
      if (!heartbeatInterval.isStarted()) {
        obj.trackHeartbeat();
        const heartbeatInterval2 = obj.heartbeatInterval;
        heartbeatInterval2.start(5 * DurationsDefault.Millis.MINUTE, obj.trackHeartbeat);
      }
    };
    applyArgumentsResult.startAnalyticHeartbeat = function startAnalyticHeartbeat() {
      let obj = applyArgumentsResult;
      if (!applyArgumentsResult.schedulerStarted) {
        obj.schedulerStarted = true;
        obj = { category: ad, message: "Starting ad session heartbeat" };
        SentryUtilsDefault.addBreadcrumb(obj);
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
          let obj = { category: ad, message: "Ad heartbeat called but scheduler not started" };
          obj.addBreadcrumb(obj);
          const heartbeatInterval = tmp.heartbeatInterval;
          heartbeatInterval.stop();
        }
      }
      const nowResult = performance.now();
      const diff = nowResult - tmp.lastHeartbeatTimestamp;
      const orRefreshAdSession = SessionAdGenerator.getOrRefreshAdSession();
      obj = {
        client_ad_session_id: orRefreshAdSession.uuid,
        client_heartbeat_initialization_timestamp: orRefreshAdSession.createdAtTimestamp,
        client_heartbeat_version: 3,
      };
      AnalyticsUtilsDefault.track(constants.CLIENT_AD_HEARTBEAT, obj);
      applyArgumentsResult.lastHeartbeatTimestamp = nowResult;
    };
    applyArgumentsResult.stopAnalyticHeartbeat = function stopAnalyticHeartbeat(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      if (applyArgumentsResult.schedulerStarted) {
        tmp2.schedulerStarted = false;
        tmp2.lastHeartbeatTimestamp = 0;
        const obj = { category: ad, message: null };
        const _HermesInternal = HermesInternal;
        obj.message = "Stopping ad session heartbeat: " + DEFAULT;
        obj.addBreadcrumb(obj);
        const heartbeatInterval = tmp2.heartbeatInterval;
        heartbeatInterval.stop();
      }
    };
    applyArgumentsResult.scheduleHeartbeatTracking = function scheduleHeartbeatTracking(DEFAULT) {
      if (DEFAULT === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      if (applyArgumentsResult.focusedOrForegrounded) {
        if (null != token) {
          try {
            const result = obj.startAnalyticHeartbeat();
          } catch (tmp7) {
            SentryUtilsDefault.captureException(tmp7);
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
      const result = applyArgumentsResult.stopAnalyticHeartbeat(constants.USER_LOGOUT);
      SessionAdGenerator.clearAdSession();
    };
    applyArgumentsResult.handleEnrollmentSuccess = function handleEnrollmentSuccess() {
      const orRefreshAdSession = applyArgumentsResult(dependencyMap[8]).getOrRefreshAdSession(true);
    };
    applyArgumentsResult.handleWindowFocus = function handleWindowFocus(focused) {
      applyArgumentsResult.focusedOrForegrounded = focused.focused;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(constants.WINDOW_FOCUS);
    };
    applyArgumentsResult.handleAppStateUpdate = function handleAppStateUpdate(state) {
      applyArgumentsResult.focusedOrForegrounded = state.state === constants2.ACTIVE;
      const result = applyArgumentsResult.scheduleHeartbeatTracking(constants.APP_STATE_UPDATE);
    };
    applyArgumentsResult.handleAuthenticationChange = function handleAuthenticationChange() {
      token = AuthenticationStore.getToken();
      if (token !== token) {
        SessionAdGenerator.clearAdSession();
        const result = applyArgumentsResult.stopAnalyticHeartbeat();
      }
      const result1 = applyArgumentsResult.scheduleHeartbeatTracking();
    };
    return applyArgumentsResult;
  }
}
const prototype = SessionAdManager.prototype;
prototype["_initialize"] = function _initialize() {
  this.focusedOrForegrounded = SessionForegroundUtils.isForegrounded();
  AuthenticationStore.addChangeListener(this.handleAuthenticationChange);
  const subscription = DispatcherDefault.subscribe("WINDOW_FOCUS", this.handleWindowFocus);
  const subscription1 = DispatcherDefault.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  const subscription2 = DispatcherDefault.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  const subscription3 = DispatcherDefault.subscribe("LOGIN_SUCCESS", this.handleLogin);
  const subscription4 = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
  const result = this.scheduleHeartbeatTracking();
};
prototype["_terminate"] = function _terminate() {
  const result = this.stopAnalyticHeartbeat();
  AuthenticationStore.removeChangeListener(this.handleAuthenticationChange);
  DispatcherDefault.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus);
  DispatcherDefault.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate);
  DispatcherDefault.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess);
  DispatcherDefault.unsubscribe("LOGIN_SUCCESS", this.handleLogin);
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const sessionAdManager = new SessionAdManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/analytics_sessions/SessionAdManager.tsx");

export default sessionAdManager;
