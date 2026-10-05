// discord_app/modules/jank_stats/native/JankSessionManager.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import clientLaunchId from "../../../../discord_common/js/packages/analytics-utils/clientLaunchId.tsx";
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled.tsx";
import getJankSurfaceName from "getJankSurfaceName.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankSessionModule.tsx";
import JankNavigationReporterDefault from "JankNavigationReporter.android.tsx";
import attachJankPanelReportersDefault from "attachJankPanelReporters.native.tsx";
import AnalyticsTrackingStore from "../../../stores/AnalyticsTrackingStore.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let screens;

let closure_4;
let hasOwnProperty;
({ AnalyticEvents: closure_4, AppStates: hasOwnProperty } = Constants);
let closure_6 = new LoggerDefault("JankSessionManager");
new LoggerDefault("JankSessionManager");
class JankSessionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  _initialize() {
    const obj = react_nativeDefault;
    obj.hydrateLaunchId(clientLaunchId.clientLaunchId);
    const result = this.attachScreenReporters();
  }
  handleAppStateUpdate(state) {
    const self = this;
    const tmp = state.state === hasOwnProperty.ACTIVE && self._hasConnected;
    if (tmp) {
      const result = self.deliverPendingSessions();
    }
  }
  attachScreenReporters() {
    const obj = isJankScreenReportingEnabled;
    if (obj.isJankScreenReportingEnabled()) {
      const obj2 = JankNavigationReporterDefault;
      obj2.attach();
      const tmpResult = getJankSurfaceName;
      const result = tmpResult.attachJankActionSheetReporter();
      attachJankPanelReportersDefault();
    }
  }
  deliverPendingSessions() {
    let logger;
    const self = this;
    if (!this._isDelivering) {
      let obj = self(17538);
      tmp._isDelivering = true;
      const pendingReports = obj.getPendingReports();
      const nextPromise = pendingReports.then((arr) => {
        let closure_0 = arr;
        if (0 !== arr.length) {
          const result = AnalyticsTrackingStore.submitEventsImmediately(
            arr.flatMap((screens) => {
              let obj4;
              obj = { type: constants.ANDROID_JANK_SESSION, properties: obj4 };
              obj4 = {};
              let obj3 = screens(closure_2[10]);
              let merged = Object.assign(obj3.getDeviceMetadata());
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
              const items = [obj];
              screens = screens.screens;
              if (screens == null) {
                screens = [];
              }
              HermesBuiltin.arraySpread(
                items,
                screens.map((item) => {
                  let obj4;
                  obj = { type: constants.ANDROID_JANK_SCREEN, properties: obj4 };
                  obj4 = {};
                  const obj3 = screens(closure_2_2[10]);
                  const merged = Object.assign(obj3.getDeviceMetadata());
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
                  return obj;
                }),
                1,
              );
              return items;
            }),
          );
          return result.then(() => {
            obj.ackReports(arr.map((sessionId) => sessionId.sessionId));
          });
        }
      });
      const catchPromise = nextPromise.catch((error) => {
        logger.error("Failed to deliver pending jank sessions", error);
      });
      catchPromise.finally(() => {
        self._isDelivering = false;
      });
    }
  }
}
const prototype = JankSessionManager.prototype;
const jankSessionManager = new JankSessionManager();
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSessionManager.android.tsx");

export default jankSessionManager;
