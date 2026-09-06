// === Module 17837: AVErrorUtils ===

// Module 17837 (AVErrorUtils)
import DurationsDefault from "Durations" /* 1090 */;
import WindowVisibilityVideoManager3 from "WindowVisibilityVideoManager" /* 9609 */;
import MediaEngineStatsStore from "MediaEngineStatsStore" /* 4598 */;

require = fn;
let closure_3 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
let result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorUtils.tsx");

export const getReportInboundErrors = function getReportInboundErrors() {
  const WindowVisibilityVideoManager = WindowVisibilityVideoManager3.WindowVisibilityVideoManager;
  let result = WindowVisibilityVideoManager.isIncomingVideoEnabled();
  if (result) {
    const _performance = performance;
    const WindowVisibilityVideoManager2 = WindowVisibilityVideoManager3.WindowVisibilityVideoManager;
    result = performance.now() - WindowVisibilityVideoManager2.lastIncomingVideoEnabledChangeTime() > closure_3;
    const nowResult = performance.now();
  }
  return result;
};
export const getAccumulatedStatsWithMinDatapoints = function getAccumulatedStatsWithMinDatapoints(mediaEngineConnectionId, ownerId) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 15;
  }
  const accumulatedPerformanceStats = MediaEngineStatsStore.getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, "short");
  const accumulatedPerformanceStats1 = MediaEngineStatsStore.getAccumulatedPerformanceStats(mediaEngineConnectionId, ownerId, "long");
  let tmp3 = null;
  if (null != accumulatedPerformanceStats) {
    tmp3 = null;
    if (null != accumulatedPerformanceStats1) {
      tmp3 = null;
      if (accumulatedPerformanceStats.numDatapoints >= num) {
        tmp3 = null;
        if (accumulatedPerformanceStats1.numDatapoints >= num) {
          const obj = { short: accumulatedPerformanceStats, long: accumulatedPerformanceStats1 };
          tmp3 = obj;
        }
      }
    }
  }
  return tmp3;
};
export const getWarningFrameRate = function getWarningFrameRate(maxFrameRate) {
  let num = maxFrameRate;
  if (maxFrameRate === undefined) {
    num = 30;
  }
  let num2 = 3;
  if (num > 5) {
    let num4 = 8;
    if (num > 15) {
      let num5 = 30;
      if (num <= 30) {
        num5 = 15;
      }
      num4 = num5;
    }
    num2 = num4;
  }
  return num2;
};