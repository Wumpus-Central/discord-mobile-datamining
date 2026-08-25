// === Module 5757: RVEngagedIndicesTrackerImpl ===

// Module 5757 (RVEngagedIndicesTrackerImpl)
import _createClassDefault from "_createClass" /* 5745 */;
import closure_2 from "_classCallCheck" /* 5744 */;

const RVEngagedIndicesTrackerImpl = arg1;
class RVEngagedIndicesTrackerImpl {
  constructor() {
    tmp = closure_2(this, RVEngagedIndicesTrackerImpl);
    this.scrollOffset = 0;
    this.drawDistance = require("PlatformConfig").PlatformConfig.defaultDrawDistance;
    this.enableOffsetProjection = true;
    this.averageRenderTime = 16;
    this.forceDisableOffsetProjection = false;
    this.engagedIndices = require("ConsecutiveNumbers").ConsecutiveNumbers.EMPTY;
    this.smallMultiplier = 0.3;
    this.largeMultiplier = 0.7;
    this.velocityHistory = [0, 0, 0, -0.1, -0.1];
    this.velocityIndex = 0;
    return;
  }
}
let items = [
  {
    key: "updateScrollOffset",
    value: function updateScrollOffset(scrollOffset, arg1, getWindowsSize) {
      const self = this;
      this.scrollOffset = scrollOffset;
      const size = getWindowsSize.getWindowsSize();
      const isHorizontalResult = getWindowsSize.isHorizontal();
      if (!arg1) {
        const isScrollingBackwardResult = self.isScrollingBackward();
        let projectedScrollOffset = scrollOffset;
        if (self.enableOffsetProjection) {
          projectedScrollOffset = scrollOffset;
          if (!self.forceDisableOffsetProjection) {
            projectedScrollOffset = self.getProjectedScrollOffset(scrollOffset, self.averageRenderTime);
          }
        }
        const result = 2 * self.drawDistance;
        const _Math = Math;
        const sum = projectedScrollOffset + (isHorizontalResult ? size.width : size.height);
        const rounded = Math.ceil(result * (isScrollingBackwardResult ? self.largeMultiplier : self.smallMultiplier));
        const _Math2 = Math;
        const _Math3 = Math;
        const rounded1 = Math.ceil(result * (isScrollingBackwardResult ? self.smallMultiplier : self.largeMultiplier));
        const bound = Math.max(0, projectedScrollOffset - rounded);
        const _Math4 = Math;
        const sum1 = sum + rounded1;
        const sum2 = sum1 + Math.max(0, rounded - projectedScrollOffset);
        const size2 = getWindowsSize.getLayoutSize();
        const tmp14 = isHorizontalResult ? size2.width : size2.height;
        let bound1 = bound;
        let tmp16 = sum2;
        if (sum2 > tmp14) {
          const _Math5 = Math;
          bound1 = Math.max(0, bound - (sum2 - tmp14));
          tmp16 = tmp14;
        }
        const visibleLayouts = getWindowsSize.getVisibleLayouts(bound1, tmp16);
        self.engagedIndices = visibleLayouts;
        let tmp17;
        if (!visibleLayouts.equals(self.engagedIndices)) {
          tmp17 = visibleLayouts;
        }
        return tmp17;
      } else {
        const result1 = self.updateVelocityHistory(isHorizontalResult ? arg1.x : arg1.y);
      }
    }
  },
  {
    key: "updateVelocityHistory",
    value: function updateVelocityHistory(arg0) {
      this.velocityHistory[this.velocityIndex] = arg0;
      this.velocityIndex = (this.velocityIndex + 1) % this.velocityHistory.length;
    }
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
          let tmp = num;
          let tmp2 = num2;
          let tmp3 = num3;
          if (self.velocityHistory[num] > 0) {
            let sum = num3 + 1;
            let sum1 = num2;
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
    }
  },
  {
    key: "getMedianVelocity",
    value: function getMedianVelocity() {
      const items = [...this.velocityHistory];
      const sorted = items.sort((arg0, arg1) => arg0 - arg1);
      if (sorted.length % 2 === 1) {
        const _Math = Math;
        return sorted[Math.floor(Math, length / 2)];
      } else {
        const result = length / 2;
        return (sorted[result - 1] + sorted[result]) / 2;
      }
    }
  },
  {
    key: "getProjectedScrollOffset",
    value: function getProjectedScrollOffset(scrollOffset, averageRenderTime) {
      return scrollOffset + this.getMedianVelocity() * averageRenderTime;
    }
  },
  {
    key: "computeVisibleIndices",
    value: function computeVisibleIndices(getWindowsSize) {
      const size = getWindowsSize.getWindowsSize();
      const scrollOffset = this.scrollOffset;
      return getWindowsSize.getVisibleLayouts(scrollOffset, scrollOffset + (getWindowsSize.isHorizontal() ? size.width : size.height));
    }
  },
  {
    key: "getEngagedIndices",
    value: function getEngagedIndices() {
      return this.engagedIndices;
    }
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
    }
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
    }
  }
];

export const RVEngagedIndicesTrackerImpl = _createClassDefault(RVEngagedIndicesTrackerImpl, items);