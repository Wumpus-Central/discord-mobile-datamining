// discord_app/modules/jank_stats/native/JankSessionManager.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import clientLaunchId from "../../../../discord_common/js/packages/analytics-utils/clientLaunchId.tsx";
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled.tsx";
import NativeJankSessionModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankSessionModule.tsx";
import JankNavigationReporterDefault from "JankNavigationReporter.android.tsx";
import AnalyticsTrackingStore from "../../../stores/AnalyticsTrackingStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

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
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = JankSessionManager.prototype;
prototype["_initialize"] = function _initialize() {
  NativeJankSessionModuleDefault.hydrateLaunchId(clientLaunchId.clientLaunchId);
  const result = this.attachScreenReporters();
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const self = this;
  if (tmp) {
    const result = self.deliverPendingSessions();
  }
};
prototype["attachScreenReporters"] = function attachScreenReporters() {
  if (obj.isJankScreenReportingEnabled()) {
    JankNavigationReporterDefault.attach();
  }
  obj = isJankScreenReportingEnabled;
};
prototype["deliverPendingSessions"] = function deliverPendingSessions() {
  const self = this;
  if (!this._isDelivering) {
    tmp._isDelivering = true;
    const pendingReports = self(17172).getPendingReports();
    let obj = self(17172);
    const nextPromise = pendingReports.then((arr) => {
      closure_0 = arr;
      if (0 !== arr.length) {
        const result = AnalyticsTrackingStore.submitEventsImmediately(
          arr.flatMap((screens) => {
            obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
            let merged = Object.assign(screens(6895).getDeviceMetadata());
            ({
              schemaVersion: obj2.schema_version,
              sessionId: obj2.jank_session_id,
              appVersionCode: obj2.captured_app_version_code,
              releaseChannel: obj2.captured_release_channel,
              sessionStartMs: obj2.session_start_ms,
              totalFrameCount: obj2.total_frame_count,
              jankFrameCount: obj2.jank_frame_count,
              totalFrameTimeMs: obj2.total_frame_time_ms,
              jankFrameTimeMs: obj2.jank_frame_time_ms,
              screensOverCap: obj2.screens_over_cap,
            } = screens);
            obj.properties = {};
            const items = [
              obj,
              ...screens.map((item) => {
                obj = { type: constants.ANDROID_JANK_SCREEN, properties: null };
                const merged = Object.assign(screens(6895).getDeviceMetadata());
                ({
                  schemaVersion: obj2.schema_version,
                  sessionId: obj2.jank_session_id,
                  appVersionCode: obj2.captured_app_version_code,
                  sessionStartMs: obj2.session_start_ms,
                } = screens);
                ({
                  screen: obj2.screen,
                  transitionFrameCount: obj2.transition_frame_count,
                  transitionJankFrameCount: obj2.transition_jank_frame_count,
                  transitionJankFrameTimeMs: obj2.transition_jank_frame_time_ms,
                  transitionTotalFrameTimeMs: obj2.transition_total_frame_time_ms,
                  steadyFrameCount: obj2.steady_frame_count,
                  steadyJankFrameCount: obj2.steady_jank_frame_count,
                  steadyJankFrameTimeMs: obj2.steady_jank_frame_time_ms,
                  steadyTotalFrameTimeMs: obj2.steady_total_frame_time_ms,
                } = item);
                obj.properties = {};
                return obj;
              }),
            ];
            screens = screens.screens;
            return items;
          }),
        );
        return result.then(() => {
          obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
        });
      }
    });
    pendingReports
      .then((arr) => {
        closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(
            arr.flatMap((screens) => {
              obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
              let merged = Object.assign(screens(6895).getDeviceMetadata());
              ({
                schemaVersion: obj2.schema_version,
                sessionId: obj2.jank_session_id,
                appVersionCode: obj2.captured_app_version_code,
                releaseChannel: obj2.captured_release_channel,
                sessionStartMs: obj2.session_start_ms,
                totalFrameCount: obj2.total_frame_count,
                jankFrameCount: obj2.jank_frame_count,
                totalFrameTimeMs: obj2.total_frame_time_ms,
                jankFrameTimeMs: obj2.jank_frame_time_ms,
                screensOverCap: obj2.screens_over_cap,
              } = screens);
              obj.properties = {};
              const items = [
                obj,
                ...screens.map((item) => {
                  obj = { type: constants.ANDROID_JANK_SCREEN, properties: null };
                  const merged = Object.assign(screens(6895).getDeviceMetadata());
                  ({
                    schemaVersion: obj2.schema_version,
                    sessionId: obj2.jank_session_id,
                    appVersionCode: obj2.captured_app_version_code,
                    sessionStartMs: obj2.session_start_ms,
                  } = screens);
                  ({
                    screen: obj2.screen,
                    transitionFrameCount: obj2.transition_frame_count,
                    transitionJankFrameCount: obj2.transition_jank_frame_count,
                    transitionJankFrameTimeMs: obj2.transition_jank_frame_time_ms,
                    transitionTotalFrameTimeMs: obj2.transition_total_frame_time_ms,
                    steadyFrameCount: obj2.steady_frame_count,
                    steadyJankFrameCount: obj2.steady_jank_frame_count,
                    steadyJankFrameTimeMs: obj2.steady_jank_frame_time_ms,
                    steadyTotalFrameTimeMs: obj2.steady_total_frame_time_ms,
                  } = item);
                  obj.properties = {};
                  return obj;
                }),
              ];
              screens = screens.screens;
              return items;
            }),
          );
          return result.then(() => {
            obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
          });
        }
      })
      .catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      })
      .finally(() => {
        self._isDelivering = false;
      });
    const catchPromise = pendingReports
      .then((arr) => {
        closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(
            arr.flatMap((screens) => {
              obj = { type: constants.ANDROID_JANK_SESSION, properties: null };
              let merged = Object.assign(screens(6895).getDeviceMetadata());
              ({
                schemaVersion: obj2.schema_version,
                sessionId: obj2.jank_session_id,
                appVersionCode: obj2.captured_app_version_code,
                releaseChannel: obj2.captured_release_channel,
                sessionStartMs: obj2.session_start_ms,
                totalFrameCount: obj2.total_frame_count,
                jankFrameCount: obj2.jank_frame_count,
                totalFrameTimeMs: obj2.total_frame_time_ms,
                jankFrameTimeMs: obj2.jank_frame_time_ms,
                screensOverCap: obj2.screens_over_cap,
              } = screens);
              obj.properties = {};
              const items = [
                obj,
                ...screens.map((item) => {
                  obj = { type: constants.ANDROID_JANK_SCREEN, properties: null };
                  const merged = Object.assign(screens(6895).getDeviceMetadata());
                  ({
                    schemaVersion: obj2.schema_version,
                    sessionId: obj2.jank_session_id,
                    appVersionCode: obj2.captured_app_version_code,
                    sessionStartMs: obj2.session_start_ms,
                  } = screens);
                  ({
                    screen: obj2.screen,
                    transitionFrameCount: obj2.transition_frame_count,
                    transitionJankFrameCount: obj2.transition_jank_frame_count,
                    transitionJankFrameTimeMs: obj2.transition_jank_frame_time_ms,
                    transitionTotalFrameTimeMs: obj2.transition_total_frame_time_ms,
                    steadyFrameCount: obj2.steady_frame_count,
                    steadyJankFrameCount: obj2.steady_jank_frame_count,
                    steadyJankFrameTimeMs: obj2.steady_jank_frame_time_ms,
                    steadyTotalFrameTimeMs: obj2.steady_total_frame_time_ms,
                  } = item);
                  obj.properties = {};
                  return obj;
                }),
              ];
              screens = screens.screens;
              return items;
            }),
          );
          return result.then(() => {
            obj.ackReports(closure_0.map((sessionId) => sessionId.sessionId));
          });
        }
      })
      .catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      });
  }
};
const jankSessionManager = new JankSessionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSessionManager.android.tsx");

export default jankSessionManager;
