// === Module 16620: _initialize ===

// Module 16620 (_initialize)
import timestampDefault from "timestamp" /* 3 */;
import clientLaunchId from "clientLaunchId" /* 668 */;
import initializeDefault from "initialize" /* 5038 */;
import NativeJankSessionModuleDefault from "NativeJankSessionModule" /* 16621 */;
import closure_3 from "result" /* 5053 */;
import ME from "ME" /* 676 */;

require = fn;
({ AnalyticEvents: c4, AppStates: c5 } = ME);
let closure_6 = new timestampDefault("JankSessionManager");
initializeDefault;
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
    let obj = self(16621);
    if (null != obj) {
      tmp._isDelivering = true;
      const pendingReports = obj.getPendingReports();
      const nextPromise = pendingReports.then((result) => {
        closure_0 = result;
        if (0 !== result.length) {
          result = closure_1_3.submitEventsImmediately(result.map((item, index) => {
            obj = {};
            const merged = Object.assign(lib(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            obj[1] = obj;
            return obj;
          }));
          return result.then((result) => {
            lib.ackReports(lib.map((item, index) => item.sessionId));
          });
        }
      });
      pendingReports.then((result) => {
        closure_0 = result;
        if (0 !== result.length) {
          result = closure_1_3.submitEventsImmediately(result.map((item, index) => {
            obj = {};
            const merged = Object.assign(lib(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            obj[1] = obj;
            return obj;
          }));
          return result.then((result) => {
            lib.ackReports(lib.map((item, index) => item.sessionId));
          });
        }
      }).catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      }).finally(() => {
        self._isDelivering = false;
      });
      const catchPromise = pendingReports.then((result) => {
        closure_0 = result;
        if (0 !== result.length) {
          result = closure_1_3.submitEventsImmediately(result.map((item, index) => {
            obj = {};
            const merged = Object.assign(lib(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = item);
            obj[1] = obj;
            return obj;
          }));
          return result.then((result) => {
            lib.ackReports(lib.map((item, index) => item.sessionId));
          });
        }
      }).catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      });
    }
  }
};
const jankSessionManager = new JankSessionManager();
const tmp3 = new timestampDefault("JankSessionManager");
let result = require("obj132").fileFinishedImporting("modules/jank_stats/native/JankSessionManager.android.tsx");

export default jankSessionManager;