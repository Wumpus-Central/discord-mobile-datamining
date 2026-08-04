import ME from "ME";
import "initialize";

let c3;
let c4;
({ AppStates: c3, AnalyticEvents: c4 } = ME);
class JankStatsManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._timeoutId = null;
    applyArgumentsResult._isScheduledReportSent = false;
    applyArgumentsResult._isStartup = true;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      CONNECTION_OPEN_SUPPLEMENTAL() {
            const result = applyArgumentsResult.handleConnectionOpenSupplemental();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = JankStatsManager.prototype;
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const self = this;
  state = state.state;
  if (state === constants.ACTIVE) {
    if (!self._isStartup) {
      self.scheduleReport();
    }
  }
  if (!tmp3) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._timeoutId);
    self._timeoutId = null;
    self.sendReport("background");
  }
};
prototype["handleConnectionOpenSupplemental"] = function handleConnectionOpenSupplemental() {
  const self = this;
  const timerId = setTimeout(() => {
    self.sendReport("startup");
    self._isStartup = false;
    self.scheduleReport();
  }, 0);
};
prototype["scheduleReport"] = function scheduleReport() {
  let self = this;
  self = this;
  if (null == this._timeoutId) {
    self._isScheduledReportSent = false;
    const _setTimeout = setTimeout;
    self._timeoutId = setTimeout(() => {
      self._timeoutId = null;
      self.sendReport("timer");
      self._isScheduledReportSent = true;
      const obj = outer1_1(outer1_2[2]);
      if (obj != null) {
        obj.stopTracking();
      }
    }, 300000);
  }
};
prototype["sendReport"] = function sendReport(background) {
  let obj = importDefault(16356);
  let report;
  if (obj != null) {
    report = obj.requestReport();
  }
  let tmp4 = null == report;
  if (!tmp4) {
    tmp4 = 0 === report.totalFrameCount && 0 === report.frameMetricsTotalFrameCount;
    const tmp5 = 0 === report.totalFrameCount && 0 === report.frameMetricsTotalFrameCount;
  }
  if (!tmp4) {
    obj = {};
    const tmpResult = importDefault(698);
    const merged = Object.assign(require(6843) /* getDeviceMetadata */.getDeviceMetadata());
    obj.version = 2;
    ({ totalFrameCount: obj3.total_frame_count, jankFrameCount: obj3.jank_frame_count, frameMetricsTotalFrameCount: obj3.frame_metrics_total_frame_count, frameMetricsJankFrameCount: obj3.frame_metrics_jank_frame_count } = report);
    obj.trigger = background;
    tmpResult.track(constants2.ANDROID_JANK_STATS, obj);
    const obj4 = require(6843) /* getDeviceMetadata */;
  }
};
const jankStatsManager = new JankStatsManager();
let result = require("enforcing").fileFinishedImporting("modules/jank_stats/native/JankStatsManager.android.tsx");

export default jankStatsManager;