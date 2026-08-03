// === Module 6819: result ===

// Module 6819 (result)
import importDefaultResult from "fetchFingerprint";
import encodeProperties from "encodeProperties";

const require = arg1;
encodeProperties = {
  dispatcher: require("dispatcher"),
  actionHandler: encodeProperties,
  TRACKING_URL: require("ME").Endpoints.TRACK,
  waitFor: items,
  getFingerprint: importDefaultResult.getFingerprint,
  getSessionId() {
    const session = require(6820) /* trackHeartbeat */.getSession();
    return session.then((uuid) => {
      let sessionId;
      if (uuid != null) {
        sessionId = uuid.uuid;
      }
      return { sessionId };
    });
  },
  getLaunchSignature() {
    return require(698) /* expandEventProperties */.launchSignature;
  },
  scheduleWhenIdle: require("setOriginWindow").requestSafeIdleCallback,
  sendUnloadRequest: require("sendUnloadRequest").sendUnloadRequest
};
encodeProperties = {
  CONNECTION_OPEN(arg0) {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  OVERLAY_INITIALIZE(arg0) {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CURRENT_USER_UPDATE(arg0) {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CONNECTION_CLOSED() {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleConnectionClosed();
  },
  FINGERPRINT() {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleFingerprint();
  },
  TRACK(arg0) {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleTrack(arg0);
  },
  SET_ANALYTICS_TOKEN(arg0) {
    return require(503) /* encodeProperties */.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
  }
};
items = [importDefaultResult];
encodeProperties = encodeProperties.analyticsTrackingStoreMaker(encodeProperties);
const result1 = require("encodeProperties").fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default encodeProperties;