// discord_app/stores/AnalyticsTrackingStore.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AnalyticsUtils2 from "../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import SessionHeartbeatScheduler from "../modules/analytics_sessions/SessionHeartbeatScheduler.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";

require = fn;
fn(1250);
let AnalyticsUtils = {
  dispatcher: DispatcherDefault,
  actionHandler: {
    CONNECTION_OPEN(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    OVERLAY_INITIALIZE(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CURRENT_USER_UPDATE(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionOpen(arg0);
    },
    CONNECTION_CLOSED() {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleConnectionClosed();
    },
    FINGERPRINT() {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleFingerprint();
    },
    TRACK(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleTrack(arg0);
    },
    SET_ANALYTICS_TOKEN(arg0) {
      return discord_common_AnalyticsUtils.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
    },
  },
  TRACKING_URL: fn(1074).Endpoints.TRACK,
  waitFor: null,
  getFingerprint: AuthenticationStore.getFingerprint,
  getSessionId() {
    const session = SessionHeartbeatScheduler.getSession();
    return session.then((uuid) => {
      let sessionId;
      if (uuid != null) {
        sessionId = uuid.uuid;
      }
      return { sessionId };
    });
  },
  getLaunchSignature() {
    return AnalyticsUtils2.launchSignature;
  },
  scheduleWhenIdle: fn(7472).requestSafeIdleCallback,
  sendUnloadRequest: fn(7473).sendUnloadRequest,
};
const items = [AuthenticationStore];
AnalyticsUtils.waitFor = items;
AnalyticsUtils = AnalyticsUtils.analyticsTrackingStoreMaker(AnalyticsUtils);
const size = fn(2);
const result1 = size.fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default AnalyticsUtils;
