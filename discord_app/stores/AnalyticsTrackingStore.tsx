// discord_app/stores/AnalyticsTrackingStore.tsx
import encodeProperties2 from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import expandEventProperties from "../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import trackHeartbeat from "../modules/analytics_sessions/SessionHeartbeatScheduler.tsx";
import importDefaultResult from "AuthenticationStore.tsx";
import encodeProperties from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";

require = fn;
{
  dispatcher: dispatcherDefault,
  actionHandler: encodeProperties,
  TRACKING_URL: require("ME").Endpoints.TRACK,
  waitFor: items,
  getFingerprint: importDefaultResult.getFingerprint,
  getSessionId() {
    const session = trackHeartbeat.getSession();
    return session.then((result) => {
      let sessionId;
      if (result != null) {
        sessionId = result.uuid;
      }
      return { sessionId };
    });
  },
  getLaunchSignature() {
    return expandEventProperties.launchSignature;
  },
  scheduleWhenIdle: require("setOriginWindow").requestSafeIdleCallback,
  sendUnloadRequest: require("sendUnloadRequest").sendUnloadRequest
};
encodeProperties = {
  CONNECTION_OPEN(arg0) {
    return encodeProperties2.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  OVERLAY_INITIALIZE(arg0) {
    return encodeProperties2.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CURRENT_USER_UPDATE(arg0) {
    return encodeProperties2.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CONNECTION_CLOSED() {
    return encodeProperties2.AnalyticsActionHandlers.handleConnectionClosed();
  },
  FINGERPRINT() {
    return encodeProperties2.AnalyticsActionHandlers.handleFingerprint();
  },
  TRACK(arg0) {
    return encodeProperties2.AnalyticsActionHandlers.handleTrack(arg0);
  },
  SET_ANALYTICS_TOKEN(arg0) {
    return encodeProperties2.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
  }
};
items = [importDefaultResult];
encodeProperties = encodeProperties.analyticsTrackingStoreMaker(encodeProperties);
const result1 = require("obj132").fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default encodeProperties;