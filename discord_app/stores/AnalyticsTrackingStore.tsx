// === Module 7216: result ===

// Module 7216 (result)
import encodeProperties2 from "encodeProperties" /* 500 */;
import expandEventProperties from "expandEventProperties" /* 695 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import trackHeartbeat from "trackHeartbeat" /* 7217 */;
import importDefaultResult from "fetchFingerprint" /* 1215 */;
import encodeProperties from "encodeProperties" /* 500 */;

require = arg1;
encodeProperties = {
  dispatcher: dispatcherDefault,
  actionHandler: encodeProperties,
  TRACKING_URL: require("ME").Endpoints.TRACK,
  waitFor: items,
  getFingerprint: importDefaultResult.getFingerprint,
  getSessionId() {
    const session = trackHeartbeat.getSession();
    return session.then((uuid) => {
      let sessionId;
      if (uuid != null) {
        sessionId = uuid.uuid;
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
const result1 = require("set").fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default encodeProperties;