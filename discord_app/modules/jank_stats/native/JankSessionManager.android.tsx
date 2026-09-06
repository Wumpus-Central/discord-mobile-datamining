// === Module 17408: JankSessionManager ===

// Module 17408 (JankSessionManager)
import LoggerDefault from "Logger" /* 3 */;
import clientLaunchId from "clientLaunchId" /* 1340 */;
import NativeJankSessionModuleDefault from "NativeJankSessionModule" /* 17409 */;
import AnalyticsTrackingStore from "stores/AnalyticsTrackingStore" /* 7460 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_4, AppStates: hasOwnProperty } = Constants);
let closure_6 = new LoggerDefault("JankSessionManager");
class JankSessionManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._isDelivering = false;
    applyArgumentsResult._hasConnected = false;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      CONNECTION_OPEN_SUPPLEMENTAL() {
            applyArgumentsResult._hasConnected = true;
            const result = applyArgumentsResult.deliverPendingSessions();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = JankSessionManager.prototype;
prototype["_initialize"] = function _initialize() {
  const obj = NativeJankSessionModuleDefault;
  if (obj != null) {
    obj.hydrateLaunchId(clientLaunchId.clientLaunchId);
  }
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const self = this;
  if (tmp) {
    const result = self.deliverPendingSessions();
  }
};
prototype["deliverPendingSessions"] = function deliverPendingSessions() {
  const self = this;
  if (!this._isDelivering) {
    let properties = self(17409);
    if (null != properties) {
      tmp._isDelivering = true;
      const pendingReports = properties.getPendingReports();
      const nextPromise = pendingReports.then((arr) => {
        closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(arr.map((item) => {
            properties = { type: constants.ANDROID_JANK_SESSION, properties: null };
            properties = {};
            const merged = Object.assign(closure_0(closure_1_2[6]).getDeviceMetadata());
            properties.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            properties.properties = properties;
            return properties;
          }));
          return result.then(() => {
            obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
          });
        }
      });
      pendingReports.then((arr) => {
        closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(arr.map((item) => {
            properties = { type: constants.ANDROID_JANK_SESSION, properties: null };
            properties = {};
            const merged = Object.assign(closure_0(closure_1_2[6]).getDeviceMetadata());
            properties.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            properties.properties = properties;
            return properties;
          }));
          return result.then(() => {
            obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
          });
        }
      }).catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      }).finally(() => {
        self._isDelivering = false;
      });
      const catchPromise = pendingReports.then((arr) => {
        closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(arr.map((item) => {
            properties = { type: constants.ANDROID_JANK_SESSION, properties: null };
            properties = {};
            const merged = Object.assign(closure_0(closure_1_2[6]).getDeviceMetadata());
            properties.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            properties.properties = properties;
            return properties;
          }));
          return result.then(() => {
            obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
          });
        }
      }).catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      });
    }
  }
};
const jankSessionManager = new JankSessionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSessionManager.android.tsx");

export default jankSessionManager;