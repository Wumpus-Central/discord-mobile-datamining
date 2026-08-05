// discord_app/stores/AnalyticsTrackingStore.tsx
import importDefaultResult from "fetchFingerprint";
import encodeProperties from "encodeProperties";
import { encodeProperties } from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { trackHeartbeat } from "../modules/analytics_sessions/SessionHeartbeatScheduler.tsx";
import { expandEventProperties } from "../utils/AnalyticsUtils.tsx";

const require = arg1;
encodeProperties = {
  dispatcher: require("dispatcher"),
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
    return encodeProperties.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  OVERLAY_INITIALIZE(arg0) {
    return encodeProperties.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CURRENT_USER_UPDATE(arg0) {
    return encodeProperties.AnalyticsActionHandlers.handleConnectionOpen(arg0);
  },
  CONNECTION_CLOSED() {
    return encodeProperties.AnalyticsActionHandlers.handleConnectionClosed();
  },
  FINGERPRINT() {
    return encodeProperties.AnalyticsActionHandlers.handleFingerprint();
  },
  TRACK(arg0) {
    return encodeProperties.AnalyticsActionHandlers.handleTrack(arg0);
  },
  SET_ANALYTICS_TOKEN(arg0) {
    return encodeProperties.AnalyticsActionHandlers.handleSetAnalyticsToken(arg0);
  }
};
items = [importDefaultResult];
encodeProperties = encodeProperties.analyticsTrackingStoreMaker(encodeProperties);
const result1 = require("encodeProperties").fileFinishedImporting("stores/AnalyticsTrackingStore.tsx");

export default encodeProperties;