// discord_app/modules/jank_stats/native/JankStatsManager.android.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import TTIAnalyticsUtils from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeJankStatsModule.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ AppStates: c3, AnalyticEvents: closure_4 } = Constants);
class JankStatsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._timeoutId = null;
    applyArgumentsResult._isScheduledReportSent = false;
    applyArgumentsResult._isStartup = true;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        applyArgumentsResult.handleAppStateUpdate(arg0);
      },
      CONNECTION_OPEN_SUPPLEMENTAL() {
        const result = applyArgumentsResult.handleConnectionOpenSupplemental();
      },
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    const self = this;
    state = state.state;
    if (state === constants.ACTIVE) {
      if (!self._isStartup) {
        self.scheduleReport();
      }
    }
    const tmp3 = state !== constants.BACKGROUND || self._isScheduledReportSent;
    if (!tmp3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._timeoutId);
      self._timeoutId = null;
      self.sendReport("background");
    }
  }
  handleConnectionOpenSupplemental() {
    const self = this;
    const timerId = setTimeout(() => {
      self.sendReport("startup");
      self._isStartup = false;
      self.scheduleReport();
    }, 0);
  }
  scheduleReport() {
    const self = this;
    if (null == this._timeoutId) {
      self._isScheduledReportSent = false;
      const _setTimeout = setTimeout;
      self._timeoutId = setTimeout(() => {
        self._timeoutId = null;
        self.sendReport("timer");
        self._isScheduledReportSent = true;
        const obj = react_nativeDefault;
        if (obj != null) {
          obj.stopTracking();
        }
      }, 300000);
    }
  }
  sendReport(background) {
    const obj = react_nativeDefault;
    let report;
    if (obj != null) {
      report = obj.requestReport();
    }
    let tmp4 = null == report;
    if (!tmp4) {
      tmp4 = 0 === report.totalFrameCount && 0 === report.frameMetricsTotalFrameCount;
    }
    if (!tmp4) {
      const obj4 = { version: 2, trigger: background };
      const track = AnalyticsUtilsDefault.track;
      const ANDROID_JANK_STATS = constants2.ANDROID_JANK_STATS;
      AnalyticsUtilsDefault;
      const obj3 = TTIAnalyticsUtils;
      const merged = Object.assign(obj3.getDeviceMetadata());
      ({
        totalFrameCount: obj2.total_frame_count,
        jankFrameCount: obj2.jank_frame_count,
        frameMetricsTotalFrameCount: obj2.frame_metrics_total_frame_count,
        frameMetricsJankFrameCount: obj2.frame_metrics_jank_frame_count,
      } = report);
      track(ANDROID_JANK_STATS, obj4);
    }
  }
}
const prototype = JankStatsManager.prototype;
const jankStatsManager = new JankStatsManager();
let result = size.fileFinishedImporting("modules/jank_stats/native/JankStatsManager.android.tsx");

export default jankStatsManager;
