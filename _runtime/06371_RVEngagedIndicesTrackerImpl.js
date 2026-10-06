// _runtime/06371_RVEngagedIndicesTrackerImpl.js
import _createClassDefault from "metro/06359__createClass.js";
import PlatformConfig from "06364_PlatformConfig.js";
import ConsecutiveNumbers from "06372_ConsecutiveNumbers.js";
import _classCallCheck from "metro/06358__classCallCheck.js";

let size;

class RVEngagedIndicesTrackerImpl {
  constructor() {
    _classCallCheck(this, RVEngagedIndicesTrackerImpl);
    this.scrollOffset = 0;
    this.drawDistance = PlatformConfig.PlatformConfig.defaultDrawDistance;
    this.enableOffsetProjection = true;
    this.averageRenderTime = 16;
    this.forceDisableOffsetProjection = false;
    this.engagedIndices = ConsecutiveNumbers.ConsecutiveNumbers.EMPTY;
    this.smallMultiplier = 0.3;
    this.largeMultiplier = 0.7;
    this.velocityHistory = [0, 0, 0, -0.1, -0.1];
    this.velocityIndex = 0;
  }
}
const entry = {
  key: "updateScrollOffset",
  value: function updateScrollOffset(scrollOffset, arg1, getWindowsSize) {
    const self = this;
    this.scrollOffset = scrollOffset;
    size = getWindowsSize.getWindowsSize();
    const isHorizontalResult = getWindowsSize.isHorizontal();
    if (arg1) {
      const result = self.updateVelocityHistory(isHorizontalResult ? arg1.x : arg1.y);
    }
    const isScrollingBackwardResult = self.isScrollingBackward();
    let projectedScrollOffset = scrollOffset;
    if (self.enableOffsetProjection) {
      projectedScrollOffset = scrollOffset;
      if (!self.forceDisableOffsetProjection) {
        projectedScrollOffset = self.getProjectedScrollOffset(scrollOffset, self.averageRenderTime);
      }
    }
    const result1 = 2 * self.drawDistance;
    const sum = projectedScrollOffset + (isHorizontalResult ? size.width : size.height);
    const tmp7 = isScrollingBackwardResult ? self.smallMultiplier : self.largeMultiplier;
    const rounded = Math.ceil(result1 * (isScrollingBackwardResult ? self.largeMultiplier : self.smallMultiplier));
    const rounded1 = Math.ceil(result1 * tmp7);
    const bound = Math.max(0, projectedScrollOffset - rounded);
    const sum1 = sum + rounded1;
    const sum2 = sum1 + Math.max(0, rounded - projectedScrollOffset);
    const size2 = getWindowsSize.getLayoutSize();
    const tmp13 = isHorizontalResult ? size2.width : size2.height;
    let bound1 = bound;
    let tmp15 = sum2;
    if (sum2 > tmp13) {
      const _Math = Math;
      bound1 = Math.max(0, bound - (sum2 - tmp13));
      tmp15 = tmp13;
    }
    const visibleLayouts = getWindowsSize.getVisibleLayouts(bound1, tmp15);
    self.engagedIndices = visibleLayouts;
    let tmp16;
    if (!visibleLayouts.equals(self.engagedIndices)) {
      tmp16 = visibleLayouts;
    }
    return tmp16;
  },
};
let items = [
  entry,
  {
    key: "updateVelocityHistory",
    value: function updateVelocityHistory(arg0) {
      this.velocityHistory[this.velocityIndex] = arg0;
      this.velocityIndex = (this.velocityIndex + 1) % this.velocityHistory.length;
    },
  },
  {
    key: "isScrollingBackward",
    value: function isScrollingBackward() {
      const self = this;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      if (0 < this.velocityHistory.length) {
        do {
          let sum;
          let sum1;
          if (self.velocityHistory[num] > 0) {
            sum = num3 + 1;
            sum1 = num2;
          } else {
            sum1 = num2;
            sum = num3;
            if (self.velocityHistory[num] < 0) {
              sum1 = num2 + 1;
              sum = num3;
            }
          }
          num = num + 1;
          num2 = sum1;
          num3 = sum;
          num4 = sum1;
          num5 = sum;
        } while (num < self.velocityHistory.length);
      }
      return num5 < num4;
    },
  },
  {
    key: "getMedianVelocity",
    value: function getMedianVelocity() {
      const items = [...this.velocityHistory];
      const sorted = items.sort((arg0, arg1) => arg0 - arg1);
      if (sorted.length % 2 === 1) {
        const _Math = Math;
        return sorted[Math.floor(Math, sorted.length / 2)];
      } else {
        const result = length / 2;
        return (sorted[result - 1] + sorted[result]) / 2;
      }
    },
  },
  {
    key: "getProjectedScrollOffset",
    value: function getProjectedScrollOffset(scrollOffset, averageRenderTime) {
      return scrollOffset + this.getMedianVelocity() * averageRenderTime;
    },
  },
  {
    key: "computeVisibleIndices",
    value: function computeVisibleIndices(getWindowsSize) {
      size = getWindowsSize.getWindowsSize();
      const scrollOffset = this.scrollOffset;
      return getWindowsSize.getVisibleLayouts(
        scrollOffset,
        scrollOffset + (getWindowsSize.isHorizontal() ? size.width : size.height),
      );
    },
  },
  {
    key: "getEngagedIndices",
    value: function getEngagedIndices() {
      return this.engagedIndices;
    },
  },
  {
    key: "setScrollDirection",
    value: function setScrollDirection(arg0) {
      const self = this;
      if ("forward" === arg0) {
        self.velocityHistory = [0, 0, 0, 0.1, 0.1];
        self.velocityIndex = 0;
      } else {
        self.velocityHistory = [0, 0, 0, -0.1, -0.1];
        self.velocityIndex = 0;
      }
    },
  },
  {
    key: "resetVelocityHistory",
    value: function resetVelocityHistory() {
      const self = this;
      const setScrollDirection = this.setScrollDirection;
      if (this.isScrollingBackward()) {
        setScrollDirection("backward");
      } else {
        setScrollDirection("forward");
      }
    },
  },
];
const RVEngagedIndicesTrackerImpl_export = _createClassDefault(RVEngagedIndicesTrackerImpl, items);

export { RVEngagedIndicesTrackerImpl_export as RVEngagedIndicesTrackerImpl };
