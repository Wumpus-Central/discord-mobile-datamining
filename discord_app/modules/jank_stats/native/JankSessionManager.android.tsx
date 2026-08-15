// discord_app/modules/jank_stats/native/JankSessionManager.android.tsx
import result from "result";
import ME from "ME";
import "initialize";
import { clientLaunchId } from "../../../../discord_common/js/packages/analytics-utils/clientLaunchId.tsx";
import { NativeJankSessionModule } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankSessionModule.tsx";

let c4;
let c5;
let require = arg1;
({ AnalyticEvents: c4, AppStates: c5 } = ME);
let closure_6 = new require("initialize")("JankSessionManager");
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
  const obj = NativeJankSessionModule;
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
      const nextPromise = pendingReports.then((arr) => {
        let closure_0 = arr;
        if (0 !== arr.length) {
          const result = outer1_3.submitEventsImmediately(arr.map((arg0) => {
            let obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
            obj = {};
            const merged = Object.assign(arr(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = arg0);
            obj[1] = obj;
            return obj;
          }));
          return result.then(() => {
            arr.ackReports(arr.map((sessionId) => sessionId.sessionId));
          });
        }
      });
      pendingReports.then((arr) => {
        let closure_0 = arr;
        if (0 !== arr.length) {
          const result = outer1_3.submitEventsImmediately(arr.map((arg0) => {
            let obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
            obj = {};
            const merged = Object.assign(arr(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = arg0);
            obj[1] = obj;
            return obj;
          }));
          return result.then(() => {
            arr.ackReports(arr.map((sessionId) => sessionId.sessionId));
          });
        }
      }).catch((arg0) => {
        logger.error("Failed to deliver pending jank sessions", arg0);
      }).finally(() => {
        self._isDelivering = false;
      });
      const catchPromise = pendingReports.then((arr) => {
        let closure_0 = arr;
        if (0 !== arr.length) {
          const result = outer1_3.submitEventsImmediately(arr.map((arg0) => {
            let obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
            obj = {};
            const merged = Object.assign(arr(table[6]).getDeviceMetadata());
            obj.schema_version = 1;
            ({ sessionId: obj2.jank_session_id, appVersionCode: obj2.captured_app_version_code, releaseChannel: obj2.captured_release_channel, sessionStartMs: obj2.session_start_ms, totalFrameCount: obj2.total_frame_count, jankFrameCount: obj2.jank_frame_count } = arg0);
            obj[1] = obj;
            return obj;
          }));
          return result.then(() => {
            arr.ackReports(arr.map((sessionId) => sessionId.sessionId));
          });
        }
      }).catch((arg0) => {
        logger.error("Failed to deliver pending jank sessions", arg0);
      });
    }
  }
};
const jankSessionManager = new JankSessionManager();
const tmp3 = new require("initialize")("JankSessionManager");
let result = require("timestamp").fileFinishedImporting("modules/jank_stats/native/JankSessionManager.android.tsx");

export default jankSessionManager;