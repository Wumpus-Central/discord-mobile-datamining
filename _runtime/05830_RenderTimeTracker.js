// _runtime/05830_RenderTimeTracker.js
import _createClassDefault from "metro/05832__createClass.js";
import closure_2 from "metro/05831__classCallCheck.js";

const RenderTimeTracker = arg1;
class RenderTimeTracker {
  constructor() {
    tmp = closure_2(this, RenderTimeTracker);
    averageWindow = new require("AverageWindow").AverageWindow(5);
    this.renderTimeAvgWindow = averageWindow;
    this.lastTimerStartedAt = -1;
    this.maxRenderTime = 32;
    this.defaultRenderTime = 16;
    this.rendersWithoutCommit = 0;
    this.maxRendersWithoutCommit = 40;
    return;
  }
}
const items = [
  {
    key: "startTracking",
    value: function startTracking() {
      const self = this;
      this.rendersWithoutCommit = this.rendersWithoutCommit + 1;
      let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(5837).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
      if (trackAverageRenderTimeForOffsetProjection) {
        trackAverageRenderTimeForOffsetProjection = -1 === self.lastTimerStartedAt;
      }
      if (trackAverageRenderTimeForOffsetProjection) {
        const _Date = Date;
        self.lastTimerStartedAt = Date.now();
      }
    }
  },
  {
    key: "markRenderComplete",
    value: function markRenderComplete() {
      const self = this;
      this.rendersWithoutCommit = 0;
      let trackAverageRenderTimeForOffsetProjection = RenderTimeTracker(5837).PlatformConfig.trackAverageRenderTimeForOffsetProjection;
      if (trackAverageRenderTimeForOffsetProjection) {
        trackAverageRenderTimeForOffsetProjection = -1 !== self.lastTimerStartedAt;
      }
      if (trackAverageRenderTimeForOffsetProjection) {
        const renderTimeAvgWindow = self.renderTimeAvgWindow;
        const _Date = Date;
        renderTimeAvgWindow.addValue(Date.now() - self.lastTimerStartedAt);
        self.lastTimerStartedAt = -1;
      }
    }
  },
  {
    key: "hasExceededMaxRendersWithoutCommit",
    value: function hasExceededMaxRendersWithoutCommit() {
      return this.rendersWithoutCommit >= this.maxRendersWithoutCommit;
    }
  },
  {
    key: "getRawValue",
    value: function getRawValue() {
      return this.renderTimeAvgWindow.currentValue;
    }
  },
  {
    key: "getAverageRenderTime",
    value: function getAverageRenderTime() {
      const self = this;
      if (RenderTimeTracker(5837).PlatformConfig.trackAverageRenderTimeForOffsetProjection) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        let defaultRenderTime = Math.min(self.maxRenderTime, Math.max(Math.round(self.renderTimeAvgWindow.currentValue), 16));
      } else {
        defaultRenderTime = self.defaultRenderTime;
      }
      return defaultRenderTime;
    }
  }
];

export const RenderTimeTracker = _createClassDefault(RenderTimeTracker, items);